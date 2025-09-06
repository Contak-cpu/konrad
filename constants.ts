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
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544374670_1347851490529356_1324560712302344304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEA1PxXYKPWlXHDNegg754glBJzxoBTtY-UEnPGgFO1j7qZJGUUh5UAv257rHquRLVHv7FX-BMql3_Mn9LKF17_&_nc_ohc=OLEYq_LLR5MQ7kNvwHUZSWv&_nc_oc=AdkvB9usobMoIG6r-A-diVmaLMthBi7-MMEwOSEk9gQuwMFUMyXR1V-YfHPOem2jEwI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=rIEMOrBZWrJy3pGeNWVqiw&oh=00_AfadvidrH6rR0Q2OE_Nqo9ZPxNpB3BtDLXP2_DoVl9quWg&oe=68C2629F",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544374670_1347851490529356_1324560712302344304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEA1PxXYKPWlXHDNegg754glBJzxoBTtY-UEnPGgFO1j7qZJGUUh5UAv257rHquRLVHv7FX-BMql3_Mn9LKF17_&_nc_ohc=OLEYq_LLR5MQ7kNvwHUZSWv&_nc_oc=AdkvB9usobMoIG6r-A-diVmaLMthBi7-MMEwOSEk9gQuwMFUMyXR1V-YfHPOem2jEwI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=rIEMOrBZWrJy3pGeNWVqiw&oh=00_AfadvidrH6rR0Q2OE_Nqo9ZPxNpB3BtDLXP2_DoVl9quWg&oe=68C2629F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542760872_1347851447196027_5490288474808132789_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUJ0H-KDW8nL5NRMNWZ8AadJLx-O5ZLqJ0kvH47lkuosyq7jxNEQOGGtDDRxgceMLq48CtR92xzRlq_eNKpngj&_nc_ohc=bRpJlzDMFLgQ7kNvwFaNgDR&_nc_oc=Adlo3LgzILikTXymsfyvUscz_LbReFviEKug6LpYkGA9RRC3czDhGu49Q0ieVJUuXOU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=IwIxhloPgUBh_q0zCDJyPA&oh=00_AfYnoWr-HsC-ewtxdserKWJYbYBYipeOd2FDCoa8Yr3Wgw&oe=68C263C1",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542751948_1347851463862692_6810441729937486457_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvDA2N8_EXwOAXgDYC7d2DDlClDlPChR0OUKUOU8KFHYI3P7mJEORNgvK6G_a7wrKMQP-UaFZ9CqjqhEq-EilY&_nc_ohc=5jpxVrAXtoEQ7kNvwGXVOoF&_nc_oc=AdkgOiKKgQ4-4q9eifBH7ZR9WlWf9ykKWQY_2P2ll0zdspYLjO9mjJRQwEU4x2lG-Y4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=IwIxhloPgUBh_q0zCDJyPA&oh=00_AfZtLzXZ-dtMkS3iuwVXThnaCowwF37uEVdv95k-vSjrew&oe=68C27634",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544504584_1347851480529357_8835148006212439149_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEPo296WjoZKN0LG6sgzs1V9RlCARFTaNL1GUIBEVNo0u9fmygExNvoh-p2VGiYR_hKYhx52p3xdbFjJtIwqL_z&_nc_ohc=IR1eiDxtZ5wQ7kNvwHafi5v&_nc_oc=AdmV8VE3Y_Ci2W5txlxO9rQ1krDOAREHOW02uHBplWcraboBF0Ppa7WLr_03RoNoVTg&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=IwIxhloPgUBh_q0zCDJyPA&oh=00_AfY0uj60T-oTMVfEF3AGyFaKiH7Up8CxH70u-hHr8cP2gg&oe=68C2865F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/544733258_1347851417196030_7069425634818397679_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGaLE44f06QrJuE451Bt58sevC6yk8a5ZZ68LrKTxrlliq8da6c5YC_Vi7Sps5fapyZ1OBmAQNPrAujtZw3nxXM&_nc_ohc=xqV6KHSCf8YQ7kNvwEWA0Mx&_nc_oc=AdmVIG0vLCO33QNrrGyEKltPm5LVyZHgW9Z8zcIHrT1Crld3ZQtnB0b09pXP5yIOnNE&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=pT-xHLI34qTYBdslU5mJlA&oh=00_AfbEs9z1EO2tohEC4MICaQlxYPvesdQf2sSJrzDOi1S0wQ&oe=68C27526",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544757829_1347851483862690_5224457815341958120_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEeETndHdR5ypYj0HR-DPcNvUmbldmQcva9SZuV2ZBy9qUSp1288ovAhiwkJKhGIXdzS0QABa9EES-omc7rTodl&_nc_ohc=AtV3OjO06i4Q7kNvwFP87xQ&_nc_oc=Adl8cBR85-nDciT4vF-7O81MODbIuc6WSagbMXvlx9sPnUjKNnkVXqTSaz9v3509Ih8&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=EWvZ5pQWQ4Z1rUzVZ_PxbQ&oh=00_AfZeCtCBEEKnN-bYi50rVSk_SVufoTmm0_EELBaTnNudUw&oe=68C268F4",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544884856_1347851467196025_1524804413660520058_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE6Hl-ECsTo6wknsUuKjbgvyYuA5D0bG3vJi4DkPRsbe7sFXQwsvx0V0IyVyayHh6_A2Pnnm26PdCCEpKmGPsQI&_nc_ohc=zg12EcHpm38Q7kNvwFiNF5e&_nc_oc=AdlYqTN9zP9bw508jytBjQu7T0GuTOSn7L3YUgWMIV-QR0s5ouGK397IsnByOTZoVRk&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=ZB_kd94i2IHYmDSqDe6NYA&oh=00_AfYY9XzoqrkQqxCNee7cSk6De_4tcqH4KgdT1zQnAUYP9g&oe=68C28267",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542751895_1347851460529359_4009706418728767474_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHVeT3H3DydjqhFBZ1WjgFbugRafVKhkPe6BFp9UqGQ96aM0KFSFikEh_0nimPEl_UOtQMq2BDB0THajjyoMCcd&_nc_ohc=-IehQf_YJDwQ7kNvwHcSrQl&_nc_oc=AdmrJmLupgMIbx9QE5qwGXF8rdAbzuggVu12hg9nFEbKbB0oWa7dF9315bQuoHkWcs8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=N3eqeaoJ_PUO8GVdgr2-mQ&oh=00_AfaiB58DE3mu4F3-UAXrrRE8Sp0C-GJPr4oxUHlDXXMlOQ&oe=68C27C11"
    ]
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
