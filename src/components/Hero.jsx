"use client";
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa';
import { useState, useCallback } from 'react';
import { useScramble } from 'use-scramble';

const Hero = () => {
  const roles = [
    "Senior Software Engineer",
    "Full Stack Developer", 
    "System Architect",
    "Tech Lead",
    "DevOps Specialist"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { ref } = useScramble({
    range: [30, 47],
    speed: 0.3,
    seed: 5,
    scramble: 5,
    text: roles[currentRoleIndex],
    onAnimationEnd: () => {
      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) =>
          prevIndex === roles.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/rahul-tumma",
      label: "GitHub",
      color: "hover:text-white"
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/rahul-tumma-210175175/",
      label: "LinkedIn",
      color: "hover:text-blue-500"
    },
    {
      icon: FaEnvelope,
      link: "mailto:rahultumma2@gmail.com",
      label: "Email",
      color: "hover:text-red-500"
    },
    {
      icon: FaPhone,
      link: "tel:+918128960080",
      label: "Phone",
      color: "hover:text-green-500"
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/RahulTumma_Resume.pdf';
    link.download = 'RahulTumma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#0a0a0f] to-[#1a1a1f] py-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>
      
      <div className="hidden sm:flex container mx-auto px-6 flex-row items-center justify-between relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:w-1/2 text-left mb-12 lg:mb-0"
        >
          <motion.div variants={itemVariants} className="font-mono mb-6 text-lg">
            <span className="text-emerald-400">interface</span>
            <span className="text-slate-200"> SoftwareEngineer</span>
            <span className="text-blue-400"> extends</span>
            <span className="text-purple-400"> Professional</span>
            <span className="text-slate-200"> {`{`}</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pl-4 font-mono">
            <span className="text-terminal-purple">constructor</span>
            <span className="text-terminal-text">{`() {`}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="pl-8 text-4xl md:text-5xl font-bold mb-6">
            <span className="text-terminal-text">this.name = </span>
            <span className="text-terminal-yellow">"Rahul Tumma"</span>
            <span className="text-terminal-text">;</span>
          </motion.h1>
          
          <motion.div variants={itemVariants} className="pl-8 text-lg mb-4 font-mono relative h-8">
            <span className="text-terminal-text">this.currentRole = "</span>
            <span ref={ref} className="text-terminal-yellow min-w-[15ch] hidden" />
            <span ref={ref} className="text-terminal-yellow inline-block min-w-[15ch]" />
            <span className="text-terminal-text">";</span>
          </motion.div>
          
          <motion.div variants={itemVariants} className="pl-8 text-lg mb-4 font-mono">
            <span className="text-terminal-text">this.experience = </span>
            <span className="text-terminal-yellow">"1+ years"</span>
            <span className="text-terminal-text">;</span>
          </motion.div>

          <motion.div variants={itemVariants} className="font-mono text-terminal-text mb-6 pl-4">
            {`}`}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-mono hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <FaCode className="mr-2" />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="border border-gray-500 text-gray-300 px-8 py-3 rounded-md font-mono hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-1/2 w-full"
        >
          <div className="relative w-full h-full min-h-[400px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg border border-gray-800">
            <img
              src="/assets/profile-pic.png"
              alt="Hero Image"
              className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-80"
            />
          </div>
        </motion.div>
      </div>

      <div className="sm:hidden container mx-auto px-4 flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-48 h-48 mb-8"
        >
          <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 overflow-hidden">
            <img
              src="/assets/profile-pic.png"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full text-center"
        >
          <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-2 text-terminal-yellow">
            Rahul Tumma
          </motion.h1>

          <motion.div variants={itemVariants} className="text-lg mb-4 font-mono relative">
            <span ref={ref} className="text-terminal-yellow inline-block min-w-[15ch]" />
          </motion.div>

          <motion.div variants={itemVariants} className="text-md mb-6 font-mono text-terminal-text">
            1+ years of experience
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 text-xl ${social.color} transition-colors`}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col space-y-3 w-full">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToProjects}
              className="w-full bg-blue-600 text-white py-3 rounded-md font-mono hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              <FaCode className="mr-2" />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDownloadCV}
              className="w-full border border-gray-500 text-gray-300 py-3 rounded-md font-mono hover:bg-gray-800 transition-colors flex items-center justify-center"
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
