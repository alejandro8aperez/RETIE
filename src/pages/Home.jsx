import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listarDiagramas } from "@/lib/diagramas";
import { Image } from "@/components/ui/image";
import ProgressCurrent from "@/components/ProgressCurrent";
import MasterGrid from "@/components/MasterGrid";
import TerminalMenu from "@/components/TerminalMenu";
import SystemFooter from "@/components/SystemFooter";
import { BLOQUES, TOTAL_TEMAS, codigoTema, fechaCorta, FACEBOOK_URL } from "@/lib/retie";

export default function Home() {
  const [diagramas, setDiagramas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    let activo = true;
    listarDiagramas()
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

  const publicados = diagramas.filter((d) => d.publicado && d.imagen_url);
  const ultimo = [...publicados].sort(
    (a, b) => new Date(b.fecha_publicacion || 0) - new Date(a.fecha_publicacion || 0) || b.numero - a.numero
  )[0];

  return (
    <div className="min-h-screen bg-slate-950">
      <ProgressCurrent publicados={publicados.length} total={TOTAL_TEMAS} />
      <TerminalMenu />

      <header className="mx-auto max-w-6xl px-4 pt-20 pb-10">
        <p className="font-mono text-[12px] tracking-[0.3em] text-amber-500">
          CURSO TÉCNICO · REGLAMENTO VIGENTE
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-slate-100 sm:text-6xl">
          RETIE 100
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-slate-400">
          El curso gratuito de los 100 diagramas del Reglamento Técnico de Instalaciones
          Eléctricas. Los 100 temas están disponibles con su diagrama, las notas del
          profesor y todo el material del curso. Súmate a la comunidad, donde cada tema
          se comparte día por medio.
        </p>

        <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] tracking-wide text-slate-500">
            <span>
              PUBLICADOS:{" "}
              <span className="text-amber-500">{String(publicados.length).padStart(2, "0")}</span>
              /{TOTAL_TEMAS}
            </span>
            <span>BLOQUES: {BLOQUES.length}</span>
            <span>CADENCIA: DÍA POR MEDIO</span>
          </div>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block border border-amber-500 bg-amber-500 px-5 py-2.5 font-mono text-[12px] tracking-widest text-slate-950 transition-colors hover:bg-transparent hover:text-amber-500"
          >
            ÚNETE AL CURSO GRATIS →
          </a>
        </div>
      </header>

      {ultimo && (
        <section className="mx-auto mb-12 max-w-6xl px-4">
          <div className="flex flex-col gap-6 border border-slate-800 bg-slate-900/50 p-5 sm:flex-row sm:items-center">
            <Image
              src={ultimo.imagen_url}
              alt={ultimo.titulo}
              className="h-40 w-full border border-slate-700 object-cover sm:w-56"
            />
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-[0.25em] text-amber-500">
                ÚLTIMA PUBLICACIÓN · {codigoTema(ultimo.numero)}
              </p>
              <h2 className="mt-2 font-heading text-xl font-bold text-slate-100">
                {ultimo.titulo}
              </h2>
              <p className="mt-2 font-mono text-[12px] text-slate-500">
                {fechaCorta(ultimo.fecha_publicacion)} · {ultimo.bloque}
              </p>
              <Link
                to={`/tema/${ultimo.numero}`}
                className="mt-4 inline-block border border-amber-500 px-4 py-2 font-mono text-[12px] tracking-widest text-amber-500 transition-colors hover:bg-amber-500 hover:text-slate-950"
              >
                VER DIAGRAMA →
              </Link>
            </div>
          </div>
        </section>
      )}

      <main className="mx-auto max-w-6xl px-4">
        <div className="mb-4 flex items-baseline justify-between border-b border-slate-800 pb-2">
          <h2 className="font-heading text-lg font-bold text-slate-100">Índice maestro</h2>
          <span className="font-mono text-[11px] tracking-widest text-slate-500">
            GRID 10 × 10
          </span>
        </div>

        {cargando ? (
          <div className="flex h-64 items-center justify-center border border-slate-800">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-amber-500" />
          </div>
        ) : (
          <MasterGrid diagramas={diagramas} />
        )}

        <div className="mt-4 flex flex-wrap gap-4 font-mono text-[11px] text-slate-500">
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-slate-700 bg-slate-900" />
            PUBLICADO
          </span>
          <span className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 border border-slate-800 bg-slate-900/40" />
            PRÓXIMAMENTE
          </span>
        </div>

        <section className="mt-16">
          <h2 className="mb-4 border-b border-slate-800 pb-2 font-heading text-lg font-bold text-slate-100">
            Temario del curso · 10 bloques
          </h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {BLOQUES.map((bloque) => {
              const delBloque = diagramas.filter(
                (d) => d.numero >= bloque.desde && d.numero <= bloque.hasta
              );
              const listos = delBloque.filter((d) => d.publicado && d.imagen_url).length;
              const avance = Math.round((listos / (bloque.hasta - bloque.desde + 1)) * 100);
              return (
                <details
                  key={bloque.nombre}
                  className="group border border-slate-800 bg-slate-900/30 p-4"
                >
                  <summary className="cursor-pointer list-none">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[11px] tracking-widest text-amber-500">
                          BLOQUE {String(bloque.desde).padStart(2, "0")}–{String(bloque.hasta).padStart(2, "0")} · {bloque.nombre}
                        </p>
                        <div className="mt-3 h-1 w-full bg-slate-800">
                          <div className="h-full bg-amber-500" style={{ width: `${avance}%` }} />
                        </div>
                        <p className="mt-2 font-mono text-[11px] text-slate-500">
                          {listos}/{bloque.hasta - bloque.desde + 1} DIAGRAMAS PUBLICADOS
                        </p>
                      </div>
                      <span className="font-mono text-[11px] text-slate-500 transition-transform group-open:rotate-90">
                        ▸
                      </span>
                    </div>
                  </summary>
                  <ul className="mt-4 space-y-1.5 border-t border-slate-800 pt-4">
                    {delBloque.map((d) => (
                      <li key={d.numero} className="flex items-baseline gap-3 text-[13px]">
                        <span className="w-14 shrink-0 font-mono text-[10px] text-slate-600">
                          {codigoTema(d.numero)}
                        </span>
                        <span className="text-slate-300">{d.titulo}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            })}
          </div>
          <p className="mt-3 font-mono text-[11px] tracking-widest text-slate-600">
            HAZ CLIC EN CADA BLOQUE PARA VER EL TEMARIO COMPLETO
          </p>
        </section>
      </main>

      <SystemFooter publicados={publicados.length} total={TOTAL_TEMAS} />
    </div>
  );
}
