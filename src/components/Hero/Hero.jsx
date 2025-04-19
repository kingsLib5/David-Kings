// components/Hero/Hero.jsx
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';

const Hero = () => {
  const { theme } = useThemeStore();

  return (
    // add a 3D perspective to the whole section
    <motion.section
      style={{ perspective: 1200 }}
      className={`min-h-screen flex items-center ${
        theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content with subtle 3D tilt on hover */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ rotateY: 5, rotateX: 2 }}
            className="order-last lg:order-first origin-center"
          >
            <div className="space-y-6">
              <motion.h1
                // live 3D flip and gradient pulse on “KINGS”
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotateY: [0, 15, -15, 0],
                  filter: ['brightness(1)', 'brightness(1.2)', 'brightness(1)']
                }}
                transition={{
                  delay: 0.2,
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className={`text-4xl sm:text-5xl font-bold ${
                  theme === 'dark' ? 'text-blue-100' : 'text-blue-900'
                }`}
              >
                Hi, I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  KINGS
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className={`text-2xl sm:text-3xl font-semibold ${
                  theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                }`}
              >
                Full-Stack Developer & DevOps Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className={`text-lg ${
                  theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
                } max-w-2xl`}
              >
                Building robust web architectures and scalable cloud solutions.
                Passionate about creating efficient systems and solving complex
                problems with clean, maintainable code.
              </motion.p>

              <div className="flex gap-4 mt-8">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, rotateY: 3 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Let&apos;s Collaborate
                </motion.a>

                <motion.a
                  href="/KINGS_CV.pdf"
                  download
                  whileHover={{ scale: 1.05, rotateY: -3 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ delay: 0.2, duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className={`px-6 py-3 rounded-lg font-medium ${
                    theme === 'dark'
                      ? 'border-2 border-blue-500 text-blue-300 hover:bg-blue-900/50'
                      : 'border-2 border-blue-600 text-blue-800 hover:bg-blue-100'
                  }`}
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Image Container with 3D tilt & continuous live animation */}
          <motion.div
            style={{ perspective: 800 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              rotateY: [0, 6, 0, -6, 0],
              rotateX: [0, 3, 0, -3, 0]
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.2 },
              scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
              rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
            }}
            whileHover={{ rotateY: 12, rotateX: 6, scale: 1.1 }}
            className="relative w-full max-w-md mx-auto origin-center"
          >
            <div
              className={`absolute inset-0 rounded-3xl ${
                theme === 'dark' ? 'bg-blue-800' : 'bg-blue-200'
              } transform rotate-6`}
            />

            <div
              className={`relative rounded-3xl overflow-hidden ${
                theme === 'dark' ? 'border-4 border-blue-600' : 'border-4 border-blue-400'
              }`}
            >
              <motion.img
                src="/src/assets/codivora.jpg"
                alt="KINGS - Professional Developer"
                className="w-full h-auto object-cover aspect-square"
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            {/* Tech Stack Floating Badges */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {['React', 'Node.js', 'AWS', 'Docker'].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: [0, -10, 0], opacity: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.4,
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    theme === 'dark' ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'
                  }`}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
