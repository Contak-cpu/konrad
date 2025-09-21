import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> );
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> );
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> );


const Footer: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const phoneNumber = "+54 2954 47-5417";
  const officeAddress = "Av. Ameghino 602, Santa Rosa, La Pampa";

  const socialLinks = [
    { name: 'WhatsApp', href: whatsAppUrl, icon: <WhatsAppIcon className="h-6 w-6"/> },
    { name: 'Instagram', href: '#', icon: <InstagramIcon className="h-6 w-6"/> },
    { name: 'Facebook', href: '#', icon: <FacebookIcon className="h-6 w-6"/> },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Konrad Inversiones</h3>
            <p className="text-sm sm:text-base text-primary-200 mb-3 sm:mb-4">Desarrollo inmobiliario, alquileres y ventas en Santa Rosa, La Pampa.</p>
            <div className="space-y-1 sm:space-y-2">
              <p className="text-xs sm:text-sm text-primary-300">
                <span className="font-semibold">Dirección:</span> {officeAddress}
              </p>
              <p className="text-xs sm:text-sm text-primary-300">
                <span className="font-semibold">Teléfono:</span> {phoneNumber}
              </p>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Horarios</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-primary-300">
              <p>Lunes a Viernes: 9:00 - 18:00 hs</p>
              <p>Sábados: 9:00 - 13:00 hs</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Síguenos</h4>
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label={`Visita nuestro ${link.name}`}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 border-t border-primary-800 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} Konrad Inversiones + Desarrollos Inmobiliarios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
