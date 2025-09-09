import React, { useState, useRef, useEffect } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6" /></svg> );
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg> );

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Configuración para el swipe
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Manejo de eventos táctiles
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  // Manejo de eventos de teclado para accesibilidad
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // Auto-play opcional (comentado por defecto)
  useEffect(() => {
    // Descomenta las siguientes líneas si quieres auto-play
    // const interval = setInterval(() => {
    //   goToNext();
    // }, 5000);
    // return () => clearInterval(interval);
  }, [currentIndex]);
  
  if (!images || images.length === 0) {
      return null;
  }

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="img"
      aria-label={`Galería de imágenes de ${alt}`}
    >
      <img 
        src={images[currentIndex]} 
        alt={`${alt} - Imagen ${currentIndex + 1}`} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out select-none" 
        draggable={false}
        onError={(e) => {
          console.log('Error cargando imagen en galería:', images[currentIndex]);
          // Fallback a una imagen placeholder si falla
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlNWU3ZWIiLz4KPHN2ZyB4PSIxNzUiIiB5PSIxMjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOWNhM2FmIj4KPHBhdGggZD0iTTMgOWw5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPgo8cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIj5JbWFnZW4gTm8gRGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+';
        }}
      />

      {images.length > 1 && (
        <>
            {/* Botones de navegación - más grandes en móviles */}
            <button 
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2 rounded-full hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 sm:opacity-100 touch-manipulation"
                aria-label="Imagen anterior"
            >
                <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button 
                onClick={goToNext}
                className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-black/40 text-white p-2 sm:p-2 rounded-full hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100 sm:opacity-100 touch-manipulation"
                aria-label="Siguiente imagen"
            >
                <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Indicadores de posición - más grandes en móviles */}
            <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
                {images.map((_, index) => (
                    <button
                        key={index} 
                        onClick={() => goToSlide(index)}
                        className={`h-2 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                            currentIndex === index 
                                ? 'w-6 sm:w-6 bg-white' 
                                : 'w-2 sm:w-2 bg-white/50 hover:bg-white/70'
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>

            {/* Contador de imágenes */}
            <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-black/40 text-white px-2 py-1 rounded-full text-xs sm:text-sm">
                {currentIndex + 1} / {images.length}
            </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
