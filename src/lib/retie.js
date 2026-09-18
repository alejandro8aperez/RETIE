export const TOTAL_TEMAS = 100;

export const RETIE_VIGENTE = {
  resolucion: "Resolución 40117 del 27 de mayo de 2024",
  entidad: "Ministerio de Minas y Energía",
  normativa_vinculada: "NTC 2050 · Código Eléctrico Colombiano",
  seguridad: "NTC 4552 · Prácticas seguras en electricidad",
  vigente_desde: "27 de mayo de 2024",
};


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

const CLAVES_BLOQUE = {
  "Fundamentos y disposiciones generales": [
    "Alcance y obligatoriedad del RETIE y su jerarquía frente al Código Eléctrico",
    "Clasificación de las instalaciones según uso y nivel de tensión",
    "Responsabilidades del diseñador, constructor, inspector y usuario",
    "Requisitos de certificación de productos y de personal habilitado",
  ],
  "Requisitos técnicos esenciales": [
    "Protecciones contra sobrecorriente, contactos directos e indirectos",
    "Sobretensiones transitorias y distancias de seguridad/aislamiento",
    "Seccionamiento, continuidad del servicio y calidad de la potencia",
    "Requisitos de identificación y marcación de conductores",
  ],
  "Acometidas y suministro": [
    "Tipos de acometida (aérea, subterránea) y punto de suministro",
    "Tablero general, subtableros y esquema de medición de energía",
    "Interruptor general, protección principal y cajas de derivación",
    "Puesta a tierra del neutro en el origen de la acometida",
  ],
  "Puesta a tierra y protecciones": [
    "Electrodos, mallas y red equipotencial de puesta a tierra",
    "Sistemas TT, TN e IT: cuál aplica según la instalación",
    "Interruptor diferencial (GFCI) y curvas de disparo de los automáticos",
    "Coordinación y selectividad de protecciones, incluidas las de motores",
  ],
  "Conductores, canalizaciones y tableros": [
    "Selección de conductores por ampacidad y caída de tensión",
    "Conductores en paralelo, agrupaciones y factores de corrección",
    "Canalizaciones metálicas, PVC y bandejas portacables",
    "Tablero residencial: breakers, barras, neutro, tierra y circuitos ramales",
  ],
  "Equipos y productos eléctricos": [
    "Interruptores de alumbrado, conmutación de 3 y 4 vías y atenuadores",
    "Conexión de motores monofásicos y trifásicos (estrella-delta)",
    "Guardamotores, variadores, circuitos dedicados para equipos fijos",
    "Luminarias, certificación RETIE y sello de conformidad de productos",
  ],
  "Áreas y condiciones especiales": [
    "Requisitos para áreas húmedas, piscinas y zonas exteriores",
    "Alumbrado de emergencia y evacuaciónen sitios de reunión",
    "Instalaciones provisionales de obra y campamentos",
    "Centros de salud, zonas rurales y estructuras con tensión de paso",
  ],
  "Generación, renovables y movilidad eléctrica": [
    "Sistemas fotovoltaicos aislados y conectados a la red",
    "Estructura y montaje de paneles, controlador, baterías e inversor",
    "Anti-isla, medición bidireccional y net billing",
    "Cargadores de vehículo eléctrico y puesta a tierra de la generación",
  ],
  "Procesos: diseño, construcción y mantenimiento": [
    "Etapas del diseño, levantamiento de cargas y plano eléctrico",
    "Montaje de acometida, tablero y circuitos ramales",
    "Pruebas, verificación y mantenimiento preventivo/correctivo",
    "Trabajos con tensión, LOTO y permiso de trabajo seguro",
  ],
  "Inspección, certificación y documentación": [
    "Proceso de inspección, organismos acreditados y lista de verificación",
    "Medición de puesta a tierra y de aislamiento de conductores",
    "Continuidad, polaridad y constancia de inspección",
    "Memorias de cálculo, expediente final y documentación del diseño",
  ],
};

const SEQUENCIA_PRACTICA = [
  "Localiza el tema en el RETIE vigente y en la NTC 2050 asociada",
  "Identifica cada elemento del diagrama: fuente, protecciones, cargas y tierra",
  "Aplica los valores y criterios de la tabla o requisito técnico correspondiente",
  "Simula la operación: energiza, secciona, mide y registra el resultado",
];

export const desgloseTema = (numero, titulo, bloque, resumen) => {
  const semilla = numero * 9301 + (numero % 6);
  const claves = CLAVES_BLOQUE[bloque] || CLAVES_BLOQUE["Fundamentos y disposiciones generales"];
  const rotacion = semilla % claves.length;
  const teoria = [
    claves[rotacion % claves.length],
    claves[(rotacion + 1) % claves.length],
    `Aplicación práctica de «${titulo}»: ${resumen}`,
  ];
  const inicio = semilla % SEQUENCIA_PRACTICA.length;
  const pasos = [
    ...SEQUENCIA_PRACTICA.slice(inicio),
    ...SEQUENCIA_PRACTICA.slice(0, inicio),
  ];
  return {
    base_normativa: "Resolución 40117 del 27 de mayo de 2024 · RETIE actualizado",
    objetivo: `Dominar los fundamentos y la aplicación de «${titulo}» según el RETIE vigente.`,
    teoria,
    pasos,
  };
};

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
