import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FACEBOOK_URL } from "@/lib/retie";

const OPCIONES = [
  { etiqueta: "> INICIO", to: "/" },
  { etiqueta: "> INDICE_MAESTRO", to: "/" },
  { etiqueta: "> PANEL_CONTROL", to: "/admin" },
];

export default function TerminalMenu() {
  const [abierto, setAbierto] = useState(false);

  return (
    <>
      <button
        onClick={() => setAbierto(true)}
        className="fixed top-3 right-3 z-40 border border-slate-700 bg-slate-950/90 px-3 py-1.5 font-mono text-[12px] tracking-widest text-amber-500 transition-colors hover:border-amber-500"
      >
        MENU
      </button>

      {abierto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70"
          onClick={() => setAbierto(false)}
        />
      )}

      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 border-l border-slate-800 bg-slate-950 px-6 py-8 transition-transform duration-300 ${
          abierto ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setAbierto(false)}
          className="mb-8 font-mono text-[12px] tracking-widest text-slate-500 hover:text-amber-500"
        >
          [ CERRAR ]
        </button>

        <nav className="flex flex-col gap-5 font-mono text-[14px] tracking-wide">
          {OPCIONES.map((opcion) => (
            <Link
              key={opcion.etiqueta}
              to={opcion.to}
              onClick={() => setAbierto(false)}
              className="text-slate-300 transition-colors hover:text-amber-500"
            >
              {opcion.etiqueta}
            </Link>
          ))}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 transition-colors hover:text-amber-500"
          >
            &gt; FACEBOOK_COMUNIDAD
          </a>
        </nav>

        <p className="mt-10 border-t border-slate-800 pt-6 font-mono text-[11px] leading-relaxed text-slate-600">
          RETIE 100
          <br />
          100 DIAGRAMAS · 10 BLOQUES
          <br />
          PUBLICACION DIA POR MEDIO
        </p>
      </aside>
    </>
  );
}