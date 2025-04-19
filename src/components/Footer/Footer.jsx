// components/Footer/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp, FiCode } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
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
      {/* Floating Gradients */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20 rounded-full mix-blend-multiply"
        animate={{ x: [0, 50, 0], y: [0, -50, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tr from-blue-500 to-blue-700 opacity-15 rounded-full mix-blend-multiply"
        animate={{ x: [0, -60, 0], y: [0, 60, 0], rotate: [0, -360, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <motion.div className="grid md:grid-cols-4 gap-8 mb-12" variants={containerVariants}>
          {/* System Status */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>System Status</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 bg-green-500 rounded-full" />
                <span className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Operational</span>
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Uptime: 99.99%</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Response: <span className="font-mono">32ms</span></div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>Navigation</h3>
            <nav className="space-y-2">
              {['About', 'Projects', 'Expertise', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  variants={itemVariants}
                  whileHover={{ x: 8, color: theme === 'dark' ? '#93c5fd' : '#1e3a8a' }}
                  className={`block text-sm ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'}`}
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>Core Stack</h3>
            <div className="space-y-2">
              {['React', 'Node.js', 'TypeScript', 'AWS'].map((tech) => (
                <motion.div
                  key={tech}
                  variants={itemVariants}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className={`text-sm flex items-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
                >
                  <FiCode className="inline mr-2" /> {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Connections */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}>Connect</h3>
            <div className="flex gap-4">
              {[
                { icon: <FiGithub />, url: 'https://github.com/yourusername' },
                { icon: <FiLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
                { icon: <FiMail />, url: 'mailto:your.email@example.com' }
              ].map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, rotate: [0, 15, -15, 0] }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className={`p-2 rounded-lg transition-shadow ${theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}
                >
                  {React.cloneElement(link.icon, { className: `w-6 h-6 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}` })}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div variants={itemVariants} className={`border-t pt-8 ${theme === 'dark' ? 'border-blue-900' : 'border-blue-200'}`}>  
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>© {new Date().getFullYear()} KINGS. All systems operational</div>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-blue-100 hover:bg-blue-200'}`}
            >
              <FiArrowUp className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
