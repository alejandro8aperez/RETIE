import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react"

const DialogTitleContext = createContext({ titleId: undefined })
DialogTitleContext.displayName = "DialogTitleContext"

const DialogContext = createContext({})
DialogContext.displayName = "DialogContext"

const DialogOpenContext = createContext({ isOpen: false })
DialogOpenContext.displayName = "DialogOpenContext"

function DialogProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const homeEl = useMemo(
    () => (typeof document !== "undefined" ? document.getElementById("root") : undefined),
    []
  )
  const restoreElRef = useContext ? null : { current: null }

  const openDialog = useCallback(() => setIsOpen(true), [])
  const closeDialog = useCallback(() => setIsOpen(false), [])

  return (
    <DialogOpenContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      <DialogContext.Provider value={{ homeEl, restoreElRef }}>{children}</DialogContext.Provider>
    </DialogOpenContext.Provider>
  )
}

function useDialogOpen() {
  return useContext(DialogOpenContext)
}

function useDialog() {
  return useContext(DialogContext)
}

export { DialogProvider, useDialog, useDialogOpen, DialogTitleContext }