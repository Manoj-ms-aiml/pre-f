import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface DriveImageProps {
  driveId: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

export const DriveImage: React.FC<DriveImageProps> = ({
  driveId,
  alt,
  className = '',
  fallbackSrc,
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (driveId && driveId !== 'YOUR_DRIVE_ID_HERE') {
      // Convert Google Drive ID to direct image URL
      const directUrl = `https://drive.google.com/uc?export=view&id=${driveId}`;
      setImageSrc(directUrl);
    } else if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  }, [driveId, fallbackSrc]);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    
    // Try fallback if available
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(false);
      setIsLoading(true);
    }
    
    onError?.();
  };

  if (!imageSrc) {
    return (
      <div className={`bg-gray-800 animate-pulse flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">Loading...</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
          <span className="text-gray-400 text-sm">Failed to load image</span>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};