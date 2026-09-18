import { TOTAL_TEMAS, codigoTema, bloqueDeNumero } from "@/lib/retie";

const crearRegistro = (numero) => ({
  id: `tema-${String(numero).padStart(2, "0")}`,
  numero,
  codigo: codigoTema(numero),
  titulo: "Tema por definir",
  bloque: bloqueDeNumero(numero),
  resumen: "",
  imagen_url: "",
  publicado: false,
  fecha_publicacion: "",
});

const SIMIENTE = Array.from({ length: TOTAL_TEMAS }, (_, i) => crearRegistro(i + 1));

let registros = [...SIMIENTE];

const copia = (registro) => ({ ...registro });

export const listarDiagramas = () =>
  Promise.resolve(registros.map(copia).sort((a, b) => a.numero - b.numero));

export const crearDiagrama = (datos) => {
  const numero = Number(datos.numero);
  const registro = {
    ...crearRegistro(numero),
    ...datos,
    numero,
    codigo: datos.codigo || codigoTema(numero),
    id: datos.id || `tema-${String(numero).padStart(2, "0")}`,
  };
  registros.push(copia(registro));
  return Promise.resolve(copia(registro));
};

export const actualizarDiagrama = (id, datos) => {
  const indice = registros.findIndex((r) => r.id === id);
  if (indice === -1) return Promise.resolve(null);
  registros[indice] = { ...registros[indice], ...datos };
  return Promise.resolve(copia(registros[indice]));
};

export const eliminarDiagrama = (id) => {
  registros = registros.filter((r) => r.id !== id);
  return Promise.resolve(true);
};