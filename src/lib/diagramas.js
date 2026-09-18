import { TOTAL_TEMAS, codigoTema } from "@/lib/retie";

const CATALOGO = [
  // ── BLOQUE 1 · Fundamentos y disposiciones generales ──
  { numero: 1, titulo: "Objeto y alcance del RETIE", bloque: "Fundamentos y disposiciones generales", resumen: "Qué es el RETIE, qué instalaciones regula y cuál es su jerarquía frente al Código Eléctrico NTC 2050." },
  { numero: 2, titulo: "Jerarquía normativa y reglamentos asociados", bloque: "Fundamentos y disposiciones generales", resumen: "RETIE, NTC 2050, planes de aseguramiento y reglamentos complementarios que rigen toda instalación eléctrica." },
  { numero: 3, titulo: "Sujetos responsables de la instalación", bloque: "Fundamentos y disposiciones generales", resumen: "Diseñador, constructor, inspector, usuario y comercializador: funciones y responsabilidades de cada uno." },
  { numero: 4, titulo: "Certificación de productos eléctricos", bloque: "Fundamentos y disposiciones generales", resumen: "Cómo identificar un producto certificado a través del sello de conformidad y el permiso de comercialización." },
  { numero: 5, titulo: "Origen de la instalación y punto de suministro", bloque: "Fundamentos y disposiciones generales", resumen: "Dónde inicia la instalación eléctrica de un predio y cómo se determina el punto de conexión con la red." },
  { numero: 6, titulo: "Esquema unifilar básico de una instalación", bloque: "Fundamentos y disposiciones generales", resumen: "El diagrama que resume el recorrido de la energía: medidor, tableros, protecciones y cargas." },
  { numero: 7, titulo: "Diagrama de conexión del medidor y acometida", bloque: "Fundamentos y disposiciones generales", resumen: "Conexión eléctrica del equipo de medida, sellos, cables y referencias normativas de la acometida." },
  { numero: 8, titulo: "Clasificación de instalaciones por uso y tensión", bloque: "Fundamentos y disposiciones generales", resumen: "Residencial, comercial, industrial: cómo se clasifican los circuitos por nivel de tensión y destino." },
  { numero: 9, titulo: "Personal habilitado y matriculación", bloque: "Fundamentos y disposiciones generales", resumen: "Requisitos legales para trabajar en instalaciones eléctricas: matrícula profesional y certificación de competencias." },
  { numero: 10, titulo: "Documentación técnica del proyecto eléctrico", bloque: "Fundamentos y disposiciones generales", resumen: "Planos, memorias de cálculo, especificaciones y registros que debe tener todo proyecto antes de construirse." },

  // ── BLOQUE 2 · Requisitos técnicos esenciales ──
  { numero: 11, titulo: "Protección contra sobrecorrientes", bloque: "Requisitos técnicos esenciales", resumen: "Por qué cada circuito necesita un interruptor o fusible que corte la corriente antes de dañar los conductores." },
  { numero: 12, titulo: "Protección contra contactos directos", bloque: "Requisitos técnicos esenciales", resumen: "Aislamiento, barreras y distancias que evitan que una persona toque partes energizadas." },
  { numero: 13, titulo: "Protección contra contactos indirectos", bloque: "Requisitos técnicos esenciales", resumen: "Puesta a tierra, diferenciales y equipotencialización para proteger ante fallas a masa." },
  { numero: 14, titulo: "Protección contra sobretensiones transitorias", bloque: "Requisitos técnicos esenciales", resumen: "Descargas atmosféricas y maniobras de red: cómo los DPS protegen los equipos sensibles." },
  { numero: 15, titulo: "Distancias de seguridad y aislamiento", bloque: "Requisitos técnicos esenciales", resumen: "Distancias mínimas entre conductores, superficies y personas según tensión y ambiente." },
  { numero: 16, titulo: "Seccionamiento y desconexión general", bloque: "Requisitos técnicos esenciales", resumen: "El interruptor que permite dejar sin tensión la instalación para mantenimiento seguro." },
  { numero: 17, titulo: "Continuidad del servicio y circuitos de reserva", bloque: "Requisitos técnicos esenciales", resumen: "Cómo garantizan los alimentadores redundantes el suministro de cargas críticas." },
  { numero: 18, titulo: "Calidad de potencia y perturbaciones", bloque: "Requisitos técnicos esenciales", resumen: "Armónicos, variaciones de tensión y flicker: requisitos del RETIE para energía de calidad." },
  { numero: 19, titulo: "Condiciones ambientales de los equipos", bloque: "Requisitos técnicos esenciales", resumen: "Temperatura, humedad y corrosión: selección de equipos según el ambiente de servicio." },
  { numero: 20, titulo: "Identificación y marcación de conductores", bloque: "Requisitos técnicos esenciales", resumen: "Colores normalizados, fases, neutro y tierra: cómo rotular cada conductor sin ambigüedad." },

  // ── BLOQUE 3 · Acometidas y suministro ──
  { numero: 21, titulo: "Acometida aérea monofásica", bloque: "Acometidas y suministro", resumen: "Esquema típico desde el poste de la red hasta la caja de medida para usuarios de baja potencia." },
  { numero: 22, titulo: "Acometida aérea trifásica", bloque: "Acometidas y suministro", resumen: "Conexión de las tres fases, neutro y retorno de tierra para instalaciones de mayor demanda." },
  { numero: 23, titulo: "Acometida subterránea", bloque: "Acometidas y suministro", resumen: "Ductos, tuberías y sellos para llevar la energía bajo el nivel del suelo con seguridad." },
  { numero: 24, titulo: "Tablero general de distribución", bloque: "Acometidas y suministro", resumen: "El corazón de la instalación: barras, subalimentadores y protecciones del tablero principal." },
  { numero: 25, titulo: "Subtableros y distribución secundaria", bloque: "Acometidas y suministro", resumen: "Cómo se reparte la energía desde el tablero principal hacia cada zona o piso del edificio." },
  { numero: 26, titulo: "Esquema de medición de energía del usuario", bloque: "Acometidas y suministro", resumen: "Conexión del medidor principal y de los submedidores de cada unidad de consumo." },
  { numero: 27, titulo: "Cajas de derivación y empalmes", bloque: "Acometidas y suministro", resumen: "Tipos de empalmes, conexiones y cajas donde se ramifican los conductores." },
  { numero: 28, titulo: "Interruptor general y protección principal", bloque: "Acometidas y suministro", resumen: "Capacidad, ubicación y coordinación del interruptor que protege toda la instalación." },
  { numero: 29, titulo: "Punto de conexión a la red pública", bloque: "Acometidas y suministro", resumen: "Frontera entre la red del operador y la instalación del usuario: sus elementos y normas." },
  { numero: 30, titulo: "Puesta a tierra del neutro en la acometida", bloque: "Acometidas y suministro", resumen: "Conexión del neutro a tierra en el origen para estabilizar voltajes y dar seguridad." },

  // ── BLOQUE 4 · Puesta a tierra y protecciones ──
  { numero: 31, titulo: "Electrodo de puesta a tierra", bloque: "Puesta a tierra y protecciones", resumen: "Vara copperweld, placa o malla: cómo se instala el electrodo que disipa la corriente a tierra." },
  { numero: 32, titulo: "Malla y red equipotencial", bloque: "Puesta a tierra y protecciones", resumen: "Red de conductores conectados entre sí para evitar diferencias peligrosas de potencial." },
  { numero: 33, titulo: "Conductor de tierra y sus conexiones", bloque: "Puesta a tierra y protecciones", resumen: "Calibre mínimo, recorrido directo y conexiones certificadas del conductor de puesta a tierra." },
  { numero: 34, titulo: "Sistema TT de puesta a tierra", bloque: "Puesta a tierra y protecciones", resumen: "Neutro aterrado en el transformador y masas aterradas localmente en el usuario." },
  { numero: 35, titulo: "Sistema TN de puesta a tierra", bloque: "Puesta a tierra y protecciones", resumen: "Neutro y masas conectados al mismo punto de tierra del transformador, con sus variantes." },
  { numero: 36, titulo: "Sistema IT de puesta a tierra", bloque: "Puesta a tierra y protecciones", resumen: "Neutro aislado o aterrado por alta impedancia para aplicaciones de máxima continuidad." },
  { numero: 37, titulo: "Interruptor diferencial o GFCI", bloque: "Puesta a tierra y protecciones", resumen: "Cómo detecta la fuga de corriente a tierra y corta el circuito en milisegundos." },
  { numero: 38, titulo: "Interruptores automáticos y curvas de disparo", bloque: "Puesta a tierra y protecciones", resumen: "Curvas B, C y D: cuándo actúa un termomagnético por sobrecarga o por cortocircuito." },
  { numero: 39, titulo: "Coordinación y selectividad de protecciones", bloque: "Puesta a tierra y protecciones", resumen: "Que solo dispare el interruptor más cercano a la falla: jerarquía de tiempos y corrientes." },
  { numero: 40, titulo: "Protección de motores y cargas especiales", bloque: "Puesta a tierra y protecciones", resumen: "Relevadores térmicos, guardamotores y protecciones adecuadas a la corriente de arranque." },

  // ── BLOQUE 5 · Conductores, canalizaciones y tableros ──
  { numero: 41, titulo: "Selección de conductores por ampacidad", bloque: "Conductores, canalizaciones y tableros", resumen: "Calibre, aislamiento y temperatura de operación para que el cable no se sobrecaliente." },
  { numero: 42, titulo: "Caída de tensión en alimentadores", bloque: "Conductores, canalizaciones y tableros", resumen: "Cálculo de caída de tensión máxima y aumento de calibre para no dañar los equipos." },
  { numero: 43, titulo: "Conductores en paralelo y agrupaciones", bloque: "Conductores, canalizaciones y tableros", resumen: "Cuándo se pueden poner cables en paralelo y cómo afecta la agrupación la corriente admisible." },
  { numero: 44, titulo: "Tubería conduit metálica EMT", bloque: "Conductores, canalizaciones y tableros", resumen: "Soportes, acoples y factor de llenado de la canalización metálica más usada en obra." },
  { numero: 45, titulo: "Tubería conduit PVC y canalizaciones no metálicas", bloque: "Conductores, canalizaciones y tableros", resumen: "Uso en aplique, embebido o enterrado según el tipo de tubería con sus accesorios." },
  { numero: 46, titulo: "Bandejas portacables y ductos", bloque: "Conductores, canalizaciones y tableros", resumen: "Soportes para agrupar decenas de cables en instalaciones industriales y de oficinas." },
  { numero: 47, titulo: "Tablero de distribución residencial", bloque: "Conductores, canalizaciones y tableros", resumen: "Estructura del breaker principal, barras de neutro y tierra y circuitos ramales de la casa." },
  { numero: 48, titulo: "Diagrama de conexión de un tomacorriente", bloque: "Conductores, canalizaciones y tableros", resumen: "Conexión de fase, neutro y tierra en el toma doble con la polaridad correcta." },
  { numero: 49, titulo: "Circuitos ramales de alumbrado", bloque: "Conductores, canalizaciones y tableros", resumen: "Cómo se agrupan los puntos de luz en circuitos equilibrados con su protección." },
  { numero: 50, titulo: "Cuadro de cargas y equilibrio de fases", bloque: "Conductores, canalizaciones y tableros", resumen: "Repartir las cargas entre fases para que ninguna trabaje sobrecargada." },

  // ── BLOQUE 6 · Equipos y productos eléctricos ──
  { numero: 51, titulo: "Interruptor sencillo de alumbrado", bloque: "Equipos y productos eléctricos", resumen: "El circuito más usado: fase conmutada, bombillo y retorno, todo paso a paso." },
  { numero: 52, titulo: "Conmutación de tres vías (escalera)", bloque: "Equipos y productos eléctricos", resumen: "Encender o apagar la misma luz desde dos puntos distintos con dos conmutadores." },
  { numero: 53, titulo: "Conmutación de cuatro vías", bloque: "Equipos y productos eléctricos", resumen: "Control de una misma luz desde tres o más sitios usando conmutadores intermedios." },
  { numero: 54, titulo: "Circuito de iluminación con dimmer", bloque: "Equipos y productos eléctricos", resumen: "Regulación de intensidad de luz y sus requisitos frente a las cargas conectadas." },
  { numero: 55, titulo: "Motor monofásico: diagrama de conexión", bloque: "Equipos y productos eléctricos", resumen: "Arranque con capacitor, conexión de devanados y sentido de giro del motor de lavadora o bomba." },
  { numero: 56, titulo: "Motor trifásico y arranque estrella-delta", bloque: "Equipos y productos eléctricos", resumen: "Reducción de la corriente de arranque con conmutación estrella-delta de los devanados." },
  { numero: 57, titulo: "Guardamotor y variador de frecuencia", bloque: "Equipos y productos eléctricos", resumen: "Protección del motor contra sobrecarga y control de velocidad con VFD moderno." },
  { numero: 58, titulo: "Equipos fijos y sus circuitos dedicados", bloque: "Equipos y productos eléctricos", resumen: "Lavadora, secadora, estufa o calentador: circuitos exclusivos según potencia y corriente." },
  { numero: 59, titulo: "Luminarias y control de iluminación", bloque: "Equipos y productos eléctricos", resumen: "Conexión de luminarias LED, balastos y sensores de presencia o fotocelda." },
  { numero: 60, titulo: "Equipos certificados y marcación RETIE", bloque: "Equipos y productos eléctricos", resumen: "Cómo leer la etiqueta de un producto eléctrico y verificar que esté habilitado legalmente." },

  // ── BLOQUE 7 · Áreas y condiciones especiales ──
  { numero: 61, titulo: "Instalaciones en áreas húmedas y exteriores", bloque: "Áreas y condiciones especiales", resumen: "Grados de protección IP, tomas con tapa y exigencias para baños, cocinas y patios." },
  { numero: 62, titulo: "Instalaciones en piscinas y fuentes", bloque: "Áreas y condiciones especiales", resumen: "Distancias mínimas, volúmenes de protección y equipos húmedos de baja tensión." },
  { numero: 63, titulo: "Alumbrado de emergencia y evacuación", bloque: "Áreas y condiciones especiales", resumen: "Esquema de luces de emergencia y señalización para sitios de reunión y vías de escape." },
  { numero: 64, titulo: "Instalaciones provisionales de obra", bloque: "Áreas y condiciones especiales", resumen: "Alimentación segura de campamentos, tableros portátiles y equipos de construcción." },
  { numero: 65, titulo: "Áreas clasificadas y riesgo de explosión", bloque: "Áreas y condiciones especiales", resumen: "Clasificación de zonas por presencia de gases o polvos combustibles y equipos a prueba de explosión." },
  { numero: 66, titulo: "Estaciones de servicio y sitios con combustibles", bloque: "Áreas y condiciones especiales", resumen: "Exigencias eléctricas especiales en bombas de combustible y gasolineras." },
  { numero: 67, titulo: "Tensión de paso y contacto en estructuras", bloque: "Áreas y condiciones especiales", resumen: "Control de la tensión de paso y contacto en subestaciones y estructuras metálicas." },
  { numero: 68, titulo: "Instalaciones en centros de salud", bloque: "Áreas y condiciones especiales", resumen: "Circuitos críticos, sistemas IT en quirófanos y continuidad hospitalaria." },
  { numero: 69, titulo: "Instalaciones en fincas y zonas rurales", bloque: "Áreas y condiciones especiales", resumen: "Aterramiento TN-TT, protecciones y canalizaciones para ambientes expuestos del agro." },
  { numero: 70, titulo: "Sitios de reunión y locales públicos", bloque: "Áreas y condiciones especiales", resumen: "Salidas de emergencia, aforo y requisitos eléctricos de teatros, iglesias y colegios." },

  // ── BLOQUE 8 · Generación, renovables y movilidad eléctrica ──
  { numero: 71, titulo: "Sistema fotovoltaico aislado", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Panel, controlador, baterías e inversor para zonas sin red: esquema de autoconsumo total." },
  { numero: 72, titulo: "Sistema fotovoltaico conectado a la red", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Inversor on-grid, medidor bidireccional y requisitos de interconexión del operador." },
  { numero: 73, titulo: "Estructura y montaje de paneles solares", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Orientación, inclinación, anclajes y conexión en serie o paralelo de los módulos." },
  { numero: 74, titulo: "Controlador de carga y banco de baterías", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Conexión del controlador PWM/MPPT y arreglo de baterías en serie y paralelo." },
  { numero: 75, titulo: "Inversor y protección anti-isla", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Cómo el inversor desconecta la red durante fallas para proteger al personal de la red." },
  { numero: 76, titulo: "Unifilar de sistema solar residencial", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Diagrama completo: módulos, inversor, tablero, medidor y puesta a tierra de la generación." },
  { numero: 77, titulo: "Grupo electrógeno y transferencia automática", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Esquema del motor-generador, interruptor de transferencia y tablero de cargas respaldadas." },
  { numero: 78, titulo: "Infraestructura de carga de vehículo eléctrico", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Cargadores Nivel 1 y 2, protecciones y acometida para el EVSE en residencias y estacionamientos." },
  { numero: 79, titulo: "Medición bidireccional y net billing", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Cómo se mide la energía inyectada a la red y qué es la factura neta del usuario generador." },
  { numero: 80, titulo: "Puesta a tierra de sistemas de generación", bloque: "Generación, renovables y movilidad eléctrica", resumen: "Aterramiento de marcos, inversores y baterías para fallas de aislamiento DC." },

  // ── BLOQUE 9 · Procesos: diseño, construcción y mantenimiento ──
  { numero: 81, titulo: "Etapas de diseño de una instalación eléctrica", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "De la visita al predio y el levantamiento de cargas hasta la entrega de planos y memorias." },
  { numero: 82, titulo: "Levantamiento de cargas y demanda", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Inventario de equipos, factores de demanda y cálculo de la carga total conectada." },
  { numero: 83, titulo: "Elaboración del plano eléctrico", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Plantas, simbología, rutas de canalizaciones y ubicación de salidas en el plano." },
  { numero: 84, titulo: "Montaje de acometida y tablero principal", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Orden de construcción de la parte de entrada: canalización, caja de medida y tablero." },
  { numero: 85, titulo: "Instalación de circuitos ramales e iluminación", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Tendido de tubos, paso de conductores y conexión de puntos de luz y tomas." },
  { numero: 86, titulo: "Pruebas y verificación de circuitos", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Continuidad, aislamiento y ausencia de cortocircuitos antes de energizar." },
  { numero: 87, titulo: "Mantenimiento preventivo de tableros", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Inspección, torque de ajustes, termografía y limpieza programada del tablero." },
  { numero: 88, titulo: "Mantenimiento correctivo y reemplazo de equipos", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Diagnóstico de fallas, cambio de breakers y conductores dañados con criterio técnico." },
  { numero: 89, titulo: "Trabajos con tensión y en tensión", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Cuándo está permitido trabajar sin corte y el uso de EPP y herramientas aisladas." },
  { numero: 90, titulo: "Bloqueo y etiquetado (LOTO)", bloque: "Procesos: diseño, construcción y mantenimiento", resumen: "Procedimiento de candados y tarjetas que impide reenergizar durante el mantenimiento." },

  // ── BLOQUE 10 · Inspección, certificación y documentación ──
  { numero: 91, titulo: "Proceso de inspección del RETIE", bloque: "Inspección, certificación y documentación", resumen: "Cuándo un organismo de inspección debe revisar la instalación y qué se certifica." },
  { numero: 92, titulo: "Organismos de inspección y asignación", bloque: "Inspección, certificación y documentación", resumen: "OIC y OVS habilitados: quién los asigna y qué alcance tienen en el proyecto." },
  { numero: 93, titulo: "Lista de verificación del inspector", bloque: "Inspección, certificación y documentación", resumen: "El checklist que recorre producto, diseño, construcción, pruebas y documentación." },
  { numero: 94, titulo: "Medición de resistencia de puesta a tierra", bloque: "Inspección, certificación y documentación", resumen: "Telurómetro y método de caída de potencial para validar el valor exigido por norma." },
  { numero: 95, titulo: "Medición de aislamiento de conductores", bloque: "Inspección, certificación y documentación", resumen: "Megger y medición de resistencia de aislamiento entre fases, neutro y tierra." },
  { numero: 96, titulo: "Verificación de continuidad y polaridad", bloque: "Inspección, certificación y documentación", resumen: "Comprobación de conectividad de los conductores y correcto orden de fases y neutro." },
  { numero: 97, titulo: "Constancia de inspección y visto bueno", bloque: "Inspección, certificación y documentación", resumen: "El documento final que acredita que la instalación cumple el RETIE y puede operar." },
  { numero: 98, titulo: "Memorias de cálculo y demanda", bloque: "Inspección, certificación y documentación", resumen: "Cálculos de ampacidad, caída de tensión y cortocircuito que sustentan el diseño." },
  { numero: 99, titulo: "Formatos y respaldo del diseño", bloque: "Inspección, certificación y documentación", resumen: "Cuadros de carga, especificaciones técnicas y certificados de los productos usados." },
  { numero: 100, titulo: "Expediente final y entrega al usuario", bloque: "Inspección, certificación y documentación", resumen: "Armado del expediente completo que el propietario conserva como garantía de la obra." },
];

const crearRegistro = (entrada) => ({
  id: `tema-${String(entrada.numero).padStart(2, "0")}`,
  numero: entrada.numero,
  codigo: codigoTema(entrada.numero),
  titulo: entrada.titulo,
  bloque: entrada.bloque,
  resumen: entrada.resumen,
  imagen_url: "",
  publicado: false,
  fecha_publicacion: "",
});

const fechaPorCalendario = (numero) => {
  const d = new Date();
  d.setDate(d.getDate() - (TOTAL_TEMAS - numero) * 2);
  return d.toISOString().slice(0, 10);
};

const SIMIENTE = CATALOGO.map((entrada) => ({
  ...crearRegistro(entrada),
  imagen_url: `${import.meta.env.BASE_URL}diagramas/${codigoTema(entrada.numero)}.svg`,
  publicado: true,
  fecha_publicacion: fechaPorCalendario(entrada.numero),
}));

let registros = [...SIMIENTE];

const copia = (registro) => ({ ...registro });

export const listarDiagramas = () =>
  Promise.resolve(registros.map(copia).sort((a, b) => a.numero - b.numero));

export const crearDiagrama = (datos) => {
  const numero = Number(datos.numero);
  const bloque = datos.bloque || (CATALOGO.find((c) => c.numero === numero)?.bloque ?? "Bloque por definir");
  const registro = {
    ...crearRegistro({ numero, titulo: datos.titulo, bloque, resumen: datos.resumen }),
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