import React from 'react';
import { FAQ_DATA } from '../constants';
import type { FaqItem } from '../types';

// Icons remain the same, but will be used in a new layout.
const FileTextIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg> );
const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg> );
const DollarSignIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="12" x2="12" y1="2" y2="22" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg> );
const ChevronDownIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6" /></svg> );
const KeyIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3"/></svg> );
const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => ( <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg> );


const FaqComponent: React.FC<{ item: FaqItem }> = ({ item }) => (
  <details className="group border-b border-gray-200 py-4 last:border-b-0">
    <summary className="flex justify-between items-center cursor-pointer list-none">
      <span className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">{item.question}</span>
      <ChevronDownIcon className="h-6 w-6 text-gray-500 transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <div className="mt-3 text-gray-600 leading-relaxed text-left">
      {item.answer}
    </div>
  </details>
);

const TimelineStep: React.FC<{ icon: React.ReactNode; title: string; description: string; details?: { icon: React.ReactNode; text: string }[]; isLast?: boolean }> = ({ icon, title, description, details, isLast }) => (
  <div className="relative flex items-start">
    <div className="flex flex-col items-center mr-4 sm:mr-6">
      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-white border-2 border-primary-500 rounded-full flex items-center justify-center z-10">
        {icon}
      </div>
      {!isLast && <div className="w-px h-full bg-primary-200 mt-2"></div>}
    </div>
    <div className={`pt-2 sm:pt-3 ${isLast ? '' : 'pb-8 sm:pb-12'}`}>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
      {details && (
        <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
          {details.map((detail, index) => (
            <div key={index} className="flex items-start p-2 sm:p-3 bg-primary-50/50 border border-primary-100 rounded-lg">
              <div className="flex-shrink-0 mr-2 sm:mr-3 text-primary-600">{detail.icon}</div>
              <p className="text-xs sm:text-sm text-gray-700">{detail.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
);


const RequirementsSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">Cómo Alquilar con Nosotros</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Un proceso claro y transparente diseñado para tu tranquilidad.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Timeline */}
          <div className="lg:col-span-3">
            <div className="flow-root">
               <TimelineStep
                icon={<SearchIcon className="h-8 w-8 text-primary-600" />}
                title="Paso 1: Contacto y Visita"
                description="Elige la propiedad que te interesa y contáctanos por WhatsApp para coordinar una visita y conocer tu futuro hogar."
              />
              <TimelineStep
                icon={<ShieldCheckIcon className="h-8 w-8 text-primary-600" />}
                title="Paso 2: Presentación de Garantías"
                description="Si la propiedad te gusta, es momento de presentar la documentación de tus garantes para su análisis. Requerimos:"
                details={[
                  { icon: <ShieldCheckIcon className="h-5 w-5"/>, text: 'Opción A: Dos garantes con recibo de sueldo (uno debe ser empleado estatal).' },
                  { icon: <ShieldCheckIcon className="h-5 w-5"/>, text: 'Opción B: Un garante que posea una propiedad inmueble a su nombre.' },
                ]}
              />
               <TimelineStep
                icon={<FileTextIcon className="h-8 w-8 text-primary-600" />}
                title="Paso 3: Firma de Contrato"
                description="Una vez aprobada la garantía, coordinamos la firma del contrato. Las condiciones son:"
                 details={[
                  { icon: <FileTextIcon className="h-5 w-5"/>, text: 'Contrato por 2 años con ajustes cuatrimestrales (ICL).' },
                  { icon: <DollarSignIcon className="h-5 w-5"/>, text: 'Abono del primer mes de alquiler por adelantado.' },
                  { icon: <DollarSignIcon className="h-5 w-5"/>, text: 'Firma de un pagaré como depósito en garantía.' },
                ]}
              />
              <TimelineStep
                icon={<KeyIcon className="h-8 w-8 text-primary-600" />}
                title="Paso 4: ¡Entrega de Llaves!"
                description="¡Felicidades! Con el contrato firmado, te entregamos las llaves de tu nuevo hogar. ¡Bienvenido/a!"
                isLast
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-2">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">Preguntas Frecuentes</h3>
              <div className="text-left">
                  {FAQ_DATA.map((item, index) => <FaqComponent key={index} item={item} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
