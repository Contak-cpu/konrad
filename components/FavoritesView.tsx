import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property } from '../types';
import { HeartIcon, HeartSolidIcon, ChevronLeftIcon } from './icons';

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
                <PropertyCard
                  key={property.id}
                  property={property}
                  onSelectProperty={onSelectProperty}
                  onToggleFavorite={onToggleFavorite}
                  isFavorite={isFavorite}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default FavoritesView;
