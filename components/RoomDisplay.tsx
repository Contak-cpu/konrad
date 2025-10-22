import React from 'react';
import { Property } from '../types';
import { BedIcon, BathroomIcon } from './RoomIcons';

// Iconos para tipos de propiedad
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
  </svg>
);

const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
  </svg>
);

const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9,22 9,12 15,12 15,22"/>
    <path d="M8 22v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/>
  </svg>
);

// Función para contar baños (evita duplicados)
const countBathrooms = (property: Property): number => {
  const features = property.features.join(' ').toLowerCase();
  
  // Buscar patrones de números + baño
  const bathroomPattern = /(\d+)\s*(?:baño|baños|toilette|toilet)/g;
  const matches = features.match(bathroomPattern);
  
  if (matches) {
    // Sumar todos los números encontrados
    return matches.reduce((total, match) => {
      const num = parseInt(match.match(/\d+/)?.[0] || '0');
      return total + num;
    }, 0);
  }
  
  // Si no hay números específicos, contar palabras clave
  const bathroomKeywords = ['baño', 'baños', 'toilette', 'toilet'];
  const hasBathroom = bathroomKeywords.some(keyword => features.includes(keyword));
  
  return hasBathroom ? 1 : 0;
};

// Función para obtener el icono del tipo de propiedad
const getPropertyTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case 'casa':
      return HomeIcon;
    case 'departamento':
    case 'monoambiente':
      return BuildingIcon;
    case 'local comercial':
    case 'galpón':
    case 'lote':
      return StoreIcon;
    default:
      return HomeIcon;
  }
};

// Componente simplificado para mostrar información básica
interface RoomDisplayProps {
  property: Property;
  className?: string;
}

export const RoomDisplay: React.FC<RoomDisplayProps> = ({ 
  property, 
  className = '' 
}) => {
  const PropertyIcon = getPropertyTypeIcon(property.type);
  const bathroomCount = countBathrooms(property);

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {/* Tipo de propiedad */}
      <div className="flex items-center gap-2 text-gray-600">
        <PropertyIcon className="h-4 w-4 text-primary-600" />
        <span className="text-sm">{property.type}</span>
      </div>

      {/* Dormitorios */}
      {property.rooms > 0 && (
        <div className="flex items-center gap-2 text-gray-600">
          <BedIcon className="h-4 w-4 text-primary-600" />
          <span className="text-sm">
            {property.rooms} {property.rooms === 1 ? 'Dormitorio' : 'Dormitorios'}
          </span>
        </div>
      )}

      {/* Baños */}
      {bathroomCount > 0 && (
        <div className="flex items-center gap-2 text-gray-600">
          <BathroomIcon className="h-4 w-4 text-primary-600" />
          <span className="text-sm">
            {bathroomCount} {bathroomCount === 1 ? 'Baño' : 'Baños'}
          </span>
        </div>
      )}
    </div>
  );
};
