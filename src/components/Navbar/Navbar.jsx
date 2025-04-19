import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMenu,
  FiX,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiFileText,
  FiSun,
  FiMoon
} from 'react-icons/fi';
import { useThemeStore } from './ThemeStore';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useThemeStore();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [downloadProgress, setDownloadProgress] = useState(0);

  const navItems = [
    { name: 'About', section: 'about' },
    { name: 'Experience', section: 'experience' },
    { name: 'Projects', section: 'projects' },
    { name: 'Contact', section: 'contact' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleDownloadCV = () => {
    const interval = setInterval(() => {
      setDownloadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 0;
        }
        return prev + 10;
      });
    }, 50);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 backdrop-blur-lg ${
        theme === 'dark' ? 'bg-blue-950/80' : 'bg-blue-50/80'
      } shadow-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <motion.span
              className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent
                ${theme === 'dark'
                  ? 'drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]'
                  : 'drop-shadow-[0_0_8px_rgba(37,99,235,0.3)]'
                }`}
              animate={{
                rotateY: [0, 15, -15, 0],
                transformPerspective: 1000,
                transformStyle: 'preserve-3d'
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
              }}
            >
              KINGS
            </motion.span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.section}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.section
                    ? 'text-blue-400'
                    : theme === 'dark'
                      ? 'text-blue-300 hover:text-blue-400'
                      : 'text-blue-600 hover:text-blue-700'
                } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {item.name}
                {activeSection === item.section && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <SocialLinks theme={theme} />
            <ThemeToggle theme={theme} setTheme={setTheme} />
            <WhatsAppCTA theme={theme} />
            <CVDownloadButton
              theme={theme}
              progress={downloadProgress}
              onClick={handleDownloadCV}
            />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-lg transition-shadow ${
                theme === 'dark'
                  ? 'bg-blue-900 text-blue-100 hover:shadow-lg'
                  : 'bg-blue-100 text-blue-900 hover:shadow-lg'
              } focus:outline-none focus:ring-2 focus:ring-blue-400`}
            >
              {isMobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-blue-50 dark:bg-blue-950"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="px-4 pt-2 pb-8 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.section}
                  href={`#${item.section}`}
                  className={`block px-4 py-2 text-lg transition-colors ${
                    activeSection === item.section
                      ? 'text-blue-400'
                      : theme === 'dark'
                        ? 'text-blue-300 hover:text-blue-400'
                        : 'text-blue-600 hover:text-blue-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-400`}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-blue-200 dark:border-blue-800">
                <div className="flex justify-center space-x-6">
                  <SocialLinks theme={theme} />
                </div>
                <div className="mt-4 space-y-4">
                  <WhatsAppCTA theme={theme} fullWidth />
                  <CVDownloadButton
                    theme={theme}
                    progress={downloadProgress}
                    onClick={handleDownloadCV}
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const SocialLinks = ({ theme }) => (
  <>
    <motion.a
      href="https://github.com/kingsLib5"
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full transition-shadow ${
        theme === 'dark'
          ? 'text-blue-300 hover:text-blue-400 hover:shadow-lg'
          : 'text-blue-600 hover:text-blue-700 hover:shadow-lg'
      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      whileHover={{ scale: 1.1 }}
    >
      <FiGithub className="w-6 h-6" />
    </motion.a>
    <motion.a
      href="https://www.linkedin.com/in/kings-igboanusi-757a66270/"
      target="_blank"
      rel="noopener noreferrer"
      className={`p-2 rounded-full transition-shadow ${
        theme === 'dark'
          ? 'text-blue-300 hover:text-blue-400 hover:shadow-lg'
          : 'text-blue-600 hover:text-blue-700 hover:shadow-lg'
      } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      whileHover={{ scale: 1.1 }}
    >
      <FiLinkedin className="w-6 h-6" />
    </motion.a>
  </>
);

const ThemeToggle = ({ theme, setTheme }) => (
  <motion.button
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    whileHover={{ rotate: 15 }}
    className={`p-2 rounded-lg transition-shadow ${
      theme === 'dark'
        ? 'bg-blue-900 text-blue-100 hover:shadow-lg'
        : 'bg-blue-100 text-blue-900 hover:shadow-lg'
    } focus:outline-none focus:ring-2 focus:ring-blue-400`}
    aria-label="Toggle theme"
  >
    {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
  </motion.button>
);

const WhatsAppCTA = ({ theme, fullWidth }) => (
  <motion.a
    href="https://wa.me/+2349018115555"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg ${
      theme === 'dark'
        ? 'bg-gradient-to-r from-blue-500 to-blue-700'
        : 'bg-gradient-to-r from-blue-400 to-blue-600'
    } ${fullWidth ? 'w-full' : ''} text-white transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={{
      y: [0, -5, 0],
      transition: { duration: 2, repeat: Infinity, repeatType: 'mirror' }
    }}
    aria-label="Chat on WhatsApp"
  >
    <FiMessageSquare className="w-5 h-5" />
    <span>Chat Now</span>
  </motion.a>
);

const CVDownloadButton = ({ theme, progress, onClick, fullWidth }) => (
  <div className={`${fullWidth ? 'w-full' : ''}`}>
    <button
      onClick={onClick}
      className={`relative flex items-center justify-center space-x-2 px-4 py-2 rounded-lg w-full ${
        theme === 'dark' ? 'bg-blue-900 hover:bg-blue-800' : 'bg-blue-100 hover:bg-blue-200'
      } overflow-hidden transition-shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400`}
    >
      <div
        className="absolute left-0 top-0 h-full bg-blue-400/20 transition-all"
        style={{ width: `${progress}%` }}
      />
      <FiFileText className={`w-5 h-5 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
      <span className={theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}>
        {progress > 0 ? `Downloading ${progress}%` : 'Download CV'}
      </span>
    </button>
  </div>
);

export default Navbar;
