import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp5Schema, FormProp5Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { 
  Wifi, 
  Droplets, 
  Zap, 
  Flame, 
  Shield, 
  Car, 
  Plus,
  Minus,
  AlertCircle,
  ArrowRight
} from 'lucide-react';

interface FormProp5Props extends FormStepProps {
  data: FormProp5Input;
}

export const FormProp5: React.FC<FormProp5Props> = ({ 
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
    watch,
    setValue
  } = useForm<FormProp5Input>({
    resolver: zodResolver(formProp5Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const watchedData = watch();

  const onSubmit = (formData: FormProp5Input) => {
    onChange(formData);
    onNext();
  };

  const toggleService = (service: keyof FormProp5Input['serviciosBasicos']) => {
    const currentValue = watchedData.serviciosBasicos[service];
    setValue(`serviciosBasicos.${service}`, !currentValue, { shouldDirty: true });
  };

  const toggleAmenity = (amenity: keyof FormProp5Input['amenidades']) => {
    const currentValue = watchedData.amenidades[amenity];
    setValue(`amenidades.${amenity}`, !currentValue, { shouldDirty: true });
  };

  const addAreaComun = () => {
    const newArea = prompt('Ingrese el nombre del área común:');
    if (newArea && newArea.trim()) {
      const currentAreas = watchedData.areasComunes || [];
      if (!currentAreas.includes(newArea.trim())) {
        setValue('areasComunes', [...currentAreas, newArea.trim()], { shouldDirty: true });
      }
    }
  };

  const removeAreaComun = (index: number) => {
    const currentAreas = watchedData.areasComunes || [];
    const newAreas = currentAreas.filter((_, i) => i !== index);
    setValue('areasComunes', newAreas, { shouldDirty: true });
  };

  const serviciosBasicos = [
    { key: 'agua', label: 'Agua', icon: Droplets },
    { key: 'luz', label: 'Luz', icon: Zap },
    { key: 'gas', label: 'Gas', icon: Flame },
    { key: 'cloacas', label: 'Cloacas', icon: Droplets },
    { key: 'internet', label: 'Internet', icon: Wifi },
    { key: 'telefono', label: 'Teléfono', icon: Wifi }
  ] as const;

  const amenidades = [
    { key: 'piscina', label: 'Piscina', icon: Droplets },
    { key: 'gimnasio', label: 'Gimnasio', icon: Shield },
    { key: 'seguridad', label: 'Seguridad 24hs', icon: Shield },
    { key: 'ascensor', label: 'Ascensor', icon: ArrowRight },
    { key: 'balcon', label: 'Balcón', icon: ArrowRight },
    { key: 'terraza', label: 'Terraza', icon: ArrowRight },
    { key: 'jardin', label: 'Jardín', icon: ArrowRight },
    { key: 'parrilla', label: 'Parrilla', icon: Flame },
    { key: 'garage', label: 'Garage', icon: Car },
    { key: 'cochera', label: 'Cochera', icon: Car }
  ] as const;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-full mr-4">
          <Shield className="w-6 h-6 text-indigo-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Servicios y Amenidades</h2>
          <p className="text-gray-600">Paso 5 de 6 - Especifica los servicios y comodidades disponibles</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Servicios Básicos */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-gray-500" />
            Servicios Básicos
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {serviciosBasicos.map(({ key, label, icon: Icon }) => (
              <div key={key} className="flex items-center">
                <button
                  type="button"
                  onClick={() => toggleService(key)}
                  className={`flex items-center p-3 rounded-lg border-2 transition-colors ${
                    watchedData.serviciosBasicos[key]
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Amenidades */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-gray-500" />
            Amenidades
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {amenidades.map(({ key, label, icon: Icon }) => (
              <div key={key} className="flex items-center">
                <button
                  type="button"
                  onClick={() => toggleAmenity(key)}
                  className={`flex items-center p-3 rounded-lg border-2 transition-colors ${
                    watchedData.amenidades[key]
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-gray-300 bg-white text-gray-700 hover:border-indigo-300'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Estacionamiento */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Car className="w-5 h-5 mr-2 text-gray-500" />
            Estacionamiento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cantidad de Estacionamientos
              </label>
              <Controller
                name="estacionamiento.cantidad"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="number"
                    min="0"
                    max="20"
                    placeholder="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value) : 0)}
                  />
                )}
              />
              {errors.estacionamiento?.cantidad && (
                <p className="mt-1 text-sm text-red-600">{errors.estacionamiento.cantidad.message}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Estacionamiento
              </label>
              <Controller
                name="estacionamiento.tipo"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Seleccione un tipo</option>
                    <option value="Cubierto">Cubierto</option>
                    <option value="Descubierto">Descubierto</option>
                    <option value="Mixto">Mixto</option>
                  </select>
                )}
              />
              {errors.estacionamiento?.tipo && (
                <p className="mt-1 text-sm text-red-600">{errors.estacionamiento.tipo.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Áreas Comunes */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Plus className="w-5 h-5 mr-2 text-gray-500" />
            Áreas Comunes
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={addAreaComun}
                className="flex items-center px-3 py-2 text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors"
              >
                <Plus className="w-4 h-4 mr-1" />
                Agregar Área Común
              </button>
            </div>
            
            {watchedData.areasComunes && watchedData.areasComunes.length > 0 && (
              <div className="space-y-2">
                {watchedData.areasComunes.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm text-gray-700">{area}</span>
                    <button
                      type="button"
                      onClick={() => removeAreaComun(index)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            
            {(!watchedData.areasComunes || watchedData.areasComunes.length === 0) && (
              <p className="text-sm text-gray-500 italic">
                No hay áreas comunes agregadas. Haz clic en "Agregar Área Común" para añadir una.
              </p>
            )}
          </div>
        </div>

        {/* Resumen de servicios seleccionados */}
        {(Object.values(watchedData.serviciosBasicos).some(Boolean) || 
          Object.values(watchedData.amenidades).some(Boolean) || 
          watchedData.estacionamiento.cantidad > 0) && (
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Servicios y amenidades seleccionados:</h4>
            <div className="space-y-1 text-sm text-gray-600">
              {Object.entries(watchedData.serviciosBasicos)
                .filter(([_, selected]) => selected)
                .map(([key, _]) => (
                  <div key={key} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    {serviciosBasicos.find(s => s.key === key)?.label}
                  </div>
                ))}
              {Object.entries(watchedData.amenidades)
                .filter(([_, selected]) => selected)
                .map(([key, _]) => (
                  <div key={key} className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                    {amenidades.find(a => a.key === key)?.label}
                  </div>
                ))}
              {watchedData.estacionamiento.cantidad > 0 && (
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                  {watchedData.estacionamiento.cantidad} estacionamiento(s) {watchedData.estacionamiento.tipo?.toLowerCase()}
                </div>
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
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
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
