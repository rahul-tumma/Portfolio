import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode, FaTerminal } from "react-icons/fa";
import Tilt from 'react-parallax-tilt';
import HackingBackground from "./HackingBackground";

const Projects = () => {
  const projects = [

    {
      title: "Algobrain AI Portfolio Website",
      description: "Designed a user-friendly portfolio website featuring essential business information for initial brand positioning, complemented by a modern design in Version 2 that utilizes JSON-based data management, eliminating backend requirements while effectively showcasing the company’s services.",
      tech: ["HTML", "CSS", "React.js"],
      live: "https://algobrainai.com/",
      highlights: [
        "Implemented JSON-based data management",
        "Eliminated backend requirements",
        "Showcased company’s services effectively"
      ],
      imageDesktop: "assets/algobrainai-desktop.png",
      imageMobile: "assets/algobrainai-mobile.png"
    },
    {
      title: "Tour and Travel Management System",
      description: "Developed a comprehensive platform for efficiently managing vehicles, drivers, bookings, and pricing, featuring seamless WhatsApp integration for real-time updates, an AI chatbot for detailed report analysis, and automated scheduling and notifications, ensuring smooth operations.",
      tech: ["MySQL", "Express.js", "React.js", "Node.js", "Meta API"],
      live: "https://www.aasthatourandtravels.in/",
      highlights: [
        "Integrated WhatsApp for real-time updates",
        "Implemented AI chatbot for report analysis",
        "Managed vehicles, drivers, bookings, and pricing"
      ],
      imageDesktop: "assets/Tour and travel -desktop.png",
      imageMobile: "assets/Tour and travel -mobile.png"
    },
    {
      title: "WhatsApp Algo: Broadcasting Platform",
      description: "Developed WhatsApp Algo, a broadcasting platform that utilizes Meta-verified templates, integrating an NLP-driven WhatsApp chatbot for customizable responses, live chat functionalities, and agent management to enhance customer engagement and operational efficiency.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "Meta API", "Google BERT", "Spello"],
      live: "https://wa.algobrainai.com/",
      highlights: [
        "Utilized Meta-verified templates",
        "Integrated NLP-driven WhatsApp chatbot",
        "Enhanced customer engagement and operational efficiency"
      ],
      imageDesktop: "assets/wa-desktop.png",
      imageMobile: "assets/wa-mobile.png"
    },    {
        title: "AsQ (Answer Solving Questions) Q&A Platform",
        description: "Developed a Q&A platform for anonymous questions, integrating the Grammarly API for grammar correction, and implementing image classification and OCR for text extraction. Utilized NLP for question categorization and improved answer relevance.",
        tech: ["PHP", "MySQL", "HTML", "Grammarly API", "Image Classification", "OCR", "Text Classification", "NLP"],
        github: "https://github.com/aa/asq-platform",
        highlights: [
          "Integrated Grammarly API for grammar correction",
          "Implemented image classification and OCR for text extraction",
          "Utilized NLP for question categorization"
        ],
        imageDesktop: "assets/asq.png",
        imageMobile: "assets/asq.png"
      },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0f] py-20 relative overflow-hidden">
      {/* Matrix-like background animation */}
      <div className="absolute inset-0  bg-repeat animate-matrix opacity-5"></div>

      {/* Code line decorations */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(21)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00ff00]/10 whitespace-nowrap font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`
            }}
          >
            {`const code = () => { return "Hello World" };`}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaTerminal className="text-3xl text-blue-500" />
            <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <FaCode className="text-3xl text-purple-500" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1500}
                  scale={1.02}
                  transitionSpeed={2000}
                  className="bg-[#1a1a1f]/90 backdrop-blur-lg rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
                >   
                  <div className="relative h-[400px] overflow-hidden group">
                    {/* Project Image */}
                    <div className="absolute w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-110">
                      <img 
                        src={project.imageDesktop} 
                        alt={project.title}
                        className="hidden sm:block w-full h-full object-cover"
                        // Ideal image size: 1920px width, 1080px height
                      />
                      <img 
                        src={project.imageMobile} 
                        alt={project.title}
                        className="block sm:hidden w-full h-full object-cover"
                        // Ideal image size: 375px width, 667px height
                      />
                    </div>

                    {/* Overlay with project description */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent transform translate-y-[60%] group-hover:translate-y-0 transition-transform duration-700">
                      <div className="h-full p-6 flex flex-col justify-between overflow-y-auto">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            <FaCode className="text-blue-500" />
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.map(tech => (
                              <span key={tech} className="text-xs bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Project Highlights */}
                          <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <h4 className="text-blue-400 font-semibold">Key Highlights:</h4>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                              {project.highlights.map((highlight, i) => (
                                <li key={i}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-4">
                          <div className="flex gap-4">
                            {project.github && (
                              <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FaGithub size={20} />
                                <span className="text-sm">Source</span>
                              </motion.a>
                            )}
                            {project.live && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <FaExternalLinkAlt size={18} />
                                <span className="text-sm">Demo</span>
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;