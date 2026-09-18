import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function GridCell({ diagrama }) {
  const numero = String(diagrama.numero).padStart(2, "0");
  const publicado = !!diagrama.publicado && !!diagrama.imagen_url;

  if (!publicado) {
    return (
      <div className="group relative flex aspect-square items-center justify-center border border-slate-800 bg-slate-900/60 transition-colors hover:border-amber-500/60 hover:bg-slate-900">
        <span className="font-mono text-[13px] text-slate-500">{numero}</span>
        <span className="pointer-events-none absolute inset-x-0 bottom-1 text-center font-mono text-[7px] tracking-[0.15em] text-slate-600">
          PRÓXIMAMENTE
        </span>
        <span className="pointer-events-none absolute inset-0 hidden items-end bg-slate-950/95 px-1.5 py-1 font-mono text-[9px] leading-tight text-amber-400 group-hover:flex sm:overflow-hidden">
          <span className="line-clamp-3">{diagrama.titulo}</span>
        </span>
      </div>
    );
  }

  return (
    <Link
      to={`/tema/${diagrama.numero}`}
      className="group relative block aspect-square overflow-hidden border border-slate-700 bg-slate-900 transition-all hover:border-amber-500 hover:shadow-[0_0_18px_rgba(245,158,11,0.35)]"
    >
      <Image
        src={diagrama.imagen_url}
        alt={diagrama.titulo}
        className="h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-100"
      />
      <span className="absolute top-1 left-1 bg-slate-950/85 px-1 font-mono text-[10px] text-amber-500">
        {numero}
      </span>
      <span className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-slate-950/95 px-1.5 py-1 font-mono text-[9px] leading-tight text-slate-200 transition-transform duration-200 group-hover:translate-y-0">
        {diagrama.titulo}
      </span>
    </Link>
  );
}