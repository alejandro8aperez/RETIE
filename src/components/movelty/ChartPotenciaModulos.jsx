import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { CASOS } from "@/lib/moveltyData";

export default function ChartPotenciaModulos() {
  return (
    <ChartCard titulo="Potencia y módulos por caso" referencia="§2 — Cuadro general de casos">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={CASOS} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="caso" stroke="#94a3b8" fontSize={11} />
          <YAxis yAxisId="left" stroke="#94a3b8" fontSize={11} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Bar yAxisId="left" dataKey="kVA" fill="#f59e0b" name="Potencia (kVA)" radius={[4, 4, 0, 0]} />
          <Bar yAxisId="left" dataKey="modulos" fill="#0ea5e9" name="Módulos" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}