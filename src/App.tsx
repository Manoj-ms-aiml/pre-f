import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navigation } from './components/common/Navigation';
import { AnimatedBackground } from './components/common/AnimatedBackground';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificatesSection } from './components/sections/CertificatesSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import AnimatedIntro from './components/common/AnimatedIntro';
import { useEffect } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Simplified asset loading
  useEffect(() => {
    // Preload critical images only
    const criticalImages = [
      '/img/manoj.jpg',
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];
    
    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
        {showIntro && <AnimatedIntro onComplete={handleIntroComplete} />}
        <AnimatedBackground />
        <Navigation />
        
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificatesSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;