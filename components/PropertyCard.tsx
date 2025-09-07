import React, { useState } from 'react';
import type { Property } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> );
const BedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M2 4v16" />
        <path d="M5 10h14" />
        <path d="M8 4v16" />
        <path d="M16 4v16" />
    </svg>
);
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);
const HeartIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> );


interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelectProperty }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
  };

  const getRoomText = (rooms: number) => {
    if (rooms === 0) return '1 Ambiente';
    return `${rooms} ${rooms === 1 ? 'Dorm.' : 'Dorms.'}`;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event from firing
    const message = `Hola, estoy interesado/a en la propiedad "${property.title}" ubicada en ${property.address}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click event from firing
    setIsFavorited(!isFavorited);
  };

  return (
    <div 
      onClick={() => onSelectProperty(property)} 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group flex flex-col"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && onSelectProperty(property)}
      aria-label={`Ver detalles de ${property.title}`}
    >
      <div className="relative">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-48 sm:h-56 object-cover" 
          loading="lazy"
        />
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 left-4 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors"
          aria-label={isFavorited ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          <HeartIcon className={`h-6 w-6 transition-all ${isFavorited ? 'fill-red-500 stroke-red-500' : 'fill-transparent stroke-white'}`} />
        </button>
        <div className={`absolute top-4 right-4 px-3 py-1 text-sm font-semibold rounded-full ${property.available === 'Inmediato' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {property.available}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-lg sm:text-xl font-bold text-white">{formatPrice(property.price)} <span className="font-normal text-sm sm:text-base">/ mes</span></h3>
        </div>
      </div>
      <div className="p-3 sm:p-4 flex-grow flex flex-col">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 truncate group-hover:text-primary-600 transition-colors">{property.title}</h4>
        <div className="flex items-center text-gray-500 mt-1">
          <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-xs sm:text-sm truncate">{property.address}</p>
        </div>
        <div className="flex-grow" /> {/* Spacer to push content to bottom */}
        <div className="border-t pt-3 sm:pt-4 mt-3 sm:mt-4">
            <div className="flex justify-between items-center text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
              <div className="flex items-center gap-1 sm:gap-2" title="Tipo de propiedad">
                <HomeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                <span className="truncate">{property.type}</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2" title="Dormitorios">
                <BedIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600" />
                <span className="truncate">{getRoomText(property.rooms)}</span>
              </div>
            </div>
             <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold text-sm sm:text-base"
                aria-label={`Consultar por WhatsApp sobre ${property.title}`}
              >
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden xs:inline">Consultar por WhatsApp</span>
                <span className="xs:hidden">WhatsApp</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
