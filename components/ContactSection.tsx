import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

// Icons
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.4.38.4.66v1.48c0 .28-.15.53-.4.66C15.9 17.18 13.4 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.35 0 .68.04 1.01.1.28.05.5.28.5.56v1.48c0 .28-.23.51-.5.56-.25.04-.5.06-.75.06-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.15 0 2.2-.56 2.85-1.42.17-.23.44-.38.74-.38h.96Z"/></svg> );
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> );
const MapPinIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg> );
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> );
const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg> );

const ContactCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; href?: string; }> = ({ icon, title, children, href }) => {
    const content = (
        <>
            <div className="flex-shrink-0 w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
                {icon}
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <div className="mt-1 text-gray-600">{children}</div>
            </div>
        </>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-start p-6 bg-white rounded-lg shadow-sm border hover:shadow-md hover:border-primary-300 transition-all">
                {content}
            </a>
        );
    }

    return (
        <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
