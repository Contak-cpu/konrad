import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp1Schema, FormProp1Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { TIPOS_PROPIEDAD_OPTIONS, ESTADOS_PROPIEDAD_OPTIONS } from './types/propiedades.types';
import { Home, FileText, AlertCircle } from 'lucide-react';

interface FormProp1Props extends FormStepProps {
  data: FormProp1Input;
}

export const FormProp1: React.FC<FormProp1Props> = ({ 
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
    formState: { errors, isValid }
  } = useForm<FormProp1Input>({
    resolver: zodResolver(formProp1Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const onSubmit = (formData: FormProp1Input) => {
    onChange(formData);
    onNext();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mr-4">
          <Home className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Información Básica</h2>
          <p className="text-gray-600">Paso 1 de 6 - Define los datos principales de la propiedad</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Tipo de Propiedad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Propiedad *
          </label>
          <Controller
            name="tipoPropiedad"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleccione un tipo</option>
                {TIPOS_PROPIEDAD_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.tipoPropiedad && (
            <p className="mt-1 text-sm text-red-600">{errors.tipoPropiedad.message}</p>
          )}
        </div>

        {/* Título */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Título de la Propiedad *
          </label>
          <Controller
            name="titulo"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                placeholder="Ej: Hermosa casa familiar en zona residencial"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            )}
          />
          {errors.titulo && (
            <p className="mt-1 text-sm text-red-600">{errors.titulo.message}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción *
          </label>
          <Controller
            name="descripcion"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                rows={4}
                placeholder="Describe las características principales de la propiedad, su ubicación, y qué la hace especial..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              />
            )}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.descripcion ? (
              <p className="text-sm text-red-600">{errors.descripcion.message}</p>
            ) : (
              <p className="text-sm text-gray-500">
                Mínimo 20 caracteres, máximo 1000
              </p>
            )}
            <span className="text-sm text-gray-400">
              {data.descripcion?.length || 0}/1000
            </span>
          </div>
        </div>

        {/* Estado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estado de la Propiedad *
          </label>
          <Controller
            name="estado"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Seleccione un estado</option>
                {ESTADOS_PROPIEDAD_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.estado && (
            <p className="mt-1 text-sm text-red-600">{errors.estado.message}</p>
          )}
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
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                Siguiente
                <FileText className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
