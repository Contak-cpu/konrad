import React from 'react';
import PropertyCard from './PropertyCard';
import type { Property, SortOption } from '../types';

interface PropertyGridProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  sort: SortOption;
  setSort: React.Dispatch<React.SetStateAction<SortOption>>;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, onSelectProperty, sort, setSort }) => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-800 text-center sm:text-left">Nuestras Propiedades</h2>
            <div className="flex items-center gap-2">
                <label htmlFor="sort-by" className="text-gray-600 font-medium">Ordenar por:</label>
                <select 
                    id="sort-by"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortOption)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700"
                >
                    <option value="default">Recomendados</option>
                    <option value="price_asc">Precio: más bajo</option>
                    <option value="price_desc">Precio: más alto</option>
                </select>
            </div>
        </div>
        
        {properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} onSelectProperty={onSelectProperty} />
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
