import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { ESPIRAS } from "@/lib/moveltyData";

export default function ChartEspiras() {
  return (
    <ChartCard titulo="Espiras por capa del devanado (módulo 8 kVA)" referencia="§1.3 — Capas y espesores radiales">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ESPIRAS} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis type="number" stroke="#94a3b8" fontSize={11} />
          <YAxis type="category" dataKey="capa" stroke="#94a3b8" fontSize={11} width={90} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Bar dataKey="espiras" fill="#f59e0b" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}