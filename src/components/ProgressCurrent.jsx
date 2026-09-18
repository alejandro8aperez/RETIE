import React from 'react';

const PROGRESS_COLORS = [
  'bg-emerald-500',
  'bg-sky-500',
  'bg-violet-500',
  'bg-amber-500',
  'bg-rose-500',
];

export default function ProgressCurrent({ publicados = 0, total = 100 }) {
  const pct = total > 0 ? Math.min(100, Math.round((publicados / total) * 100)) : 0;
  const band = Math.min(PROGRESS_COLORS.length - 1, Math.floor((publicados / Math.max(1, total)) * PROGRESS_COLORS.length));
  const color = PROGRESS_COLORS[band];

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex-1 h-2 rounded-full bg-slate-200 overflow-hidden">
        <div
          className={`absolute inset-y-0 left-0 rounded-full ${color} transition-all duration-700`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="font-mono text-xs text-slate-600 tabular-nums whitespace-nowrap">
        {publicados}/{total}
      </span>
    </div>
  );
}