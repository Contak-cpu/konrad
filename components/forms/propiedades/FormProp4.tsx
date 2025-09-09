import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp4Schema, FormProp4Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { MONEDAS_OPTIONS } from './types/propiedades.types';
import { 
  DollarSign, 
  CreditCard, 
  Percent, 
  FileText, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface FormProp4Props extends FormStepProps {
  data: FormProp4Input;
}

export const FormProp4: React.FC<FormProp4Props> = ({ 
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
  } = useForm<FormProp4Input>({
    resolver: zodResolver(formProp4Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const watchedData = watch();

  const onSubmit = (formData: FormProp4Input) => {
    onChange(formData);
    onNext();
  };

  const formatCurrency = (value: number, currency: string) => {
    const formatter = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currency === 'USD' ? 'USD' : currency === 'EUR' ? 'EUR' : 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    return formatter.format(value);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mr-4">
          <DollarSign className="w-6 h-6 text-yellow-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Precio y Condiciones</h2>
          <p className="text-gray-600">Paso 4 de 6 - Define el precio y condiciones financieras</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Precio Principal */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-gray-500" />
            Precio Principal
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Precio *
              </label>
              <Controller
                name="precio"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="100000000"
                    placeholder="Ej: 500000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.precio && (
                <p className="mt-1 text-sm text-red-600">{errors.precio.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Moneda *
              </label>
              <Controller
                name="moneda"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Seleccione una moneda</option>
                    {MONEDAS_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.moneda && (
                <p className="mt-1 text-sm text-red-600">{errors.moneda.message}</p>
              )}
            </div>
          </div>
          
          {watchedData.precio > 0 && watchedData.moneda && (
            <div className="mt-3 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Precio formateado:</strong> {formatCurrency(watchedData.precio, watchedData.moneda)}
              </p>
            </div>
          )}
        </div>

        {/* Gastos Adicionales */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-gray-500" />
            Gastos Adicionales
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gastos Adicionales (Opcional)
              </label>
              <Controller
                name="gastosAdicionales"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="10000000"
                    placeholder="Ej: 50000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                  />
                )}
              />
              {errors.gastosAdicionales && (
                <p className="mt-1 text-sm text-red-600">{errors.gastosAdicionales.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción de Gastos Adicionales
              </label>
              <Controller
                name="gastosAdicionalesDescripcion"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Ej: Escritura, impuestos, comisiones"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                )}
              />
              {errors.gastosAdicionalesDescripcion && (
                <p className="mt-1 text-sm text-red-600">{errors.gastosAdicionalesDescripcion.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Términos de Pago */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-gray-500" />
            Términos de Pago
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Términos de Pago *
            </label>
            <Controller
              name="terminosPago"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  rows={3}
                  placeholder="Ej: Contado, financiación bancaria, plan de pagos, etc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 resize-none"
                />
              )}
            />
            {errors.terminosPago && (
              <p className="mt-1 text-sm text-red-600">{errors.terminosPago.message}</p>
            )}
          </div>
        </div>

        {/* Comisiones */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Percent className="w-5 h-5 mr-2 text-gray-500" />
            Comisiones
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Comisiones (%) (Opcional)
              </label>
              <Controller
                name="comisiones"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    placeholder="Ej: 3.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    onChange={(e) => field.onChange(e.target.value ? parseFloat(e.target.value) : undefined)}
                  />
                )}
              />
              {errors.comisiones && (
                <p className="mt-1 text-sm text-red-600">{errors.comisiones.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Descripción de Comisiones
              </label>
              <Controller
                name="comisionesDescripcion"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    placeholder="Ej: Comisión inmobiliaria, gastos de gestión"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                )}
              />
              {errors.comisionesDescripcion && (
                <p className="mt-1 text-sm text-red-600">{errors.comisionesDescripcion.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Resumen de precios */}
        {watchedData.precio > 0 && (
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Resumen de precios:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Precio base:</span>
                <span className="font-medium">
                  {formatCurrency(watchedData.precio, watchedData.moneda || 'ARS')}
                </span>
              </div>
              {watchedData.gastosAdicionales && watchedData.gastosAdicionales > 0 && (
                <div className="flex justify-between">
                  <span>Gastos adicionales:</span>
                  <span className="font-medium">
                    {formatCurrency(watchedData.gastosAdicionales, watchedData.moneda || 'ARS')}
                  </span>
                </div>
              )}
              <div className="border-t pt-1 flex justify-between font-semibold">
                <span>Total estimado:</span>
                <span>
                  {formatCurrency(
                    watchedData.precio + (watchedData.gastosAdicionales || 0), 
                    watchedData.moneda || 'ARS'
                  )}
                </span>
              </div>
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
            className="px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
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
