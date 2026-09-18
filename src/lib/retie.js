export const TOTAL_TEMAS = 100;

export const FACEBOOK_URL = "https://www.facebook.com";

export const codigoTema = (numero) => `RETIE-${String(numero).padStart(3, "0")}`;

export const BLOQUES = [
  { nombre: "Fundamentos y disposiciones generales", desde: 1, hasta: 10 },
  { nombre: "Requisitos técnicos esenciales", desde: 11, hasta: 20 },
  { nombre: "Acometidas y suministro", desde: 21, hasta: 30 },
  { nombre: "Puesta a tierra y protecciones", desde: 31, hasta: 40 },
  { nombre: "Conductores, canalizaciones y tableros", desde: 41, hasta: 50 },
  { nombre: "Equipos y productos eléctricos", desde: 51, hasta: 60 },
  { nombre: "Áreas y condiciones especiales", desde: 61, hasta: 70 },
  { nombre: "Generación, renovables y movilidad eléctrica", desde: 71, hasta: 80 },
  { nombre: "Procesos: diseño, construcción y mantenimiento", desde: 81, hasta: 90 },
  { nombre: "Inspección, certificación y documentación", desde: 91, hasta: 100 },
];

export const bloqueDeNumero = (numero) =>
  BLOQUES.find((b) => numero >= b.desde && numero <= b.hasta)?.nombre || "Bloque por definir";

export const fechaCorta = (valor) => {
  if (!valor) return "—";
  const fecha = new Date(valor);
  if (Number.isNaN(fecha.getTime())) return String(valor);
  return fecha.toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
