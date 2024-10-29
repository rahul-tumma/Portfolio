import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaHeart, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/rahul-tumma",
      label: "GitHub",
      hoverColor: "hover:text-gray-100"
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/rahul-tumma-210175175/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: FaEnvelope,
      href: "mailto:rahultumma2@gmail.com",
      label: "Email",
      hoverColor: "hover:text-red-400"
    }
  ];

    // Function to scroll to a specific section
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
          });
        }
      };
      
  return (
    <footer className="bg-[#0a0a0f] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Rahul Tumma
            </h3>
            <p className="text-gray-400 font-mono">
              Full Stack Developer crafting digital experiences with code and creativity.
            </p>
            <blockquote className="text-gray-400 font-mono italic border-l-4 border-blue-500 pl-4">
              "Coding is the language of logic, and it brings out the humanity in us by solving real-world problems."<br/> - Steve Jobs
            </blockquote>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 font-mono">
              {['Home', 'Projects', 'About', 'Contact'].map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <FaCode className="text-xs" />
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="font-mono space-y-2">
              <p className="text-gray-400">
                <a href="mailto:rahultumma2@gmail.com" className="hover:text-blue-400 transition-colors">
                  rahultumma2@gmail.com
                </a>
              </p>
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.hoverColor} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center font-mono text-sm text-gray-400"
        >
          <p>
            © {currentYear} Rahul Tumma. All rights reserved.
          </p>
          <p className="flex items-center gap-2 mt-4 md:mt-0">
            Made with <FaHeart className="text-red-500" /> using React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 