import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { DIAMETROS } from "@/lib/moveltyData";

export default function ChartDiametros() {
  return (
    <ChartCard titulo="Diámetro interior disponible por tramo" referencia="§3.3, §4.3, §5.2, §6.3 — Envolventes">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={DIAMETROS} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
          <XAxis dataKey="tramo" stroke="#94a3b8" fontSize={10} />
          <YAxis stroke="#94a3b8" fontSize={11} unit="mm" />
          <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155" }} />
          <Bar dataKey="mm" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}