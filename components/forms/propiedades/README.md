# Formularios de Propiedades Inmobiliarias

Sistema completo de formularios para el registro de propiedades inmobiliarias con validación, persistencia y navegación por pasos.

## 🚀 Características

- **6 Pasos de Formulario**: Información básica, ubicación, características físicas, precio, servicios y multimedia
- **Validación en Tiempo Real**: Usando React Hook Form y Zod
- **Persistencia Automática**: Guardado automático cada 30 segundos en localStorage
- **Navegación Intuitiva**: Stepper visual con validación de pasos
- **Diseño Responsive**: Optimizado para móviles y desktop
- **Manejo de Archivos**: Upload de imágenes, planos y documentos
- **Estados de Carga**: Indicadores visuales durante el procesamiento

## 📁 Estructura de Archivos

```
components/forms/propiedades/
├── FormPropiedades.tsx          # Componente principal con stepper
├── FormProp1.tsx               # Información básica
├── FormProp2.tsx               # Ubicación
├── FormProp3.tsx               # Características físicas
├── FormProp4.tsx               # Precio y condiciones
├── FormProp5.tsx               # Servicios y amenidades
├── FormProp6.tsx               # Multimedia
├── types/
│   └── propiedades.types.ts    # Tipos TypeScript
├── schemas/
│   └── propiedades.schemas.ts  # Schemas de validación Zod
├── hooks/
│   └── usePropiedadForm.ts     # Hook personalizado
├── FormPropiedadesExample.tsx  # Ejemplo de uso
├── index.ts                    # Exportaciones
└── README.md                   # Documentación
```

## 🛠️ Instalación

### Dependencias Requeridas

```bash
npm install react-hook-form @hookform/resolvers zod lucide-react tailwindcss @tailwindcss/forms autoprefixer postcss
```

### Configuración de Tailwind CSS

Asegúrate de tener configurado Tailwind CSS en tu proyecto:

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

## 📖 Uso Básico

```tsx
import React from 'react';
import { FormPropiedades } from './components/forms/propiedades';

function App() {
  const handleComplete = (data) => {
    console.log('Propiedad registrada:', data);
    // Enviar a API, mostrar confirmación, etc.
  };

  const handleSave = (data) => {
    console.log('Borrador guardado:', data);
    // Manejar guardado de borrador
  };

  return (
    <FormPropiedades
      onComplete={handleComplete}
      onSave={handleSave}
    />
  );
}
```

## 🎯 Componentes Individuales

### FormProp1 - Información Básica
- Tipo de propiedad
- Título
- Descripción
- Estado (venta/renta)

### FormProp2 - Ubicación
- País, estado, ciudad
- Dirección completa
- Código postal
- Coordenadas GPS (opcional)
- Zona/barrio

### FormProp3 - Características Físicas
- Superficie total y construida
- Habitaciones y baños
- Pisos y antigüedad
- Estado de conservación
- Tipo de construcción

### FormProp4 - Precio y Condiciones
- Precio principal
- Moneda
- Gastos adicionales
- Términos de pago
- Comisiones

### FormProp5 - Servicios y Amenidades
- Servicios básicos (agua, luz, gas, etc.)
- Amenidades (piscina, gimnasio, etc.)
- Estacionamiento
- Áreas comunes

### FormProp6 - Multimedia
- Upload de imágenes (máx. 20)
- Video tour (URL)
- Planos (máx. 5)
- Documentos (máx. 10)

## 🔧 Hook usePropiedadForm

El hook personalizado maneja todo el estado del formulario:

```tsx
const {
  formState,           // Estado actual del formulario
  formData,           // Datos del formulario
  currentStep,        // Paso actual
  goToStep,           // Ir a un paso específico
  nextStep,           // Siguiente paso
  previousStep,       // Paso anterior
  nextStepWithValidation, // Siguiente con validación
  saveAsDraft,        // Guardar como borrador
  submitForm,         // Enviar formulario completo
  resetForm,          // Limpiar formulario
  isLoading,          // Estado de carga
  error              // Errores
} = usePropiedadForm();
```

## 📋 Validación

### Schemas de Validación

Cada paso tiene su propio schema de validación:

```tsx
// Validación completa
const formProp1Schema = z.object({
  tipoPropiedad: z.enum(['Casa', 'Departamento', ...]),
  titulo: z.string().min(5).max(100),
  descripcion: z.string().min(20).max(1000),
  estado: z.enum(['Venta', 'Renta', ...])
});

// Validación de borrador (más permisiva)
const formProp1DraftSchema = formProp1Schema.partial();
```

### Validación en Tiempo Real

- Los campos se validan mientras el usuario escribe
- Los errores se muestran inmediatamente
- La navegación se bloquea si hay errores

## 💾 Persistencia

### Auto-guardado

- Se guarda automáticamente cada 30 segundos
- Los datos se almacenan en localStorage
- Se mantiene el progreso entre sesiones

### Guardado Manual

```tsx
// Guardar como borrador
await saveAsDraft();

// Enviar formulario completo
const result = await submitForm();
```

## 🎨 Personalización

### Estilos

Los componentes usan Tailwind CSS y pueden personalizarse fácilmente:

```tsx
// Cambiar colores del stepper
const stepIcons = [
  { icon: Home, label: 'Información', color: 'blue' },
  { icon: MapPin, label: 'Ubicación', color: 'green' },
  // ...
];
```

### Validación Personalizada

```tsx
// Agregar validaciones personalizadas
const customSchema = formProp1Schema.extend({
  titulo: z.string()
    .min(5, 'Título muy corto')
    .refine(val => !val.includes('test'), 'No se permite "test"')
});
```

## 🔄 Estados del Formulario

### Estados Principales

- `isDirty`: Hay cambios sin guardar
- `isValid`: El formulario es válido
- `isLoading`: Procesando datos
- `error`: Mensaje de error actual
- `lastSaved`: Fecha del último guardado

### Navegación

- Solo se puede avanzar si el paso actual es válido
- Se puede retroceder libremente
- Los pasos completados se marcan visualmente

## 📱 Responsive Design

- Diseño optimizado para móviles
- Grids adaptativos
- Botones táctiles apropiados
- Navegación por pasos clara

## 🚨 Manejo de Errores

### Tipos de Errores

1. **Errores de Validación**: Campos inválidos
2. **Errores de Red**: Fallos en el envío
3. **Errores de Archivo**: Problemas con uploads

### Mostrar Errores

```tsx
{error && (
  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
    <span className="text-red-700">{error}</span>
  </div>
)}
```

## 🧪 Testing

### Ejemplo de Test

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { FormPropiedades } from './FormPropiedades';

test('renders form step 1', () => {
  render(<FormPropiedades />);
  expect(screen.getByText('Información Básica')).toBeInTheDocument();
});
```

## 📈 Rendimiento

### Optimizaciones

- Lazy loading de componentes
- Debounce en validaciones
- Memoización de callbacks
- Limpieza de event listeners

### Bundle Size

- Tree shaking habilitado
- Componentes modulares
- Dependencias mínimas

## 🔒 Seguridad

### Validación del Cliente

- Sanitización de inputs
- Validación de tipos de archivo
- Límites de tamaño de archivo

### Datos Sensibles

- No se almacenan datos sensibles en localStorage
- Limpieza automática después del envío
- Validación en servidor recomendada

## 🚀 Próximas Mejoras

- [ ] Integración con APIs reales
- [ ] Soporte para múltiples idiomas
- [ ] Modo offline
- [ ] Exportación a PDF
- [ ] Integración con mapas
- [ ] Notificaciones push
- [ ] Modo colaborativo

## 📞 Soporte

Para preguntas o problemas:

1. Revisa la documentación
2. Consulta los ejemplos
3. Abre un issue en el repositorio

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.
