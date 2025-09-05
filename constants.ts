import type { Property, FaqItem } from './types';

export const WHATSAPP_NUMBER = '5492954475417';

export const PRICE_RANGES = [
  { value: 'all', label: 'Cualquier precio' },
  { value: '0-350000', label: 'Hasta $350.000' },
  { value: '350000-500000', label: '$350.000 - $500.000' },
  { value: '500000-700000', label: '$500.000 - $700.000' },
  { value: '700000-99999999', label: '$700.000+' },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Cuál es la duración del contrato de alquiler?',
    answer: 'Todos nuestros contratos de alquiler son por un período de 2 años, según la legislación vigente. Los ajustes se realizan de forma cuatrimestral utilizando el Índice de Contratos de Locación (ICL).'
  },
  {
    question: '¿Qué tipo de garantías se aceptan?',
    answer: 'Aceptamos principalmente dos tipos de garantías: a) Dos garantes con recibo de sueldo, de los cuales uno debe ser empleado del estado provincial o nacional. b) Un garante que posea una propiedad inmueble a su nombre.'
  },
  {
    question: '¿Qué debo abonar para ingresar a la propiedad?',
    answer: 'Para formalizar el ingreso, se debe abonar el primer mes de alquiler por adelantado. Adicionalmente, se firma un pagaré que funciona como depósito en garantía y se devuelve al finalizar el contrato si la propiedad está en condiciones.'
  },
  {
    question: '¿Se permiten mascotas?',
    answer: 'La política sobre mascotas varía según la propiedad y las regulaciones del consorcio. Por favor, consulta específicamente por la propiedad de tu interés para obtener información detallada.'
  }
];

export const properties: Property[] = [
  {
    id: 1,
    title: "Monoambiente sobre Giachino",
    address: "Giachino Nº 2455",
    type: "Monoambiente",
    rooms: 0,
    price: 330000,
    additionalCosts: 30000,
    description: "Ambientes integrados de cocina-comedor y dormitorio, más baño. Ideal para una persona o pareja.",
    available: "Inmediato",
    features: ["Cocina integrada", "Baño completo", "Ambiente único", "Luminoso"],
    imageUrl: "https://picsum.photos/seed/prop1/800/600",
    images: ["https://picsum.photos/seed/prop1/1200/800", "https://picsum.photos/seed/prop1_2/1200/800", "https://picsum.photos/seed/prop1_3/1200/800"]
  },
  {
    id: 2,
    title: "Departamento 1 Dormitorio en Beruti",
    address: "Beruti 361",
    type: "Departamento",
    rooms: 1,
    price: 320000,
    additionalCosts: 25000,
    description: "Cómodo departamento de un dormitorio con cocina separada y living comedor.",
    available: "Inmediato",
    features: ["1 Dormitorio", "Cocina separada", "Living-comedor", "Balcón"],
    imageUrl: "https://picsum.photos/seed/prop2/800/600",
    images: ["https://picsum.photos/seed/prop2/1200/800", "https://picsum.photos/seed/prop2_2/1200/800", "https://picsum.photos/seed/prop2_3/1200/800"]
  },
  {
    id: 3,
    title: "Departamento 2 Dormitorios en Ferrando",
    address: "Ferrando 841",
    type: "Departamento",
    rooms: 2,
    price: 430000,
    additionalCosts: 50000,
    description: "Amplio departamento de dos dormitorios, ideal para familias. Cuenta con espacios luminosos y bien distribuidos.",
    available: "Inmediato",
    features: ["2 Dormitorios", "Cocina-comedor", "Baño completo", "Placares empotrados"],
    imageUrl: "https://picsum.photos/seed/prop3/800/600",
     images: ["https://picsum.photos/seed/prop3/1200/800", "https://picsum.photos/seed/prop3_2/1200/800", "https://picsum.photos/seed/prop3_3/1200/800"]
  },
  {
    id: 4,
    title: "Departamento Amoblado en Alberdi y Edison",
    address: "Alberdi y Edison",
    type: "Departamento",
    rooms: 1,
    price: 500000,
    additionalCosts: 20000,
    description: "Departamento de 1 dormitorio totalmente amoblado y equipado. Listo para mudarse. Excelente ubicación.",
    available: "Inmediato",
    features: ["Totalmente amoblado", "1 Dormitorio", "Equipamiento completo", "Ubicación céntrica"],
    imageUrl: "https://picsum.photos/seed/prop4/800/600",
     images: ["https://picsum.photos/seed/prop4/1200/800", "https://picsum.photos/seed/prop4_2/1200/800", "https://picsum.photos/seed/prop4_3/1200/800"]
  },
  {
    id: 5,
    title: "Piso de categoría en Hilario Lagos",
    address: "Hilario Lagos 356",
    type: "Departamento",
    rooms: 3,
    price: 650000,
    additionalCosts: 150000,
    description: "Exclusivo piso de 3 dormitorios con acabados de lujo, amplios ventanales y vistas panorámicas.",
    available: "Inmediato",
    features: ["3 Dormitorios (1 en suite)", "Vistas panorámicas", "Acabados de lujo", "Seguridad 24hs"],
    imageUrl: "https://picsum.photos/seed/prop5/800/600",
     images: ["https://picsum.photos/seed/prop5/1200/800", "https://picsum.photos/seed/prop5_2/1200/800", "https://picsum.photos/seed/prop5_3/1200/800"]
  },
  {
    id: 6,
    title: "Casa familiar en Urquiza",
    address: "Urquiza 515",
    type: "Casa",
    rooms: 3,
    price: 700000,
    additionalCosts: "45.000-50.000",
    description: "Espaciosa casa con 3 dormitorios, patio con parrilla y garage. Ideal para vida familiar.",
    available: "Inmediato",
    features: ["3 Dormitorios", "Patio con parrilla", "Garage para 2 autos", "Zona residencial"],
    imageUrl: "https://picsum.photos/seed/prop6/800/600",
     images: ["https://picsum.photos/seed/prop6/1200/800", "https://picsum.photos/seed/prop6_2/1200/800", "https://picsum.photos/seed/prop6_3/1200/800"]
  },
  {
    id: 7,
    title: "Local Comercial en Hugo del Carril",
    address: "Hugo del Carril 1234",
    type: "Local comercial",
    rooms: 0,
    price: 500000,
    additionalCosts: "IVA",
    description: "Amplio local comercial a la calle con gran vidriera. Alto tránsito peatonal y vehicular.",
    available: "Inmediato",
    features: ["Excelente ubicación", "Gran vidriera", "Salón principal amplio", "Baño y depósito"],
    imageUrl: "https://picsum.photos/seed/prop7/800/600",
     images: ["https://picsum.photos/seed/prop7/1200/800", "https://picsum.photos/seed/prop7_2/1200/800", "https://picsum.photos/seed/prop7_3/1200/800"]
  },
  {
    id: 8,
    title: "Departamento 2 Dormitorios a estrenar",
    address: "Av. Luro 1550",
    type: "Departamento",
    rooms: 2,
    price: 480000,
    additionalCosts: 40000,
    description: "Moderno departamento a estrenar con balcón. Excelentes terminaciones y luminosidad.",
    available: "Septiembre",
    features: ["A estrenar", "2 Dormitorios", "Balcón", "Pisos de porcelanato"],
    imageUrl: "https://picsum.photos/seed/prop8/800/600",
     images: ["https://picsum.photos/seed/prop8/1200/800", "https://picsum.photos/seed/prop8_2/1200/800", "https://picsum.photos/seed/prop8_3/1200/800"]
  },
  {
    id: 9,
    title: "Moderno Monoambiente céntrico",
    address: "Corrientes 720",
    type: "Monoambiente",
    rooms: 0,
    price: 350000,
    additionalCosts: 28000,
    description: "Funcional monoambiente en el corazón de la ciudad, con cocina integrada y balcón.",
    available: "Septiembre",
    features: ["Ubicación céntrica", "Balcón", "Cocina eléctrica", "Edificio moderno"],
    imageUrl: "https://picsum.photos/seed/prop9/800/600",
     images: ["https://picsum.photos/seed/prop9/1200/800", "https://picsum.photos/seed/prop9_2/1200/800", "https://picsum.photos/seed/prop9_3/1200/800"]
  },
  {
    id: 10,
    title: "Casa con pileta en Barrio Privado",
    address: "Barrio Los Pinos Lote 42",
    type: "Casa",
    rooms: 3,
    price: 950000,
    additionalCosts: 120000,
    description: "Impresionante casa de 3 dormitorios con pileta, quincho y gran jardín en barrio privado con seguridad.",
    available: "Septiembre",
    features: ["3 Dormitorios", "Pileta y jardín", "Quincho con parrilla", "Seguridad privada"],
    imageUrl: "https://picsum.photos/seed/prop10/800/600",
     images: ["https://picsum.photos/seed/prop10/1200/800", "https://picsum.photos/seed/prop10_2/1200/800", "https://picsum.photos/seed/prop10_3/1200/800"]
  }
];
