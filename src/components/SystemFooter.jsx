import React from "react";

export default function SystemFooter({ publicados, total }) {
  return (
    <footer className="mt-16 border-t border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 font-mono text-[12px] tracking-wide text-slate-500 sm:flex-row">
        <span className="text-amber-500">
          STATUS: {publicados}/{total} DEPLOYED
        </span>
        <span className="text-center">
          RETIE · REGLAMENTO TÉCNICO DE INSTALACIONES ELÉCTRICAS
        </span>
        
      </div>
    </footer>
  );
}