import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaTerminal, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/rahul-tumma",
      link: "https://github.com/rahul-tumma"
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "Rahul Tumma",
      link: "https://www.linkedin.com/in/rahul-tumma-210175175/"
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "rahultumma2@gmail.com",
      link: "mailto:rahultumma2@gmail.com"
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: "+91 8128960080",
      link: "tel:+918128960080"
    }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `🚀 *New Portfolio Contact*\n\n` + 
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `💬 *Message:* ${formData.message}\n\n` +
      `_Sent from Portfolio Website_`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/918128960080?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="min-h-screen bg-[#0a0a0f] py-20 relative overflow-hidden">
      {/* Matrix-like background animation */}
      <div className="absolute inset-0 bg-[url('/matrix.svg')] bg-repeat animate-matrix opacity-5"></div>

      {/* Glowing orbs background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-[#00ff00]/20 whitespace-nowrap font-mono text-sm"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${8 + Math.random() * 12}s linear infinite`
            }}
          >
            {`sendMessage("Hello World ${i}");`}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <FaTerminal className="text-3xl text-blue-500 animate-pulse" />
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-text">
            Let's Connect
          </h2>
          <FaCode className="text-3xl text-purple-500 animate-pulse" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 bg-gradient-to-br from-[#1a1a1f]/90 to-[#2a2a3f]/90 backdrop-blur-lg p-8 rounded-lg border border-gray-800/50 hover:border-blue-500/50 transition-colors"
          >
            {contactInfo.map((contact, index) => (
              <div key={index} className="flex items-center space-x-4 group hover:scale-105 transition-transform">
                {contact.icon({ className: "text-green-500 text-2xl group-hover:text-green-400 transition-colors" })}
                <a href={contact.link} target="_blank" className="block">
                  <h3 className="text-xl font-semibold text-gray-200">{contact.label}</h3>
                  <p className="text-gray-400 hover:text-green-400 transition-colors">{contact.value}</p>
                </a>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6 bg-gradient-to-br from-[#1a1a1f]/90 to-[#2a2a3f]/90 backdrop-blur-lg p-8 rounded-lg border border-gray-800/50 hover:border-purple-500/50 transition-colors"
          >
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            />
            <motion.textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 text-gray-200 placeholder-gray-400 hover:border-blue-500/50 transition-colors"
              whileHover={{ scale: 1.02 }}
            ></motion.textarea>
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all w-full font-mono flex items-center justify-center space-x-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="mr-2 group-hover:rotate-12 transition-transform" />
              Send via WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
