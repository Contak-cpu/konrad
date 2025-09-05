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
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.4.38.4.66v1.48c0 .28-.15.53-.4.66C15.9 17.18 13.4 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.35 0 .68.04 1.01.1.28.05.5.28.5.56v1.48c0 .28-.23.51-.5.56-.25.04-.5.06-.75.06-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.15 0 2.2-.56 2.85-1.42.17-.23.44-.38.74-.38h.96Z"/></svg> );
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
          className="w-full h-56 object-cover" 
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
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-xl font-bold text-white">{formatPrice(property.price)} <span className="font-normal text-base">/ mes</span></h3>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h4 className="text-lg font-semibold text-gray-800 truncate group-hover:text-primary-600 transition-colors">{property.title}</h4>
        <div className="flex items-center text-gray-500 mt-1">
          <MapPinIcon className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm truncate">{property.address}</p>
        </div>
        <div className="flex-grow" /> {/* Spacer to push content to bottom */}
        <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-2" title="Tipo de propiedad">
                <HomeIcon className="h-5 w-5 text-primary-600" />
                <span>{property.type}</span>
              </div>
              <div className="flex items-center gap-2" title="Dormitorios">
                <BedIcon className="h-5 w-5 text-primary-600" />
                <span>{getRoomText(property.rooms)}</span>
              </div>
            </div>
             <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold"
                aria-label={`Consultar por WhatsApp sobre ${property.title}`}
              >
                <WhatsAppIcon className="h-5 w-5" />
                Consultar por WhatsApp
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
