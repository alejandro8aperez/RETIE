import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { CANOPY } from "@/lib/moveltyData";

export default function ChartCanopy() {
  return (
    <ChartCard titulo="Momento por viento en canopy vs capacidad del poste" referencia="§6.3 — Canopy y panel solar">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={CANOPY} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="concepto" stroke="#94a3b8" fontSize={10} />
          <YAxis stroke="#94a3b8" fontSize={11} unit=" kgf·m" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Bar dataKey="kgf·m" fill="#f59e0b" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}