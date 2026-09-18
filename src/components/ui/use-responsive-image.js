import * as React from "react"

import { IMAGE_LOAD_MODE, buildTransformUrl, buildSrcSet, parseWixMediaUrl, nextImageLoadMode } from "./image-helpers"

const DSR = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
const THROTTLE_MS = 100
const MIN_WIDTH = 64

/**
 * Observes the wrapper element with ResizeObserver, computes the optimal
 * transform dimensions for the rendered container, and exposes the result
 * as `options` for buildTransformUrl / buildSrcSet.
 */
export function useResponsiveImage(
  { parsed, fittingType, focalPoint, quality, className, onLoad, onSourceChange },
  forwardedRef
) {
  const wrapperRef = React.useRef(null)
  const imgRef = React.useRef(null)
  const [loaded, setLoaded] = React.useState(false)
  const [options, setOptions] = React.useState(null)
  const rafRef = React.useRef(0)
  const lastWidthRef = React.useRef(0)

  const compute = React.useCallback(() => {
    const el = wrapperRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const w = Math.max(MIN_WIDTH, Math.round(rect.width))
    if (w === lastWidthRef.current) return
    lastWidthRef.current = w

    const h = Math.round(rect.height)
    const tw = Math.round(w * DSR)
    const th = h ? Math.round(h * DSR) : undefined
    setOptions({ width: tw, height: th, quality, focalPoint, fittingType })
  }, [quality, focalPoint, fittingType])

  React.useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(compute)
    })
    observer.observe(el)
    compute()
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafRef.current)
    }
  }, [compute])

  React.useEffect(() => {
    if (!parsed) return
    setLoaded(false)
    lastWidthRef.current = 0
    compute()
  }, [parsed, compute])

  const handleLoad = React.useCallback(
    (event) => {
      setLoaded(true)
      onLoad?.(event)
    },
    [onLoad]
  )

  // Forward the wrapper ref to the caller (e.g. image.jsx uses it for the outer span)
  React.useImperativeHandle(
    forwardedRef,
    () => ({
      get current() {
        return wrapperRef.current
      },
      set current(el) {
        wrapperRef.current = el
      },
    }),
    []
  )

  return { wrapperRef, imgRef, loaded, options, handleLoad }
}