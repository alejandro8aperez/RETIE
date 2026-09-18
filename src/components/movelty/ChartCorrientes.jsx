import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { CORRIENTES } from "@/lib/moveltyData";

export default function ChartCorrientes() {
  return (
    <ChartCard titulo="Corrientes LV y HV por caso" referencia="§1.2 — Corrientes y conductores">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={CORRIENTES} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="caso" stroke="#94a3b8" fontSize={11} />
          <YAxis stroke="#94a3b8" fontSize={11} />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Legend wrapperStyle={{ fontSize: 11 }} />
          <Bar dataKey="I LV (A)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          <Bar dataKey="I HV (A)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}