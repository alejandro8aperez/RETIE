import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { PERDIDAS } from "@/lib/moveltyData";

export default function ChartPerdidas() {
  return (
    <ChartCard titulo="Pérdidas totales por caso (Fe + Cu)" referencia="§1.5 y §5.3 — Masas y pérdidas / térmico">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={PERDIDAS} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="caso" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="W" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="Hierro" stackId="p" fill="#f59e0b" />
          <Bar dataKey="Cobre" stackId="p" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}