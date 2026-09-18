import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { BATERIAS } from "@/lib/moveltyData";

export default function ChartBaterias() {
  return (
    <ChartCard titulo="Capacidad de banco de baterías por caso" referencia="§3.2 y §3.3 — Tramo A, dimensionamiento">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={BATERIAS} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="caso" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="kWh" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Bar dataKey="kWh" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}