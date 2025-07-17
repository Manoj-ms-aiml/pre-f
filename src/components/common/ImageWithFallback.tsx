import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

interface ImageWithFallbackProps {
  src: string;
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
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [priority, isInView]);

  // Reset state when src changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
    onError?.();
  }, [currentSrc, fallbackSrc, onError]);

  // Preload image when in view
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.onload = handleLoad;
    img.onerror = handleError;
    img.src = currentSrc;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [currentSrc, isInView, handleLoad, handleError]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading placeholder with skeleton */}
      {isLoading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
          </div>
        </motion.div>
      )}

      {/* Error placeholder */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <p className="text-sm">Image unavailable</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <motion.img
          ref={imgRef}
          src={currentSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          crossOrigin="anonymous"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      )}
    </div>
  );
};

// Enhanced preloader hook with caching
export const useImagePreloader = (urls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const imageCache = new Map<string, boolean>();

    const preloadImage = (url: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check cache first
        if (imageCache.has(url)) {
          setLoadedImages(prev => new Set([...prev, url]));
          resolve();
          return;
        }

        const img = new Image();
        
        // Add crossorigin for external images
        if (url.startsWith('http') && !url.includes(window.location.hostname)) {
          img.crossOrigin = 'anonymous';
        }

        img.onload = () => {
          imageCache.set(url, true);
          setLoadedImages(prev => new Set([...prev, url]));
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`Failed to preload image: ${url}`);
          reject(new Error(`Failed to load ${url}`));
        };
        
        img.src = url;
      });
    };

    const preloadAll = async () => {
      if (urls.length === 0) {
        setIsLoading(false);
        return;
      }

      let completed = 0;
      const results = await Promise.allSettled(
        urls.map(async (url) => {
          try {
            await preloadImage(url);
            completed++;
            setProgress((completed / urls.length) * 100);
          } catch (error) {
            completed++;
            setProgress((completed / urls.length) * 100);
            throw error;
          }
        })
      );

      const successful = results.filter(result => result.status === 'fulfilled').length;
      console.log(`Preloaded ${successful}/${urls.length} images`);
      setIsLoading(false);
    };

    preloadAll();
  }, [urls]);

  return { loadedImages, isLoading, progress };
};

// Optimized image component for logos
export const OptimizedLogo: React.FC<{
  src: string;
  alt: string;
  className?: string;
  size?: number;
}> = ({ src, alt, className = '', size = 24 }) => {
  return (
    <ImageWithFallback
      src={src}
      fallbackSrc={`data:image/svg+xml;base64,${btoa(`
        <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${size}" height="${size}" fill="#374151"/>
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="#9CA3AF" font-size="8">⚡</text>
        </svg>
      `)}`}
      alt={alt}
      className={className}
      loading="eager"
      priority={true}
      sizes={`${size}px`}
      style={{ width: size, height: size }}
    />
  );
};