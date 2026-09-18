import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { TEMPERATURA } from "@/lib/moveltyData";

export default function ChartTemperatura() {
  return (
    <ChartCard titulo="ΔT interior estimado por caso" referencia="§5.3 — Térmico (chimenea natural/forzada)">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={TEMPERATURA} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="caso" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="°C" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Line type="monotone" dataKey="ΔT (°C)" stroke="#f59e0b" strokeWidth={2} dot={{ fill: "#f59e0b" }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}