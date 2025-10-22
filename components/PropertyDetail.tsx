import React from 'react';
import type { Property } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { RoomDisplay } from './RoomDisplay';
import ImageGallery from './ImageGallery';
import RequirementsSection from './RequirementsSection';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
}

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m15 18-6-6 6-6" /></svg> );
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> );
const BedIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M2 4v16" /><path d="M2 10h20" /><path d="M6 4v16" /><path d="M14 4v16" /><path d="M18 4v16" /><path d="M22 4v16" /></svg> );
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 6 9 17l-5-5" /></svg> );
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
  };
  
  const openWhatsApp = () => {
    const message = `Hola, estoy interesado/a en la propiedad "${property.title}" ubicada en ${property.address}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const images = property.images && property.images.length > 0 ? property.images : (property.imageUrl ? [property.imageUrl] : []);

  // Construct a more precise address for Google Maps and create the embed URL.
  const fullAddress = `${property.address}, Santa Rosa, La Pampa, Argentina`;
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="bg-gray-100 min-h-screen">
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={onBack} className="flex items-center h-16 text-primary-600 hover:text-primary-800 font-semibold transition-colors">
                    <ChevronLeftIcon className="h-6 w-6 mr-1" />
                    Volver a las propiedades
                </button>
            </div>
        </header>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-4 text-sm text-gray-500">
                <span className="cursor-pointer hover:underline" onClick={onBack}>Propiedades</span> / <span className="font-medium text-gray-700">{property.title}</span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center text-gray-600 mt-2 mb-4 sm:mb-6">
                <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                <span className="text-sm sm:text-base">{property.address}</span>
            </div>

            <div className="mb-6 sm:mb-8">
              {images.length > 0 ? (
                <ImageGallery images={images} alt={property.title} />
              ) : (
                <div className="w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600 p-8">
                    <div className="text-4xl mb-4">📷</div>
                    <div className="text-lg font-medium">Imágenes próximamente</div>
                    <div className="text-sm text-gray-500 mt-2">Las fotos de esta propiedad estarán disponibles pronto</div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b gap-3 sm:gap-0">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">{property.type} en alquiler</h2>
                            <RoomDisplay property={property} className="mt-2" />
                        </div>
                         <div className={`px-3 sm:px-4 py-2 rounded-full font-medium text-sm sm:text-base ${property.available === 'Inmediato' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'} self-start sm:self-auto`}>
                            {property.available}
                        </div>
                    </div>
                    
                    <div className="mt-4 sm:mt-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Descripción</h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{property.description}</p>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3">Características Principales</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2">
                            {property.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700 text-sm sm:text-base">
                                    <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500 flex-shrink-0"/>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                     <div className="mt-4 sm:mt-6">
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">Ubicación</h3>
                         <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-md">
                             <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Ubicación de ${property.title}`}
                            ></iframe>
                         </div>
                    </div>
                </div>

                <div className="lg:sticky top-24 h-fit">
                    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border">
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">{formatPrice(property.price)} <span className="text-sm sm:text-base font-normal text-gray-500">/ mes</span></p>
                        
                        <div className="mt-3 sm:mt-4 border-t pt-3 sm:pt-4 space-y-2 text-gray-700 text-sm sm:text-base">
                           <div className="flex justify-between">
                               <span>Alquiler</span>
                               <span>{formatPrice(property.price)}</span>
                           </div>
                           {property.additionalCosts && (
                               <div className="flex justify-between">
                                   <span>Gastos adicionales</span>
                                   <span>{typeof property.additionalCosts === 'number' ? formatPrice(property.additionalCosts) : property.additionalCosts}</span>
                               </div>
                           )}
                           <div className="flex justify-between font-bold text-gray-900 border-t pt-2 mt-2">
                               <span>Total estimado</span>
                               <span>{typeof property.additionalCosts === 'number' ? formatPrice(property.price + property.additionalCosts) : `${formatPrice(property.price)} + gastos`}</span>
                           </div>
                        </div>

                        <button onClick={openWhatsApp} className="mt-4 sm:mt-6 w-full bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg flex items-center justify-center gap-2 transition-colors font-bold text-base sm:text-lg">
                            <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                            <span className="hidden xs:inline">Consultar por WhatsApp</span>
                            <span className="xs:hidden">WhatsApp</span>
                        </button>
                        <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3">Recibirás una respuesta a la brevedad.</p>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <RequirementsSection />
            </div>
        </main>
    </div>
  );
};

export default PropertyDetail;
