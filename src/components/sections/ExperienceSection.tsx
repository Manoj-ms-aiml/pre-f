import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, Award, Play, ChevronLeft, ChevronRight, Pause, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { experiences } from '../../data/experience';
import { gsap } from 'gsap';

export const ExperienceSection: React.FC = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-presentation logic
  useEffect(() => {
    if (isAutoPlaying && isPresentationMode && experiences.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % experiences.length);
      }, 4000); // 4 seconds per experience
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, isPresentationMode, experiences.length]);

  // Start presentation mode when section comes into view
  useEffect(() => {
    if (inView && !isPresentationMode) {
      setIsPresentationMode(true);
    }
  }, [inView]);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const handleExperienceClick = () => {
    setIsAutoPlaying(false);
    setIsPresentationMode(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      setIsPresentationMode(true);
    }
  };

  useEffect(() => {
    if (inView && timelineRef.current) {
      const timeline = gsap.timeline();
      
      // Animate timeline items sequentially
      timeline.fromTo(
        '.timeline-item',
        { 
          opacity: 0, 
          x: -100,
          rotateY: -15 
        },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
        }
      );

      // Animate connecting lines
      timeline.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        { 
          scaleY: 1, 
          duration: 1.5, 
          ease: 'power2.inOut' 
        },
        '-=1'
      );
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0, rotateY: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateY: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      z: 50,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
  };

  return (
    <section id="experience" ref={ref} className="relative py-12 sm:py-16 md:py-20 lg:py-32 overflow-hidden">
      {/* Theatrical Background */}
      <div className="absolute inset-0">
        {theme.mode === 'theatrical' && (
          <>
            {/* Stage Curtains */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-theatrical-curtain to-transparent opacity-60" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-theatrical-curtain to-transparent opacity-60" />
            
            {/* Spotlight Effects */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-theatrical-spotlight/30 to-transparent rounded-full animate-spotlight" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-theatrical-gold/20 to-transparent rounded-full animate-pulse" />
          </>
        )}
        
        {theme.mode === 'tech' && (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-radial from-neural-purple/30 to-transparent rounded-full animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-tech-cyan/30 to-transparent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        )}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-12 md:space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4 sm:space-y-6">
            <motion.h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-dramatic font-bold ${
                theme.mode === 'theatrical'
                  ? 'bg-gradient-to-r from-theatrical-gold to-theatrical-crimson'
                  : 'bg-gradient-to-r from-tech-cyan to-neural-purple'
              } bg-clip-text text-transparent leading-tight`}
            >
              Experience Journey
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-body leading-relaxed px-4"
            >
              Professional experiences that shaped my approach to creating innovative 
              technology solutions and human-centered AI systems.
            </motion.p>

            {/* Stage Quote */}
            <motion.blockquote
              variants={itemVariants}
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-dramatic italic mt-6 sm:mt-8 px-4 ${
                theme.mode === 'theatrical' ? 'text-theatrical-spotlight' : 'text-tech-electric'
              }`}
            >
              "Experience is the teacher of all things"
            </motion.blockquote>
          </motion.div>

          {/* Experience Carousel */}
          <motion.div variants={itemVariants} className="relative">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6 sm:mb-8 px-4">
              <motion.button
                onClick={prevExperience}
                className={`p-2 sm:p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  theme.mode === 'theatrical'
                    ? 'bg-theatrical-gold/20 border-theatrical-gold/30 hover:bg-theatrical-gold/30'
                    : 'bg-tech-cyan/20 border-tech-cyan/30 hover:bg-tech-cyan/30'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} color={theme.primaryColor} className="sm:w-6 sm:h-6" />
              </motion.button>

              <div className="flex items-center space-x-4">
                {/* Auto-play toggle */}
                <motion.button
                  onClick={toggleAutoPlay}
                  className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                    theme.mode === 'theatrical'
                      ? 'bg-theatrical-crimson/20 border-theatrical-crimson/30 hover:bg-theatrical-crimson/30'
                      : 'bg-neural-purple/20 border-neural-purple/30 hover:bg-neural-purple/30'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isAutoPlaying ? (
                    <Pause size={16} color={theme.mode === 'theatrical' ? '#DC143C' : '#8A2BE2'} />
                  ) : (
                    <Play size={16} color={theme.mode === 'theatrical' ? '#DC143C' : '#8A2BE2'} />
                  )}
                  <span className="text-xs sm:text-sm font-tech text-white/70">
                    {isAutoPlaying ? 'Pause' : 'Play'}
                  </span>
                </motion.button>

                {/* Progress indicator */}
                <div className="text-center">
                  <span className="text-white/60 font-tech text-xs sm:text-sm">
                    {currentIndex + 1} / {experiences.length}
                  </span>
                  {isAutoPlaying && (
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock size={12} className="text-white/40" />
                      <span className="text-xs text-white/40">Auto</span>
                    </div>
                  )}
                </div>
              </div>

              <motion.button
                onClick={nextExperience}
                className={`p-2 sm:p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                  theme.mode === 'theatrical'
                    ? 'bg-theatrical-gold/20 border-theatrical-gold/30 hover:bg-theatrical-gold/30'
                    : 'bg-tech-cyan/20 border-tech-cyan/30 hover:bg-tech-cyan/30'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} color={theme.primaryColor} className="sm:w-6 sm:h-6" />
              </motion.button>
            </div>

            {/* Progress Bar */}
            {isAutoPlaying && (
              <div className="w-full h-1 bg-white/20 rounded-full mb-6 sm:mb-8 mx-4">
                <motion.div
                  className={`h-full rounded-full ${
                    theme.mode === 'theatrical'
                      ? 'bg-gradient-to-r from-theatrical-gold to-theatrical-crimson'
                      : 'bg-gradient-to-r from-tech-cyan to-neural-purple'
                  }`}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  key={currentIndex}
                />
              </div>
            )}

            {/* Experience Cards */}
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 px-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  className={`relative group cursor-pointer rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm border transition-all duration-500 ${
                    theme.mode === 'theatrical'
                      ? 'bg-black/40 border-theatrical-gold/20 hover:border-theatrical-gold/40'
                      : 'bg-black/40 border-tech-cyan/20 hover:border-tech-cyan/40'
                  }`}
                  onClick={handleExperienceClick}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Year Badge */}
                  <motion.div
                    className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-10 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-tech font-bold ${
                      theme.mode === 'theatrical'
                        ? 'bg-theatrical-crimson text-white'
                        : 'bg-neural-purple text-white'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {experiences[currentIndex]?.year}
                  </motion.div>

                  {/* Experience Image */}
                  <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                    <motion.img
                      src={experiences[currentIndex]?.images[0]}
                      alt={experiences[currentIndex]?.production}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800';
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${
                      theme.mode === 'theatrical'
                        ? 'from-black via-transparent to-theatrical-gold/20'
                        : 'from-black via-transparent to-tech-cyan/20'
                    }`} />
                    
                    {/* Play Button Overlay */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className={`p-3 sm:p-4 rounded-full backdrop-blur-sm ${
                        theme.mode === 'theatrical'
                          ? 'bg-theatrical-gold/20 border border-theatrical-gold/40'
                          : 'bg-tech-cyan/20 border border-tech-cyan/40'
                      }`}>
                        <Play size={24} color={theme.primaryColor} className="sm:w-8 sm:h-8" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Experience Info */}
                  <div className="p-4 sm:p-6 lg:p-8">
                    <motion.h3
                      className={`text-xl sm:text-2xl lg:text-3xl font-dramatic font-bold mb-3 sm:mb-4 ${
                        theme.mode === 'theatrical' ? 'text-theatrical-gold' : 'text-tech-cyan'
                      }`}
                      layoutId={`title-${experiences[currentIndex]?.id}`}
                    >
                      {experiences[currentIndex]?.production}
                    </motion.h3>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-white/60 font-tech text-xs sm:text-sm mb-3 sm:mb-4">
                      <div className="flex items-center space-x-2">
                        <User size={14} className="sm:w-4 sm:h-4" />
                        <span>{experiences[currentIndex]?.role}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Award size={14} className="sm:w-4 sm:h-4" />
                        <span>Dir. {experiences[currentIndex]?.director}</span>
                      </div>
                    </div>

                    <motion.p
                      className="text-white/80 font-body leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base"
                      layoutId={`description-${experiences[currentIndex]?.id}`}
                    >
                      {experiences[currentIndex]?.description}
                    </motion.p>

                    {/* Category Badge */}
                    <motion.span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-tech font-medium ${
                        theme.mode === 'theatrical'
                          ? 'bg-theatrical-crimson/20 text-theatrical-crimson border border-theatrical-crimson/30'
                          : 'bg-neural-purple/20 text-neural-purple border border-neural-purple/30'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      {experiences[currentIndex]?.category.charAt(0).toUpperCase() + experiences[currentIndex]?.category.slice(1)}
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Experience Details Panel */}
              <motion.div
                variants={itemVariants}
                className={`relative p-4 sm:p-6 lg:p-8 lg:p-10 rounded-xl sm:rounded-2xl backdrop-blur-sm border ${
                  theme.mode === 'theatrical'
                    ? 'bg-black/40 border-theatrical-crimson/20'
                    : 'bg-black/40 border-neural-purple/20'
                }`}
              >
                <motion.h4
                  className={`text-lg sm:text-xl font-dramatic font-bold mb-4 sm:mb-6 ${
                    theme.mode === 'theatrical' ? 'text-theatrical-crimson' : 'text-neural-purple'
                  }`}
                >
                  Experience Insights
                </motion.h4>
                
                <motion.p
                  className="text-white/80 font-body leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base"
                >
                  This experience provided valuable insights into {experiences[currentIndex]?.category} 
                  and contributed to my understanding of collaborative work environments, 
                  problem-solving methodologies, and professional development.
                </motion.p>

                {/* Skills Gained */}
                <div className="space-y-4">
                  <h5 className="text-white font-tech font-semibold text-sm sm:text-base">Key Learnings:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      'Team Collaboration',
                      'Technical Skills',
                      'Problem Solving',
                      'Communication'
                    ].map((skill, index) => (
                      <motion.div
                        key={skill}
                        className="flex items-center space-x-2 text-white/70 text-xs sm:text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        <Award size={12} className={`sm:w-4 sm:h-4 ${theme.mode === 'theatrical' ? 'text-theatrical-gold' : 'text-tech-cyan'}`} />
                        <span className="font-body">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline Navigation */}
                <div className="mt-6 sm:mt-8">
                  <h5 className="text-white font-tech font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Timeline:</h5>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {experiences.map((exp, index) => (
                      <motion.button
                        key={exp.id}
                        onClick={() => setCurrentIndex(index)}
                        className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-tech transition-all duration-300 ${
                          index === currentIndex
                            ? theme.mode === 'theatrical'
                              ? 'bg-theatrical-gold text-black'
                              : 'bg-tech-cyan text-black'
                            : 'bg-white/10 text-white/60 hover:bg-white/20'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {exp.year}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Bottom Quote */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12 sm:mt-16 md:mt-20 px-4"
          >
            <blockquote className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-dramatic italic max-w-4xl mx-auto ${
              theme.mode === 'theatrical' ? 'text-theatrical-spotlight' : 'text-tech-electric'
            }`}>
              "Every experience is a stepping stone to innovation and growth."
            </blockquote>
            <motion.div
              className={`w-24 sm:w-32 h-0.5 mx-auto mt-4 sm:mt-6 ${
                theme.mode === 'theatrical'
                  ? 'bg-gradient-to-r from-transparent via-theatrical-gold to-transparent'
                  : 'bg-gradient-to-r from-transparent via-tech-cyan to-transparent'
              }`}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 2, duration: 1 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};