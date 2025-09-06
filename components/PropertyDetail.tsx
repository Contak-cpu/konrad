import React from 'react';
import type { Property } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
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
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.4.38.4.66v1.48c0 .28-.15.53-.4.66C15.9 17.18 13.4 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.35 0 .68.04 1.01.1.28.05.5.28.5.56v1.48c0 .28-.23.51-.5.56-.25.04-.5.06-.75.06-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.15 0 2.2-.56 2.85-1.42.17-.23.44-.38.74-.38h.96Z"/></svg> );

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack }) => {

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(price);
  };
  
  const openWhatsApp = () => {
    const message = `Hola, estoy interesado/a en la propiedad "${property.title}" ubicada en ${property.address}. ¿Podrían darme más información?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const images = property.images && property.images.length > 0 ? property.images : [property.imageUrl];

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

            <ImageGallery images={images} alt={property.title} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
                <div className="lg:col-span-2 bg-white p-4 sm:p-6 rounded-lg shadow-sm border">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-4 border-b gap-3 sm:gap-0">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold">{property.type} en alquiler</h2>
                             <div className="flex items-center text-gray-600 mt-2">
                                <BedIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary-600"/>
                                <span className="text-sm sm:text-base">{property.rooms} {property.rooms === 1 ? 'Dormitorio' : property.rooms === 0 ? 'Ambiente único' : 'Dormitorios'}</span>
                            </div>
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
