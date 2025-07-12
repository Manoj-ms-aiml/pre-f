import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface AnimatedIntroProps {
  onComplete: () => void;
}

const AnimatedIntro = ({ onComplete }: AnimatedIntroProps) => {
  const { theme } = useTheme();
  const [phase, setPhase] = useState<'name' | 'photo' | 'complete'>('name');

  useEffect(() => {
    // Name animation for 3 seconds
    const nameTimer = setTimeout(() => {
      setPhase('photo');
    }, 3000);

    // Photo animation for 3 seconds, then complete
    const photoTimer = setTimeout(() => {
      setPhase('complete');
      setTimeout(onComplete, 500); // Small delay before calling onComplete
    }, 6000);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(photoTimer);
    };
  }, [onComplete]);

  if (phase === 'complete') return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
      theme.mode === 'theatrical' ? 'bg-black' : 'bg-slate-950'
    }`}>
      {phase === 'name' && <NameAnimation theme={theme} />}
      {phase === 'photo' && <PhotoAnimation theme={theme} />}
    </div>
  );
};

const NameAnimation = ({ theme }: { theme: any }) => {
  const letters = ['M', 'A', 'N', 'O', 'J', ' - ', 'M', 'S'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants = {
    hidden: { 
      y: 400,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  return (
    <div className="text-center">
      <motion.h1 
        className={`text-6xl md:text-8xl font-bold mb-8 ${
          theme.mode === 'theatrical'
            ? 'bg-gradient-to-r from-theatrical-gold to-theatrical-crimson bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-tech-cyan to-neural-purple bg-clip-text text-transparent'
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={letterVariants}
            style={{
              textShadow: theme.mode === 'theatrical' 
                ? '0 0 10px rgba(255, 215, 0, 0.5)' 
                : '0 0 10px rgba(0, 245, 255, 0.5)',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
      
      {/* Flickering light effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className={`absolute top-1/4 left-1/4 w-2 h-2 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-gold' : 'bg-tech-cyan'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className={`absolute top-1/3 right-1/4 w-1 h-1 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-crimson' : 'bg-neural-purple'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className={`absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-spotlight' : 'bg-tech-electric'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        <motion.div 
          className={`absolute bottom-1/4 right-1/3 w-1 h-1 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-gold' : 'bg-tech-cyan'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
        />
        <motion.div 
          className={`absolute top-1/2 left-1/6 w-2 h-2 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-crimson' : 'bg-neural-purple'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div 
          className={`absolute top-3/4 right-1/6 w-1 h-1 rounded-full ${
            theme.mode === 'theatrical' ? 'bg-theatrical-spotlight' : 'bg-tech-electric'
          }`}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </div>
    </div>
  );
};

const PhotoAnimation = ({ theme }: { theme: any }) => {
  return (
    <div className="text-center animate-fade-in">
      <div className="relative mb-8">
        <div className={`w-64 h-64 mx-auto rounded-full overflow-hidden border-4 animate-photo-reveal ${
          theme.mode === 'theatrical' ? 'border-theatrical-gold' : 'border-tech-cyan'
        }`}>
          <img
            src="/img/manoj.jpg"
            alt="MANOJ MS"
            className="w-full h-full object-cover animate-photo-zoom"
          />
        </div>
        
        {/* Rotating circles around photo */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 rounded-full animate-pulse ${
            theme.mode === 'theatrical' ? 'bg-theatrical-gold' : 'bg-tech-cyan'
          }`}></div>
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-4 h-4 rounded-full animate-pulse ${
            theme.mode === 'theatrical' ? 'bg-theatrical-crimson' : 'bg-neural-purple'
          }`}></div>
          <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 w-4 h-4 rounded-full animate-pulse ${
            theme.mode === 'theatrical' ? 'bg-theatrical-spotlight' : 'bg-tech-electric'
          }`}></div>
          <div className={`absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 w-4 h-4 rounded-full animate-pulse ${
            theme.mode === 'theatrical' ? 'bg-theatrical-gold' : 'bg-tech-cyan'
          }`}></div>
        </div>
      </div>
      
      <h2 className={`text-3xl md:text-4xl font-light animate-type-in overflow-hidden whitespace-nowrap border-r-2 ${
        theme.mode === 'theatrical' 
          ? 'text-theatrical-spotlight border-theatrical-spotlight' 
          : 'text-tech-electric border-tech-electric'
      }`}>
        Software Developer & AI Enthusiast
      </h2>
    </div>
  );
};

export default AnimatedIntro;
