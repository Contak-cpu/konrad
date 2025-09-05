import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6" /></svg> );
const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m9 18 6-6-6-6" /></svg> );


const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
  
  if (!images || images.length === 0) {
      return null;
  }

  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <img src={images[currentIndex]} alt={`${alt} - Imagen ${currentIndex + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out" />

      {images.length > 1 && (
        <>
            <button 
                onClick={goToPrevious}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                aria-label="Imagen anterior"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button 
                onClick={goToNext}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition-colors"
                aria-label="Siguiente imagen"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/50'}`}
                    />
                ))}
            </div>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
