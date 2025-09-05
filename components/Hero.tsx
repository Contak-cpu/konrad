import React from 'react';
import FilterBar from './FilterBar';
import type { Filters } from '../types';

interface HeroProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Hero: React.FC<HeroProps> = ({ filters, setFilters }) => {
  return (
    <div className="relative bg-cover bg-center h-[550px] sm:h-[500px]" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
          Encuentra tu próximo hogar
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl drop-shadow-md">
          Alquileres anuales con la confianza y respaldo de Konrad Inversiones.
        </p>
        <div className="mt-8 w-full max-w-4xl">
           <FilterBar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
