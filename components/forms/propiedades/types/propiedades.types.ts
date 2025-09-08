// Tipos para los formularios de propiedades inmobiliarias

export type TipoPropiedad = 
  | 'Casa' 
  | 'Departamento' 
  | 'Monoambiente' 
  | 'Local comercial' 
  | 'Oficina' 
  | 'Lote' 
  | 'Galpón' 
  | 'Casa quinta' 
  | 'Duplex' 
  | 'Penthouse';

export type EstadoPropiedad = 
  | 'Venta' 
  | 'Renta' 
  | 'Vendido' 
  | 'Rentado' 
  | 'Reservado';

export type Moneda = 'ARS' | 'USD' | 'EUR';

export type EstadoConservacion = 
  | 'Excelente' 
  | 'Muy bueno' 
  | 'Bueno' 
  | 'Regular' 
  | 'A refaccionar';

export type TipoConstruccion = 
  | 'Ladrillo' 
  | 'Hormigón' 
  | 'Steel frame' 
  | 'Madera' 
  | 'Mixto';

export type Disponibilidad = 
  | 'Inmediato' 
  | 'En 30 días' 
  | 'En 60 días' 
  | 'En construcción' 
  | 'A terminar' 
  | 'Consultar';

// FormProp1 - Información Básica
export interface FormProp1Data {
  tipoPropiedad: TipoPropiedad;
  titulo: string;
  descripcion: string;
  estado: EstadoPropiedad;
}

// FormProp2 - Ubicación
export interface FormProp2Data {
  pais: string;
  estado: string;
  ciudad: string;
  direccion: string;
  codigoPostal: string;
  coordenadas?: {
    lat: number;
    lng: number;
  };
  zona: string;
}

// FormProp3 - Características Físicas
export interface FormProp3Data {
  superficieTotal: number;
  superficieConstruida: number;
  habitaciones: number;
  banos: number;
  pisos: number;
  antiguedad: number;
  estadoConservacion: EstadoConservacion;
  tipoConstruccion: TipoConstruccion;
}

// FormProp4 - Precio y Condiciones
export interface FormProp4Data {
  precio: number;
  moneda: Moneda;
  gastosAdicionales?: number;
  gastosAdicionalesDescripcion?: string;
  terminosPago: string;
  comisiones?: number;
  comisionesDescripcion?: string;
}

// FormProp5 - Servicios y Amenidades
export interface FormProp5Data {
  serviciosBasicos: {
    agua: boolean;
    luz: boolean;
    gas: boolean;
    cloacas: boolean;
    internet: boolean;
    telefono: boolean;
  };
  amenidades: {
    piscina: boolean;
    gimnasio: boolean;
    seguridad: boolean;
    ascensor: boolean;
    balcon: boolean;
    terraza: boolean;
    jardin: boolean;
    parrilla: boolean;
    garage: boolean;
    cochera: boolean;
  };
  estacionamiento: {
    cantidad: number;
    tipo: 'Cubierto' | 'Descubierto' | 'Mixto';
  };
  areasComunes: string[];
}

// FormProp6 - Multimedia
export interface FormProp6Data {
  imagenes: File[];
  videoTour?: string;
  planos?: File[];
  documentos: File[];
  imagenesPreview: string[];
}

// Datos completos del formulario
export interface PropiedadFormData {
  form1: FormProp1Data;
  form2: FormProp2Data;
  form3: FormProp3Data;
  form4: FormProp4Data;
  form5: FormProp5Data;
  form6: FormProp6Data;
}

// Estado del formulario
export interface FormState {
  currentStep: number;
  isDirty: boolean;
  isValid: boolean;
  isLoading: boolean;
  error: string | null;
  lastSaved: Date | null;
}

// Props para los componentes de formulario
export interface FormStepProps {
  data: any;
  onChange: (data: any) => void;
  onNext: () => void;
  onPrevious: () => void;
  isLoading?: boolean;
  error?: string | null;
}

// Opciones para selects
export const TIPOS_PROPIEDAD_OPTIONS = [
  { value: 'Casa', label: 'Casa' },
  { value: 'Departamento', label: 'Departamento' },
  { value: 'Monoambiente', label: 'Monoambiente' },
  { value: 'Local comercial', label: 'Local comercial' },
  { value: 'Oficina', label: 'Oficina' },
  { value: 'Lote', label: 'Lote' },
  { value: 'Galpón', label: 'Galpón' },
  { value: 'Casa quinta', label: 'Casa quinta' },
  { value: 'Duplex', label: 'Duplex' },
  { value: 'Penthouse', label: 'Penthouse' }
];

export const ESTADOS_PROPIEDAD_OPTIONS = [
  { value: 'Venta', label: 'Venta' },
  { value: 'Renta', label: 'Renta' },
  { value: 'Vendido', label: 'Vendido' },
  { value: 'Rentado', label: 'Rentado' },
  { value: 'Reservado', label: 'Reservado' }
];

export const MONEDAS_OPTIONS = [
  { value: 'ARS', label: 'Pesos Argentinos (ARS)' },
  { value: 'USD', label: 'Dólares (USD)' },
  { value: 'EUR', label: 'Euros (EUR)' }
];

export const ESTADOS_CONSERVACION_OPTIONS = [
  { value: 'Excelente', label: 'Excelente' },
  { value: 'Muy bueno', label: 'Muy bueno' },
  { value: 'Bueno', label: 'Bueno' },
  { value: 'Regular', label: 'Regular' },
  { value: 'A refaccionar', label: 'A refaccionar' }
];

export const TIPOS_CONSTRUCCION_OPTIONS = [
  { value: 'Ladrillo', label: 'Ladrillo' },
  { value: 'Hormigón', label: 'Hormigón' },
  { value: 'Steel frame', label: 'Steel frame' },
  { value: 'Madera', label: 'Madera' },
  { value: 'Mixto', label: 'Mixto' }
];

export const DISPONIBILIDAD_OPTIONS = [
  { value: 'Inmediato', label: 'Inmediato' },
  { value: 'En 30 días', label: 'En 30 días' },
  { value: 'En 60 días', label: 'En 60 días' },
  { value: 'En construcción', label: 'En construcción' },
  { value: 'A terminar', label: 'A terminar' },
  { value: 'Consultar', label: 'Consultar' }
];
