// Datos derivados de la Memoria de Cálculo — Poste Inteligente Solar 12 m (Movelty)
// Módulo base 8 kVA en paralelo: 1, 2, 3 y 4 módulos → 8 / 16 / 24 / 32 kVA

export const CASOS = [
  { caso: "8 kVA", kVA: 8, modulos: 1 },
  { caso: "16 kVA", kVA: 16, modulos: 2 },
  { caso: "24 kVA", kVA: 24, modulos: 3 },
  { caso: "32 kVA", kVA: 32, modulos: 4 },
];

// Corriente por módulo: LV = 8000/230 V ; HV = 8000/7200 V
const I_LV_MODULO = 8000 / 230;
const I_HV_MODULO = 8000 / 7200;

export const CORRIENTES = CASOS.map((c) => ({
  caso: c.caso,
  "I LV (A)": Math.round(I_LV_MODULO * c.modulos * 10) / 10,
  "I HV (A)": Math.round(I_HV_MODULO * c.modulos * 100) / 100,
}));

// Pérdidas: Fe = 40 W/módulo ; Cu ajustado para que el caso 32 kVA totalice 920 W (dato de la memoria)
const FE_MODULO = 40;
const CU_MODULO = 190;

export const PERDIDAS = CASOS.map((c) => ({
  caso: c.caso,
  Hierro: FE_MODULO * c.modulos,
  Cobre: CU_MODULO * c.modulos,
  total: (FE_MODULO + CU_MODULO) * c.modulos,
}));

// Incremento de temperatura interior estimado (tramo C, convección natural → forzada)
export const TEMPERATURA = [
  { caso: "8 kVA", "ΔT (°C)": 15 },
  { caso: "16 kVA", "ΔT (°C)": 25 },
  { caso: "24 kVA", "ΔT (°C)": 40 },
  { caso: "32 kVA", "ΔT (°C)": 50 },
];

// Capacidad de banco de baterías LiFePO4 (16–64 kWh según caso)
export const BATERIAS = [
  { caso: "8 kVA", kWh: 16 },
  { caso: "16 kVA", kWh: 32 },
  { caso: "24 kVA", kWh: 48 },
  { caso: "32 kVA", kWh: 64 },
];

// Distribución de espiras por capa del devanado (módulo 8 kVA)
export const ESPIRAS = [
  { capa: "LV (1 capa)", espiras: 85 },
  { capa: "HV capa 1", espiras: 672 },
  { capa: "HV capa 2", espiras: 672 },
  { capa: "HV capa 3", espiras: 672 },
  { capa: "HV capa 4", espiras: 671 },
];

// Diámetro interior disponible por tramo (mm) — valor aproximado en el punto más restrictivo
export const DIAMETROS = [
  { tramo: "A · Cargador", mm: 470 },
  { tramo: "B · Electrónica", mm: 400 },
  { tramo: "C · Toroidal", mm: 370 },
  { tramo: "D · Canopy/Solar (aprox.)", mm: 260 },
];

// Carga eólica en canopy vs capacidad estructural del poste (kgf·m)
export const CANOPY = [
  { concepto: "Momento carga eólica canopy", "kgf·m": 2500 },
  { concepto: "Capacidad estructural poste", "kgf·m": 10000 },
];