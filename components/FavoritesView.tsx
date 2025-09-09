import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types';

const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const HeartSolidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m15 18-6-6 6-6"/>
  </svg>
);

interface FavoritesViewProps {
  favoriteProperties: Property[];
  onBack: () => void;
  onSelectProperty: (property: Property) => void;
  onToggleFavorite: (propertyId: number) => void;
  isFavorite: (propertyId: number) => boolean;
}

const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteProperties,
  onBack,
  onSelectProperty,
  onToggleFavorite,
  isFavorite
}) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={onBack} 
              className="flex items-center text-primary-600 hover:text-primary-800 font-semibold transition-colors"
            >
              <ChevronLeftIcon className="h-6 w-6 mr-1" />
              Volver a las propiedades
            </button>
            
            <div className="flex items-center text-primary-600">
              <HeartSolidIcon className="h-6 w-6 mr-2" />
              <h1 className="text-xl font-bold">Mis Favoritos</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {favoriteProperties.length === 0 ? (
          <div className="text-center py-16">
            <HeartIcon className="h-24 w-24 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">No tienes favoritos aún</h2>
            <p className="text-gray-500 mb-6">
              Explora nuestras propiedades y marca las que te gusten con el corazón
            </p>
            <button
              onClick={onBack}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Ver todas las propiedades
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
                Mis Propiedades Favoritas
              </h2>
              <p className="text-gray-600">
                {favoriteProperties.length} {favoriteProperties.length === 1 ? 'propiedad guardada' : 'propiedades guardadas'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((property) => (
                <div key={property.id} className="relative">
                  <PropertyCard
                    property={property}
                    onSelectProperty={onSelectProperty}
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFavorite(property.id);
                    }}
                    className="absolute top-4 left-4 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors z-10"
                    aria-label={isFavorite(property.id) ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                  >
                    <HeartSolidIcon className="h-6 w-6 fill-red-500 stroke-red-500" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default FavoritesView;
