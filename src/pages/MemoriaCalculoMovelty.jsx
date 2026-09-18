import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ChartPotenciaModulos from "@/components/movelty/ChartPotenciaModulos";
import ChartCorrientes from "@/components/movelty/ChartCorrientes";
import ChartPerdidas from "@/components/movelty/ChartPerdidas";
import ChartTemperatura from "@/components/movelty/ChartTemperatura";
import ChartBaterias from "@/components/movelty/ChartBaterias";
import ChartEspiras from "@/components/movelty/ChartEspiras";
import ChartDiametros from "@/components/movelty/ChartDiametros";
import ChartCanopy from "@/components/movelty/ChartCanopy";

export default function MemoriaCalculoMovelty() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-200">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="mb-4 inline-flex items-center gap-1 font-mono text-[12px] text-slate-500 hover:text-amber-500">
          <ArrowLeft className="h-3.5 w-3.5" /> VOLVER
        </Link>
        <h1 className="font-mono text-xl tracking-widest text-amber-500">
          MEMORIA DE CÁLCULO — POSTE MOVELTY
        </h1>
        <p className="mt-1 font-mono text-[12px] text-slate-500">
          Poste inteligente solar 12 m (ASTM C1089 / 1050 kgf) · 4 casos: 8 / 16 / 24 / 32 kVA
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ChartPotenciaModulos />
          <ChartCorrientes />
          <ChartPerdidas />
          <ChartTemperatura />
          <ChartBaterias />
          <ChartEspiras />
          <ChartDiametros />
          <ChartCanopy />
        </div>

        <p className="mt-6 font-mono text-[11px] text-slate-600">
          Valores derivados de la memoria de cálculo. Los marcados como "aprox." (tramo D) no están
          en la memoria original y deben confirmarse con la hoja del fabricante del poste.
        </p>
      </div>
    </div>
  );
}
