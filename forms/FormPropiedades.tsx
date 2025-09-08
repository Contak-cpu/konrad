import React, { useState } from 'react';
import FormPropSaluzzi from './FormPropSaluzzi';
import FormPropGiachino from './FormPropGiachino';
import FormPropFerrando from './FormPropFerrando';
import FormPropUrquiza from './FormPropUrquiza';

const FormPropiedades: React.FC = () => {
  const [activeForm, setActiveForm] = useState<string>('saluzzi');

  const forms = [
    { id: 'saluzzi', name: 'Casa Quinta Saluzzi', component: FormPropSaluzzi },
    { id: 'giachino', name: 'Casa Giachino', component: FormPropGiachino },
    { id: 'ferrando', name: 'Departamento Ferrando', component: FormPropFerrando },
    { id: 'urquiza', name: 'Casa Urquiza', component: FormPropUrquiza },
  ];

  const ActiveFormComponent = forms.find(form => form.id === activeForm)?.component || FormPropSaluzzi;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Gestión de Propiedades
          </h1>
          <p className="text-gray-600">
            Administra la información de todas las propiedades disponibles
          </p>
        </div>

        {/* Navegación por pestañas */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6" aria-label="Tabs">
              {forms.map((form) => (
                <button
                  key={form.id}
                  onClick={() => setActiveForm(form.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                    activeForm === form.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {form.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Contenido del formulario activo */}
        <div className="bg-white rounded-lg shadow-sm">
          <ActiveFormComponent />
        </div>

        {/* Información adicional */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Información importante
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Los cambios se guardan automáticamente en el sistema</li>
                  <li>Las imágenes deben ser URLs válidas y accesibles</li>
                  <li>Los precios se muestran en pesos argentinos</li>
                  <li>Las características se separan por comas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPropiedades;

