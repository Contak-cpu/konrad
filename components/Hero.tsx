import React from 'react';
import FilterBar from './FilterBar';
import type { Filters } from '../types';

interface HeroProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Hero: React.FC<HeroProps> = ({ filters, setFilters }) => {
  return (
    <div className="relative bg-cover bg-center min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex flex-col justify-center items-center text-center min-h-[500px] sm:min-h-[600px] lg:min-h-[650px]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Encuentra tu próximo hogar
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md px-4">
          Alquileres anuales con la confianza y respaldo de Konrad Inversiones.
        </p>
        <div className="mt-6 sm:mt-8 w-full max-w-4xl px-4">
           <FilterBar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
