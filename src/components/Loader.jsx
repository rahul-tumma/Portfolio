import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const loadingTexts = [
    "Initializing modules...",
    "Loading dependencies...",
    "Compiling components...",
    "Starting development server...",
    "Ready to launch..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50">
      <div className="w-full max-w-md p-8">
        {/* Terminal Window */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#1a1a1f] rounded-lg overflow-hidden shadow-xl"
        >
          {/* Terminal Header */}
          <div className="bg-[#2a2a2f] px-4 py-2 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="ml-4 text-sm text-gray-400 font-mono">terminal@rahultumma</div>
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm">
            {loadingTexts.map((text, index) => {
              const threshold = (index + 1) * 20;
              if (progress >= threshold) {
                return (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-gray-300 mb-2"
                  >
                    <span className="text-green-500">$</span> {text}
                    <span className="text-green-500 ml-2">✓</span>
                  </motion.div>
                );
              }
              return null;
            })}

            {/* Progress Bar */}
            <div className="mt-4 bg-[#2a2a2f] rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Loading Percentage */}
            <div className="mt-2 text-right text-sm text-gray-400">
              {progress}%
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader; 