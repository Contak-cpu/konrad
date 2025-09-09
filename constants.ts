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

// Exportar propiedades desde el módulo modular
export { properties };


