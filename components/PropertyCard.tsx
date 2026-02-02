import React from 'react';
import type { Property } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { MapPinIcon, BedIcon, HomeIcon, WhatsAppIcon, HeartIcon } from './icons';
import { RoomDisplay } from './RoomDisplay';
import OptimizedImage from './OptimizedImage';


interface PropertyCardProps {
  property: Property;
  onSelectProperty: (property: Property) => void;
  onToggleFavorite?: (propertyId: string) => void;
  isFavorite?: (propertyId: string) => boolean;
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
      <div className="relative overflow-hidden">
        {property.imageUrl ? (
          <OptimizedImage 
            src={property.imageUrl} 
            alt={property.title} 
            className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105" 
            loading="lazy"
            onError={() => {
              console.warn('Error cargando imagen:', property.imageUrl, 'para propiedad:', property.title);
            }}
          />
        ) : (
          <div className="w-full h-48 sm:h-56 bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-600 p-4">
              <div className="text-2xl mb-2">📷</div>
              <div className="text-sm font-medium">Imágenes próximamente</div>
            </div>
          </div>
        )}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 sm:top-4 left-3 sm:left-4 p-2 bg-black/40 rounded-full text-white hover:bg-black/60 transition-colors touch-manipulation z-10"
          aria-label={isFavorited ? 'Quitar de favoritos' : 'Añadir a favoritos'}
        >
          <HeartIcon className={`h-5 w-5 sm:h-6 sm:w-6 transition-all ${isFavorited ? 'fill-red-500 stroke-red-500' : 'fill-transparent stroke-white'}`} />
        </button>
        <div className={`absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 text-xs sm:text-sm font-semibold rounded-full ${property.available === 'Inmediato' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
          {property.available}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg">
            {formatPrice(property.price)} 
            {property.price > 0 && <span className="font-normal text-xs sm:text-sm md:text-base"> / mes</span>}
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
            <RoomDisplay property={property} className="mb-3 sm:mb-4" />
             <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-700 hover:bg-green-800 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors font-semibold text-sm sm:text-base"
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
