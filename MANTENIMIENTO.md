# Página de Mantenimiento - Konrad Inversiones

## Descripción
Se ha creado una página de mantenimiento elegante y responsiva que se puede activar fácilmente para cubrir toda la aplicación cuando sea necesario realizar trabajos de mantenimiento.

## Características
- ✅ **Diseño responsivo**: Se ve perfecto en móviles, tablets y escritorio
- ✅ **Animaciones suaves**: Efectos visuales atractivos con partículas flotantes
- ✅ **Fondo degradado**: Diseño moderno con gradientes azules
- ✅ **Información de contacto**: Datos para que los usuarios puedan contactar
- ✅ **Indicador de progreso**: Animación que muestra que se está trabajando
- ✅ **Tiempo estimado**: Información sobre la duración del mantenimiento

## Cómo activar la página de mantenimiento

### Método 1: Cambio directo en el código
1. Abre el archivo `App.tsx`
2. Busca la línea: `const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);`
3. Cambia `false` por `true`: `const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);`
4. Guarda el archivo y despliega

### Método 2: Usando la consola del navegador (para pruebas)
1. Abre la consola del navegador (F12)
2. Ejecuta: `window.location.reload()` después de cambiar el estado en el código

## Cómo desactivar la página de mantenimiento
1. Abre el archivo `App.tsx`
2. Busca la línea: `const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);`
3. Cambia `true` por `false`: `const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);`
4. Guarda el archivo y despliega

## Personalización

### Cambiar el mensaje principal
Edita el archivo `components/MaintenancePage.tsx` y modifica:
```tsx
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
  ¡Tu mensaje personalizado aquí!
</h1>
```

### Cambiar la información de contacto
Modifica la sección de contacto en `components/MaintenancePage.tsx`:
```tsx
<div className="flex items-center space-x-3">
  <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  <span className="text-blue-100">+54 2954 47-5417</span>
</div>
```

### Cambiar el tiempo estimado
Modifica la línea:
```tsx
<p className="text-blue-200 text-sm">
  Tiempo estimado de mantenimiento: 2-4 horas
</p>
```

## Responsividad
La página está optimizada para:
- **Móviles**: Texto más pequeño, layout vertical
- **Tablets**: Tamaño intermedio, mejor espaciado
- **Escritorio**: Texto grande, layout horizontal

## Notas técnicas
- La página usa `position: fixed` para cubrir toda la pantalla
- Tiene `z-index: 50` para aparecer por encima de todo el contenido
- Las animaciones están optimizadas para no afectar el rendimiento
- Es completamente accesible y compatible con lectores de pantalla
