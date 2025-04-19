// components/Contact/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiGithub, FiLinkedin, FiMail, FiMessageSquare } from 'react-icons/fi';

const socialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <FiGithub />, 
    hover: 'hover:text-gray-400'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourprofile',
    icon: <FiLinkedin />, 
    hover: 'hover:text-blue-600'
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: <FiMail />, 
    hover: 'hover:text-red-500'
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};

const Contact = () => {
  const { theme } = useThemeStore();

  return (
    <motion.section
      id="contact"
      className={`relative py-20 overflow-hidden ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Floating background circles */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10"
        animate={{ x: ['0%', '20%', '0%'], y: ['0%', '-10%', '0%'] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/3 w-80 h-80 bg-blue-700 rounded-full opacity-5"
        animate={{ x: ['0%', '-15%', '0%'], y: ['0%', '10%', '0%'] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className={`text-4xl font-bold text-center mb-16 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}
          variants={itemVariants}
        >
          Let's Connect
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Social Links Column */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
          >
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-5 p-6 rounded-2xl transition-all ${theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-white hover:bg-blue-50'}`}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <span className={`text-3xl transition-colors ${link.hover}`}>{link.icon}</span>
                <div>
                  <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>{link.platform}</h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{link.url.replace('mailto:', '')}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Instant Chat Column */}
          <motion.div
            className="flex flex-col items-center justify-center space-y-8"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <div className={`p-12 rounded-3xl text-center transition-colors ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-white'}`}>              
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="mb-6"
              >
                <FiMessageSquare className={`w-16 h-16 mx-auto ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} />
              </motion.div>

              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>Instant Chat</h3>
              <p className={`mb-8 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Let's discuss your project right now</p>
              <motion.a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full text-lg font-medium bg-green-500 hover:bg-green-600 text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                Chat on WhatsApp
              </motion.a>
            </div>

            {/* Availability Status */}
            <motion.div
              className="flex items-center gap-3"
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className={`font-medium ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Available Now</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
