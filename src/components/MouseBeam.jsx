import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseBeam = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Vertical Beam */}
      <motion.div
        className="fixed top-0 w-[2px] h-screen bg-gradient-to-b from-transparent via-blue-500/50 to-transparent pointer-events-none"
        animate={{
          x: mousePosition.x,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Horizontal Beam */}
      <motion.div
        className="fixed left-0 h-[2px] w-screen bg-gradient-to-r from-transparent via-blue-500/50 to-transparent pointer-events-none"
        animate={{
          y: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none"
        animate={{
          x: mousePosition.x - 8, // Center the dot (half of width)
          y: mousePosition.y - 8, // Center the dot (half of height)
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    </>
  );
};

export default MouseBeam; 