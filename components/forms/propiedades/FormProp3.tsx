import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp3Schema, FormProp3Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { 
  ESTADOS_CONSERVACION_OPTIONS, 
  TIPOS_CONSTRUCCION_OPTIONS 
} from './types/propiedades.types';
import { 
  Ruler, 
  Home, 
  Bath, 
  Layers, 
  Calendar, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface FormProp3Props extends FormStepProps {
  data: FormProp3Input;
}

export const FormProp3: React.FC<FormProp3Props> = ({ 
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
  } = useForm<FormProp3Input>({
    resolver: zodResolver(formProp3Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const watchedData = watch();

  const onSubmit = (formData: FormProp3Input) => {
    onChange(formData);
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mr-4">
          <Ruler className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Características Físicas</h2>
          <p className="text-gray-600">Paso 3 de 6 - Define las dimensiones y características de la propiedad</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Superficies */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Ruler className="w-5 h-5 mr-2 text-gray-500" />
            Superficies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Superficie Total (m²) *
              </label>
              <Controller
                name="superficieTotal"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="1"
                    max="10000"
                    placeholder="Ej: 150"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.superficieTotal && (
                <p className="mt-1 text-sm text-red-600">{errors.superficieTotal.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Superficie Construida (m²) *
              </label>
              <Controller
                name="superficieConstruida"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="1"
                    max="10000"
                    placeholder="Ej: 120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.superficieConstruida && (
                <p className="mt-1 text-sm text-red-600">{errors.superficieConstruida.message}</p>
              )}
            </div>
          </div>
          
          {watchedData.superficieTotal > 0 && watchedData.superficieConstruida > 0 && (
            <div className="mt-3 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Superficie libre:</strong> {watchedData.superficieTotal - watchedData.superficieConstruida} m²
              </p>
            </div>
          )}
        </div>

        {/* Ambientes */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Home className="w-5 h-5 mr-2 text-gray-500" />
            Ambientes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Habitaciones *
              </label>
              <Controller
                name="habitaciones"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="20"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.habitaciones && (
                <p className="mt-1 text-sm text-red-600">{errors.habitaciones.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Baños *
              </label>
              <Controller
                name="banos"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="10"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.banos && (
                <p className="mt-1 text-sm text-red-600">{errors.banos.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pisos *
              </label>
              <Controller
                name="pisos"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="1"
                    max="50"
                    placeholder="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 1)}
                  />
                )}
              />
              {errors.pisos && (
                <p className="mt-1 text-sm text-red-600">{errors.pisos.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Características de Construcción */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Layers className="w-5 h-5 mr-2 text-gray-500" />
            Características de Construcción
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Antigüedad (años) *
              </label>
              <Controller
                name="antiguedad"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="200"
                    placeholder="Ej: 5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.antiguedad && (
                <p className="mt-1 text-sm text-red-600">{errors.antiguedad.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estado de Conservación *
              </label>
              <Controller
                name="estadoConservacion"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  >
                    <option value="">Seleccione un estado</option>
                    {ESTADOS_CONSERVACION_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.estadoConservacion && (
                <p className="mt-1 text-sm text-red-600">{errors.estadoConservacion.message}</p>
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Construcción *
            </label>
            <Controller
              name="tipoConstruccion"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Seleccione un tipo</option>
                  {TIPOS_CONSTRUCCION_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.tipoConstruccion && (
              <p className="mt-1 text-sm text-red-600">{errors.tipoConstruccion.message}</p>
            )}
          </div>
        </div>

        {/* Resumen de características */}
        {(watchedData.superficieTotal > 0 || watchedData.habitaciones > 0 || watchedData.banos > 0) && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Resumen de características:</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-gray-600">
              {watchedData.superficieTotal > 0 && (
                <div>Total: {watchedData.superficieTotal} m²</div>
              )}
              {watchedData.superficieConstruida > 0 && (
                <div>Construido: {watchedData.superficieConstruida} m²</div>
              )}
              {watchedData.habitaciones > 0 && (
                <div>Habitaciones: {watchedData.habitaciones}</div>
              )}
              {watchedData.banos > 0 && (
                <div>Baños: {watchedData.banos}</div>
              )}
            </div>
          </div>
        )}

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
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                Siguiente
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
