import React from 'react';
import FilterBar from './FilterBar';
import type { Filters } from '../types';

interface HeroProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Hero: React.FC<HeroProps> = ({ filters, setFilters }) => {
  return (
    <div className="relative bg-cover bg-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col justify-center items-center text-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Encuentra tu próxima propiedad
        </h1>
        <p className="mt-2 sm:mt-3 lg:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-2xl drop-shadow-md px-2 sm:px-4">
          Alquileres y ventas con la confianza y respaldo de Konrad Inversiones.
        </p>
        <div className="mt-4 sm:mt-6 lg:mt-8 w-full max-w-4xl px-2 sm:px-4">
           <FilterBar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
