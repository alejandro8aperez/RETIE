import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { Image } from "@/components/ui/image";
import ProgressCurrent from "@/components/ProgressCurrent";
import TerminalMenu from "@/components/TerminalMenu";
import SystemFooter from "@/components/SystemFooter";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { TOTAL_TEMAS, codigoTema, fechaCorta } from "@/lib/retie";

export default function TemaDetail() {
  const { numero } = useParams();
  const navigate = useNavigate();
  const numeroActual = Number(numero);
  const [diagramas, setDiagramas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    let activo = true;
    base44.entities.Diagrama.list("numero", 200)
      .then((data) => {
        if (!activo) return;
        setDiagramas(data);
        setCargando(false);
      })
      .catch(() => activo && setCargando(false));
    return () => {
      activo = false;
    };
  }, []);

  const tema = diagramas.find((d) => d.numero === numeroActual);
  const publicados = diagramas.filter((d) => d.publicado && d.imagen_url).length;
  const disponible = !!tema?.publicado && !!tema?.imagen_url;

  const irA = (destino) => {
    if (destino < 1 || destino > TOTAL_TEMAS) return;
    navigate(`/tema/${destino}`);
  };

  if (cargando) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-amber-500" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <ProgressCurrent publicados={publicados} total={TOTAL_TEMAS} />
      <TerminalMenu />

      <div className="mx-auto max-w-6xl px-4 pt-20">
        <Link
          to="/"
          className="font-mono text-[12px] tracking-widest text-slate-500 transition-colors hover:text-amber-500"
        >
          ← VOLVER AL ÍNDICE MAESTRO
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-[7fr_3fr]">
          <div className="order-2 lg:order-1">
            {disponible ? (
              <button
                onClick={() => setZoom(true)}
                className="group relative block w-full border border-slate-800 bg-slate-900/40 p-2"
              >
                <div className="flex h-[55vh] w-full items-center justify-center sm:h-[65vh]">
                  <Image
                    src={tema.imagen_url}
                    alt={tema.titulo}
                    fittingType="fit"
                    className="h-full w-full"
                  />
                </div>
                <span className="absolute right-3 bottom-3 flex items-center gap-2 border border-slate-700 bg-slate-950/90 px-3 py-1.5 font-mono text-[11px] tracking-widest text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-3.5 w-3.5" /> AMPLIAR
                </span>
              </button>
            ) : (
              <div className="flex min-h-[320px] flex-col items-center justify-center border border-dashed border-slate-800 bg-slate-900/20 p-10 text-center">
                <p className="font-mono text-[12px] tracking-[0.25em] text-slate-500">
                  PRÓXIMAMENTE
                </p>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-slate-500">
                  Este diagrama aún no ha sido publicado en la comunidad. Se habilitará el
                  día que corresponda dentro del calendario del curso.
                </p>
              </div>
            )}
          </div>

          <aside className="order-1 border border-slate-800 bg-slate-900/30 p-5 lg:order-2">
            <p className="font-mono text-[11px] tracking-[0.25em] text-amber-500">
              {codigoTema(numeroActual)}
            </p>
            <h1 className="mt-3 font-heading text-2xl font-bold leading-tight text-slate-100">
              {tema?.titulo || "Tema por definir"}
            </h1>

            <dl className="mt-6 space-y-3 border-t border-slate-800 pt-5 font-mono text-[12px]">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">TEMA</dt>
                <dd className="text-right text-slate-300">
                  {String(numeroActual).padStart(2, "0")} / {TOTAL_TEMAS}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">BLOQUE</dt>
                <dd className="max-w-[60%] text-right text-slate-300">{tema?.bloque || "—"}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">PUBLICADO</dt>
                <dd className="text-right text-slate-300">
                  {disponible ? fechaCorta(tema.fecha_publicacion) : "PENDIENTE"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">ESTADO</dt>
                <dd className={disponible ? "text-amber-500" : "text-slate-500"}>
                  {disponible ? "DISPONIBLE" : "NO PUBLICADO"}
                </dd>
              </div>
            </dl>

            {tema?.resumen && (
              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="font-mono text-[11px] tracking-widest text-slate-500">
                  NOTAS DEL PROFESOR
                </p>
                <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-slate-300">
                  {tema.resumen}
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>

      <button
        onClick={() => irA(numeroActual - 1)}
        disabled={numeroActual <= 1}
        className="fixed top-1/2 left-2 z-30 -translate-y-1/2 border border-slate-800 bg-slate-950/90 p-2 text-slate-400 transition-colors hover:border-amber-500 hover:text-amber-500 disabled:opacity-30"
        aria-label="Tema anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => irA(numeroActual + 1)}
        disabled={numeroActual >= TOTAL_TEMAS}
        className="fixed top-1/2 right-2 z-30 -translate-y-1/2 border border-slate-800 bg-slate-950/90 p-2 text-slate-400 transition-colors hover:border-amber-500 hover:text-amber-500 disabled:opacity-30"
        aria-label="Tema siguiente"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {zoom && disponible && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4"
          onClick={() => setZoom(false)}
        >
          <button
            onClick={() => setZoom(false)}
            className="absolute top-4 right-4 border border-slate-700 p-2 text-slate-300 hover:border-amber-500 hover:text-amber-500"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="h-[85vh] w-[92vw]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={tema.imagen_url}
              alt={tema.titulo}
              fittingType="fit"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      <SystemFooter publicados={publicados} total={TOTAL_TEMAS} />
    </div>
  );
}
