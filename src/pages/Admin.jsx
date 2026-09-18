import React, { useEffect, useMemo, useState } from "react";
import { listarDiagramas, actualizarDiagrama, eliminarDiagrama } from "@/lib/diagramas";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import ProgressCurrent from "@/components/ProgressCurrent";
import TerminalMenu from "@/components/TerminalMenu";
import DiagramaForm from "@/components/DiagramaForm";
import { TOTAL_TEMAS, codigoTema, fechaCorta } from "@/lib/retie";
import { Pencil, Trash2 } from "lucide-react";

export default function Admin() {
  const [diagramas, setDiagramas] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [editando, setEditando] = useState(null);
  const [creando, setCreando] = useState(false);

  const cargar = async () => {
    setCargando(true);
    const data = await listarDiagramas();
    setDiagramas(data);
    setCargando(false);
  };

  useEffect(() => {
    cargar();
  }, []);

  const publicados = diagramas.filter((d) => d.publicado && d.imagen_url).length;

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    if (!q) return diagramas;
    return diagramas.filter((d) =>
      `${d.numero} ${d.titulo} ${d.bloque} ${d.codigo}`.toLowerCase().includes(q)
    );
  }, [diagramas, busqueda]);

  const alternarPublicacion = async (diagrama) => {
    const publicar = !diagrama.publicado;
    await actualizarDiagrama(diagrama.id, {
      publicado: publicar,
      fecha_publicacion: publicar
        ? new Date().toISOString().slice(0, 10)
        : diagrama.fecha_publicacion,
    });
    cargar();
  };

  const eliminar = async (diagrama) => {
    if (!window.confirm(`¿Eliminar el tema ${codigoTema(diagrama.numero)}?`)) return;
    await eliminarDiagrama(diagrama.id);
    cargar();
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <ProgressCurrent publicados={publicados} total={TOTAL_TEMAS} />
      <TerminalMenu />

      <header className="mx-auto max-w-6xl px-4 pt-20 pb-8">
        <p className="font-mono text-[12px] tracking-[0.3em] text-amber-500">ACCESO PRIVADO</p>
        <h1 className="mt-3 font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          Panel de control
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-400">
          Administra el índice del curso: sube los diagramas, escribe las notas y publica
          cada tema cuando lo compartas en la comunidad.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[12px] text-slate-500">
          <span>
            DEPLOYED: <span className="text-amber-500">{publicados}</span>/{TOTAL_TEMAS}
          </span>
          <span>PENDIENTES: {TOTAL_TEMAS - publicados}</span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 border-b border-slate-800 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <Input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por número, título o bloque..."
            className="max-w-sm border-slate-700 bg-slate-900 font-mono text-[13px] text-slate-100"
          />
          <Button
            onClick={() => setCreando(true)}
            className="bg-amber-500 font-mono text-[12px] tracking-widest text-slate-950 hover:bg-amber-400"
          >
            + NUEVO DIAGRAMA
          </Button>
        </div>

        {cargando ? (
          <div className="flex h-48 items-center justify-center">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-slate-700 border-t-amber-500" />
          </div>
        ) : (
          <ul className="divide-y divide-slate-800">
            {filtrados.map((diagrama) => (
              <li key={diagrama.id} className="flex flex-wrap items-center gap-4 py-4">
                <span className="w-20 font-mono text-[12px] text-amber-500">
                  {codigoTema(diagrama.numero)}
                </span>

                <div className="flex min-w-[180px] flex-1 items-center gap-3">
                  {diagrama.imagen_url ? (
                    <Image
                      src={diagrama.imagen_url}
                      alt={diagrama.titulo}
                      className="h-12 w-12 border border-slate-700 object-cover"
                    />
                  ) : (
                    <div className="flex h-12 w-12 items-center justify-center border border-dashed border-slate-800 font-mono text-[10px] text-slate-600">
                      S/IMG
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-heading text-[15px] font-medium text-slate-200">
                      {diagrama.titulo}
                    </p>
                    <p className="truncate font-mono text-[11px] text-slate-500">
                      {diagrama.bloque || "Sin bloque"}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] text-slate-500">
                  {diagrama.publicado ? fechaCorta(diagrama.fecha_publicacion) : "—"}
                </span>

                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-slate-500">
                    {diagrama.publicado ? "PUBLICADO" : "BORRADOR"}
                  </span>
                  <Switch
                    checked={!!diagrama.publicado}
                    onCheckedChange={() => alternarPublicacion(diagrama)}
                  />
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setEditando(diagrama)}
                    className="border border-slate-800 p-2 text-slate-400 transition-colors hover:border-amber-500 hover:text-amber-500"
                    aria-label="Editar"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => eliminar(diagrama)}
                    className="border border-slate-800 p-2 text-slate-400 transition-colors hover:border-red-500 hover:text-red-400"
                    aria-label="Eliminar"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
            {filtrados.length === 0 && (
              <li className="py-12 text-center font-mono text-[13px] text-slate-500">
                SIN RESULTADOS
              </li>
            )}
          </ul>
        )}
      </main>

      {(editando || creando) && (
        <DiagramaForm
          diagrama={editando}
          onCancel={() => {
            setEditando(null);
            setCreando(false);
          }}
          onSaved={() => {
            setEditando(null);
            setCreando(false);
            cargar();
          }}
        />
      )}
    </div>
  );
}
