import { Property } from '../../types';
import { giachino2455 } from './giachino2455';
// import { ferrando841 } from './ferrando841';
import { alberdiEdison } from './alberdiEdison';
// import { hilarioLagos } from './hilarioLagos';
// import { urquiza } from './urquiza';
// import { saluzzi } from './saluzzi';
// import { giachino } from './giachino';
// import { gavazza } from './gavazza';
// import { peronCastex } from './peronCastex';
// import { sanRoque } from './sanRoque';
// import { victoria547 } from './victoria547';
// import { pestalozziLote } from './pestalozziLote';
// import { venezuela1384 } from './venezuela1384';
import { berutti361 } from './berutti361';

export const properties: Property[] = [
  giachino2455,
  // ferrando841,
  alberdiEdison,
  // hilarioLagos,
  // urquiza,
  // saluzzi,
  // giachino,
  // victoria547,
  // pestalozziLote,
  // gavazza,
  // peronCastex,
  // sanRoque,
  // venezuela1384,
  berutti361,
];

// Función para actualizar una propiedad específica
export const updateProperty = (id: number, updates: Partial<Property>): Property[] => {
  return properties.map(property => 
    property.id === id ? { ...property, ...updates } : property
  );
};

// Función para obtener una propiedad por ID
export const getPropertyById = (id: number): Property | undefined => {
  return properties.find(property => property.id === id);
};

// Función para filtrar propiedades visibles
export const getVisibleProperties = (): Property[] => {
  return properties.filter(property => !property.hidden);
};

