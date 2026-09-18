import React from "react";
import GridCell from "./GridCell";

export default function MasterGrid({ diagramas }) {
  const total = Math.max(100, diagramas.length);
  const celdas = Array.from({ length: total }, (_, i) => {
    const numero = i + 1;
    return diagramas.find((d) => d.numero === numero) || { numero, titulo: "Tema por definir" };
  });

  return (
    <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-8 sm:gap-2 lg:grid-cols-10">
      {celdas.map((diagrama) => (
        <GridCell key={diagrama.numero} diagrama={diagrama} />
      ))}
    </div>
  );
}