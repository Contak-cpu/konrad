import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M16.75 13.96c.25.13.4.38.4.66v1.48c0 .28-.15.53-.4.66C15.9 17.18 13.4 18 12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c.35 0 .68.04 1.01.1.28.05.5.28.5.56v1.48c0 .28-.23.51-.5.56-.25.04-.5.06-.75.06-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.15 0 2.2-.56 2.85-1.42.17-.23.44-.38.74-.38h.96Z"/></svg> );
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> );
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> );
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> );


const Footer: React.FC = () => {
  const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const phoneNumber = "+54 2954 47-5417";
  const email = "consultas@konradinversiones.com";
  const officeAddress = "Av. Ameghino 602, Santa Rosa, La Pampa";

  const socialLinks = [
    { name: 'WhatsApp', href: whatsAppUrl, icon: <WhatsAppIcon className="h-6 w-6"/> },
    { name: 'Instagram', href: '#', icon: <InstagramIcon className="h-6 w-6"/> },
    { name: 'Facebook', href: '#', icon: <FacebookIcon className="h-6 w-6"/> },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Konrad Inversiones</h3>
            <p className="text-primary-200 mb-4">Desarrollos inmobiliarios y alquileres en Santa Rosa, La Pampa.</p>
            <div className="space-y-2">
              <p className="text-sm text-primary-300">
                <span className="font-semibold">Dirección:</span> {officeAddress}
              </p>
              <p className="text-sm text-primary-300">
                <span className="font-semibold">Teléfono:</span> {phoneNumber}
              </p>
              <p className="text-sm text-primary-300">
                <span className="font-semibold">Email:</span> {email}
              </p>
            </div>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horarios</h4>
            <div className="space-y-2 text-sm text-primary-300">
              <p>Lunes a Viernes: 9:00 - 18:00 hs</p>
              <p>Sábados: 9:00 - 13:00 hs</p>
              <p>Domingos: Cerrado</p>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary-200 hover:text-white transition-colors" aria-label={`Visita nuestro ${link.name}`}>
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary-800 pt-6 text-center text-sm text-primary-300">
          <p>&copy; {new Date().getFullYear()} Konrad Inversiones + Desarrollos Inmobiliarios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
