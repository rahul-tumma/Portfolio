import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [hoveredElement, setHoveredElement] = useState(null);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  useEffect(() => {
    const handleElementHover = (e) => {
      const target = e.target;
      const isButton = target.tagName.toLowerCase() === 'button' || target.closest('button');
      const isLink = target.tagName.toLowerCase() === 'a' || target.closest('a');
      const isCard = target.hasAttribute('data-cursor') || target.closest('[data-cursor]');
      
      if (isButton || isLink || isCard) {
        const element = isButton ? target.closest('button') : 
                       isLink ? target.closest('a') : 
                       target.closest('[data-cursor]');
        setHoveredElement(element);
        setCursorVariant(isButton ? 'button' : isLink ? 'link' : 'card');
        
        // Add highlight border to the hovered element
        element.style.position = 'relative';
        element.style.zIndex = '1';
      } else {
        if (hoveredElement) {
          hoveredElement.style.zIndex = '';
        }
        setHoveredElement(null);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mouseover', handleElementHover);
    return () => window.removeEventListener('mouseover', handleElementHover);
  }, [hoveredElement]);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      borderRadius: '50%'
    },
    button: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 }
    },
    link: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 }
    },
    card: {
      opacity: 0,
      scale: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-50 rounded-full"
        animate={cursorVariant}
        variants={variants}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border-2 border-blue-500" />
          <div className="absolute inset-2 rounded-full bg-blue-500/20" />
        </div>
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: hoveredElement ? 0 : 1,
          scale: hoveredElement ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;