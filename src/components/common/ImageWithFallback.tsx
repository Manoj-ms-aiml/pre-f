import React, { useState, useEffect } from 'react';

interface ImageWithFallbackProps {
  src?: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  [key: string]: any;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  fallbackSrc,
  alt,
  className = '',
  onLoad,
  onError,
  loading = 'lazy',
  priority = false,
  sizes,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasTriedFallback, setHasTriedFallback] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleImageError = () => {
    if (!hasTriedFallback && src && src !== fallbackSrc) {
      console.log(`Primary image failed: ${src}, trying fallback: ${fallbackSrc}`);
      setCurrentSrc(fallbackSrc);
      setHasTriedFallback(true);
    } else {
      console.log(`All images failed for: ${alt}`);
      setIsLoading(false);
    }
    onError?.();
  };

  // Reset when src changes
  useEffect(() => {
    if (src) {
      setCurrentSrc(src);
      setHasTriedFallback(false);
      setIsLoading(true);
    }
  }, [src]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="w-8 h-8 border-2 border-gray-600 border-t-gray-400 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">Loading...</p>
          </div>
        </div>
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        onLoad={handleImageLoad}
        onError={handleImageError}
        className={`w-full h-full object-cover ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

// Simplified logo component
export const OptimizedLogo: React.FC<{
  src: string;
  alt: string;
  className?: string;
  size?: number;
}> = ({ src, alt, className = '', size = 24 }) => {
  const fallbackSvg = `data:image/svg+xml;base64,${btoa(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="#374151"/>
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9CA3AF" font-size="8">⚡</text>
    </svg>
  `)}`;

  return (
    <ImageWithFallback
      src={src}
      fallbackSrc={fallbackSvg}
      alt={alt}
      className={className}
      loading="eager"
      priority={true}
      style={{ width: size, height: size }}
    />
  );
};