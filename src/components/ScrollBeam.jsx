import { useEffect, useState, useCallback } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollBeam = () => {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = ['hero', 'projects', 'developer', 'contact'];

  const calculateProgress = useCallback(() => {
    const sectionElements = sections.map(section => document.getElementById(section));
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - viewportHeight;
    
    const totalProgress = scrollPosition / documentHeight;
    
    let currentSection = 0;
    sectionElements.forEach((section, index) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionMiddle = sectionTop + (section.offsetHeight / 2);
        
        if (scrollPosition + (viewportHeight / 2) >= sectionTop && 
            scrollPosition + (viewportHeight / 2) <= sectionBottom) {
          currentSection = index;
          
          const sectionProgress = (scrollPosition + (viewportHeight / 2) - sectionTop) / section.offsetHeight;
          setScrollProgress(Math.min(Math.max(sectionProgress, 0), 1));
        }
      }
    });

    setActiveSection(currentSection);
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', calculateProgress);
    calculateProgress();
    return () => window.removeEventListener('scroll', calculateProgress);
  }, [calculateProgress]);

  return (
    <div className="fixed top-0 bottom-0 z-50 pointer-events-none left-2 w-12">
      {/* Main vertical line */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-gray-800/30 left-2" />

      {/* Animated beam */}
      <motion.div
        className="absolute top-0 w-[2px] left-2"
        style={{
          height: `${((activeSection + scrollProgress) / sections.length) * 100}%`,
          background: 'linear-gradient(to bottom, #3B82F6, #8B5CF6, #EC4899)',
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="absolute inset-0 blur-sm opacity-50" />
      </motion.div>

      {/* Section markers */}
      {/* {sections.map((section, index) => (
        <div
          key={section}
          className={`absolute w-2 h-2 -ml-0.5 left-2 rounded-full transition-colors duration-300 ${
            index <= activeSection ? 'bg-blue-500' : 'bg-gray-600'
          }`}
          style={{
            top: `${(index / sections.length) * 100}%`,
          }}
        />
      ))} */}

      {/* Animated dot */}
      <motion.div
        className="absolute w-3 h-3 -ml-1.5 left-2"
        style={{
          top: `${((activeSection + scrollProgress) / sections.length) * 100}%`,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="w-full h-full bg-blue-500 rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md animate-pulse" />
      </motion.div>
    </div>
  );
};

export default ScrollBeam;