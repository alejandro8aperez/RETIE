import React from "react";

export default function ChartCard({ titulo, referencia, children }) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="font-mono text-sm tracking-wide text-amber-500">{titulo}</h3>
      {referencia && (
        <p className="mb-2 font-mono text-[11px] text-slate-500">{referencia}</p>
      )}
      <div className="h-64 w-full">{children}</div>
    </div>
  );
}