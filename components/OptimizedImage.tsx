import React from 'react';
import { useImageLoader } from '../hooks/useImageLoader';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fallback?: string;
  onError?: () => void;
  [key: string]: any;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fallback,
  onError,
  ...props
}) => {
  const { imageSrc, isLoading, hasError } = useImageLoader({
    src,
    fallback,
    retryCount: 2,
    retryDelay: 1000
  });

  React.useEffect(() => {
    if (hasError && onError) {
      onError();
    }
  }, [hasError, onError]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-50' : ''}`}
      loading={loading}
      crossOrigin="anonymous"
      {...props}
    />
  );
};

export default OptimizedImage;
