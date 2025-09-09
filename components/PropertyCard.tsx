import React from 'react';
import type { Property } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { MapPinIcon, BedIcon, HomeIcon, WhatsAppIcon, HeartIcon } from './icons';


interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
  onToggleFavorite?: (propertyId: number) => void;
  isFavorite?: (propertyId: number) => boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ 
  property, 
  onSelectProperty, 
  onToggleFavorite, 
  isFavorite 
}) => {
  const isFavorited = isFavorite ? isFavorite(property.id) : false;

  const formatPrice = (price: number) => {
    if (price === 0) {
      return '📞 Consultar';
    }
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
    if (onToggleFavorite) {
      onToggleFavorite(property.id);
    }
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
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
          <h3 className="text-lg sm:text-xl font-bold text-white drop-shadow-lg">
            {formatPrice(property.price)} 
            {property.price > 0 && <span className="font-normal text-sm sm:text-base"> / mes</span>}
          </h3>
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
                <span className="hidden sm:inline">Consultar por WhatsApp</span>
                <span className="sm:hidden">WhatsApp</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
