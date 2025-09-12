import { useState, useEffect } from 'react';

interface UseImageLoaderOptions {
  src: string;
  fallback?: string;
  retryCount?: number;
  retryDelay?: number;
}

export const useImageLoader = ({ 
  src, 
  fallback = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNlNWU3ZWIiLz4KPHN2ZyB4PSIxNzUiIiB5PSIxMjUiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSIjOWNhM2FmIj4KPHBhdGggZD0iTTMgOWw5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPgo8cG9seWxpbmUgcG9pbnRzPSI5IDIyIDkgMTIgMTUgMTIgMTUgMjIiLz4KPC9zdmc+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIj5JbWFnZW4gTm8gRGlzcG9uaWJsZTwvdGV4dD4KPC9zdmc+',
  retryCount = 2,
  retryDelay = 1000
}: UseImageLoaderOptions) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryAttempts, setRetryAttempts] = useState(0);

  useEffect(() => {
    if (!src) {
      setImageSrc(fallback);
      setIsLoading(false);
      setHasError(true);
      return;
    }

    setIsLoading(true);
    setHasError(false);
    setRetryAttempts(0);

    const img = new Image();
    
    // Configurar CORS para imágenes externas
    img.crossOrigin = 'anonymous';
    
    const handleLoad = () => {
      setImageSrc(src);
      setIsLoading(false);
      setHasError(false);
    };

    const handleError = () => {
      console.warn(`Error cargando imagen: ${src} (intento ${retryAttempts + 1})`);
      
      if (retryAttempts < retryCount) {
        setRetryAttempts(prev => prev + 1);
        setTimeout(() => {
          // Intentar sin CORS en el segundo intento
          if (retryAttempts === 1) {
            img.crossOrigin = null;
          }
          img.src = src;
        }, retryDelay);
      } else {
        setImageSrc(fallback);
        setIsLoading(false);
        setHasError(true);
      }
    };

    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback, retryCount, retryDelay, retryAttempts]);

  return {
    imageSrc,
    isLoading,
    hasError,
    retryAttempts
  };
};
