import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

// Icons
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> );
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> );
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> );
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> );

const ContactCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; href?: string; }> = ({ icon, title, children, href }) => {
    const content = (
        <>
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <div className="ml-3 sm:ml-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{title}</h3>
                <div className="mt-1 text-sm sm:text-base text-gray-600">{children}</div>
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start p-4 sm:p-6 bg-white rounded-lg shadow-sm border hover:shadow-md hover:border-primary-300 transition-all">
                {content}
            </a>
        );
    }

    return (
        <div className="flex items-start p-4 sm:p-6 bg-white rounded-lg shadow-sm border">
            {content}
        </div>
    );
};

const ContactSection: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, me gustaría hacer una consulta sobre una propiedad.')}`;
  const officeAddress = "Av. Ameghino 602, Santa Rosa, La Pampa, Argentina";
  const googleMapsUrl = "https://maps.app.goo.gl/15fTDbLurXH3gL2x6";
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(officeAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  
  // Información adicional de contacto
  const phoneNumber = "+54 2954 47-5417";
  const email = "consultas@konradinversiones.com";
  const businessHours = "Lunes a Viernes: 9:00 - 18:00 hs";
  const saturdayHours = "Sábados: 9:00 - 13:00 hs";


  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Contacto</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Estamos aquí para ayudarte. Contáctanos a través de cualquiera de nuestros canales.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <ContactCard
                icon={<WhatsAppIcon className="h-6 w-6" />}
                title="WhatsApp"
                href={whatsAppUrl}
            >
                <p>La forma más rápida de contactarnos. Haz clic aquí para enviarnos un mensaje.</p>
                <p className="font-semibold mt-1 text-primary-700">{phoneNumber}</p>
            </ContactCard>
            
            <ContactCard
                icon={<PhoneIcon className="h-6 w-6" />}
                title="Teléfono"
                href={`tel:${phoneNumber}`}
            >
                <p>Llamanos directamente para consultas inmediatas.</p>
                <p className="font-semibold mt-1 text-primary-700">{phoneNumber}</p>
            </ContactCard>

            <ContactCard
                icon={<MailIcon className="h-6 w-6" />}
                title="Correo Electrónico"
                href={`mailto:${email}`}
            >
                <p>Para consultas generales o envío de documentación.</p>
                <p className="font-semibold mt-1 text-primary-700">{email}</p>
            </ContactCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
             <ContactCard
                icon={<MapPinIcon className="h-6 w-6" />}
                title="Nuestra Oficina"
                href={googleMapsUrl}
            >
                <p>Visítanos para una atención personalizada. Se recomienda coordinar una cita previa.</p>
                <p className="font-semibold mt-1 text-primary-700">{officeAddress}</p>
                <p className="text-sm text-gray-500 mt-2">Santa Rosa, La Pampa, Argentina</p>
            </ContactCard>

            <ContactCard
                icon={<ClockIcon className="h-6 w-6" />}
                title="Horarios de Atención"
            >
                <p>Nuestros horarios de atención al público:</p>
                <p className="font-semibold mt-1 text-primary-700">{businessHours}</p>
                <p className="font-semibold text-primary-700">{saturdayHours}</p>
                <p className="text-sm text-gray-500 mt-2">Domingos: Cerrado</p>
            </ContactCard>
          </div>

          <div className="mt-12">
             <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-md">
                 <iframe
                    src={googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Konrad Inversiones"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
