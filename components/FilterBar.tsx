import React from 'react';
import type { Filters } from '../types';
import { PRICE_RANGES } from '../constants';

interface FilterBarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
);

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
    
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handleReset = () => {
    setFilters({
      searchTerm: '',
      type: 'Todos',
      rooms: 'Todos',
      availability: 'Todos',
      priceRange: 'all',
      operation: 'Todos',
    });
  };

  const selectClasses = "w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-gray-700 appearance-none text-sm sm:text-base";

  return (
    <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
        
        <div className="relative sm:col-span-2 lg:col-span-12">
            <input
                type="text"
                name="searchTerm"
                placeholder="Buscar por dirección o título..."
                value={filters.searchTerm}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm sm:text-base"
                aria-label="Buscar propiedad"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-500" />
        </div>

        <div className="relative lg:col-span-3">
          <select name="type" value={filters.type} onChange={handleInputChange} className={selectClasses} aria-label="Filtrar por tipo">
            <option value="Todos">Tipo: Todos</option>
            <option>Monoambiente</option>
            <option>Departamento</option>
            <option>Casa</option>
            <option>Local comercial</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>
        
        <div className="relative lg:col-span-3">
          <select name="priceRange" value={filters.priceRange} onChange={handleInputChange} className={selectClasses} aria-label="Filtrar por precio">
            {PRICE_RANGES.map(range => (
              <option key={range.value} value={range.value}>{range.label}</option>
            ))}
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative lg:col-span-2">
          <select name="rooms" value={filters.rooms} onChange={handleInputChange} className={selectClasses} aria-label="Filtrar por dormitorios">
            <option value="Todos">Dormitorios: Todos</option>
            <option value="0">Monoambiente (0)</option>
            <option value="1">1 Dormitorio</option>
            <option value="2">2 Dormitorios</option>
            <option value="3">3+ Dormitorios</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>

        <div className="relative lg:col-span-2">
          <select name="availability" value={filters.availability} onChange={handleInputChange} className={selectClasses} aria-label="Filtrar por disponibilidad">
            <option value="Todos">Disponibilidad: Todas</option>
            <option>Inmediato</option>
            <option>Septiembre</option>
          </select>
          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 pointer-events-none" />
        </div>
        
        <div className="lg:col-span-2">
         <button 
            onClick={handleReset} 
            className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold text-sm sm:text-base">
            Limpiar
        </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;