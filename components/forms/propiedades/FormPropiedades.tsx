import React, { useState, useEffect } from 'react';
import { usePropiedadForm } from './hooks/usePropiedadForm';
import { FormProp1 } from './FormProp1';
import { FormProp2 } from './FormProp2';
import { FormProp3 } from './FormProp3';
import { FormProp4 } from './FormProp4';
import { FormProp5 } from './FormProp5';
import { FormProp6 } from './FormProp6';
import { 
  CheckCircle, 
  Circle, 
  Save, 
  AlertCircle, 
  Home,
  MapPin,
  Ruler,
  DollarSign,
  Shield,
  Image,
  ArrowLeft,
  ArrowRight,
  Loader2
} from 'lucide-react';

interface FormPropiedadesProps {
  onComplete?: (data: any) => void;
  onSave?: (data: any) => void;
  initialData?: any;
}

const stepIcons = [
  { icon: Home, label: 'Información Básica', color: 'blue' },
  { icon: MapPin, label: 'Ubicación', color: 'green' },
  { icon: Ruler, label: 'Características', color: 'purple' },
  { icon: DollarSign, label: 'Precio', color: 'yellow' },
  { icon: Shield, label: 'Servicios', color: 'indigo' },
  { icon: Image, label: 'Multimedia', color: 'pink' }
];

export const FormPropiedades: React.FC<FormPropiedadesProps> = ({
  onComplete,
  onSave,
  initialData
}) => {
  const {
    formState,
    formData,
    currentStep,
    goToStep,
    nextStepWithValidation,
    previousStep,
    saveAsDraft,
    submitForm,
    resetForm,
    isLoading,
    error
  } = usePropiedadForm();

  const [showSuccess, setShowSuccess] = useState(false);
  const [lastAutoSave, setLastAutoSave] = useState<Date | null>(null);

  // Auto-save cada 30 segundos
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (formState.isDirty) {
        saveAsDraft();
        setLastAutoSave(new Date());
      }
    }, 30000);

    return () => clearInterval(autoSaveInterval);
  }, [formState.isDirty, saveAsDraft]);

  const handleStepClick = (step: number) => {
    if (step <= currentStep || step === currentStep + 1) {
      goToStep(step);
    }
  };

  const handleNext = async () => {
    if (currentStep < 6) {
      await nextStepWithValidation();
    } else {
      await handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      previousStep();
    }
  };

  const handleSubmit = async () => {
    const result = await submitForm();
    if (result) {
      setShowSuccess(true);
      onComplete?.(result);
      setTimeout(() => {
        setShowSuccess(false);
        resetForm();
      }, 3000);
    }
  };

  const handleSaveDraft = async () => {
    await saveAsDraft();
    onSave?.(formData);
  };

  const getStepData = (step: number) => {
    const stepKey = `form${step}` as keyof typeof formData;
    return formData[stepKey];
  };

  const renderCurrentStep = () => {
    const stepData = getStepData(currentStep);
    
    const commonProps = {
      data: stepData,
      onChange: (data: any) => {
        // El hook maneja la actualización automáticamente
      },
      onNext: handleNext,
      onPrevious: handlePrevious,
      isLoading,
      error
    };

    switch (currentStep) {
      case 1:
        return <FormProp1 {...commonProps} />;
      case 2:
        return <FormProp2 {...commonProps} />;
      case 3:
        return <FormProp3 {...commonProps} />;
      case 4:
        return <FormProp4 {...commonProps} />;
      case 5:
        return <FormProp5 {...commonProps} />;
      case 6:
        return <FormProp6 {...commonProps} />;
      default:
        return <FormProp1 {...commonProps} />;
    }
  };

  if (showSuccess) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg text-center">
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Formulario Completado!
        </h2>
        <p className="text-gray-600 mb-4">
          La propiedad ha sido registrada exitosamente.
        </p>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Registro de Propiedad Inmobiliaria
          </h1>
          <p className="text-gray-600">
            Completa todos los pasos para registrar tu propiedad
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                Progreso: {Math.round((currentStep / 6) * 100)}%
              </span>
            </div>
            {lastAutoSave && (
              <div className="text-xs text-gray-500">
                Último guardado: {lastAutoSave.toLocaleTimeString()}
              </div>
            )}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step Navigation */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {stepIcons.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isAccessible = stepNumber <= currentStep || stepNumber === currentStep + 1;
              
              const Icon = step.icon;
              const colorClasses = {
                blue: 'text-blue-600',
                green: 'text-green-600',
                purple: 'text-purple-600',
                yellow: 'text-yellow-600',
                indigo: 'text-indigo-600',
                pink: 'text-pink-600'
              };

              return (
                <div
                  key={stepNumber}
                  className={`flex flex-col items-center cursor-pointer transition-all ${
                    isAccessible ? 'hover:scale-105' : 'opacity-50 cursor-not-allowed'
                  }`}
                  onClick={() => isAccessible && handleStepClick(stepNumber)}
                >
                  <div className={`relative mb-2 ${
                    isCompleted ? 'text-green-600' : 
                    isCurrent ? colorClasses[step.color as keyof typeof colorClasses] : 
                    'text-gray-400'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                        isCurrent ? `border-${step.color}-600 bg-${step.color}-50` : 'border-gray-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    )}
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white ${
                      isCompleted ? 'bg-green-600' : 
                      isCurrent ? `bg-${step.color}-600` : 
                      'bg-gray-400'
                    }`}>
                      {stepNumber}
                    </div>
                  </div>
                  <span className={`text-xs font-medium text-center ${
                    isCurrent ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
            <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
            <span className="text-red-700">{error}</span>
          </div>
        )}

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {renderCurrentStep()}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={handleSaveDraft}
              disabled={isLoading || !formState.isDirty}
              className="flex items-center px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Save className="w-4 h-4 mr-2" />
              Guardar Borrador
            </button>
            
            <button
              onClick={resetForm}
              disabled={isLoading}
              className="px-4 py-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Limpiar Formulario
            </button>
          </div>

          <div className="flex space-x-4">
            {currentStep > 1 && (
              <button
                onClick={handlePrevious}
                disabled={isLoading}
                className="flex items-center px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </button>
            )}
            
            <button
              onClick={handleNext}
              disabled={isLoading || !formState.isValid}
              className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Procesando...
                </>
              ) : currentStep === 6 ? (
                <>
                  Finalizar
                  <CheckCircle className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  Siguiente
                  <ArrowRight className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Form Status */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${
                formState.isDirty ? 'bg-yellow-400' : 'bg-gray-300'
              }`}></div>
              {formState.isDirty ? 'Cambios sin guardar' : 'Todo guardado'}
            </div>
            <div className="flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${
                formState.isValid ? 'bg-green-400' : 'bg-red-400'
              }`}></div>
              {formState.isValid ? 'Formulario válido' : 'Hay errores'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
