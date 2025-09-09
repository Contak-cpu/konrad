import type { Property, FaqItem } from './types';
import { properties } from './data/properties';

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

<<<<<<< HEAD
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
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/492933291_1271628801484959_6165130805697287787_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFW5btESlkEEO11B9FFPKeWqQYJtp8DmuKpBgm2nwOa4r-ACbLDgjmltnFHJNquk5NIG0PDu7aeUvyBJ-_UYnzV&_nc_ohc=_fYwacl3djwQ7kNvwF2j-LM&_nc_oc=AdkqydQjY2rAOQT8C_i2DqmL2jTz4bqhLw105ZGZth-SyucEm2TUIkverDXD9m2Sa9k&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=6IPZFoQZNT-DDzvIZifvlg&oh=00_AfY3fsKnn6BoMuycuS218DQH0KHfwGvvN0FmblF1OnOlwg&oe=68C26502",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/492933291_1271628801484959_6165130805697287787_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFW5btESlkEEO11B9FFPKeWqQYJtp8DmuKpBgm2nwOa4r-ACbLDgjmltnFHJNquk5NIG0PDu7aeUvyBJ-_UYnzV&_nc_ohc=_fYwacl3djwQ7kNvwF2j-LM&_nc_oc=AdkqydQjY2rAOQT8C_i2DqmL2jTz4bqhLw105ZGZth-SyucEm2TUIkverDXD9m2Sa9k&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=6IPZFoQZNT-DDzvIZifvlg&oh=00_AfY3fsKnn6BoMuycuS218DQH0KHfwGvvN0FmblF1OnOlwg&oe=68C26502",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/499847780_1271628694818303_7942069436223988948_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmKPo_htEf2r8gY3aDf_UIyXuLh13liGLJe4uHXeWIYi8LkM8_PCVudVFxmclt0yeUMIiRHGpAMZGsqcRYbkxy&_nc_ohc=oYNDFw9FPikQ7kNvwEzXrN8&_nc_oc=AdmRLR6_juf-QwzNrWNLKKpa6-Etd4o8Z8LCIrTgX_hLyeruuqJpS7VKD3S6LR6Z3XA&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=QqsdI36VucQwC9y3pHzK2g&oh=00_AfZe41AgGBBMLL-GiecwUw1UOv5RPWWmLRnUyaPbUCb32Q&oe=68C29C6B",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/504717666_1271628698151636_4275365675928342153_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE2k19ULqikecsU8UBOp-z8zcMiXVw6zuTNwyJdXDrO5J9XprSRGRH1aQKJh3eaCrHwyJz5-sTVQvilhMbiMXVf&_nc_ohc=wg9HpO4VNAAQ7kNvwGeyxBj&_nc_oc=AdmtObFoyYqq3W-CsDs5szOHCu8mkTM9VoJuC4cZqFItdsn-qJwzpmWgjeY1ExYU3NM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=De5n2_HhVgD5pTthX9A2bw&oh=00_AfZHTbB2g_tya4NBJjzhx1UzfkEdq2_ibJwNGWdu4F-g1g&oe=68C274F7",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/502645250_1271628754818297_2211251121585504538_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGvTATUj6Koe6tmumz9e0tYsAvW916KBPqwC9b3XooE-u6QpZoFXvTko-rQVY_RSl6MpoxWUMqTqQtYvj2FXwG8&_nc_ohc=xgeffHRk07oQ7kNvwFrjy1i&_nc_oc=AdksO6ozc-iLTqunZixVUdPFVsQToyFrjprfwC7kd6OUmyA1Zb3_X7CqdUHzsZtoO6E&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=OR9u0fDh-O8ShVaJkDPtMg&oh=00_AfaVn3mGKODWY7FrRfIc3NDlGxuXZGB63Qy_p_dZ1ThxHw&oe=68C26AA7",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/498193559_1271628738151632_4320442740958294224_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF8fafEtr4BRf2ZHI1R8l3bMnsr3od6V_oyeyveh3pX-htvXZRdnre5lvjOIbdMYnAwSfkmmhujZ9hhNKRAnUF8&_nc_ohc=le-hUDwb64YQ7kNvwF_AWIA&_nc_oc=AdlIN3fXOF4KdNbuB7nkHiXe0C7SosrWV-umhX98JGwYagR7jVyHcIQ7HqBXYcfUrCE&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=T717DG_7mzuCda9RZVFsow&oh=00_AfYjpQjeqqktD9Wsk6bbe4Pvu4Lgb4ZZBS4P4M9rQO-YKw&oe=68C29A1F",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/500120492_1271628701484969_6212205148784355906_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF3cBC0XDhmOoqzXYdtTJuBj9DJvQ6mVA2P0Mm9DqZUDcjjTu3Di_-iwFRpIBTIGWFCYRUGuSBronL3L6SehroO&_nc_ohc=HGpEoS4TlYsQ7kNvwGSs0vR&_nc_oc=AdnQF9dN56MX4tLKwiFMRQ-iQvrHm7swG7H5ymEW8ITrzJoe09rq2SPYm_qF7cS5xr4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=8piP5Q2fFQjntUp4RsyisQ&oh=00_Afb2NCM9P9pBssZbVEPEEhAHZKUP8aYoDIymBGPDhSeCew&oe=68C26BE1",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/494219895_1271628771484962_4565521542645524413_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEchluIyFfkqHuhj7Ip3TWLO0abR5CNlMg7RptHkI2UyEr11cmdzO2wyUznUSnal9EquEockMPbbwPcelkcpiUx&_nc_ohc=lVmZLS79Gd8Q7kNvwFkjcWw&_nc_oc=Adl72E8iUkhLwzy38bUvNzzKtsMjdC6CyCsCCRf6PiGqy_r94dQcVFHwc00xAVDga8g&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=yjQwa5keOFIhSulCWuSkig&oh=00_AfZS2WzsqdMm-OjCcrBUfzkTmUYaJ_0GVc97aZtS71vbMg&oe=68C29023"
    ]
  },
  // TEMPORALMENTE OCULTO - Sin fotos propias
  // {
  //   id: 2,
  //   title: "Departamento 1 Dormitorio en Beruti",
  //   address: "Beruti 361",
  //   type: "Departamento",
  //   rooms: 1,
  //   price: 320000,
  //   additionalCosts: 25000,
  //   description: "Cómodo departamento de un dormitorio con cocina separada y living comedor.",
  //   available: "Inmediato",
  //   features: ["1 Dormitorio", "Cocina separada", "Living-comedor", "Balcón"],
  //   imageUrl: "https://picsum.photos/seed/prop2/800/600",
  //   images: ["https://picsum.photos/seed/prop2/1200/800", "https://picsum.photos/seed/prop2_2/1200/800", "https://picsum.photos/seed/prop2_3/1200/800"]
  // },
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
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/495608521_1263354042312435_3553932889454926395_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEM-WOEdMxrrrJEv8bxS00pjpSDnDQQdO2OlIOcNBB07eaFdjLD3xTmmRdt3EZA3nHIwe4SGPqRfrD_bSdZFJg4&_nc_ohc=vI--RqPawvwQ7kNvwFrim0n&_nc_oc=Adkwd48gQChFkULJsXP0CLd8wIrG4Wx30xa0Ei7c9dhpS6LWlMRxwLorWxuwDbxdHyM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=p7PAlm8LJXsLw00ai0VBjg&oh=00_AfYH9g7GRJj8eDYo6r3-zWbMbYzTS17jhiYithc-Tw1jVQ&oe=68C26BDA",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/495608521_1263354042312435_3553932889454926395_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEM-WOEdMxrrrJEv8bxS00pjpSDnDQQdO2OlIOcNBB07eaFdjLD3xTmmRdt3EZA3nHIwe4SGPqRfrD_bSdZFJg4&_nc_ohc=vI--RqPawvwQ7kNvwFrim0n&_nc_oc=Adkwd48gQChFkULJsXP0CLd8wIrG4Wx30xa0Ei7c9dhpS6LWlMRxwLorWxuwDbxdHyM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=p7PAlm8LJXsLw00ai0VBjg&oh=00_AfYH9g7GRJj8eDYo6r3-zWbMbYzTS17jhiYithc-Tw1jVQ&oe=68C26BDA",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/502637116_1263354058979100_1634744469259298560_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHUzz0nWf3YxRdHk3JTi9-7yX1FWi54CcHJfUVaLngJwXgonuE7068-5dXC2e1S8WUpFvY0tPmUMuUss4kV-r--&_nc_ohc=9RsJWQwhdD8Q7kNvwEUS3_h&_nc_oc=Adn0A5S7A0EFlgVJx2U76mt4Z7agbWpR7mJ_yLeuXI5JpKGrY2P1D4KiggAu5QGrDI4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=CV7KtVm3txeePR5NaSOIvg&oh=00_AfY0zmK_K-ESjxdVe7Tbyy-2XFtpWlS6yv0vdeVvqCw4BA&oe=68C2843C",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/499826939_1263330855648087_4068065391832501937_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE4ijnBRU_WF9g5u7poNGS9fW5N3QKJuTV9bk3dAom5NSLyCvupzQpNjobqDiOBknur1INouVPLvtfblDXxWNJM&_nc_ohc=WZCe6hV056IQ7kNvwEk2sHN&_nc_oc=Adm5WJuJWWUXyCRymHxqarQ4WzhL5uWLLL-CLQjwfrJC8oXm-UhwmOMlauPktzW3pIU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=TTfZ022jTfU-n-rQIForbQ&oh=00_AfYJluwCQdmriDer5peiczUvAR71uLoAFjc7n3-otaujOw&oe=68C26BBF",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/500168558_1263330878981418_5415673328869647042_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFO8_OHoMNg4uKuY54f_-ga7dPgi6b4Bhzt0-CLpvgGHKvjPojxzvS9otXdOt1bUtC-5BoRyJmKf4uWO18Z3SXA&_nc_ohc=XehYHpkaTUUQ7kNvwF_e0bp&_nc_oc=Adk_tVx8HgCJXJg_MC-6q64rvPnJFCYiHUOvcxtXoIUrUPOw-9bAbF-Bz54tFkXQOqk&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=8nLsTYr9eDR4Vghx7_R8zg&oh=00_AfbXS28oKNic4lVNThIm1tGvHAOMgWPioJ2AlW-tnEGi2w&oe=68C29506",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/496362499_1263330852314754_2762295079118800665_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHPj47EnmrJyl6ZNenMjg4pC7ThRm3Um6YLtOFGbdSbppPnSDhwfKCccovhzbryOtjB1xJCp7l2rNVgenpJ9uhY&_nc_ohc=QE7NdzACV7gQ7kNvwHJi138&_nc_oc=AdlZY844b14vzsLE8aLjCG-vssYVk52grpiqFhDiuLYXtzu7a3ryqCO053apZ3kzsdQ&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=boDOPWm---vN8O_IpXfYdg&oh=00_AfZ8CTCKWGuol-s6r-uCVIYgY5Ty-GtJlMRz1FvsOr_Ysg&oe=68C29ADD",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/496096498_1263330952314744_7691127700249301164_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEViWRr6eRF9MreGNIB4PW9E6t9cXbZh18Tq31xdtmHX3qoMzTaC9wlkMNFoO_q8x89Gs3Z-loLSsfqExB6yPYD&_nc_ohc=Yze3hMwoHBMQ7kNvwH-fBlB&_nc_oc=Adn8_V9gDgP4VhonzgO02-PDJ_d1lwPuYq4L1WCctdyLqFP8vmERXHjfqOPHjQ4qPYg&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=d0nLkRouw344VPyF77Jnfw&oh=00_AfYmMRDaKFityTJba2SzQQ5LXcKVfBR6sWuHzliTlCMtEA&oe=68C285E3",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/499789184_1263330945648078_1715237492803777666_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgTQNx1OHPHExLuylhF_W43QpZycl9ObbdClnJyX05tk7lrzzu5-rK6mTe8nJFX5-xWJIb3x32PJzbcE8Ul1AV&_nc_ohc=fmVlrfBj8m0Q7kNvwHqFVgn&_nc_oc=AdkvwRu_YQgS9k6pKbYVaQfFO045_MKqmxZKlij3KzCe0xktgHOyPCH7klkXv2u06tA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=geer6dcC5np2od965CfQbA&oh=00_AfashvfTb5HQMVOKSLQa_n4Yp8JdJ-JLqCLqsLgai56Bkg&oe=68C27CE6",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/494286517_1263330965648076_5183561156441018186_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG4Lq3beZnzo6Y4F26Knem_5Zi8TANMRoblmLxMA0xGhpuBXI5Sh8e5Cw_zXzNEE6p1Emkdz84qxXzhHQcpmWw_&_nc_ohc=uiN4zx1tQBEQ7kNvwGs-bVn&_nc_oc=Adl-xdJPJGCL4S-DvRC9Vn3lrZ5gqNNMJ1zSdDYunBRV4A6JaKH0Ygk4nZGtBm1-B_k&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=STP5b1FZYD7rW-YyYnAieA&oh=00_AfbFMAaoVsQKsqgrFeFpcbeleGPfYbYlddnAn54pGONPKw&oe=68C28A43",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/500509774_1263330895648083_6218209615064727721_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF5iMM6Cw7Xa24lMBiC4MJPAgtQkal38-gCC1CRqXfz6H_DSR9yxRA0Dxb29eE5CLJUuiDqVbcQk4h19hP_CAmf&_nc_ohc=oh999uU-QOIQ7kNvwFapBuI&_nc_oc=AdnhPfSLxOKxmNpmpr3l-WJwdixmdJHtS_HmCFyb4fqXxTtDyMSnPc_RacEUuVDB8sI&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=dnOEpe2qy8dNNTNbWu1nzg&oh=00_AfZOM_L1PB4XUPw3XkFq19Mi30VKdrjr6mLaABVk6GCuNA&oe=68C288E9",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/495610263_1263331098981396_5478499191094837060_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeExoZlwUWtjAM4B24CuIMKfTuBfjyzQ1aFO4F-PLNDVoYmONolxlK5Vee2_z1qwPeUzu2J3KAAcDnZOv9ynb_Lb&_nc_ohc=Ey9Oe3IAfmoQ7kNvwFgM-DJ&_nc_oc=AdnJp_PSHtOr2Z2ZlHSc1ILg8G8dUV61gJa7-Yd-qJn1tQpOEd7yS7gwVXrKBesrLq4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=0kUFnal1OTbWYL1e4S5VzQ&oh=00_AfZ5H9BcEr6YsEUylXQAFcZ_ZR8gDDKyUnyoHUMI0wbhBA&oe=68C29378",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/502075714_1263331092314730_7178922290393483535_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHTveEqyWfpfpkIBx2ngBns8i30tE_AT5HyLfS0T8BPkU8WDMAKC862xxbN0Mwd_kRpnjxFatcS-_-CaAGf6Yl_&_nc_ohc=4CnZkzSpZeUQ7kNvwEHbwQG&_nc_oc=Adn35FP-VAm9GqEBV0GlpujiG_bNE0GrLisfAyr8LDCMagb11eMvPpNb2-od4k0-Jvs&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=X9I-fiKWAxw40ok8vveihQ&oh=00_AfYlszMz-jNy54Ag4mtXKauwwA4tNs4JfGMgvb_2szAxaw&oe=68C278B0",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/499830925_1263331112314728_4722563151943007123_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG2Mv4LVk6H46N3ScfHFPSyMkeoSkbd03oyR6hKRt3TeoEMYpS7YQiqZ8qcV0j-1_jeoPz2Y68nkjId6ZTZBADI&_nc_ohc=OUhWvJSW-eoQ7kNvwEq7BIv&_nc_oc=AdmymRYt3cCr9Sixcq1UxdfTx62n5PjxT5Su0ChZHRZlh1qbJsxNGGuZr4akbyi4cI8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=DMZa2bcdWbehCnOOe5c4-Q&oh=00_AfaUbffyK1-ll2Vdsxkdnm2joKCsD7UguUYcT-pCajJqOQ&oe=68C2668A"
    ]
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
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536271173_1331991382115367_17817488427946682_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFaMPWEMxfggj8FD1-CDlu8ewShahizg797BKFqGLODvw7SRj7mvzlvJvyjc6x3x82LALQDSXW94J7n6isFQTkx&_nc_ohc=__BcZ_AhfKcQ7kNvwFHmsoE&_nc_oc=AdkW9VrxWLJLKb6GjgJgAv4UpLHtwfiJwW5G6USOxmiu1XJ8w-xJlgTS0zFkEBhjnV0&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=5zkvPQJWDLA8oa7S5FLh6A&oh=00_AfYx6z0IelOo77MAhfhkDSmLE6omwTs57LpWLkLD1DN37w&oe=68C284C2",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536271173_1331991382115367_17817488427946682_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFaMPWEMxfggj8FD1-CDlu8ewShahizg797BKFqGLODvw7SRj7mvzlvJvyjc6x3x82LALQDSXW94J7n6isFQTkx&_nc_ohc=__BcZ_AhfKcQ7kNvwFHmsoE&_nc_oc=AdkW9VrxWLJLKb6GjgJgAv4UpLHtwfiJwW5G6USOxmiu1XJ8w-xJlgTS0zFkEBhjnV0&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=5zkvPQJWDLA8oa7S5FLh6A&oh=00_AfYx6z0IelOo77MAhfhkDSmLE6omwTs57LpWLkLD1DN37w&oe=68C284C2",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/535681450_1331991318782040_1915203718397525682_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFgLh1yQWWCOMS_L-s97q0Ah-r57lEUcvOH6vnuURRy86jd1vtJ62_Z2qpgimJXqr5f2M8iUI8wI_u1ol0MVTyM&_nc_ohc=EtXzU9TTY6MQ7kNvwH2O0Hf&_nc_oc=AdmSBxnUwy6mG3OoKLr6BX4FlWEW6zProBHomuOtokmv043KzDUH9nnl11bg8ESkEPU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=ye9D3hCk1vMIeKDA3b_AWg&oh=00_AfZGeWUkpcwTeMvk5XptMClvS8zxLJLNzLBsKVX_EcOzqw&oe=68C2663A",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/535908355_1331991328782039_8931069858719195577_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG6FNLu6UzuaFaYvvpmUfvELk9J_gx_W0ouT0n-DH9bSjAXYwUwDmDpThEhOPDg-dVZuz8rNvixNIfyZNohVB-a&_nc_ohc=xhAXrhjbcwgQ7kNvwGRmCn_&_nc_oc=AdlErCi3Nb6HQY5aTgX71ZRc8_X2P8SfiGoKn4gjTRNY8M70S70rG9PeNL1b5AOshDg&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=EZWX7lKVAzFxWxz1DsX8lQ&oh=00_AfYOinlHb-xP_cDGFzPzBC3ArX6y33z_7lZ8lwuao09iNg&oe=68C26DDA",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/535002577_1331991162115389_4036451415590499633_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGinSwhONLrKUxxdWXnkVfsux2f3oWiMYi7HZ_ehaIxiGPm-ytTOITH_HR5gmK1lHSus8zq7t0faziRwb816fNA&_nc_ohc=iTwmc-RQsyUQ7kNvwHstHjy&_nc_oc=AdmxP0APhd_V8--Vky25-HEv7bFRGkg1O9utSpXgtQRO6P06suCzxm_uIs6Ydn7CcrQ&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=YVT2cj1INDLnvLB0RPfPfg&oh=00_AfYhDtudI0JcLc6KRIKHdyGIvKpIkcIvo6jBBigw4Ty9zA&oe=68C2970A",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536267420_1331991392115366_7708513306522166502_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHitmxhlJ-hWn2zow9v0NvbfanZM6oEWrZ9qdkzqgRatkkb_FICxcgro-QRbnXcBdT2yRtC85Uum7riwlHDsED7&_nc_ohc=5wVaKlQ_G_0Q7kNvwG3XBQz&_nc_oc=Admhl8lcmlCbvP_5qOMJzSjLqGgC00tC0Ql5wXEnA0FqJxhkLvgCiuMo9Kg6Hr_5ZJg&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=VigJENflCVHiYY_d6xkLOg&oh=00_AfZek05eiE1Nqq0TrktxXr8YeCI0iKxd9K-43dKB12Q3Pw&oe=68C28FDC",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/534689025_1331991422115363_628537341661833770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmipIiP0fTQJNPWf24bcG6hs0eWZh54yGGzR5ZmHnjIYuxRqxFECFKgPRlDStGoIJ-SvSQkHorPTnmrLcGiNcX&_nc_ohc=1jXwMHwjVnAQ7kNvwGS598a&_nc_oc=AdnnVZq0Jw8J74sNxQzekpF7wvOi3Xp6a4LGgAx3cqY7tTMOs1zCjGeTQM_JPM404bQ&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=2FYpiWV24JiqX78A1FBK4g&oh=00_Afap_Kw7SQ_V5K_63PAg9v8aF6E2TfEomRpgiYPIuM61Bg&oe=68C26DB3",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536272502_1331991345448704_6860147256977642819_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEH4jC2520N-DtBqc2FHvqrW5QgZ4Gzn3NblCBngbOfc9S91-SXXu5w1m5i5FBXo73daQ2mdNX-x1CpoylQRrVJ&_nc_ohc=0qlrr-P2ucsQ7kNvwE7XJ9x&_nc_oc=Adnpv_H2CAo08XLjHvFI7Wl1nNfP_okCPVvXEWUEAUnE1u5T6NkN_EU6u23j_BcJhtA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=Z23pAr6-2uxNunV9Ah7h4A&oh=00_Afa8FNHHAm7CkZEox_bA6TS30pnDEZJgmv9oAkCJ4r3uLQ&oe=68C28A96",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536270487_1331991332115372_7079409819991389051_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJYyXsiHEHLkCJ5dNljqR4g6aYk-KqAuGDppiT4qoC4aGbUkKlYm8PW1xo_L0y2B9wNqkxYztQ24KKM7rcxjO2&_nc_ohc=xUuPPtlAx6EQ7kNvwGpM-8f&_nc_oc=AdkLz72m5AvL27yc9tKo69FZ6TDw69JuvupnLXcaOeYwK2xMyGzTKIYorEOwu9WRDro&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=57PpLEe2PV-xfmO_f03Djg&oh=00_AfZpbqnGI6jguKPG2rewSKnYoN5rvUxt3eYj5NZAHS4ogw&oe=68C29870",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/534832875_1331991152115390_4025026324515896128_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBFk5kbWNr09VcGGY7Tg5ajy-uDx8UYCuPL64PHxRgK6TRxO1ASfypkvdcx3AvYiHhtLdyhFYmKCr_y1Igupfw&_nc_ohc=9sp-GZAMjQwQ7kNvwHFVCQ8&_nc_oc=Adl8Y3kN523Bh0qUXfV0l--uGYUe8Tu8OAIRBwJHbN1JGY0q-n1nJbJEzbFLzKWl7y8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=Jr-SwqUJnH7mkmjjVvmBlw&oh=00_Afa4M5n4tOKHlOX_K8eR-oWTNWQ5-2hh2HNXG3AVwvAOag&oe=68C2930D",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/535439559_1331991122115393_3071798792733545042_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqhaHFaR9lCe4KrgnWy9DSlEdpk3Rs_ByUR2mTdGz8HFAGs63Neqxz82tg_nAs0fQIMvVxXlfcsPo7G_4fXx4r&_nc_ohc=Rq-AmECXBp0Q7kNvwEGfYZC&_nc_oc=Adm9C1SEnM-eVFpiflrTmbh5z3MNDcgQmBm_7YMonV8sxti8RJbk5lSKO3xn6WnYq_Q&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=0Vzes0tRSUDJho1kKRGeGA&oh=00_Afa8NXDraJkDWtdDaYLbz3i81bmo6XH7CtiScxuwWEubwQ&oe=68C2648D",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536269619_1331991275448711_7603663378573725252_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrLuw-gWr4q50qqITN0c0ORiSWnKGU8IBGJJacoZTwgE7rtLZghw_EHZT7SqUTFFcwfxhl9aXsGmbrQiochY3e&_nc_ohc=hATlYYrm7SgQ7kNvwGYGXBF&_nc_oc=AdkH5E_L8LHWVJoip3M1rLsJxsPcxZUk4-h3pritw19wXMkoqx_l-nqCJR8V62ZxD-0&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=NFa_-KzlG7u3s6X8EtB_jA&oh=00_AfbwAFO4-b3_CGOtG3MRz1DNIT9OWADTfkqei6nfXLOvSA&oe=68C28ED2",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536280449_1331991278782044_837545730025376205_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGRd1ziYfR28OdEUnCVtpHEFmreHpPw4G8Wat4ek_Dgb2444hkTRs3sHXjdV5F4qZhprlxaudsg_JW7k0cxtel-&_nc_ohc=M81nqWqfW7AQ7kNvwHJCVv8&_nc_oc=AdmbU4fxNEB6QnNYPqd4jJW9QoPZtx3g2tWz3YZeyt4PYHddwwBEFt3HE9vVOnN6vpE&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=MR0rAPd56WPAoVNLYNcS-w&oh=00_AfaFCF0Dz8v5WvPFYctY9OJ0takzG6uudUjryG5BGOqxxg&oe=68C2827D"
    ]
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
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542033234_1344960010818504_8833407585601056846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNIvtnF1NB8YOHiWaAlgvKNTH7-Ibz4Ig1Mfv4hvPgiFkq7HmJWKYgHW5-8KbTM6Z-xg79EgRGsnYYe6_0tqSF&_nc_ohc=DZzLXG8DuJsQ7kNvwHQQlpi&_nc_oc=AdlqX2KFUEH6lozMVTI0A8hvO-InPUhJ4LDdn-jp00IrO-01easMXIFOj8GDd04Y4So&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=1A1jLUWDVmJ_Bj6WioLT_g&oh=00_AfY1FlwnIqPEYNRd9iMHB70D84z3DwrMCZ5ueBlkQVwfwA&oe=68C28607",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542758962_1344960007485171_3546193982049918342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEir8nr4X-IWsPhCjk3gz_4uNzGSGkbW7W43MZIaRtbtRSMd5Jp1bT_2n2lQppD9a1R1IdQ1fjhVt62m58gS0Rj&_nc_ohc=xbDKf0GlJHIQ7kNvwF9EbNI&_nc_oc=AdkZ1iocYCz-_UY5u56Ar6yFIeoK4iFstieglYUrpdWv8oXaPoPXCUxqIycJJ_M8oc8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=cZ1JDGBPX4Ue9gM6nXRsug&oh=00_AfaiMnETILscuEPLKT2RLg_PgzIKdTDNWTL34p6wFJFrUA&oe=68C27922",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536279917_1344960017485170_6150790126962718360_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKdNTUVSlIist9U84v4CFUzOKsGVbf6FvM4qwZVt_oW1d2pjFP6qnrbbb8PwVqxCaJUOAhKyzpvDHrf2KUFMcf&_nc_ohc=PZ0NeFANMZcQ7kNvwF5tlBR&_nc_oc=AdlsQ05Zmt9AhNenSrQfUs_7Zr8BgxnK2yulso6BUFnlmjQi591kSSTIoQeaeH8r9XY&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=FWjNZAqQenNExSDC4iZ6GA&oh=00_AfYu7Jyx96RscLVQrlfeq7W2OIJnddjRF9FoEl-WMyqa5Q&oe=68C284CF",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536273966_1344960030818502_6686354774815336572_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgdTcciOcYJITCGKO4FffhW6P9-swK5mJbo_36zArmYvdoc7BxpY1WPhOXu74XL3rTNBs-XYm42PpHfBzUnQ6z&_nc_ohc=rsJtV6RzJHoQ7kNvwHJrie3&_nc_oc=AdmRic7Eu8hcYP8jPAog-RUhrGd-4Upr6pIgP2L116gCk3uyoJENEBjAMVcVjWzXDeA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=b7RqbScbBLEjTTxUMotBdA&oh=00_Afa5pLBe403oZtYnEY5P8uVWNpxVf3Lf_k1C_Szdki73Vw&oe=68C289E0",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536275113_1344959960818509_2725715572640271472_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFZ4DKUgcV0rQalyaUAT4wZvHJ5HVO2msq8cnkdU7aayrK-a_rCKBm74TJwnoX127FqWUnmSZtWsjACv8IwIWRi&_nc_ohc=PhNwOCSQVFwQ7kNvwFBXhIx&_nc_oc=AdlKmQSekZkxiPdRjbFQAKRGBfG7-W8Ms6vmp9mnb3337XYcwibkEpZHH2nK63TAhCI&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=kOnnvNQpES_zsUFe3o3vYg&oh=00_AfYlMXmWsHvOCmXMruio3yUhjMTFjo3fTuaCWnKp1fPtow&oe=68C28F36",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542401173_1344959970818508_7499106472812024878_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHHpRIOrFnUw3kks9H0FqBJq7uAu6KrIJ-ru4C7oqsgnyuCpUzsk9biyVETfp2QkQTLt0P47NKUkhO-Yj7ZpYpl&_nc_ohc=Si6yBmPiqtgQ7kNvwHF0dK8&_nc_oc=Adlq8sJeicg82jDoLew8HVgjGsyJ7HPfIal_eOaeLL-iGV58y6Fd22DCSD0TvViT5jc&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=STlClhi4MnG-qAf2gNdNhw&oh=00_AfYVC5kMIwkDMLSCP4xYmC_VYmTX-7AihL7JyYENShQRlw&oe=68C28223",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542693392_1344959997485172_7895993102785036459_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHzExVHh8GD-V6BTh6Aq7Vcx50YWtUasG3HnRha1RqwbTm9S-04vY5RtB3BDDtICf_BusRi5Y8B3qii-28v_ZlX&_nc_ohc=fEQNrdXCwnUQ7kNvwE5-ONU&_nc_oc=AdllWQ-Zwr-2sKTFHS_ilhKSlLQyXWHlRX8dWBhoWjmmAGLV6eXDiyRJzXgDFepGpPA&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=gE34PbbvHT_p8rqCItSeAg&oh=00_Afb6HQ0QEyyrFVQFBQjaoRIqF5VyJbssPX9hg9PS77NMIA&oe=68C26E34"
    ]
  },
  // TEMPORALMENTE OCULTO - Sin fotos propias
  // {
  //   id: 7,
  //   title: "Local Comercial en Hugo del Carril",
  //   address: "Hugo del Carril 1234",
  //   type: "Local comercial",
  //   rooms: 0,
  //   price: 500000,
  //   additionalCosts: "IVA",
  //   description: "Amplio local comercial a la calle con gran vidriera. Alto tránsito peatonal y vehicular.",
  //   available: "Inmediato",
  //   features: ["Excelente ubicación", "Gran vidriera", "Salón principal amplio", "Baño y depósito"],
  //   imageUrl: "https://picsum.photos/seed/prop7/800/600",
  //    images: ["https://picsum.photos/seed/prop7/1200/800", "https://picsum.photos/seed/prop7_2/1200/800", "https://picsum.photos/seed/prop7_3/1200/800"]
  // },
  // TEMPORALMENTE OCULTO - Sin fotos propias
  // {
  //   id: 8,
  //   title: "Departamento 2 Dormitorios a estrenar",
  //   address: "Av. Luro 1550",
  //   type: "Departamento",
  //   rooms: 2,
  //   price: 480000,
  //   additionalCosts: 40000,
  //   description: "Moderno departamento a estrenar con balcón. Excelentes terminaciones y luminosidad.",
  //   available: "Septiembre",
  //   features: ["A estrenar", "2 Dormitorios", "Balcón", "Pisos de porcelanato"],
  //   imageUrl: "https://picsum.photos/seed/prop8/800/600",
  //    images: ["https://picsum.photos/seed/prop8/1200/800", "https://picsum.photos/seed/prop8_2/1200/800", "https://picsum.photos/seed/prop8_3/1200/800"]
  // },
  // TEMPORALMENTE OCULTO - Sin fotos propias
  // {
  //   id: 9,
  //   title: "Moderno Monoambiente céntrico",
  //   address: "Corrientes 720",
  //   type: "Monoambiente",
  //   rooms: 0,
  //   price: 350000,
  //   additionalCosts: 28000,
  //   description: "Funcional monoambiente en el corazón de la ciudad, con cocina integrada y balcón.",
  //   available: "Septiembre",
  //   features: ["Ubicación céntrica", "Balcón", "Cocina eléctrica", "Edificio moderno"],
  //   imageUrl: "https://picsum.photos/seed/prop9/800/600",
  //    images: ["https://picsum.photos/seed/prop9/1200/800", "https://picsum.photos/seed/prop9_2/1200/800", "https://picsum.photos/seed/prop9_3/1200/800"]
  // },
  // TEMPORALMENTE OCULTO - Sin fotos propias
  // {
  //   id: 10,
  //   title: "Casa con pileta en Barrio Privado",
  //   address: "Barrio Los Pinos Lote 42",
  //   type: "Casa",
  //   rooms: 3,
  //   price: 950000,
  //   additionalCosts: 120000,
  //   description: "Impresionante casa de 3 dormitorios con pileta, quincho y gran jardín en barrio privado con seguridad.",
  //   available: "Septiembre",
  //   features: ["3 Dormitorios", "Pileta y jardín", "Quincho con parrilla", "Seguridad privada"],
  //   imageUrl: "https://picsum.photos/seed/prop10/800/600",
  //    images: ["https://picsum.photos/seed/prop10/1200/800", "https://picsum.photos/seed/prop10_2/1200/800", "https://picsum.photos/seed/prop10_3/1200/800"]
  // },
  {
    id: 11,
    title: "Casa Quinta a estrenar en Saluzzi",
    address: "D. Saluzzi 3750, entre Robustelli y Alamos de Primavera",
    type: "Casa",
    rooms: 2,
    price: 0, // Precio a consultar
    additionalCosts: "Consultar",
    description: "Casa quinta a estrenar totalmente terminada. Living-comedor, cocina con mueble bajo mesada hecho a medida, mesada de mármol con bacha doble de acero inoxidable. 2 dormitorios, baño completo, entrada vehicular. Aberturas de Aluminio blanco con DVH. Cocina a gas, termotanque y calefactores instalados. Pintura interior y exterior terminada. Lote de 25m de frente x 40m de fondo. Construidos 79m². Amplio lote para pileta o futuras construcciones.",
    available: "Inmediato",
    features: ["A estrenar", "2 Dormitorios", "Living-Comedor", "Cocina terminada", "Baño completo", "Entrada vehicular", "Aberturas DVH", "Termotanque", "Calefactores", "Lote amplio"],
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540441985_1343405600973945_7707959579154835210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJBOYi429roKXqQ55zPphkJrRX5bmH4KQmtFfluYfgjMtlSAl6NliUeO2NTU2irVHDr2eIAsby8hk1qSJxOog&_nc_ohc=KALz53R3_7IQ7kNvwGVVPqa&_nc_oc=AdmAL6yPY4euhQelkyZNDPoQlK8RWWtDJ2lYqEkXQJjpAWfyyZxU4vtH6uZytV6WbL4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=ySEmnHbxxEKOD3faa_3PuA&oh=00_AfaUaZB2O82uOQysfmnXicnVDxX-bhwDL6-4PRblJF66Dw&oe=68C27249",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540441985_1343405600973945_7707959579154835210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJBOYi429roKXqQ55zPphkJrRX5bmH4KQmtFfluYfgjMtlSAl6NliUeO2NTU2irVHDr2eIAsby8hk1qSJxOog&_nc_ohc=KALz53R3_7IQ7kNvwGVVPqa&_nc_oc=AdmAL6yPY4euhQelkyZNDPoQlK8RWWtDJ2lYqEkXQJjpAWfyyZxU4vtH6uZytV6WbL4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=ySEmnHbxxEKOD3faa_3PuA&oh=00_AfaUaZB2O82uOQysfmnXicnVDxX-bhwDL6-4PRblJF66Dw&oe=68C27249",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/541769508_1343405767640595_2352791370626336030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFibVXKPmQp_06002G5OMZQv6C4IeAvN0q_oLgh4C83Sg2S0vrJk8u9reXgxtCkXRmvzl3IOimn7ax3neZ8b1nA&_nc_ohc=qmGKPaA5uIoQ7kNvwE3WG-X&_nc_oc=AdmFTI3dOg9C21a88hDE9vm8vbfAdlwo2a1ylpqIB22mq0_AOZjtlXFe29KBwY57CD4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=IMcV-bA3ZFH4gryOaav7Vg&oh=00_AfZNS40zwfK2b_ni2_ka8M9GLwEMlFhGo7J-hFMgQiOhKA&oe=68C263A7",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542742142_1343405674307271_6174627315937861995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFR2ks9BOV1oF1-L8bHvOuf5oZEdPyoo-PmhkR0_Kij49dUYg5LbuMITY7t3Iz3Acki43jDUHuQl7mFyRpq8Ij8&_nc_ohc=GRplsyrQW1IQ7kNvwH0hlgm&_nc_oc=AdkkAnlR0z2VWleooFi0qmq5_8QXwt0sGoRRI7xzK9vEB1PJGXO9rbrL7GMxzIELl1A&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=N_kCmzmNOc02GzP5xwHu5A&oh=00_Afa2y3R3mZ13MytF1jBzutjM_tWyPXOfKJbKZo-6QmxiZg&oe=68C272F3",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540409071_1343405577640614_607772959583929980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGfIkfBRfrhFvfrs7_x2cvXs-bCrnPMsySz5sKuc8yzJEj7t0nvHnd6qLB3JhRqmm13xx2_fVDuYkLJHDZ7Iq-Q&_nc_ohc=spSIqZ6FTd0Q7kNvwF3iv14&_nc_oc=Adm5dGBSQv5_rdvBuOL4jGNzKKZKH4pmtgCuQFDxMmd9oj6x6esSu5BiFXe2OoJ20cI&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=YSa7b18R1F10FaObSW-I0Q&oh=00_Afam-zwWaIlIaGMvoag2VsdPdUpdpVb4ysqaYKUzqystmQ&oe=68C26CD6",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540216316_1343405604307278_3734581420926797501_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHKh1e7nkflwOJEu9tKxN6GOKbGynxOIQA4psbKfE4hAKG3sBSZQ0-uoapy4QOYrTvK1KW3mP27YDQKXfRMoR5k&_nc_ohc=UTc_KAwRdcEQ7kNvwH2bFwH&_nc_oc=Adl_O7MGABGQJ1PefFUSVLKRKdO5wOlCBYs2At06MBP6W3v08FhUhamCz2gpeat0lyA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=2S-uXL-SGBvBmOMmG_VxwQ&oh=00_Afajm0xasbKaUiRai5QPKKYc30WYFLNpHfvxtFF1Qo9uww&oe=68C26B4E",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540710623_1343405510973954_102063257829044709_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEof9HzO_lvbwY6In2WjWMzcHzR1MfjCaVwfNHUx-MJpar2V1ijxu7gmL8lEutg2RDJQSpk65ro37NZA-R-FkqN&_nc_ohc=CtWk2VKcdTAQ7kNvwEpiKjL&_nc_oc=AdnaZ2MDNAlI6i2I7KVHRzmStUTH33hMkH3JxLZj-VlYpFgTfNG3954txjphZkmyl5s&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=rvtndacdKVRS_OXvts_WNw&oh=00_AfbeEribucXJyZnPVgDSA3nZXXG-eaIfQArRUaCWD5rqHw&oe=68C28AF3",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/541351692_1343405607640611_2167174665157686157_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFrzGvmdogpaSQkP1ZXe9ltuFAy3wsSfLO4UDLfCxJ8syNJM9bAmiZRMocXYzYZBxhvaJOBZ-ZWw1XPv6n-zdYl&_nc_ohc=SJHyF3_gX0kQ7kNvwGJjFGw&_nc_oc=AdkjypO1uFQPrgIBEP41KSrz-KGjCnVVB6fa4On7DIV3CfdAXnpXnbcBO4CV9Ei_4Oc&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=3JmoJvMmqfUxxfLwwNkqpg&oh=00_Afa-_VWaPCC2C_606mEELiw19tPpdeSQIvPFPb-_858BrA&oe=68C291CC",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/539812591_1343405610973944_7279450595412644363_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFXOhZvC-Vchl6d_LFZhpMXTF74VElLyX9MXvhUSUvJf0CW7YHBgJnMBbb51x8sNW0GAxWVJco-nFz2knpMz_4S&_nc_ohc=lR8e2uR8dAYQ7kNvwHP_EAl&_nc_oc=Adm9JR7JVA6aPEK0ER1stcOofiy7wO6AreE6qkn4GA1u7aJGBhKgsYGVCkHQ7chdg2U&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=__DY5sz8bAhC7zGwSpkSxw&oh=00_AfY_ctYEWwWe4ZvjJNE23GX92ZX_rMOQ1BfSKjJBwm4DnA&oe=68C26115",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/540486391_1343405614307277_1733242696024067429_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEXrYWxVtdr6-1HWgZxb9iSScKBcXfMdZZJwoFxd8x1lnPKzXky5pJYlYFVX1FV5q1oKaLVCirAWKasYdNMq4yL&_nc_ohc=TH_Qj_IBvLQQ7kNvwFE7_Gl&_nc_oc=AdlcSr9hBqgmjl6EjtbVXpTNeFjTzew1OTJF_Lcydk5rjIC1urfyxfdZsRR3H6gdMuo&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=sy-pgdtHf9_WeTkwpONK8A&oh=00_AfYks1tLIVLL-PtR7H4fnbqJCQa3qi4mgPnsrjBfyMEdaA&oe=68C27A26",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/541313972_1343405580973947_4265822147427891299_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEeTu-dUohbaQXGFB626t23NE0hwrzXfMc0TSHCvNd8x-X6IllKZhloCu-szt6AHOwPEd3mGWp-lGRdwQ8FS3fh&_nc_ohc=KDQbHHm6CR0Q7kNvwExDFvW&_nc_oc=AdkjmVPK5geR-zrjeRioZqFGNlxQGAvASLZvZjAreYDIv2RIV8vhxXu5BCTSz-L0RfI&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=RHGyKZVIPWbAgLNFGwC8Fw&oh=00_AfZxvO5JQ8x6iczE9zs-Rd_DbvPVneSWCpCcBXx5rSRXAw&oe=68C292E6",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540707532_1343405590973946_8759275852858257174_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFUWPCr8dn4KunDhoXohad1buXVRcrZOdJu5dVFytk50tP2cR1D6o80kZ8NJCr5s_vvdeqf8k7lqJxNbEF_c0qx&_nc_ohc=H8IAuf4FCqMQ7kNvwGO0A74&_nc_oc=AdnmR3kJeMbooCQoeDd6unLcysog0WUUGGnj9fFfOmIOxxtu0a7b6JHO8NQHnUlI650&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=I-UVa2-NU4jAaVdvduvgCg&oh=00_AfbbPyfjE1UgEHJN8s7vHyGPKsyU9q9apjcq0ARqJCtcwA&oe=68C28AE9"
    ]
  },
  {
    id: 12,
    title: "Casa familiar en Giachino",
    address: "Giachino 2172",
    type: "Casa",
    rooms: 2,
    price: 550000,
    additionalCosts: 26000,
    description: "Espaciosa y cómoda casa ideal para disfrutar en familia. 2 habitaciones, comedor, cocina, 1 baño y patio. Contrato a 2 años con aumentos cada 4 meses según ICL.",
    available: "Inmediato",
    features: ["2 Habitaciones", "Comedor", "Cocina", "1 Baño", "Patio", "Contrato 2 años", "Aumentos ICL"],
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/540499866_1339019574745881_8215133824004839314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAp3QGavmroMRU-vazJs2h21Kq7oesU2bbUqruh6xTZtEeirNd8XVnrloXYRVFMQB8segnvwVapbgEzBaKJ3py&_nc_ohc=dQA3OSrd4JYQ7kNvwFMmARx&_nc_oc=AdmxCpjg_ur1VSvd8hNvwDLhwH6euUoh3t-em6dgF50r7vYSniTmml3F13bDHlK9JOM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=QlIehmYjHbBzv7mrl8maig&oh=00_AfZg0a_00chMk0v-Ugrv7x5HF6U6aXt55pMGkxpt3epyrA&oe=68C267F8",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/540499866_1339019574745881_8215133824004839314_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEAp3QGavmroMRU-vazJs2h21Kq7oesU2bbUqruh6xTZtEeirNd8XVnrloXYRVFMQB8segnvwVapbgEzBaKJ3py&_nc_ohc=dQA3OSrd4JYQ7kNvwFMmARx&_nc_oc=AdmxCpjg_ur1VSvd8hNvwDLhwH6euUoh3t-em6dgF50r7vYSniTmml3F13bDHlK9JOM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=QlIehmYjHbBzv7mrl8maig&oh=00_AfZg0a_00chMk0v-Ugrv7x5HF6U6aXt55pMGkxpt3epyrA&oe=68C267F8",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536273025_1339019634745875_2273471591456100468_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQeZulAi1ST1_SIwdUUW8tC0WltzlSgr4LRaW3OVKCvj10fjQwkwpZWuW3jDJ2BtZ2QLZtwNlTGs-Ee0-g82Ff&_nc_ohc=VikZ78n9edUQ7kNvwH0Boir&_nc_oc=Adm4p8olLHHG42iEBjID6ZtoKtgzbfw40kn8SfIFfRE2wvdH3edw1gO9PlITbI2n7-8&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=-t67Me1_lsJFSTpzQmd3kA&oh=00_Afajq5aX8649hahhVyNfEkzA04QHBhvHeh_C7fOuIvUWWg&oe=68C26D3A",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540512794_1339019624745876_226716041700109893_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVgBS4cRzy2yZcRWldzUvAuZ0dloKgrzy5nR2WgqCvPHyj0_fVZgR0Yif8R_PUrP86ZPQb2BLZqmgZkXcvzySr&_nc_ohc=oFDo8Gc1LN8Q7kNvwGt6iau&_nc_oc=Adkdsf9Tihy-zjE3FdbgKc_y0_Y5FqC6ubnk2fr3Ls0XiYtg28WQRWd9u8U8-BDM-vc&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=vEg0TNxpXOvNbvvEVwbfkg&oh=00_AfZoUaCb3wa7X5UOwe7I30-qLaTx4RoCIAAp_sKQmgxwyQ&oe=68C276E9",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/538843041_1339019544745884_5102826057792642656_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHJNYXNtO2RWHpmndR9AwXtj3vFDY1o-MiPe8UNjWj4yPnArjsTLtdHYcP_G9EjhFn4xe2F2qSgRQY0EeXmsmWp&_nc_ohc=tz6_mDjZsRcQ7kNvwHkJ8Oa&_nc_oc=AdltKsnzdvsl0REa3wyGKEvjmb-_3FQiU0nmIE3h7MxNck-t7aU8qwcDkg66tysS36Q&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=gyRu89QKZ5THUjO_WiSWUQ&oh=00_AfYBkrtvzP1fYX-ltotQIvmSJpulfO0sgVp0RaJBETe8bw&oe=68C27A23",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536281561_1339019631412542_7501453953136610356_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGgnsaash1NsOWFkgjldpmIEmHLkLRSD00SYcuQtFIPTZyne482JvAHzn45fF-5-tJXpQnXq1pUFttcySJTUckb&_nc_ohc=vGO1e3p8364Q7kNvwGR3VpP&_nc_oc=Adl5Kk22q0mRe9arJ1EtGHOYAlzDoqaMo0P4hLHsab1MLt4Blv6q1DjvmTVDamw1f4s&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=cOV0tp5BrQvLiPe2QfBTrw&oh=00_AfZVoCaNHFSwgbsIgdZX8HVybw4XNKaiP3VQX8F7E7W0Hg&oe=68C28895",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/539420619_1339019638079208_5002939396322820644_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGFWB9v74KjxuhFCNnkEHKU-6BYX45smgP7oFhfjmyaA4Q6zz8Pc4BeG3o9DWntkG9ueV_uGFo5jIlfRUd-r2Gm&_nc_ohc=nVb98QsARNcQ7kNvwFWpUCP&_nc_oc=Adk3ZOBh0mHVMcTDfyhOoRCR0D6BcoeUCSgxeAXDjhg-NOTATyPelInUnYBBKQnuI0w&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=f6UCI0PhaZVBb38oNiZCFw&oh=00_AfZLBLdEdzE1jIdbpF12fhggs7bntojLXFzdxOOeE3AJfg&oe=68C26A6F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/539207621_1339019524745886_503918382855257426_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF0qU59MeXKPdVqs5YGjBkcIptwMRw-NJ8im3AxHD40n6kG8w3A3oalIGYNxkSMzuqSZPEFiGUTCskApDTiTJtB&_nc_ohc=5tW-AkDyO18Q7kNvwGqTfhG&_nc_oc=Adkbe98ynopAxrtok-obD9QEbrnGTI7B_bcDSXNub-2Yf8MWhZ2x0HBTWLVziZ1W3_s&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=l4hFrXpgfrkyyCbB-eQUdA&oh=00_AfapYp7Rrf7HMK_MD70HhhqNqBhmmGM0iHMW4dJU1rWRww&oe=68C27D9B"
    ]
  }
];
=======
// Exportar propiedades desde el módulo modular
export { properties };


>>>>>>> feature/ferrando-property-images
