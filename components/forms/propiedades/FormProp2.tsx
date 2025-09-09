import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp2Schema, FormProp2Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { MapPin, Navigation, AlertCircle } from 'lucide-react';

interface FormProp2Props extends FormStepProps {
  data: FormProp2Input;
}

export const FormProp2: React.FC<FormProp2Props> = ({ 
  data, 
  onChange, 
  onNext, 
  onPrevious, 
  isLoading = false, 
  error = null 
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch
  } = useForm<FormProp2Input>({
    resolver: zodResolver(formProp2Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const watchedData = watch();

  const onSubmit = (formData: FormProp2Input) => {
    onChange(formData);
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mr-4">
          <MapPin className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Ubicación</h2>
          <p className="text-gray-600">Paso 2 de 6 - Especifica la ubicación exacta de la propiedad</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* País */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            País *
          </label>
          <Controller
            name="pais"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Argentina"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.pais && (
            <p className="mt-1 text-sm text-red-600">{errors.pais.message}</p>
          )}
        </div>

        {/* Estado/Provincia */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estado/Provincia *
          </label>
          <Controller
            name="estado"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: Córdoba, Buenos Aires, Santa Fe"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.estado && (
            <p className="mt-1 text-sm text-red-600">{errors.estado.message}</p>
          )}
        </div>

        {/* Ciudad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ciudad *
          </label>
          <Controller
            name="ciudad"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: Córdoba, Villa María, Río Cuarto"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.ciudad && (
            <p className="mt-1 text-sm text-red-600">{errors.ciudad.message}</p>
          )}
        </div>

        {/* Dirección */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dirección Completa *
          </label>
          <Controller
            name="direccion"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: Av. Colón 1234, Barrio Centro"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.direccion && (
            <p className="mt-1 text-sm text-red-600">{errors.direccion.message}</p>
          )}
        </div>

        {/* Código Postal */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Código Postal *
          </label>
          <Controller
            name="codigoPostal"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: 5000, 5001"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.codigoPostal && (
            <p className="mt-1 text-sm text-red-600">{errors.codigoPostal.message}</p>
          )}
        </div>

        {/* Zona/Barrio */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zona/Barrio *
          </label>
          <Controller
            name="zona"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: Centro, Nueva Córdoba, Barrio Norte"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            )}
          />
          {errors.zona && (
            <p className="mt-1 text-sm text-red-600">{errors.zona.message}</p>
          )}
        </div>

        {/* Coordenadas GPS (Opcional) */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Navigation className="w-5 h-5 mr-2 text-gray-500" />
            Coordenadas GPS (Opcional)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Latitud
              </label>
              <Controller
                name="coordenadas.lat"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    step="any"
                    placeholder="Ej: -31.4201"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                  />
                )}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Longitud
              </label>
              <Controller
                name="coordenadas.lng"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    step="any"
                    placeholder="Ej: -64.1888"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                  />
                )}
              />
            </div>
          </div>
          
          <p className="mt-2 text-sm text-gray-500">
            Las coordenadas GPS ayudan a mostrar la ubicación exacta en el mapa
          </p>
        </div>

        {/* Botones de navegación */}
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onPrevious}
            disabled={isLoading}
            className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>
          
          <button
            type="submit"
            disabled={!isValid || isLoading}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                Siguiente
                <Navigation className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
