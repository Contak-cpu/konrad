import { Property } from '../../types';
import { giachino2455 } from './giachino2455';
import { alberdiEdison } from './alberdiEdison';
import { berutti361 } from './berutti361';
import { localHugoDelCarril } from './localHugoDelCarril';
import { neuquen322 } from './neuquen322';
import { ferrando474 } from './ferrando474';

export const properties: Property[] = [
  giachino2455,
  berutti361,
  alberdiEdison,
  localHugoDelCarril,
  neuquen322,
  ferrando474,
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

