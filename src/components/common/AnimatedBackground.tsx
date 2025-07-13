import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

const ParticleField: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    // Reduce particle count for better performance
    const particleCount = Math.min(30, theme.particleConfig.count);
    particlesRef.current = [];

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5, // Reduced speed
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let lastTime = 0;
    const targetFPS = 30; // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${theme.particleConfig.color}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [theme.particleConfig]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-20"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: theme.mode === 'theatrical' 
            ? 'url(https://images.pexels.com/photos/3396664/pexels-photo-3396664.jpeg?auto=compress&cs=tinysrgb&w=1920)'
            : 'url(https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1920)'
        }}
      />

      {/* Gradient Overlays */}
      <div className={`absolute inset-0 bg-gradient-to-b ${
        theme.mode === 'theatrical'
          ? 'from-black/80 via-theatrical-curtain/60 to-black/90'
          : 'from-tech-matrix/80 via-tech-circuit/60 to-black/95'
      }`} />

      {/* Simplified Particle Field */}
      <ParticleField />

      {/* Static Grid Pattern for Tech Mode */}
      {theme.mode === 'tech' && (
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(${theme.primaryColor}22 1px, transparent 1px), linear-gradient(90deg, ${theme.primaryColor}22 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      )}

      {/* Spotlight Effect for Theatrical Mode */}
      {theme.mode === 'theatrical' && (
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-theatrical-spotlight/40 to-transparent rounded-full" />
        </div>
      )}
    </div>
  );
};