import { useState } from 'react';
import { FaCopy, FaCheck, FaDownload } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const DeveloperClass = () => {
  const [copied, setCopied] = useState(false);

  const codeString = `class Developer {
    constructor() {
      this.name = "Rahul Tumma";
      this.role = "Full Stack Developer";
      this.location = "Surat, Gujarat";
    }
  
    getTechnicalSkills() {
      return {
        languages: [
          "JavaScript", "Java", "Python",
          "PHP", "C++", "C"
        ],
        webTechnologies: [
          "HTML", "CSS", "JSX", "jQuery"
        ],
        frameworks: [
          "React", "Node.js", "Express", "NextUI"
        ],
        uiLibraries: [
          "Bootstrap", "Tailwind CSS", "Material-UI"
        ],
        databases: [
          "MySQL", "MongoDB", "PostgreSQL"
        ]
      };
    }

    getDevOpsSkills() {
      return {
        tools: ["Git", "Docker", "GitHub Actions"],
        cloud: ["Google Cloud", "Hostinger"],
        apis: ["RESTful APIs"]
      };
    }

    getAISkills() {
      return [
        "Google BERT",
        "Grammarly API", 
        "OpenCV",
        "Text Classification"
      ];
    }

    getSoftSkills() {
      return [
        "Leadership",
        "Collaboration",
        "Mentorship"
      ];
    }
  
  }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const resumeUrl = '/assets/RahulTumma_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'RahulTumma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section 
      id="developer" 
      className="min-h-screen flex items-center justify-center relative bg-[#0a0a0f] py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-[#1a1a1f] rounded-lg p-4 shadow-xl relative overflow-x-auto"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </motion.div>
            <div className="flex items-center space-x-2">
              <motion.button 
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors p-2"
                title={copied ? "Copied!" : "Copy code"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="text-green-500"
                    >
                      <FaCheck size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                    >
                      <FaCopy size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <motion.button 
                onClick={handleDownload}
                className="text-gray-400 hover:text-white transition-colors p-2"
                title="Download Resume"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaDownload size={18} />
              </motion.button>
            </div>
          </div>
          <motion.pre 
            className="text-sm md:text-base font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <code className="text-gray-300">
              {codeString.split('\n').map((line, i) => (
                <motion.div 
                  key={i} 
                  className="line hover:bg-gray-800/30 transition-colors px-2 -mx-2 rounded"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <span className="text-gray-500 mr-4">{i + 1}</span>
                  {line.split(/([{}().,[\]"]|class|constructor|return|this|const|let|var|function|=>|new|if|else|for|while)/).map((part, j) => {
                    // Keywords
                    if (['class', 'constructor', 'function', 'const', 'let', 'var', 'new', 'else', 'for', 'while'].includes(part)) {
                      return <span key={j} className="text-blue-500">{part}</span>;
                    }
                    // Return statement
                    else if (part === 'return') {
                      return <span key={j} className="text-purple-500">{part}</span>;
                    }
                    // This keyword
                    else if (part === 'this') {
                      return <span key={j} className="text-blue-400">{part}</span>;
                    }
                    // Punctuation
                    else if (part.match(/[{}().,[\]]/)) {
                      return <span key={j} className="text-gray-500">{part}</span>;
                    }
                    // Strings
                    else if (part.match(/"[^"]*"/)) {
                      return <span key={j} className="text-green-400">{part}</span>;
                    }
                    // Numbers
                    else if (part.match(/\b\d+\b/)) {
                      return <span key={j} className="text-orange-400">{part}</span>;
                    }
                    // Method calls
                    else if (part.match(/\w+(?=\()/)) {
                      return <span key={j} className="text-yellow-300">{part}</span>;
                    }
                    // Object properties
                    else if (part.match(/\w+(?=:)/)) {
                      return <span key={j} className="text-cyan-300">{part}</span>;
                    }
                    // Arrow function
                    else if (part === '=>') {
                      return <span key={j} className="text-purple-400">{part}</span>;
                    }
                    return <span key={j}>{part}</span>;
                  })}
                </motion.div>
              ))}
            </code>
          </motion.pre>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DeveloperClass;