import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formProp6Schema, FormProp6Input } from './schemas/propiedades.schemas';
import { FormStepProps } from './types/propiedades.types';
import { 
  Upload, 
  Image, 
  Video, 
  FileText, 
  X, 
  Plus, 
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface FormProp6Props extends FormStepProps {
  data: FormProp6Input;
}

export const FormProp6: React.FC<FormProp6Props> = ({ 
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
  } = useForm<FormProp6Input>({
    resolver: zodResolver(formProp6Schema),
    defaultValues: data,
    mode: 'onChange'
  });

  const watchedData = watch();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const planosInputRef = useRef<HTMLInputElement>(null);
  const documentosInputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (formData: FormProp6Input) => {
    onChange(formData);
    onNext();
  };

  const handleFileUpload = (files: FileList, type: 'imagenes' | 'planos' | 'documentos') => {
    const fileArray = Array.from(files);
    const currentFiles = watchedData[type] || [];
    const newFiles = [...currentFiles, ...fileArray];
    
    // Limitar cantidad de archivos según el tipo
    const maxFiles = type === 'imagenes' ? 20 : type === 'planos' ? 5 : 10;
    const limitedFiles = newFiles.slice(0, maxFiles);
    
    setValue(type, limitedFiles, { shouldDirty: true });
    
    // Crear previews para imágenes
    if (type === 'imagenes') {
      const previews = limitedFiles.map(file => URL.createObjectURL(file));
      setValue('imagenesPreview', previews, { shouldDirty: true });
    }
  };

  const removeFile = (index: number, type: 'imagenes' | 'planos' | 'documentos') => {
    const currentFiles = watchedData[type] || [];
    const newFiles = currentFiles.filter((_, i) => i !== index);
    setValue(type, newFiles, { shouldDirty: true });
    
    if (type === 'imagenes') {
      const newPreviews = watchedData.imagenesPreview?.filter((_, i) => i !== index) || [];
      setValue('imagenesPreview', newPreviews, { shouldDirty: true });
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files, 'imagenes');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 bg-pink-100 rounded-full mr-4">
          <Image className="w-6 h-6 text-pink-600" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Multimedia</h2>
          <p className="text-gray-600">Paso 6 de 6 - Sube imágenes, videos y documentos de la propiedad</p>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
          <span className="text-red-700">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Imágenes */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Image className="w-5 h-5 mr-2 text-gray-500" />
            Imágenes de la Propiedad *
          </h3>
          
          <div
            className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
              dragActive
                ? 'border-pink-500 bg-pink-50'
                : 'border-gray-300 hover:border-pink-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              Arrastra y suelta las imágenes aquí
            </p>
            <p className="text-gray-500 mb-4">
              o haz clic para seleccionar archivos
            </p>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Seleccionar Imágenes
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'imagenes')}
              className="hidden"
            />
            <p className="text-sm text-gray-400 mt-2">
              Máximo 20 imágenes. Formatos: JPG, PNG, GIF
            </p>
          </div>
          
          {errors.imagenes && (
            <p className="mt-2 text-sm text-red-600">{errors.imagenes.message}</p>
          )}
          
          {/* Preview de imágenes */}
          {watchedData.imagenesPreview && watchedData.imagenesPreview.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Imágenes seleccionadas ({watchedData.imagenesPreview.length})
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {watchedData.imagenesPreview.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeFile(index, 'imagenes')}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute bottom-1 left-1 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                      {watchedData.imagenes?.[index]?.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Video Tour */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <Video className="w-5 h-5 mr-2 text-gray-500" />
            Video Tour (Opcional)
          </h3>
          
          <Controller
            name="videoTour"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="url"
                placeholder="https://www.youtube.com/watch?v=..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
            )}
          />
          {errors.videoTour && (
            <p className="mt-1 text-sm text-red-600">{errors.videoTour.message}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            URL del video tour (YouTube, Vimeo, etc.)
          </p>
        </div>

        {/* Planos */}
        <div className="border-b pb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-gray-500" />
            Planos (Opcional)
          </h3>
          
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => planosInputRef.current?.click()}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Planos
            </button>
            <input
              ref={planosInputRef}
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'planos')}
              className="hidden"
            />
            
            {watchedData.planos && watchedData.planos.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Planos seleccionados ({watchedData.planos.length})
                </h4>
                {watchedData.planos.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index, 'planos')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Documentos */}
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-gray-500" />
            Documentos Adicionales (Opcional)
          </h3>
          
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => documentosInputRef.current?.click()}
              className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar Documentos
            </button>
            <input
              ref={documentosInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.txt"
              onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'documentos')}
              className="hidden"
            />
            
            {watchedData.documentos && watchedData.documentos.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-gray-700">
                  Documentos seleccionados ({watchedData.documentos.length})
                </h4>
                {watchedData.documentos.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 text-gray-500 mr-2" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index, 'documentos')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Resumen de archivos */}
        {(watchedData.imagenes?.length || 0) + (watchedData.planos?.length || 0) + (watchedData.documentos?.length || 0) > 0 && (
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
              Archivos seleccionados
            </h4>
            <div className="space-y-1 text-sm text-gray-600">
              {watchedData.imagenes && watchedData.imagenes.length > 0 && (
                <div>Imágenes: {watchedData.imagenes.length}</div>
              )}
              {watchedData.planos && watchedData.planos.length > 0 && (
                <div>Planos: {watchedData.planos.length}</div>
              )}
              {watchedData.documentos && watchedData.documentos.length > 0 && (
                <div>Documentos: {watchedData.documentos.length}</div>
              )}
              {watchedData.videoTour && (
                <div>Video tour: Configurado</div>
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
            className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Guardando...
              </>
            ) : (
              <>
                Finalizar
                <CheckCircle className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
