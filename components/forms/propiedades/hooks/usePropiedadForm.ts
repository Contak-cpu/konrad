import { useState, useEffect, useCallback } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  PropiedadFormData, 
  FormState, 
  FormProp1Data,
  FormProp2Data,
  FormProp3Data,
  FormProp4Data,
  FormProp5Data,
  FormProp6Data
} from '../types/propiedades.types';
import { 
  propiedadFormSchema, 
  propiedadFormDraftSchema,
  formProp1Schema,
  formProp2Schema,
  formProp3Schema,
  formProp4Schema,
  formProp5Schema,
  formProp6Schema
} from '../schemas/propiedades.schemas';

const STORAGE_KEY = 'propiedad-form-data';
const AUTO_SAVE_INTERVAL = 30000; // 30 segundos

// Datos iniciales por defecto
const defaultFormData: PropiedadFormData = {
  form1: {
    tipoPropiedad: 'Casa' as any,
    titulo: '',
    descripcion: '',
    estado: 'Venta' as any
  },
  form2: {
    pais: 'Argentina',
    estado: '',
    ciudad: '',
    direccion: '',
    codigoPostal: '',
    zona: ''
  },
  form3: {
    superficieTotal: 0,
    superficieConstruida: 0,
    habitaciones: 0,
    banos: 0,
    pisos: 1,
    antiguedad: 0,
    estadoConservacion: 'Bueno' as any,
    tipoConstruccion: 'Ladrillo' as any
  },
  form4: {
    precio: 0,
    moneda: 'ARS' as any,
    terminosPago: ''
  },
  form5: {
    serviciosBasicos: {
      agua: false,
      luz: false,
      gas: false,
      cloacas: false,
      internet: false,
      telefono: false
    },
    amenidades: {
      piscina: false,
      gimnasio: false,
      seguridad: false,
      ascensor: false,
      balcon: false,
      terraza: false,
      jardin: false,
      parrilla: false,
      garage: false,
      cochera: false
    },
    estacionamiento: {
      cantidad: 0,
      tipo: 'Descubierto' as any
    },
    areasComunes: []
  },
  form6: {
    imagenes: [],
    imagenesPreview: []
  }
};

export const usePropiedadForm = () => {
  const [formState, setFormState] = useState<FormState>({
    currentStep: 1,
    isDirty: false,
    isValid: false,
    isLoading: false,
    error: null,
    lastSaved: null
  });

  // Cargar datos guardados del localStorage
  const loadSavedData = useCallback((): PropiedadFormData => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultFormData, ...parsed };
      }
    } catch (error) {
      console.error('Error al cargar datos guardados:', error);
    }
    return defaultFormData;
  }, []);

  // Configurar React Hook Form
  const form = useForm<PropiedadFormData>({
    resolver: zodResolver(propiedadFormSchema),
    defaultValues: loadSavedData(),
    mode: 'onChange'
  });

  const { watch, setValue, getValues, formState: { isDirty, isValid } } = form;

  // Observar cambios en el formulario
  const watchedData = watch();

  // Actualizar estado del formulario
  useEffect(() => {
    setFormState(prev => ({
      ...prev,
      isDirty,
      isValid,
      error: null
    }));
  }, [isDirty, isValid]);

  // Auto-guardado
  useEffect(() => {
    if (!isDirty) return;

    const autoSaveTimer = setInterval(() => {
      saveToLocalStorage();
    }, AUTO_SAVE_INTERVAL);

    return () => clearInterval(autoSaveTimer);
  }, [isDirty, watchedData]);

  // Guardar en localStorage
  const saveToLocalStorage = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchedData));
      setFormState(prev => ({
        ...prev,
        lastSaved: new Date()
      }));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [watchedData]);

  // Navegación entre pasos
  const goToStep = useCallback((step: number) => {
    if (step >= 1 && step <= 6) {
      setFormState(prev => ({
        ...prev,
        currentStep: step,
        error: null
      }));
    }
  }, []);

  const nextStep = useCallback(() => {
    if (formState.currentStep < 6) {
      goToStep(formState.currentStep + 1);
    }
  }, [formState.currentStep, goToStep]);

  const previousStep = useCallback(() => {
    if (formState.currentStep > 1) {
      goToStep(formState.currentStep - 1);
    }
  }, [formState.currentStep, goToStep]);

  // Validar paso actual
  const validateCurrentStep = useCallback(async (): Promise<boolean> => {
    const currentData = getValues();
    let isValid = false;

    try {
      switch (formState.currentStep) {
        case 1:
          await formProp1Schema.parseAsync(currentData.form1);
          isValid = true;
          break;
        case 2:
          await formProp2Schema.parseAsync(currentData.form2);
          isValid = true;
          break;
        case 3:
          await formProp3Schema.parseAsync(currentData.form3);
          isValid = true;
          break;
        case 4:
          await formProp4Schema.parseAsync(currentData.form4);
          isValid = true;
          break;
        case 5:
          await formProp5Schema.parseAsync(currentData.form5);
          isValid = true;
          break;
        case 6:
          await formProp6Schema.parseAsync(currentData.form6);
          isValid = true;
          break;
        default:
          isValid = false;
      }
    } catch (error) {
      console.error('Error de validación:', error);
      setFormState(prev => ({
        ...prev,
        error: 'Hay errores en el formulario actual'
      }));
    }

    return isValid;
  }, [formState.currentStep, getValues]);

  // Avanzar al siguiente paso con validación
  const nextStepWithValidation = useCallback(async () => {
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const isValid = await validateCurrentStep();
      if (isValid) {
        saveToLocalStorage();
        nextStep();
      }
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: 'Error al validar el formulario'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  }, [validateCurrentStep, nextStep, saveToLocalStorage]);

  // Guardar como borrador
  const saveAsDraft = useCallback(async () => {
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Validar con schema de borrador (más permisivo)
      await propiedadFormDraftSchema.parseAsync(watchedData);
      saveToLocalStorage();
      setFormState(prev => ({
        ...prev,
        error: null
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: 'Error al guardar el borrador'
      }));
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  }, [watchedData, saveToLocalStorage]);

  // Enviar formulario completo
  const submitForm = useCallback(async (): Promise<PropiedadFormData | null> => {
    setFormState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // Validar formulario completo
      const validatedData = await propiedadFormSchema.parseAsync(watchedData);
      
      // Aquí se enviaría a la API
      console.log('Datos del formulario validados:', validatedData);
      
      // Limpiar localStorage después del envío exitoso
      localStorage.removeItem(STORAGE_KEY);
      
      setFormState(prev => ({
        ...prev,
        error: null,
        lastSaved: new Date()
      }));

      return validatedData;
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        error: 'Error al enviar el formulario. Verifique todos los campos.'
      }));
      return null;
    } finally {
      setFormState(prev => ({ ...prev, isLoading: false }));
    }
  }, [watchedData]);

  // Limpiar formulario
  const resetForm = useCallback(() => {
    form.reset(defaultFormData);
    localStorage.removeItem(STORAGE_KEY);
    setFormState({
      currentStep: 1,
      isDirty: false,
      isValid: false,
      isLoading: false,
      error: null,
      lastSaved: null
    });
  }, [form]);

  // Actualizar datos de un paso específico
  const updateStepData = useCallback((step: number, data: any) => {
    const stepKey = `form${step}` as keyof PropiedadFormData;
    setValue(stepKey, data, { shouldDirty: true });
  }, [setValue]);

  // Obtener datos de un paso específico
  const getStepData = useCallback((step: number) => {
    const stepKey = `form${step}` as keyof PropiedadFormData;
    return getValues(stepKey);
  }, [getValues]);

  return {
    // Estado del formulario
    formState,
    
    // Datos del formulario
    formData: watchedData,
    
    // React Hook Form
    form,
    
    // Navegación
    currentStep: formState.currentStep,
    goToStep,
    nextStep,
    previousStep,
    nextStepWithValidation,
    
    // Validación
    validateCurrentStep,
    
    // Persistencia
    saveAsDraft,
    saveToLocalStorage,
    
    // Envío
    submitForm,
    
    // Utilidades
    resetForm,
    updateStepData,
    getStepData,
    
    // Estado de carga
    isLoading: formState.isLoading,
    error: formState.error
  };
};
