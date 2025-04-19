// components/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode, FiHeart } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      staggerChildren: 0.1, 
      ease: 'easeOut', 
      duration: 0.8 
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: 'spring', 
      stiffness: 120, 
      damping: 12 
    } 
  }
};

const Footer = () => {
  const { theme } = useThemeStore();

  return (
    <motion.footer
      className={`relative overflow-hidden ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/15 to-cyan-400/15 rounded-full blur-2xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'mirror'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <motion.div className="grid md:grid-cols-3 gap-8 mb-12" variants={containerVariants}>
          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>
              Explore
            </h3>
            <nav className="space-y-3">
              {['About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 8,
                    background: theme === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(191, 219, 254, 0.3)'
                  }}
                  className={`block text-sm px-3 py-2 rounded-lg ${theme === 'dark' ? 'text-blue-400 hover:text-blue-200' : 'text-blue-600 hover:text-blue-800'}`}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>
              Core Technologies
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['React', 'Node.js', 'Tailwind CSS', 'AWS', 'Docker', 'Python'].map((tech) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    theme === 'dark' 
                      ? 'bg-blue-900/30 hover:bg-blue-900/50' 
                      : 'bg-blue-100 hover:bg-blue-200'
                  }`}
                >
                  <FiCode className={`flex-shrink-0 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`text-sm ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Connections */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>
              Let's Connect
            </h3>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, url: 'https://github.com/kingsLib5' },
                { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/kings-igboanusi-757a66270/' },
                { icon: <FiMail />, url: 'davidkingsig@gmail.com' }
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    y: -8,
                    rotate: [0, 15, -15, 0],
                    scale: 1.1
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300,
                    damping: 10 
                  }}
                  className={`p-3 rounded-xl shadow-sm ${
                    theme === 'dark' 
                      ? 'bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800/50' 
                      : 'bg-white hover:bg-blue-50 border border-blue-100'
                  }`}
                >
                  {React.cloneElement(link.icon, { 
                    className: `w-6 h-6 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className={`pt-8 border-t ${
            theme === 'dark' ? 'border-blue-900' : 'border-blue-200'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`flex items-center gap-2 text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              <span>Built with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <FiHeart className={`${theme === 'dark' ? 'text-rose-400' : 'text-rose-600'}`} />
              </motion.span>
              <span>by KINGS</span>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
                background: theme === 'dark' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(191, 219, 254, 0.4)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`p-3 rounded-full ${
                theme === 'dark' 
                  ? 'bg-blue-900/30 hover:bg-blue-900/50' 
                  : 'bg-blue-100 hover:bg-blue-200'
              }`}
            >
              <FiArrowUp className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;