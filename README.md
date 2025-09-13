# Konrad Inversiones Inmobiliaria

Una aplicación web moderna para la gestión y visualización de propiedades inmobiliarias, desarrollada con React, TypeScript y Tailwind CSS.

## 🏠 Características

- **Catálogo de Propiedades**: Visualización completa de propiedades con filtros avanzados
- **Sistema de Favoritos**: Guarda y gestiona tus propiedades favoritas
- **Búsqueda Inteligente**: Búsqueda fuzzy con tolerancia a errores tipográficos
- **Filtros Avanzados**: Por tipo, habitaciones, precio, disponibilidad y operación
- **Responsive Design**: Optimizado para dispositivos móviles y desktop
- **Formularios de Contacto**: Sistema completo de formularios para diferentes tipos de propiedades

## 🛠️ Tecnologías

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Formularios**: React Hook Form + Zod
- **Iconos**: Heroicons, Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel

## 🚀 Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
konrad/
├── components/          # Componentes React
│   ├── forms/          # Formularios de propiedades
│   └── ...
├── contexts/           # Contextos de React
├── data/              # Datos de propiedades
├── hooks/             # Hooks personalizados
├── types/             # Definiciones de TypeScript
└── ...
```

## 🔧 Configuración

El proyecto incluye:
- Configuración de Tailwind CSS personalizada
- Esquemas de validación con Zod
- Sistema de tipos TypeScript robusto
- Configuración de Vite optimizada

## 📱 Funcionalidades

### Gestión de Propiedades
- Visualización en grid con información detallada
- Sistema de filtros múltiples
- Ordenamiento por precio
- Vista detallada de cada propiedad

### Sistema de Favoritos
- Persistencia en localStorage
- Gestión completa de favoritos
- Vista dedicada para propiedades favoritas

### Formularios
- Formularios específicos para diferentes tipos de propiedades
- Validación robusta con Zod
- Manejo de estado con React Hook Form

## 🌐 Deployment

El proyecto está configurado para deployment automático en Vercel con:
- Build automático en cada push
- Configuración de dominio personalizado
- Optimizaciones de rendimiento

## 📝 Notas

- El modo de mantenimiento puede activarse/desactivarse desde `App.tsx`
- Los datos de propiedades se encuentran en `/data/properties/`
- La configuración de Tailwind está en `tailwind.config.js`

---

Desarrollado para Konrad Inversiones Inmobiliaria
