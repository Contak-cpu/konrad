import { z } from 'zod';
import { 
  TipoPropiedad, 
  EstadoPropiedad, 
  Moneda, 
  EstadoConservacion, 
  TipoConstruccion 
} from '../types/propiedades.types';

// Schema para FormProp1 - Información Básica
export const formProp1Schema = z.object({
  tipoPropiedad: z.enum([
    'Casa', 'Departamento', 'Monoambiente', 'Local comercial', 
    'Oficina', 'Lote', 'Galpón', 'Casa quinta', 'Duplex', 'Penthouse'
  ] as const, {
    required_error: 'El tipo de propiedad es requerido'
  }),
  titulo: z.string()
    .min(5, 'El título debe tener al menos 5 caracteres')
    .max(100, 'El título no puede exceder 100 caracteres')
    .trim(),
  descripcion: z.string()
    .min(20, 'La descripción debe tener al menos 20 caracteres')
    .max(1000, 'La descripción no puede exceder 1000 caracteres')
    .trim(),
  estado: z.enum(['Venta', 'Renta', 'Vendido', 'Rentado', 'Reservado'] as const, {
    required_error: 'El estado de la propiedad es requerido'
  })
});

// Schema para FormProp2 - Ubicación
export const formProp2Schema = z.object({
  pais: z.string()
    .min(2, 'El país es requerido')
    .max(50, 'El nombre del país es muy largo')
    .trim(),
  estado: z.string()
    .min(2, 'El estado/provincia es requerido')
    .max(50, 'El nombre del estado es muy largo')
    .trim(),
  ciudad: z.string()
    .min(2, 'La ciudad es requerida')
    .max(50, 'El nombre de la ciudad es muy largo')
    .trim(),
  direccion: z.string()
    .min(10, 'La dirección debe tener al menos 10 caracteres')
    .max(200, 'La dirección es muy larga')
    .trim(),
  codigoPostal: z.string()
    .min(4, 'El código postal debe tener al menos 4 caracteres')
    .max(10, 'El código postal es muy largo')
    .regex(/^[0-9]+$/, 'El código postal solo puede contener números'),
  coordenadas: z.object({
    lat: z.number().min(-90).max(90),
    lng: z.number().min(-180).max(180)
  }).optional(),
  zona: z.string()
    .min(2, 'La zona/barrio es requerida')
    .max(50, 'El nombre de la zona es muy largo')
    .trim()
});

// Schema para FormProp3 - Características Físicas
export const formProp3Schema = z.object({
  superficieTotal: z.number()
    .min(1, 'La superficie total debe ser mayor a 0')
    .max(10000, 'La superficie total no puede exceder 10,000 m²'),
  superficieConstruida: z.number()
    .min(1, 'La superficie construida debe ser mayor a 0')
    .max(10000, 'La superficie construida no puede exceder 10,000 m²'),
  habitaciones: z.number()
    .min(0, 'El número de habitaciones no puede ser negativo')
    .max(20, 'El número de habitaciones no puede exceder 20'),
  banos: z.number()
    .min(0, 'El número de baños no puede ser negativo')
    .max(10, 'El número de baños no puede exceder 10'),
  pisos: z.number()
    .min(1, 'Debe tener al menos 1 piso')
    .max(50, 'El número de pisos no puede exceder 50'),
  antiguedad: z.number()
    .min(0, 'La antigüedad no puede ser negativa')
    .max(200, 'La antigüedad no puede exceder 200 años'),
  estadoConservacion: z.enum([
    'Excelente', 'Muy bueno', 'Bueno', 'Regular', 'A refaccionar'
  ] as const, {
    required_error: 'El estado de conservación es requerido'
  }),
  tipoConstruccion: z.enum([
    'Ladrillo', 'Hormigón', 'Steel frame', 'Madera', 'Mixto'
  ] as const, {
    required_error: 'El tipo de construcción es requerido'
  })
}).refine(
  (data) => data.superficieConstruida <= data.superficieTotal,
  {
    message: 'La superficie construida no puede ser mayor a la superficie total',
    path: ['superficieConstruida']
  }
);

// Schema para FormProp4 - Precio y Condiciones
export const formProp4Schema = z.object({
  precio: z.number()
    .min(0, 'El precio no puede ser negativo')
    .max(100000000, 'El precio no puede exceder $100,000,000'),
  moneda: z.enum(['ARS', 'USD', 'EUR'] as const, {
    required_error: 'La moneda es requerida'
  }),
  gastosAdicionales: z.number()
    .min(0, 'Los gastos adicionales no pueden ser negativos')
    .max(10000000, 'Los gastos adicionales no pueden exceder $10,000,000')
    .optional(),
  gastosAdicionalesDescripcion: z.string()
    .max(200, 'La descripción de gastos adicionales es muy larga')
    .trim()
    .optional(),
  terminosPago: z.string()
    .min(10, 'Los términos de pago deben tener al menos 10 caracteres')
    .max(500, 'Los términos de pago son muy largos')
    .trim(),
  comisiones: z.number()
    .min(0, 'Las comisiones no pueden ser negativas')
    .max(100, 'Las comisiones no pueden exceder 100%')
    .optional(),
  comisionesDescripcion: z.string()
    .max(200, 'La descripción de comisiones es muy larga')
    .trim()
    .optional()
});

// Schema para FormProp5 - Servicios y Amenidades
export const formProp5Schema = z.object({
  serviciosBasicos: z.object({
    agua: z.boolean(),
    luz: z.boolean(),
    gas: z.boolean(),
    cloacas: z.boolean(),
    internet: z.boolean(),
    telefono: z.boolean()
  }),
  amenidades: z.object({
    piscina: z.boolean(),
    gimnasio: z.boolean(),
    seguridad: z.boolean(),
    ascensor: z.boolean(),
    balcon: z.boolean(),
    terraza: z.boolean(),
    jardin: z.boolean(),
    parrilla: z.boolean(),
    garage: z.boolean(),
    cochera: z.boolean()
  }),
  estacionamiento: z.object({
    cantidad: z.number()
      .min(0, 'La cantidad de estacionamientos no puede ser negativa')
      .max(20, 'La cantidad de estacionamientos no puede exceder 20'),
    tipo: z.enum(['Cubierto', 'Descubierto', 'Mixto'] as const, {
      required_error: 'El tipo de estacionamiento es requerido'
    })
  }),
  areasComunes: z.array(z.string())
    .max(10, 'No se pueden seleccionar más de 10 áreas comunes')
});

// Schema para FormProp6 - Multimedia
export const formProp6Schema = z.object({
  imagenes: z.array(z.instanceof(File))
    .min(1, 'Debe subir al menos una imagen')
    .max(20, 'No se pueden subir más de 20 imágenes'),
  videoTour: z.string()
    .url('Debe ser una URL válida')
    .optional()
    .or(z.literal('')),
  planos: z.array(z.instanceof(File))
    .max(5, 'No se pueden subir más de 5 planos')
    .optional(),
  documentos: z.array(z.instanceof(File))
    .max(10, 'No se pueden subir más de 10 documentos')
    .optional(),
  imagenesPreview: z.array(z.string())
    .max(20, 'No se pueden tener más de 20 imágenes de vista previa')
});

// Schema completo del formulario
export const propiedadFormSchema = z.object({
  form1: formProp1Schema,
  form2: formProp2Schema,
  form3: formProp3Schema,
  form4: formProp4Schema,
  form5: formProp5Schema,
  form6: formProp6Schema
});

// Schemas para validación parcial (borrador)
export const formProp1DraftSchema = formProp1Schema.partial();
export const formProp2DraftSchema = formProp2Schema.partial();
export const formProp3DraftSchema = formProp3Schema.partial();
export const formProp4DraftSchema = formProp4Schema.partial();
export const formProp5DraftSchema = formProp5Schema.partial();
export const formProp6DraftSchema = formProp6Schema.partial();

// Schema para validación de borrador completo
export const propiedadFormDraftSchema = z.object({
  form1: formProp1DraftSchema,
  form2: formProp2DraftSchema,
  form3: formProp3DraftSchema,
  form4: formProp4DraftSchema,
  form5: formProp5DraftSchema,
  form6: formProp6DraftSchema
});

// Tipos inferidos de los schemas
export type FormProp1Input = z.infer<typeof formProp1Schema>;
export type FormProp2Input = z.infer<typeof formProp2Schema>;
export type FormProp3Input = z.infer<typeof formProp3Schema>;
export type FormProp4Input = z.infer<typeof formProp4Schema>;
export type FormProp5Input = z.infer<typeof formProp5Schema>;
export type FormProp6Input = z.infer<typeof formProp6Schema>;
export type PropiedadFormInput = z.infer<typeof propiedadFormSchema>;
