import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Brain, Theater, Code } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { useSmoothScroll } from '../../hooks/useSmoothScroll';
import { gsap } from 'gsap';
import { getAssetById, getFallbackImage, generateResponsiveSizes } from '../../data/assets';
import { ImageWithFallback, OptimizedLogo } from '../common/ImageWithFallback';
import '../../styles/animations.css';

export const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const { scrollTo } = useSmoothScroll();
  const sectionRef = useScrollAnimation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [currentRole, setCurrentRole] = useState('');
  const fireball1Ref = useRef<HTMLDivElement>(null);
  const fireball2Ref = useRef<HTMLDivElement>(null);
  const roleIconsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = [
    { 
      name: 'AI Engineer', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
      color: '#ff6f00'
    },
    { 
      name: 'DevOps Engineer', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      color: '#2496ed'
    },
    { 
      name: 'Software Engineer', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61dafb'
    },
    { 
      name: 'Full Stack Developer', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      color: '#339933'
    }
  ];
  const getRandomPosition = () => {
    const section = document.getElementById('hero');
    if (!section) return { x: 0, y: 0 };
    
    const rect = section.getBoundingClientRect();
    const padding = 50;
    return {
      x: padding + Math.random() * (rect.width - padding * 2),
      y: padding + Math.random() * (rect.height - padding * 2)
    };
  };

  const animateFireballs = () => {
    // Simplified fireball animation for better performance
    if (fireball1Ref.current && fireball2Ref.current) {
      fireball1Ref.current.style.animation = 'float 4s ease-in-out infinite';
      fireball2Ref.current.style.animation = 'float 4s ease-in-out infinite 2s';
    }
  };

  const animateRoles = () => {
    if (roleIconsRef.current) {
      const icons = roleIconsRef.current.querySelectorAll('.role-rotating-icon');
      
      const animateIcon = (index: number) => {
        const icon = icons[index];
        if (!icon) return;
        
        // Start from top, move to bottom
        gsap.fromTo(icon, 
          { 
            y: -100, 
            opacity: 0, 
            scale: 0.5,
            rotation: -180
          },
          { 
            y: 0, 
            opacity: 1, 
            scale: 1,
            rotation: 0,
            duration: 1,
            ease: 'power2.out',
            onComplete: () => {
              // Show role text when icon reaches bottom
              setCurrentRole(roles[index].name);
              setCurrentRoleIndex(index);
              
              // Keep visible for 2 seconds
              setTimeout(() => {
                // Animate out
                gsap.to(icon, {
                  y: 100,
                  opacity: 0,
                  scale: 0.5,
                  rotation: 180,
                  duration: 0.8,
                  ease: 'power2.in',
                  onComplete: () => {
                    // Move to next role
                    const nextIndex = (index + 1) % roles.length;
                    setTimeout(() => animateIcon(nextIndex), 500);
                  }
                });
              }, 2000);
            }
          }
        );
      };
      
      // Start the animation cycle
      animateIcon(0);
    }
  };

  const animatePhoto = () => {
    if (photoRef.current) {
      // Create floating animation for the photo
      photoRef.current.style.animation = 'float 6s ease-in-out infinite';
    }
  };

  useEffect(() => {
    animateFireballs();
    animateRoles();
    animatePhoto();
  }, []);

  const handleViewProjects = () => {
    scrollTo('#projects', { offset: -100 });
  };

  const handleContactMe = () => {
    scrollTo('#contact', { offset: -100 });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className={`hero-section ${theme.mode} relative min-h-screen flex items-center justify-center overflow-hidden`}
    >
      {/* Spotlight Effect for Theatrical Mode */}
      {theme.mode === 'theatrical' && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-theatrical-spotlight/40 via-theatrical-spotlight/20 to-transparent rounded-full animate-spotlight" />
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-theatrical-gold/20 to-transparent rounded-full animate-pulse" />
        </div>
      )}

      {/* Neural Network Grid for Tech Mode */}
      {theme.mode === 'tech' && (
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke={theme.primaryColor} strokeWidth="0.5" opacity="0.3" />
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
            <circle cx="20%" cy="30%" r="3" fill={theme.primaryColor} className="animate-neural-pulse" filter="url(#glow)" />
            <circle cx="80%" cy="20%" r="2" fill={theme.primaryColor} className="animate-neural-pulse" filter="url(#glow)" style={{ animationDelay: '0.5s' }} />
            <circle cx="70%" cy="70%" r="4" fill={theme.primaryColor} className="animate-neural-pulse" filter="url(#glow)" style={{ animationDelay: '1s' }} />
            <circle cx="30%" cy="80%" r="2.5" fill={theme.primaryColor} className="animate-neural-pulse" filter="url(#glow)" style={{ animationDelay: '1.5s' }} />
          </svg>
        </div>
      )}

      {/* Fireball Container */}
      <div className="fireball-container">
        <div ref={fireball1Ref} className="fireball fireball-1" />
        <div ref={fireball2Ref} className="fireball fireball-2" />
      </div>

      {/* Main Content */}
      <div className="hero-content relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-8"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <span className={`text-2xl md:text-3xl lg:text-4xl font-light block ${
              theme.mode === 'theatrical'
                ? 'text-theatrical-spotlight'
                : 'text-tech-electric'
            }`}>
              <br></br>
              {'     '}Hi, I'm
            </span>
            <span className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold block ${
              theme.mode === 'theatrical'
                ? 'bg-gradient-to-r from-theatrical-gold via-theatrical-spotlight to-theatrical-gold'
                : 'bg-gradient-to-r from-tech-cyan via-tech-electric to-neural-purple'
            } bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
              {' '} MANOJ MS
            </span>
          </div>

          {/* Role Icons */}
          {/* Role Icons */}
          <div className="relative">
            <div className="relative h-20 flex justify-center justify-center items-center ">
              <motion.div
                className="role-icon p-3 md:p-4 rounded-full border-2"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderColor: theme.mode === 'theatrical' ? '#FFD700' : '#00FFFF',
                  backgroundColor: theme.mode === 'theatrical' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)'
                }}
              >
                <Brain size={28} color={theme.mode === 'theatrical' ? '#FFD700' : '#00FFFF'} />
              </motion.div>
              <motion.div
                className="text-3xl font-thin text-white/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ×
              </motion.div>
              <motion.div
                className="role-icon p-3 md:p-4 rounded-full border-2"
                whileHover={{ scale: 1.2, rotate: -360 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderColor: theme.mode === 'theatrical' ? '#DC143C' : '#8A2BE2',
                  backgroundColor: theme.mode === 'theatrical' ? 'rgba(220, 20, 60, 0.1)' : 'rgba(138, 43, 226, 0.1)'
                }}
              >
                <Code size={28} color={theme.mode === 'theatrical' ? '#DC143C' : '#8A2BE2'} />
              </motion.div>
              <motion.div
                className="text-3xl font-thin text-white/50"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                ×
              </motion.div>
              <motion.div
                className="role-icon p-3 md:p-4 rounded-full border-2"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderColor: theme.mode === 'theatrical' ? '#FFF8DC' : '#39FF14',
                  backgroundColor: theme.mode === 'theatrical' ? 'rgba(255, 248, 220, 0.1)' : 'rgba(57, 255, 20, 0.1)'
                }}
              >
                <Sparkles size={28} color={theme.mode === 'theatrical' ? '#FFF8DC' : '#39FF14'} />
              </motion.div>
            </div>

            <div className="relative mt-6 lg:mt-8 w-full">
              {/* Rotating Role Icons */}
              <div 
                ref={roleIconsRef}
                className="relative h-16 lg:h-20 flex items-center justify-center lg:justify-center"
              >
                {roles.map((role, index) => (
                  <div
                    key={role.name}
                    className="role-rotating-icon absolute"
                    style={{ opacity: 0 }}
                  >
                    <img 
                      src={role.icon} 
                      alt={role.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain"
                      style={{ filter: `drop-shadow(0 0 10px ${role.color})` }}
                    />
                  </div>
                ))}
              </div>
              
              {/* Role Text Display */}
              <motion.div
                className="text-center mt-4"
                animate={{ 
                  opacity: currentRole ? 1 : 0,
                  y: currentRole ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
              >
                <span 
                  className={`text-xl md:text-2xl font-tech font-bold ${
                    theme.mode === 'theatrical' ? 'text-theatrical-gold' : 'text-tech-cyan'
                  }`}
                  style={{
                    textShadow: `0 0 10px ${theme.mode === 'theatrical' ? '#FFD700' : '#00FFFF'}`
                  }}
                >
                  {currentRole}
                </span>
              </motion.div>
            </div>
          </div>

          {/* Description */}
          <motion.p
            ref={subtitleRef}
            className={`text-lg md:text-xl lg:text-2xl font-light ${
              theme.mode === 'theatrical'
                ? 'text-theatrical-spotlight'
                : 'text-tech-electric'
            }`}
          >
            Bridging the gap between artificial intelligence and human creativity
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={handleViewProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                theme.mode === 'theatrical'
                  ? 'bg-theatrical-gold text-black hover:bg-theatrical-crimson hover:text-white'
                  : 'bg-tech-electric text-black hover:bg-neural-purple hover:text-white'
              }`}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={handleContactMe}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 ${
                theme.mode === 'theatrical'
                  ? 'border-theatrical-gold text-theatrical-gold hover:bg-theatrical-gold hover:text-black'
                  : 'border-tech-electric text-tech-electric hover:bg-tech-electric hover:text-black'
              }`}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <div
            ref={photoRef}
            className="relative group"
          >
            {/* Outer Glow Ring */}
            <div className={`absolute -inset-4 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-500 ${
              theme.mode === 'theatrical'
                ? 'bg-gradient-to-r from-theatrical-gold via-theatrical-crimson to-theatrical-gold'
                : 'bg-gradient-to-r from-tech-cyan via-neural-purple to-tech-electric'
            } blur-lg`} />
            
            {/* Middle Ring */}
            <div className={`absolute -inset-2 rounded-full ${
              theme.mode === 'theatrical'
                ? 'bg-gradient-to-r from-theatrical-gold/50 to-theatrical-crimson/50'
                : 'bg-gradient-to-r from-tech-cyan/50 to-neural-purple/50'
            }`} />
            
            {/* Photo Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm">
              {/* Photo */}
              <ImageWithFallback
                src={getAssetById('manoj-profile-main')?.path || "/img/manoj.jpg"}
                fallbackSrc={getFallbackImage('profile')}
                alt="Manoj MS"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
                priority={true}
                sizes={generateResponsiveSizes(384)}
              />
              
              {/* Overlay Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${
                theme.mode === 'theatrical'
                  ? 'from-theatrical-curtain/30 via-transparent to-theatrical-gold/20'
                  : 'from-tech-matrix/30 via-transparent to-tech-cyan/20'
              }`} />
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 rounded-full ${
                      theme.mode === 'theatrical' ? 'bg-theatrical-gold' : 'bg-tech-cyan'
                    }`}
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-20, 20, -20],
                      opacity: [0.3, 1, 0.3],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                    className="w-12 h-12 md:w-16 md:h-16 object-contain transition-transform duration-300"
                    loading="eager"
                    decoding="async"
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
                          <rect width="64" height="64" fill="${role.color}" rx="8"/>
                          <text x="32" y="38" text-anchor="middle" fill="white" font-size="32">⚡</text>
                        </svg>
                      `)}`;
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Rotating Tech Icons */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                theme.mode === 'theatrical'
                  ? 'bg-theatrical-gold/20 border border-theatrical-gold/40'
                  : 'bg-tech-cyan/20 border border-tech-cyan/40'
              }`}>
                <Brain size={16} color={theme.primaryColor} />
              </div>
              <div className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                theme.mode === 'theatrical'
                  ? 'bg-theatrical-crimson/20 border border-theatrical-crimson/40'
                  : 'bg-neural-purple/20 border border-neural-purple/40'
              }`}>
                <Code size={16} color={theme.mode === 'theatrical' ? '#DC143C' : '#8A2BE2'} />
              </div>
              <div className={`absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                theme.mode === 'theatrical'
                  ? 'bg-theatrical-spotlight/20 border border-theatrical-spotlight/40'
                  : 'bg-tech-electric/20 border border-tech-electric/40'
              }`}>
                <Theater size={16} color={theme.mode === 'theatrical' ? '#FFF8DC' : '#39FF14'} />
              </div>
              <div className={`absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${
                theme.mode === 'theatrical'
                  ? 'bg-theatrical-gold/20 border border-theatrical-gold/40'
                  : 'bg-tech-cyan/20 border border-tech-cyan/40'
              }`}>
                <Sparkles size={16} color={theme.primaryColor} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Button */}
      <motion.button
        onClick={() => scrollTo('#about', { offset: -100 })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} color={theme.primaryColor} />
      </motion.button>
    </section>
  );
};