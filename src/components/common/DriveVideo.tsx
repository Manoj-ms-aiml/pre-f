import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface DriveVideoProps {
  driveId: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  poster?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const DriveVideo: React.FC<DriveVideoProps> = ({
  driveId,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = true,
  poster,
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const videoSrc = driveId && driveId !== 'YOUR_DRIVE_ID_HERE' 
    ? `https://drive.google.com/file/d/${driveId}/preview`
    : '';

  useEffect(() => {
    if (videoSrc) {
      setIsLoading(false);
      onLoad?.();
    } else {
      setHasError(true);
      onError?.();
    }
  }, [videoSrc, onLoad, onError]);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  if (!videoSrc || hasError) {
    return (
      <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
        <span className="text-gray-400 text-sm">
          {hasError ? 'Video unavailable' : 'Loading video...'}
        </span>
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center z-10">
          <motion.div
            className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}

      <iframe
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onLoad={() => {
          setIsLoading(false);
          onLoad?.();
        }}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
          onError?.();
        }}
      />

      {/* Custom Controls Overlay */}
      {controls && (
        <motion.div
          className="absolute inset-0 bg-black/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControls ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <motion.button
              className="text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </motion.button>
            
            <motion.button
              className="text-white hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMuted(!isMuted)}
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      )}
    </div>
  );
};