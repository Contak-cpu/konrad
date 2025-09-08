import type { Property, FaqItem } from './types';
import { FormPropSaluzzi, FormPropGiachino, FormPropFerrando, FormPropUrquiza } from './forms';

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
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544374670_1347851490529356_1324560712302344304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEA1PxXYKPWlXHDNegg754glBJzxoBTtY-UEnPGgFO1j7qZJGUUh5UAv257rHquRLVHv7FX-BMql3_Mn9LKF17_&_nc_ohc=OLEYq_LLR5MQ7kNvwHUZSWv&_nc_oc=AdkvB9usobMoIG6r-A-diVmaLMthBi7-MMEwOSEk9gQuwMFUMyXR1V-YfHPOem2jEwI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=rIEMOrBZWrJy3pGeNWVqiw&oh=00_AfadvidrH6rR0Q2OE_Nqo9ZPxNpB3BtDLXP2_DoVl9quWg&oe=68C2629F",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/544374670_1347851490529356_1324560712302344304_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEA1PxXYKPWlXHDNegg754glBJzxoBTtY-UEnPGgFO1j7qZJGUUh5UAv257rHquRLVHv7FX-BMql3_Mn9LKF17_&_nc_ohc=OLEYq_LLR5MQ7kNvwHUZSWv&_nc_oc=AdkvB9usobMoIG6r-A-diVmaLMthBi7-MMEwOSEk9gQuwMFUMyXR1V-YfHPOem2jEwI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=rIEMOrBZWrJy3pGeNWVqiw&oh=00_AfadvidrH6rR0Q2OE_Nqo9ZPxNpB3BtDLXP2_DoVl9quWg&oe=68C2629F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542760872_1347851447196027_5490288474808132789_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEUJ0H-KDW8nL5NRMNWZ8AadJLx-O5ZLqJ0kvH47lkuosyq7jxNEQOGGtDDRxgceMLq48CtR92xzRlq_eNKpngj&_nc_ohc=bRpJlzDMFLgQ7kNvwFaNgDR&_nc_oc=Adlo3LgzILikTXymsfyvUscz_LbReFviEKug6LpYkGA9RRC3czDhGu49Q0ieVJUuXOU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=IwIxhloPgUBh_q0zCDJyPA&oh=00_AfYnoWr-HsC-ewtxdserKWJYbYBYipeOd2FDCoa8Yr3Wgw&oe=68C263C1",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542751948_1347851463862692_6810441729937486457_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHvDA2N8_EXwOAXgDYC7d2DDlClDlPChR0OUKUOU8KFHYI3P7mJEORNgvK6G_a7wrKMQP-UaFZ9CqjqhEq-EilY&_nc_ohc=5jpxVrAXtoEQ7kNvwGXVOoF&_nc_oc=AdkgOiKKgQ4-4q9eifBH7ZR9WlWf9ykKWQY_2P2ll0zdspYLjO9mjJRQwEU4x2lG-Y4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=IwIxhloPgUBh_q0zCDJyPA&oh=00_AfZtLzXZ-dtMkS3iuwVXThnaCowwF37uEVdv95k-vSjrew&oe=68C27634"
    ],
    operation: "Alquiler"
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
    ],
    operation: "Alquiler"
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
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540791418_1344964010818104_5654399181896132944_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG0YHEWQUnK3c_j8bDt2J-RTgKI7CpDDZJOAojsKkMNkn2udneLwh59T7uM1ErLygZtdDJXkYrS26AoVCkgUgXR&_nc_ohc=XwLnX49YtcAQ7kNvwFu86yg&_nc_oc=AdlaJ6YqIvyYmCUAdRw_m_v4Oumgp4--jVWqoqYcHYzgiHbiuf0azyAGpL60IboHzV8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QNuwE7uz3r28ezEw98fQNQ&oh=00_Afae9k3jlfmP6vvJcUfO4xvqSEwunZYR0nOE_fiDg9ktmQ&oe=68C28B9D",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542033234_1344960010818504_8833407585601056846_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNIvtnF1NB8YOHiWaAlgvKNTH7-Ibz4Ig1Mfv4hvPgiFkq7HmJWKYgHW5-8KbTM6Z-xg79EgRGsnYYe6_0tqSF&_nc_ohc=DZzLXG8DuJsQ7kNvwHQQlpi&_nc_oc=AdlqX2KFUEH6lozMVTI0A8hvO-InPUhJ4LDdn-jp00IrO-01easMXIFOj8GDd04Y4So&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=1A1jLUWDVmJ_Bj6WioLT_g&oh=00_AfY1FlwnIqPEYNRd9iMHB70D84z3DwrMCZ5ueBlkQVwfwA&oe=68C28607",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/542758962_1344960007485171_3546193982049918342_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEir8nr4X-IWsPhCjk3gz_4uNzGSGkbW7W43MZIaRtbtRSMd5Jp1bT_2n2lQppD9a1R1IdQ1fjhVt62m58gS0Rj&_nc_ohc=xbDKf0GlJHIQ7kNvwF9EbNI&_nc_oc=AdkZ1iocYCz-_UY5u56Ar6yFIeoK4iFstieglYUrpdWv8oXaPoPXCUxqIycJJ_M8oc8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=cZ1JDGBPX4Ue9gM6nXRsug&oh=00_AfaiMnETILscuEPLKT2RLg_PgzIKdTDNWTL34p6wFJFrUA&oe=68C27922"
    ],
    operation: "Alquiler"
  },
  {
    id: 5,
    title: "Piso de categoría en Hilario Lagos",
    address: "Hilario Lagos 365",
    type: "Departamento",
    rooms: 3,
    price: 650000,
    additionalCosts: 150000,
    description: "Exclusivo piso de 3 dormitorios con acabados de lujo, amplios ventanales y vistas panorámicas.",
    available: "Inmediato",
    features: ["3 Dormitorios (1 en suite)", "Vistas panorámicas", "Acabados de lujo", "Seguridad 24hs"],
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540441985_1343405600973945_7707959579154835210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJBOYi429roKXqQ55zPphkJrRX5bmH4KQmtFfluYfgjMtlSAl6NliUeO2NTU2irVHDr2eIAsby8hk1qSJxOog&_nc_ohc=KALz53R3_7IQ7kNvwGVVPqa&_nc_oc=AdmAL6yPY4euhQelkyZNDPoQlK8RWWtDJ2lYqEkXQJjpAWfyyZxU4vtH6uZytV6WbL4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=ySEmnHbxxEKOD3faa_3PuA&oh=00_AfaUaZB2O82uOQysfmnXicnVDxX-bhwDL6-4PRblJF66Dw&oe=68C27249",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/540441985_1343405600973945_7707959579154835210_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSJBOYi429roKXqQ55zPphkJrRX5bmH4KQmtFfluYfgjMtlSAl6NliUeO2NTU2irVHDr2eIAsby8hk1qSJxOog&_nc_ohc=KALz53R3_7IQ7kNvwGVVPqa&_nc_oc=AdmAL6yPY4euhQelkyZNDPoQlK8RWWtDJ2lYqEkXQJjpAWfyyZxU4vtH6uZytV6WbL4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=ySEmnHbxxEKOD3faa_3PuA&oh=00_AfaUaZB2O82uOQysfmnXicnVDxX-bhwDL6-4PRblJF66Dw&oe=68C27249",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/541769508_1343405767640595_2352791370626336030_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFibVXKPmQp_06002G5OMZQv6C4IeAvN0q_oLgh4C83Sg2S0vrJk8u9reXgxtCkXRmvzl3IOimn7ax3neZ8b1nA&_nc_ohc=qmGKPaA5uIoQ7kNvwE3WG-X&_nc_oc=AdmFTI3dOg9C21a88hDE9vm8vbfAdlwo2a1ylpqIB22mq0_AOZjtlXFe29KBwY57CD4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=IMcV-bA3ZFH4gryOaav7Vg&oh=00_AfZNS40zwfK2b_ni2_ka8M9GLwEMlFhGo7J-hFMgQiOhKA&oe=68C263A7",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/542742142_1343405674307271_6174627315937861995_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFR2ks9BOV1oF1-L8bHvOuf5oZEdPyoo-PmhkR0_Kij49dUYg5LbuMITY7t3Iz3Acki43jDUHuQl7mFyRpq8Ij8&_nc_ohc=GRplsyrQW1IQ7kNvwH0hlgm&_nc_oc=AdkkAnlR0z2VWleooFi0qmq5_8QXwt0sGoRRI7xzK9vEB1PJGXO9rbrL7GMxzIELl1A&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=N_kCmzmNOc02GzP5xwHu5A&oh=00_Afa2y3R3mZ13MytF1jBzutjM_tWyPXOfKJbKZo-6QmxiZg&oe=68C272F3"
    ],
    operation: "Alquiler"
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
    ],
    operation: "Alquiler"
  },
  {
    id: 6,
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
    ],
    operation: "Alquiler"
  },
  {
    id: 7,
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
    ],
    operation: "Alquiler"
  },
  // Propiedades para VENTA
  {
    id: 8,
    title: "Lote en Gavazza",
    address: "Gavazza - Lote disponible",
    type: "Lote",
    rooms: 0,
    price: 450000,
    additionalCosts: "Escritura",
    description: "Excelente lote en zona de Gavazza, ideal para construcción de vivienda familiar. Servicios disponibles en la zona.",
    available: "Inmediato",
    features: ["Servicios disponibles", "Zona residencial", "Fácil acceso", "Ideal para construcción"],
    imageUrl: "https://picsum.photos/seed/lote-gavazza/800/600",
    images: [
      "https://picsum.photos/seed/lote-gavazza/1200/800",
      "https://picsum.photos/seed/lote-gavazza-2/1200/800",
      "https://picsum.photos/seed/lote-gavazza-3/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 9,
    title: "Complejo de Departamentos - Perón y Castex",
    address: "Perón 2205 (esquina Castex)",
    type: "Departamento",
    rooms: 2,
    price: 850000,
    additionalCosts: "Escritura y gastos",
    description: "Moderno complejo de departamentos en construcción. Departamentos de 2 dormitorios con excelente ubicación céntrica. Entrega estimada en 12 meses.",
    available: "En construcción",
    features: ["2 Dormitorios", "Cocina-comedor", "Balcón", "Cochera", "Ascensor", "Seguridad 24hs"],
    imageUrl: "https://picsum.photos/seed/complejo-peron/800/600",
    images: [
      "https://picsum.photos/seed/complejo-peron/1200/800",
      "https://picsum.photos/seed/complejo-peron-2/1200/800",
      "https://picsum.photos/seed/complejo-peron-3/1200/800",
      "https://picsum.photos/seed/complejo-peron-4/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 10,
    title: "Casa en Saluzzi",
    address: "Saluzzi - Zona residencial",
    type: "Casa",
    rooms: 3,
    price: 1200000,
    additionalCosts: "Escritura y gastos",
    description: "Hermosa casa familiar en zona residencial de Saluzzi. 3 dormitorios, living amplio, cocina separada, patio con parrilla y garage para 2 autos.",
    available: "Inmediato",
    features: ["3 Dormitorios", "Living-comedor", "Cocina separada", "Patio con parrilla", "Garage doble", "Zona residencial"],
    imageUrl: "https://picsum.photos/seed/casa-saluzzi/800/600",
    images: [
      "https://picsum.photos/seed/casa-saluzzi/1200/800",
      "https://picsum.photos/seed/casa-saluzzi-2/1200/800",
      "https://picsum.photos/seed/casa-saluzzi-3/1200/800",
      "https://picsum.photos/seed/casa-saluzzi-4/1200/800",
      "https://picsum.photos/seed/casa-saluzzi-5/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 11,
    title: "Lote en Barrio CEC - Pestalozzi",
    address: "Pestalozzi - Barrio CEC",
    type: "Lote",
    rooms: 0,
    price: 380000,
    additionalCosts: "Escritura",
    description: "Lote en el exclusivo Barrio CEC, zona de gran crecimiento y valorización. Servicios completos, seguridad privada y excelente ubicación.",
    available: "Inmediato",
    features: ["Barrio privado", "Seguridad 24hs", "Servicios completos", "Zona en crecimiento", "Excelente ubicación"],
    imageUrl: "https://picsum.photos/seed/lote-cec/800/600",
    images: [
      "https://picsum.photos/seed/lote-cec/1200/800",
      "https://picsum.photos/seed/lote-cec-2/1200/800",
      "https://picsum.photos/seed/lote-cec-3/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 12,
    title: "Galpón Industrial - San Roque",
    address: "San Roque - Zona industrial",
    type: "Galpón",
    rooms: 0,
    price: 1800000,
    additionalCosts: "Escritura y gastos",
    description: "Amplio galpón industrial en zona estratégica de San Roque. Ideal para depósito, taller o producción. Acceso para camiones, oficinas administrativas y baños.",
    available: "Inmediato",
    features: ["Amplio espacio", "Acceso para camiones", "Oficinas administrativas", "Baños", "Zona industrial", "Alto tránsito"],
    imageUrl: "https://picsum.photos/seed/galpon-san-roque/800/600",
    images: [
      "https://picsum.photos/seed/galpon-san-roque/1200/800",
      "https://picsum.photos/seed/galpon-san-roque-2/1200/800",
      "https://picsum.photos/seed/galpon-san-roque-3/1200/800",
      "https://picsum.photos/seed/galpon-san-roque-4/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 13,
    title: "Galpón/Local en Circunvalación",
    address: "Circunvalación - Zona comercial",
    type: "Galpón",
    rooms: 0,
    price: 2200000,
    additionalCosts: "Escritura y gastos",
    description: "Estructura comercial en zona de alta circulación de Circunvalación. Puede terminarse como galpón industrial o local comercial. Excelente ubicación para negocios.",
    available: "A terminar",
    features: ["Zona comercial", "Alta circulación", "Versátil uso", "Estructura base", "Fácil acceso", "Potencial comercial"],
    imageUrl: "https://picsum.photos/seed/circunvalacion/800/600",
    images: [
      "https://picsum.photos/seed/circunvalacion/1200/800",
      "https://picsum.photos/seed/circunvalacion-2/1200/800",
      "https://picsum.photos/seed/circunvalacion-3/1200/800",
      "https://picsum.photos/seed/circunvalacion-4/1200/800"
    ],
    operation: "Venta",
    hidden: true
  },
  {
    id: 14,
    title: "Departamento en Victoria 547 - Valmada XIII",
    address: "Victoria 547 - 1º piso (Valmada XIII), entre Pampa y Entre Ríos",
    type: "Departamento",
    rooms: 1,
    price: 0, // Precio a consultar
    additionalCosts: "Consultar",
    description: "Departamento de 1 dormitorio con cochera, ubicado en Valmada XIII al lado de Valmada XIV. Cocina y comedor separados con barra, baño completo. Superficie de 44,08 mts2.",
    available: "Inmediato",
    features: ["1 Dormitorio", "Cochera", "Baño completo", "Cocina separada", "Comedor con barra", "44,08 mts2", "Ubicación céntrica"],
    imageUrl: "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536283019_1337302061584299_5086120838768360356_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjLCm6IFayNzXBX-4u3q2cE1mToHoFfeMTWZOgegV942cBHfugwiGnWzyxcppszYCPgZmL5i-RUKCaqyr6wOfg&_nc_ohc=D_RgULr-DzUQ7kNvwG30qvE&_nc_oc=Adkjy17fbdHmsy6w9CvPa9dXXCoPcSHQW7UPaXeL3RmwdqqsIP_BZq6X3Y-VetiRrKU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=8JVf7ly3n57JEniaTTFu9w&oh=00_AfZBCYAiPPo-yMPt07BPHwDOatoDliPgvDfea_tMFD1ZZg&oe=68C518BD",
    images: [
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536283019_1337302061584299_5086120838768360356_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjLCm6IFayNzXBX-4u3q2cE1mToHoFfeMTWZOgegV942cBHfugwiGnWzyxcppszYCPgZmL5i-RUKCaqyr6wOfg&_nc_ohc=D_RgULr-DzUQ7kNvwG30qvE&_nc_oc=Adkjy17fbdHmsy6w9CvPa9dXXCoPcSHQW7UPaXeL3RmwdqqsIP_BZq6X3Y-VetiRrKU&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=8JVf7ly3n57JEniaTTFu9w&oh=00_AfZBCYAiPPo-yMPt07BPHwDOatoDliPgvDfea_tMFD1ZZg&oe=68C518BD",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536270787_1337302028250969_5182746177742747111_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEgJl-2mACi4sW_U8bT4blVSTCp81gWSh1JMKnzWBZKHfhlFIAS7xfhndiL3sjPN38wbqCtMM5-6vD6hH11i6a5&_nc_ohc=DmT1b19JGSUQ7kNvwHtFi8H&_nc_oc=AdlYpjXmBrsv-aSgtypoHoKXVWEGhj30R_i63txEvD0OcFiA3AEXX7k2DiAWU4E5fe8&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=4P0hXi56mp3xq2_DlcozCA&oh=00_AfaKR6rXHp7tzx-HXqh4N-Kd6IaIc9x2hqEiCVFbGYcirg&oe=68C4FF87",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536268542_1337301938250978_1732495042925829368_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFknkC5mQsJmGSxWA08MEJnADHHuZXzafUAMce5lfNp9SiNK_fZlltcBUTIXa_tmKmdAQ5i6p_ZDUDJjXy8GXyd&_nc_ohc=oI6DXcb4zX4Q7kNvwGyS2ZW&_nc_oc=AdnvsvOpMf6NgMcv-LLP8mN3Xvdly33685e2Q2_jt6mT--4jGPcRu-Qj8bosWENQyVM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=71Ho9YzW-UOTfhZz3AWGdA&oh=00_AfZ6dc8LUGv363h5DkdZqX6tEfxcbzQzt4vioBNHKMQkBw&oe=68C50B04",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536270283_1337301998250972_90259448181881467_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH6TArBisG4tJQWEigR961L0JBEmuX2NXTQkESa5fY1dEQm13EahEzleo9e-bgqD12-hznjvv87K4Lk4iatD5bB&_nc_ohc=hJh8enT6vqUQ7kNvwGebsgd&_nc_oc=AdlGGgLsjvfU4nV7z_HpSZSCpJ0muCqCiV1YtJ4fYeRQtqCgra6WFufG0NqL3YPvKX4&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=fhUv8z2bJbuhbrSgECNXVg&oh=00_AfZnEB8ZufdOz-GMtide-cR25DUT0J6iwZXmJln2IgVZuw&oe=68C52012"
    ],
    operation: "Venta"
  },
  {
    id: 15,
    title: "Departamento en Dante Alighieri 962",
    address: "Dante Alighieri 962 (1º piso) – Santa Rosa, La Pampa",
    type: "Departamento",
    rooms: 1,
    price: 420000,
    additionalCosts: 42000,
    description: "🛋️ UN DEPTO PENSADO PARA VOS: cómodo, luminoso y bien ubicado. ¿Andás buscando un lugar lindo, práctico y en un barrio tranquilo pero cerquita de todo? ¡Acá está! ✨",
    available: "Inmediato",
    features: ["Cocina-Comedor con barrita", "1 dormitorio con placard", "1 Baño", "Espacio compartido tipo Solarium", "Amplio patio de uso común"],
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536267588_1332866812027824_6722370069523970182_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfbpsERRtVqN4MlZRACMmcUzLUepnJ3udTMtR6mcne5xfLPe6b52c7uS7ZtB1DxcNMI_OcYDix5BIqFPDNf7pK&_nc_ohc=79z_ac_7IAwQ7kNvwHahOF-&_nc_oc=AdlPRbGzAeXm-FMT9lSI713S2v_4YjavtREAdZHbbmqUw4wb79jmJXiDVETcZP1Yozo&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=8ye-ijF7A1uwDeB_jZGU1Q&oh=00_AfaCBI1v9qf8GSeiFiqLLhgEHtN3waHEQz6MbOfbyeQKNg&oe=68C518A3",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536267588_1332866812027824_6722370069523970182_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfbpsERRtVqN4MlZRACMmcUzLUepnJ3udTMtR6mcne5xfLPe6b52c7uS7ZtB1DxcNMI_OcYDix5BIqFPDNf7pK&_nc_ohc=79z_ac_7IAwQ7kNvwHahOF-&_nc_oc=AdlPRbGzAeXm-FMT9lSI713S2v_4YjavtREAdZHbbmqUw4wb79jmJXiDVETcZP1Yozo&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=8ye-ijF7A1uwDeB_jZGU1Q&oh=00_AfaCBI1v9qf8GSeiFiqLLhgEHtN3waHEQz6MbOfbyeQKNg&oe=68C518A3",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536272783_1332866805361158_2843812812610045580_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF073-pvAYwFHlRpqZeLxax7xhLqyv6kcvvGEurK_qRy7jiT11AeabCtlgVu4jC2n_9-FL2qq3TcmTM8Y10FPuG&_nc_ohc=1Y1P_5aoq0MQ7kNvwFDKzrC&_nc_oc=AdlrMmLV1-hwnPj-5q4F9tRnXuk-IxSj2GtE3LU1TFo1KQbkS04dl-oJITZYVhU_3LM&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=VSgpXpgdJRz-Wv8pORYzaA&oh=00_AfalzVwKG_lK1R2VChTEl_0PI7XfKLHicY1yO44Mm4T4Ag&oe=68C52340",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536278286_1332866808694491_3853881411105503813_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFqtFWDDaqa13jIzKiHDJX6aDI3VnQW1-JoMjdWdBbX4hPyeNwvaVxD4K4KYv8mi-z4ctoN0YVGtckME88BfmZH&_nc_ohc=GtB32fzg5MAQ7kNvwFNXLcU&_nc_oc=AdkfOjXJrO_BqI_0QdG_VWnXSSAFyr0ka1sQ39oOYW1N1ZWTtv1m8cU_--LG7shPDwM&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=9r7TbubQA5RG1tRbepqPqg&oh=00_AfZdwihuQ2KFrKKjpJwYKsGCDA8rOb9T2pffkcTnilEsJg&oe=68C5154D",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536279490_1332866898694482_6622656675897867860_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFX7Kc7LlzEgZn_LMoAQXqitGT8a1c5NL60ZPxrVzk0vkqjrBF21hUM9fh72-tDuIBfGCbgweWydGyprK0LOOLD&_nc_ohc=LWPF8XGOxH4Q7kNvwEvNU_d&_nc_oc=AdkbqHRUVPLLyG7A5KNQqdFxJDOBvFItxaZWGal5TAfIEF_pQUtFmuvEvIQOGybAfwM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=wNdFlGtIPwK0Ps3643zrvg&oh=00_AfZfKBBTtSUElzR7bDB5pqabX7Q9SOMHQ5aLbI0ouj_p3A&oe=68C50B04",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536231595_1332866902027815_5477938214556973409_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeErZc3h0reDnSTTZX9BRDpunFUuHFxSBQmcVS4cXFIFCQNvkLb4MFmY9j2cyt3qTZN8IZ16Y3hFEFYLUAuvINhZ&_nc_ohc=VPGkrHLxbeEQ7kNvwHb5Q9f&_nc_oc=Adm7KFM4362XjFLnBBhCizejZFZNFcSJ54jlVTVpOPHGOsnRfJqA-6Monn8-r2fQ2gw&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=f666j5suHNd9vVy7urxVEw&oh=00_AfZugLErLEi72PGSKjGTivnvLuxy6Zqo4eQgCeXrX-wb6w&oe=68C52715",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536276148_1332866882027817_7952956130521106303_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHKqVoR308ijgp_Nq4Z2quqs9s-CCDzKiez2z4IIPMqJ7X99WnXbwv_KfFi8IXH5NS5WJX_78FsSC2yDucuN35P&_nc_ohc=heYQg8rTvFQQ7kNvwEO0TKR&_nc_oc=AdkDpvPRG9vCh9guweaWCg9g5EkKIzamOb4BeWyCgwtGTck1Aub5VDfidH-TERIoE3g&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=EDzsffswrdL-uVApUksxtw&oh=00_AfbK6QiK6SxMDVMX9cWjyk8nW8lTmPwMWGMA0giVUM6y_g&oe=68C50E7F",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536267680_1332866978694474_5649760895415254119_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGLHPL8mKOqklQX8TEu5HTWm-ts04Q1jAqb62zThDWMCtSBo2exxWqu3U1eQ6sNVLpPE407OYRzOXNX-HPsUXgT&_nc_ohc=7Hhcc50X9dUQ7kNvwFI03oj&_nc_oc=Adk6xhRxWG7I_38e657xEioaDl61lr99uKcnTfkStd_5d-qJLc6FXcyNnoqk_KJZ0pg&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=Yd27VzDG7EX4yWN0Uj2Qvw&oh=00_AfYK31lqgBsYVuJH2RYxW6nSOZhaX4Ucg_eRsG0guvEJWg&oe=68C5056C",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536286129_1332867008694471_5239029335083249821_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEbC7eZAq6tqGPf5-dJO8DqEMx7Fq_PObsQzHsWr885uzk9yo6Mj5lCKAWaWlmjTnpf3-GIgNx2YPUfGoqE0kLD&_nc_ohc=vVNkf5mI0_4Q7kNvwElrElf&_nc_oc=AdmKoIX8gK74uBalnb8P5b4wCEJUugyZkSRnAMAVxzAc3NUhPLvNPOKcEg7YqB5GDz4&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=QG8xizNUXfD7IHJREJoj7Q&oh=00_AfaPq6UM2VGBGVTsh_2ZvgH5_XgzZrNtRBk3Vz4tEPxHXA&oe=68C52888",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/536270075_1332867018694470_3613894975965472496_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGxq6lkZO7dl8COSnuUX8xwTo9JdoOhUtJOj0l2g6FS0gIKTGCht_v6myHjrEl45RccxFenTsFDLoJDjGHsldCp&_nc_ohc=p8La6BdpHOIQ7kNvwHu_KEy&_nc_oc=AdmzFIFpgW_qM_XHTDRE-PxdgOB1989a_-qyc_HJGdFzT1byigHl9X6Y6mOaXhiOS1Q&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=xiAe2MZczNJKAtuB0pRTVw&oh=00_Afaxka14pjNo3MzzTBrBEiNuYTVhtY9MUaMNT6VYlkKgvA&oe=68C51B27",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/536272913_1332867102027795_2673191157628503890_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHgIpp-MC_IqKsPBltUR8p6wXDgjuu5Pz3BcOCO67k_PcX9TRKFPFF6GYZBf6vA6BwauPtOMZmFUxvjpU8jjTpG&_nc_ohc=em754hyjG7IQ7kNvwEg3WjP&_nc_oc=Adk1iHkoWNLj4upltc-_8Ma6CNRkTXyYkVLJU9Zh1-9sPAQpJqRHxhfcMaGD87RwETM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=RhRqgyo-5dyseYk5IanGHQ&oh=00_AfYzCMFITLiRxoaEyKAR8O-pbEzHiynKkrgLJUbsA52m-Q&oe=68C50D5B"
    ],
    operation: "Alquiler"
  },
  {
    id: 16,
    title: "Departamento en Venezuela 1384 - VENTA",
    address: "Venezuela 1384 – A solo una cuadra de la Circunvalación",
    type: "Departamento",
    rooms: 1,
    price: 0, // Precio a consultar
    additionalCosts: "Consultar",
    description: "🏡 DEPARTAMENTO EN VENTA ¡Oportunidad ideal para invertir! ¿Buscás una propiedad para generar renta inmediata? Este departamento de un dormitorio lo tiene TODO: ✨ Dormitorio con placard y calefactor, 🍽 Comedor súper luminoso, 🫕 Cocina con salida independiente, 🛁 Baño completo con bañera, 🌿 Pequeño patio de luz, 🚗 ¡Con entrada vehicular!",
    available: "Inmediato",
    features: ["Dormitorio con placard y calefactor", "Comedor súper luminoso", "Cocina con salida independiente", "Baño completo con bañera", "Pequeño patio de luz", "Entrada vehicular"],
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/524340997_1310174820963690_626939468754109958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG2oeShJbpwUzzEYr2ga3wHfPCoWM6qjMt88KhYzqqMyxTQj-tREKIZW3NzvUCH6gFCkhdN2NW4bpyqIRfdK5jz&_nc_ohc=bORUCIWsA_gQ7kNvwFjLEAZ&_nc_oc=Adlt6Ey1JUgEtB9HUqm983ykwMMuRXHkhRXuEZqZ2-2lLwvLIRDg3dtj0FjszCj3hZ0&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=fZm8aEb-7gnFl4uTiReAFQ&oh=00_AfYhaaRtL_i-bGfgfzCgIHgz4MEemtfAeHYxNSZTSOVX8w&oe=68C5035B",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/524340997_1310174820963690_626939468754109958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG2oeShJbpwUzzEYr2ga3wHfPCoWM6qjMt88KhYzqqMyxTQj-tREKIZW3NzvUCH6gFCkhdN2NW4bpyqIRfdK5jz&_nc_ohc=bORUCIWsA_gQ7kNvwFjLEAZ&_nc_oc=Adlt6Ey1JUgEtB9HUqm983ykwMMuRXHkhRXuEZqZ2-2lLwvLIRDg3dtj0FjszCj3hZ0&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=fZm8aEb-7gnFl4uTiReAFQ&oh=00_AfYhaaRtL_i-bGfgfzCgIHgz4MEemtfAeHYxNSZTSOVX8w&oe=68C5035B",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/523983137_1310174910963681_8817779400911878967_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGXnxLY_mC6HbexnI9D9OLYK6rFT3q1wlArqsVPerXCUJziWNpQ71SzWm5WzmJmOxAx5oP62SojeTbcuFs-ayuH&_nc_ohc=CerH3URsxG4Q7kNvwHyKBCC&_nc_oc=Adk2-GvMd3PnhRY6qVrgoEM36k543bcGXhrTDDBLeJtTBlIiI9KNpXrZQX2hYP5CI7Y&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=RSTUO2TnDI8fhw3RJaHKRw&oh=00_AfYIw-CIH8j-s2tNeZLGhhxVpZJEjLvAo3cGqrwNMLwbkA&oe=68C51265",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/524458013_1310175030963669_5349876881473809034_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKJvVLHX0s3REsMIkoBv_z27dhK40c0n_bt2ErjRzSf81TVkSgRcXRNfa_FQkBEPBUCUhQB9Il8SFkOEb-ihBW&_nc_ohc=aWHHfbbaaZQQ7kNvwHerynd&_nc_oc=Adllmzq8P0zHL_K9GLSfI0DY8IFOgEiwCo-Alh5IKbNrFgEVaqizIXqpwLdQBYwuk04&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=-hRl2BrGmsprfxEIP33dog&oh=00_Afb4qxDvill1jeHSdbbuM6gsClg8lak2SZfB7JsWYg_5TA&oe=68C51DFA",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/524120444_1310175130963659_6668125464167804766_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEKWJXYu1i94gKPUWVWJfhpUR_YDXMOxOdRH9gNcw7E59mNxxfGo-kHl7oNy4D5d8dE2IPCMnft76IolPHUv4ro&_nc_ohc=vmn-J7XoEjoQ7kNvwG6Y7iX&_nc_oc=AdkqWTiu1jc0LOhuxjYrSpNEXmKEJaJflVnhvYQ4IANbza0RNu15DMZnv2MqcDejNXE&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=-eeNxIA4BPjl9s409EocxQ&oh=00_AfZyADQ8YD6ZsN5iqdAiqj9mR9s700d9LikkT7Ks3_AWBg&oe=68C52062",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/523835476_1310175217630317_2800257046081490504_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIBodoM8LBFngv005vgbfrBBKNY5dM-AMEEo1jl0z4A7zlUhbPFtrAizv2AIk6FprCX4YfO1jEy1jjDvV0aEUA&_nc_ohc=XG5aGSE04iwQ7kNvwFWRcq_&_nc_oc=Admuzf40SEpKgK3RcKlcpTWPDhVP8Jgo6OhShHSd8MC2W5_PY1MGqK1fKZsj9Nk_5wg&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=wFznWx9kYBRfDzUSOspXig&oh=00_Afbkd76wi-QvkC6x-TNrk_jP4FTBdfgA4g2zpSYZ4xKDiw&oe=68C52448",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/523948688_1310175414296964_5414849190434708938_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEL83mIekXH0m4F-VU0yUU6yVf-NENUMpzJV_40Q1QynKJgKuKDuHMCTAuGikK4tb1ibukuBi9VGQ-mAo4sLC_u&_nc_ohc=_9zDut_whdgQ7kNvwEgubZt&_nc_oc=AdlCmUKcxmWZFNkrgL4Hxk6pyeWGCfm87kGxq1d_Zk55HsW85d5Quxcbfw7NTSNovEA&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=7y_NPvsjX-0a79HyDCPgog&oh=00_Afby5MHb2BfxCdnrilytTwADyPUxGN8AVojTaXR9-QjCLQ&oe=68C51783",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/524057383_1310175534296952_7284467069280680801_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHl8DI65hgNe3Odh2ffYFHTxUemnNXXeArFR6ac1dd4CsHWVu3aXW78q86chLiCRAG9iev1p-lWm2OvyW-5AMMP&_nc_ohc=WXt5b_Zvw9MQ7kNvwErvqcd&_nc_oc=AdkERFfdoWtgbSZwScYJCwwRzbjB4ylgRKntT09Nq6N0NZF32HfwFGRC3yeXoa-Flbw&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=TcKkZm1rY4dxlB0311YCOg&oh=00_AfYjn0H_75fjX1wwqy0OQcGDXxfM3XHAvIeKdhH_1yO-1w&oe=68C537DE",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/523137581_1310175604296945_576322727695194617_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGlg-x3UYAeRKkwkPMNO6N7FaIKJOSIX1MVogok5IhfU1Kt7yhBgUL-fs9NxuYYQb7eRx8wUpxTijfSldmI38d4&_nc_ohc=fZY-mlM2zpgQ7kNvwHrPYfV&_nc_oc=AdnQ0f63NO0WHAIqtE3HsRC7xI3zkaU4kF8I7cU8kmbpM-uZe_dSSw6Ua9JRJcn7ScQ&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=DCWxDPhcwT4P83k5LLM9Zw&oh=00_AfbkG_2RVojMKn1JY439I_TtsiZZWXTlL1Th6K9-xDMWWA&oe=68C52493",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/523407320_1310175680963604_8391817150048057033_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGSwpxcttkuRfaO_gU9jmPmTXnBEQ1OM_hNecERDU4z-Pd0_9yi9NjhbmHS4pnLbOnJJ0aMJpIrDm7maAJNT3Ex&_nc_ohc=A1RUMFSM7d4Q7kNvwHk0wlf&_nc_oc=AdkB0oYpmm4UKbk2P42OwMCjkIWnslLDDc62IWBG0yYofS34MBH4qSmQpPq2xxo5L80&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=0bFEv-i5voc_vxbFt_LbZg&oh=00_AfZXHbXCCpQoMgp_q7C53503xLlN_ECg-nAekQTGfcpTDA&oe=68C537D5",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/523365901_1310176160963556_4102445350310326645_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeElHEfRfkHPlGtlGRDaF3Aj64bOC8ONYcfrhs4Lw41hx1C67kT9W39DQ-RQ4WDk8e3-XOBij4Zm4NzfwIMfqZBX&_nc_ohc=8j_PL8FVo6cQ7kNvwHB6M5x&_nc_oc=AdkhtiOj2zYu15wZUyP4sPYmJXRd_MNGlyb658i69BevJkUt0OqgHF4RcRjJAQb78ZI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=_E18cdfr-Ag3v5mOeUjANg&oh=00_AfZopntN2QnWHmCLpYnFf_a6VB6bHFM0ZrZ800s_vF4Ouw&oe=68C526A2",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/524669353_1310176224296883_5642670975240621186_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE6Auv-f5b7iNmF6r4Yb41iu_9LVmpDj1y7_0tWakOPXN7YLC1JEBlcBpp_H1snPlAi1GTT7Z5ho6EAaV-DPAF3&_nc_ohc=KljpS6a2hkYQ7kNvwEBHt5g&_nc_oc=AdlAut8wZs8JLGox1bjlN7PaXuK7H2hiLzUTvh6mi6kcp2DNHqDeclAOAzx76jeGfnA&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=wYHVipoKZ-tTjgrDW2WYjA&oh=00_AfbVCnp_Nqi129C-R9gasj8rZuBaJga2G9XvadEnpEvGmw&oe=68C50DFE",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/523373332_1310176294296876_78759035003157388_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGqnifQha30_NDy6cDoAPedsUCyNSHgy6OxQLI1IeDLo8VH2JhWNEbJswBKRjSqncAo0dF1CakS-aXemL4igbKQ&_nc_ohc=hI7OErXeRHsQ7kNvwGZGxHJ&_nc_oc=AdlrwpJNquEw3TW5UwZ8OuIVgbj2gGSM8GyQyPTfTDzZVzhN2UcTyllXQexz9pE1UCQ&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=iFtV3qjjVxtPA7O5uynv9g&oh=00_Afb953si_-pfT7maJGElwwjPl_3EQugv3PKca-SaQjCuKg&oe=68C52331"
    ],
    operation: "Venta"
  },
  {
    id: 17,
    title: "Departamento en Beruti 361 - ALQUILER",
    address: "Beruti 361 (entre Pueyrredón y Córdoba) - Villa Alonso - Santa Rosa-La Pampa",
    type: "Departamento",
    rooms: 1,
    price: 320000,
    additionalCosts: 25000,
    description: "🎉 NUEVO ingreso en ALQUILER !! departamento interno de 1 dormitorio! 😉😍 Cuenta con: 🍳 Cocina-comedor, 🚽 Baño, 🛏️ 1 dormitorio, 🚽 Toilette con conexión para lavarropa, 🧑‍🤝‍🧑 Apto máximo 2 personas adultas",
    available: "Inmediato",
    features: ["Cocina-comedor", "Baño", "1 dormitorio", "Toilette con conexión para lavarropa", "Apto máximo 2 personas adultas"],
    imageUrl: "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/518306443_1301220661859106_3385162403778623693_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHbl-EPv2zdam1Yuy5a5G_-otwUAqCcFgai3BQCoJwWBkli2c1p51-Tg0SVrWVRDAc_D_S9tQFXD-m94jOHEpWL&_nc_ohc=zWBivaz9vowQ7kNvwENzuja&_nc_oc=AdnvpsgZ1xTWqhntqpdUG-l4m5H7oKNi5P05-cu5tpIuy_LfDX-LrB9-jSx44KU-jxM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=HnBP4HTkspwpQQcidlmH2A&oh=00_AfaRJBZdDt1HXCXkcFbKsPbeSZ6xYgjn3Uweyns-xnLV8Q&oe=68C52D0F",
    images: [
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/518306443_1301220661859106_3385162403778623693_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHbl-EPv2zdam1Yuy5a5G_-otwUAqCcFgai3BQCoJwWBkli2c1p51-Tg0SVrWVRDAc_D_S9tQFXD-m94jOHEpWL&_nc_ohc=zWBivaz9vowQ7kNvwENzuja&_nc_oc=AdnvpsgZ1xTWqhntqpdUG-l4m5H7oKNi5P05-cu5tpIuy_LfDX-LrB9-jSx44KU-jxM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=HnBP4HTkspwpQQcidlmH2A&oh=00_AfaRJBZdDt1HXCXkcFbKsPbeSZ6xYgjn3Uweyns-xnLV8Q&oe=68C52D0F",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/518390629_1301220648525774_1243774694675677454_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHwDsdQ2uMnWNvQRA6TbDD2wg2N6h41euPCDY3qHjV645IIpCWdENo95k6douNF7I-Rd4zMM-aTvIKhpecYsD6x&_nc_ohc=EscFND5w_uEQ7kNvwFUqccM&_nc_oc=Adl-nPm_xUuDyRgHr_DkVhxL9biiNC0gTk4B9ywFPCmgTp4VotF852EDH80-vxAcxTM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=81bcdlY7KyFPgaRN6b2HHA&oh=00_AfZZfXYbjquAPUAraXlyOIVN2NiLqifvLIuvuscfdQ951A&oe=68C50468",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/518254703_1301220651859107_3324044816031886151_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHMi_Pv_LX5qhSx1GpbVpvM0HE-vgrmb5HQcT6-CuZvkRLVGWF45-vRwvqPbMCxvGZdDGoufov_wyW1EZ6J_7ob&_nc_ohc=Ki_S5oOTwvIQ7kNvwFhzOoq&_nc_oc=AdlOHsCaMnYl4Xu2WQfDY03DhAkwxumE45lvNPGwCZ3Lhn5Md0Ijmj0pR8-6SpE_p14&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=23FkxbEtAyRBo6tyttXPCQ&oh=00_Afa1UtEqXQb6-cjWwpmLpsLyg_csm0yh04jYx2Xr3flZNQ&oe=68C528B0",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/518357899_1301220725192433_783819304574891077_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFttm1i7XRnOV46zPQqULkl--4mBgjsYwr77iYGCOxjCl-ms9Yk2roD-toSOo0ng1PFyVdAfiizYDSIfbX047NM&_nc_ohc=MfC1sab0cuIQ7kNvwHhY6SG&_nc_oc=Adm7pC46O4opi15epS46wmx3d2y9nGQlIZE6C29XCi10wRx_xeCKrvlW1TRmTGLEtrY&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=9QQxj-7uBd8FLRsnCeYWGg&oh=00_AfbZyN2IvDe7tvOFreYdy5vjuKeuVP5MIviyOMad08nkzA&oe=68C52963",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/518340497_1301220731859099_2142692838163011077_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGnnc1QYpP6-DZ-v8i0xPwhkWAhoGD5qEyRYCGgYPmoTHM6KxKSEKiWIAl2BGPJfjDSVfKbOnkU6Ubj9UBps8iy&_nc_ohc=KYwr_QdvXmgQ7kNvwG-jO2z&_nc_oc=AdnxelJ9VXcAK3fsna-O0XqoKdrlXQlqT4zBuOBLB2sWAWvItITyGIXPKwYRIt5H-So&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=AVHvufc5xI3o50bzf4phaQ&oh=00_AfY3gZ98S0QYK6SYHE4Dhlot3KVb2FnRaCejg5OJD2PhCw&oe=68C53125",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/518323305_1301220745192431_862515563252317111_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHYG-mewPeH-c5FcVFWhhlkHXlh8IkV8hYdeWHwiRXyFo1gvnOOvDYNciZnVeFd84sgrueuC1aa8HlPJAlTepBu&_nc_ohc=5j60Yo_s4lwQ7kNvwEcK_q3&_nc_oc=AdmIcSOkHDJt3W0CpDbHJLNg40at_n81z8IQR9uu2Ilr-TjAJGQ6CcmTzcbvaSADexI&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=AWIZFna6GRu0-nxov2fEHw&oh=00_AfbOqFKLHnLePTieG6xv3ZsqzeMHDfDhZI6BMSeZwr_qjQ&oe=68C53327",
      "https://scontent.fcor2-1.fna.fbcdn.net/v/t39.30808-6/518399340_1301220808525758_9161417100644785374_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHC_f8yde8Fc0HY6w9ExH_lYQNA38wLHWFhA0DfzAsdYTyBiFSgnwJVTj4Tlc-rub6F4CWOBJ2M04xDHaf79UJK&_nc_ohc=0EFolpvyEG0Q7kNvwE7V7eU&_nc_oc=Adl0m12pBp50CLwkevZm_kb1aSI9D3uqbcKaWADHM5VOwkyoppsE6ggn0cx6Wv1TrFE&_nc_zt=23&_nc_ht=scontent.fcor2-1.fna&_nc_gid=UBxiueSRelI1OhXcB9gksg&oh=00_AfbFZPNSh0iAYRX54R5GycjGv0NLmflhmlOQfkDGHd-qrQ&oe=68C51F1E",
      "https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/518396009_1301220821859090_5365154319139235114_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFamdjJL2-SB5wtvDB3zmJeajmEL4Hm6VhqOYQvgebpWFnFmN4CBdnryqsOr__bAhaCUNjgjKw4z2Uoo-As8F82&_nc_ohc=QnNu-udr830Q7kNvwGznaD7&_nc_oc=AdlWXzPiczNvk-7mHod80-JQyp0Sc75133W2selpsEzNeDJDyoIE8jVOUKQ30O2gWRM&_nc_zt=23&_nc_ht=scontent.fcor2-2.fna&_nc_gid=OfbH65WpweR4D-lb4-28gA&oh=00_Afbnd5FAC6NeqNjwV92qYItxzgrovtTY195gJDfrnJwWJA&oe=68C5086F"
    ],
    operation: "Alquiler"
  }
];
