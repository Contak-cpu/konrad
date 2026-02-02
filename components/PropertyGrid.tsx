import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property, SortOption, Filters } from '../types';

interface PropertyGridProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  sort: SortOption;
  setSort: React.Dispatch<React.SetStateAction<SortOption>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  onToggleFavorite?: (propertyId: string) => void;
  isFavorite?: (propertyId: string) => boolean;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ 
  properties, 
  onSelectProperty, 
  sort, 
  setSort, 
  filters, 
  setFilters, 
  onToggleFavorite, 
  isFavorite 
}) => {
  const handleOperationChange = (operation: string) => {
    setFilters(prev => ({ ...prev, operation }));
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 sm:mb-8 gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Nuestras Propiedades</h2>
              
              {/* Botones de Operación */}
              <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200 w-full sm:w-auto">
                <button
                  onClick={() => handleOperationChange('Todos')}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    filters.operation === 'Todos'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Todas
                </button>
                <button
                  onClick={() => handleOperationChange('Alquiler')}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    filters.operation === 'Alquiler'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Alquiler
                </button>
                <button
                  onClick={() => handleOperationChange('Venta')}
                  className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                    filters.operation === 'Venta'
                      ? 'bg-primary-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  Venta
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full lg:w-auto">
                <label htmlFor="sort-by" className="text-gray-600 font-medium text-sm">Ordenar por:</label>
                <select 
                    id="sort-by"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="w-full sm:w-auto px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 text-sm"
                >
                    <option value="default">Recomendados</option>
                    <option value="price_asc">Precio: más bajo</option>
                    <option value="price_desc">Precio: más alto</option>
                </select>
            </div>
        </div>
        
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {properties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onSelectProperty={onSelectProperty}
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-6 bg-white rounded-lg shadow-md border">
            <h3 className="text-xl font-semibold text-gray-700">No se encontraron propiedades</h3>
            <p className="text-gray-500 mt-2">Intenta ajustar los filtros de búsqueda o limpiarlos para ver todas las propiedades.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyGrid;
