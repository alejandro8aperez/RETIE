import React, { useState } from "react";
import { crearDiagrama, actualizarDiagrama } from "@/lib/diagramas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Image } from "@/components/ui/image";
import { BLOQUES, codigoTema } from "@/lib/retie";

export default function DiagramaForm({ diagrama, onSaved, onCancel }) {
  const [form, setForm] = useState({
    numero: diagrama?.numero ?? "",
    titulo: diagrama?.titulo ?? "",
    bloque: diagrama?.bloque ?? BLOQUES[0].nombre,
    resumen: diagrama?.resumen ?? "",
    imagen_url: diagrama?.imagen_url ?? "",
    publicado: diagrama?.publicado ?? false,
    fecha_publicacion: diagrama?.fecha_publicacion ?? "",
  });
  const [subiendo, setSubiendo] = useState(false);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const [arrastrando, setArrastrando] = useState(false);

  const subirArchivo = async (archivo) => {
    if (!archivo) return;
    setSubiendo(true);
    setError("");
    try {
      const url = await new Promise((resolver, rechazar) => {
        const lector = new FileReader();
        lector.onload = () => resolver(lector.result);
        lector.onerror = () => rechazar(new Error("lectura"));
        lector.readAsDataURL(archivo);
      });
      setForm((previo) => ({ ...previo, imagen_url: url }));
    } catch (e) {
      setError("No se pudo leer la imagen. Intenta de nuevo.");
    } finally {
      setSubiendo(false);
    }
  };

  const guardar = async (evento) => {
    evento.preventDefault();
    if (!form.numero || !form.titulo.trim()) {
      setError("Indica el número de tema y el título.");
      return;
    }
    setGuardando(true);
    setError("");
    const numero = Number(form.numero);
    const datos = {
      numero,
      codigo: codigoTema(numero),
      titulo: form.titulo.trim(),
      bloque: form.bloque,
      resumen: form.resumen,
      imagen_url: form.imagen_url,
      publicado: form.publicado,
      fecha_publicacion: form.fecha_publicacion || undefined,
    };
    try {
      if (diagrama?.id) {
        await actualizarDiagrama(diagrama.id, datos);
      } else {
        await crearDiagrama(datos);
      }
      onSaved();
    } catch (e) {
      setError("No se pudo guardar el diagrama. Intenta de nuevo.");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/80 p-4 py-10">
      <form
        onSubmit={guardar}
        className="w-full max-w-2xl border border-slate-700 bg-slate-900 p-6"
      >
        <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="font-heading text-lg font-bold text-slate-100">
            {diagrama?.id ? `Editar ${codigoTema(Number(form.numero) || 0)}` : "Nuevo diagrama"}
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="font-mono text-[12px] text-slate-500 hover:text-amber-500"
          >
            [ CANCELAR ]
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <Label className="font-mono text-[11px] tracking-widest text-slate-400">
              TEMA N.º
            </Label>
            <Input
              type="number"
              min="1"
              max="100"
              value={form.numero}
              onChange={(e) => setForm({ ...form, numero: e.target.value })}
              className="mt-1 border-slate-700 bg-slate-950 font-mono text-slate-100"
            />
          </div>
          <div className="sm:col-span-2">
            <Label className="font-mono text-[11px] tracking-widest text-slate-400">
              TÍTULO
            </Label>
            <Input
              value={form.titulo}
              onChange={(e) => setForm({ ...form, titulo: e.target.value })}
              placeholder="Ej: Cálculo de la resistencia de puesta a tierra"
              className="mt-1 border-slate-700 bg-slate-950 text-slate-100"
            />
          </div>
        </div>

        <div className="mt-4">
          <Label className="font-mono text-[11px] tracking-widest text-slate-400">
            BLOQUE TEMÁTICO
          </Label>
          <select
            value={form.bloque}
            onChange={(e) => setForm({ ...form, bloque: e.target.value })}
            className="mt-1 w-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-amber-500"
          >
            {BLOQUES.map((bloque) => (
              <option key={bloque.nombre} value={bloque.nombre}>
                {bloque.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <Label className="font-mono text-[11px] tracking-widest text-slate-400">
            NOTAS DEL PROFESOR
          </Label>
          <Textarea
            value={form.resumen}
            onChange={(e) => setForm({ ...form, resumen: e.target.value })}
            rows={4}
            placeholder="Explicación del diagrama, artículos del RETIE relacionados, recomendaciones..."
            className="mt-1 border-slate-700 bg-slate-950 text-slate-100"
          />
        </div>

        <div className="mt-4">
          <Label className="font-mono text-[11px] tracking-widest text-slate-400">
            IMAGEN DEL DIAGRAMA
          </Label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setArrastrando(true);
            }}
            onDragLeave={() => setArrastrando(false)}
            onDrop={(e) => {
              e.preventDefault();
              setArrastrando(false);
              subirArchivo(e.dataTransfer.files?.[0]);
            }}
            className={`mt-1 border border-dashed p-4 text-center transition-colors ${
              arrastrando ? "border-amber-500 bg-amber-500/5" : "border-slate-700"
            }`}
          >
            {form.imagen_url ? (
              <div className="flex items-center gap-4">
                <Image
                  src={form.imagen_url}
                  alt="Diagrama"
                  className="h-24 w-24 border border-slate-700 object-cover"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, imagen_url: "" })}
                  className="font-mono text-[11px] text-slate-500 hover:text-amber-500"
                >
                  [ QUITAR IMAGEN ]
                </button>
              </div>
            ) : (
              <div>
                <p className="font-mono text-[12px] text-slate-500">
                  {subiendo ? "SUBIENDO..." : "ARRASTRA EL DIAGRAMA AQUÍ"}
                </p>
                <label className="mt-3 inline-block cursor-pointer border border-slate-700 px-3 py-1.5 font-mono text-[11px] text-slate-300 hover:border-amber-500 hover:text-amber-500">
                  O SELECCIONA UN ARCHIVO
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => subirArchivo(e.target.files?.[0])}
                  />
                </label>
              </div>
            )}
          </div>
          <p className="mt-2 font-mono text-[10px] text-slate-600">
            O PEGA LA URL DE LA IMAGEN:
          </p>
          <Input
            value={form.imagen_url}
            onChange={(e) => setForm({ ...form, imagen_url: e.target.value })}
            placeholder="https://..."
            className="mt-1 border-slate-700 bg-slate-950 text-slate-100"
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-slate-800 pt-5">
          <label className="flex items-center gap-2 font-mono text-[12px] text-slate-300">
            <input
              type="checkbox"
              checked={form.publicado}
              onChange={(e) => setForm({ ...form, publicado: e.target.checked })}
              className="h-4 w-4 accent-amber-500"
            />
            PUBLICAR EN EL ÍNDICE
          </label>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[12px] text-slate-500">FECHA:</span>
            <input
              type="date"
              value={form.fecha_publicacion}
              onChange={(e) => setForm({ ...form, fecha_publicacion: e.target.value })}
              className="border border-slate-700 bg-slate-950 px-2 py-1 font-mono text-[12px] text-slate-100 outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {error && <p className="mt-4 font-mono text-[12px] text-red-400">{error}</p>}

        <div className="mt-6 flex gap-3">
          <Button
            type="submit"
            disabled={guardando || subiendo}
            className="bg-amber-500 font-mono text-[12px] tracking-widest text-slate-950 hover:bg-amber-400"
          >
            {guardando ? "GUARDANDO..." : "GUARDAR DIAGRAMA"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="border-slate-700 bg-transparent font-mono text-[12px] tracking-widest text-slate-300 hover:bg-slate-800"
          >
            CANCELAR
          </Button>
        </div>
      </form>
    </div>
  );
}