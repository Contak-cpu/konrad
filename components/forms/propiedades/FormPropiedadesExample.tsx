import React from 'react';
import { FormPropiedades } from './FormPropiedades';

/**
 * Ejemplo de uso del componente FormPropiedades
 * 
 * Este componente demuestra cómo usar el formulario de propiedades
 * con callbacks para manejar la finalización y guardado de datos.
 */
export const FormPropiedadesExample: React.FC = () => {
  const handleFormComplete = (data: any) => {
    console.log('Formulario completado:', data);
    alert('¡Propiedad registrada exitosamente!');
  };

  const handleFormSave = (data: any) => {
    console.log('Borrador guardado:', data);
    alert('Borrador guardado exitosamente');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <FormPropiedades
        onComplete={handleFormComplete}
        onSave={handleFormSave}
      />
    </div>
  );
};

export default FormPropiedadesExample;
