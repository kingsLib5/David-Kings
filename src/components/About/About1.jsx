// components/About/About.jsx
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiCode, FiServer, FiDatabase, FiCloud, FiTrendingUp } from 'react-icons/fi';

const About1 = () => {
  const { theme } = useThemeStore();

  const techStack = [
    { icon: <FiCode />, name: 'React', type: 'Frontend', color: 'text-cyan-500' },
    { icon: <FiCode />, name: 'Tailwind CSS', type: 'Styling', color: 'text-sky-500' },
    { icon: <FiServer />, name: 'Node.js', type: 'Backend', color: 'text-green-500' },
    { icon: <FiServer />, name: 'Express', type: 'Framework', color: 'text-gray-500' },
    { icon: <FiDatabase />, name: 'MongoDB', type: 'NoSQL', color: 'text-emerald-500' },
    { icon: <FiDatabase />, name: 'SQL', type: 'RDBMS', color: 'text-blue-500' },
    { icon: <FiCloud />, name: 'Python', type: 'Backend', color: 'text-yellow-500' },
    { icon: <FiCloud />, name: 'Django', type: 'Framework', color: 'text-green-700' }
  ];

  return (
    <section 
     className={`relative py-20 ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`} id="about">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-blue-700' : 'bg-blue-200'
            }`}
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              opacity: 0
            }}
            animate={{
              y: ['0%', '100%'],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Introduction with Animated Text */}
          <div className="space-y-6">
            <motion.h2
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              className={`text-4xl font-bold ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'}`}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Kings David Igboanusi
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className={`text-lg ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full-Stack Developer crafting robust web solutions with modern technologies
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-white'}`}
            >
              <motion.p 
                className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'} mb-4`}
                animate={{
                  textShadow: [
                    `${theme === 'dark' ? '#3b82f600' : '#1d4ed800'} 0 0 0px`,
                    `${theme === 'dark' ? '#3b82f640' : '#1d4ed840'} 0 0 10px`,
                    `${theme === 'dark' ? '#3b82f600' : '#1d4ed800'} 0 0 0px`
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                I architect full-stack solutions combining intuitive interfaces with scalable backend systems.
              </motion.p>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/kingsLib5?tab=repositories"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-blue-800 text-blue-300 hover:bg-blue-700' 
                      : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
                  }`}
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="https://wa.me/+2349018115555"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full border-2 ${
                    theme === 'dark' 
                      ? 'border-blue-700 text-blue-300 hover:border-blue-500' 
                      : 'border-blue-300 text-blue-800 hover:border-blue-500'
                  }`}
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Animated Tech Stack Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-xl ${theme === 'dark' ? 'bg-blue-900/30 hover:bg-blue-900/50' : 'bg-white hover:bg-blue-50'} transition-colors`}
              >
                <motion.div
                  className={`text-3xl mb-2 ${tech.color}`}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className={`font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>
                  {tech.name}
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  {tech.type}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Development Principles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: <FiCode />,
              title: 'Frontend Expertise',
              color: theme === 'dark' ? 'text-green-400' : 'text-green-600',
              items: ['React & Component Architecture', 'Responsive UI with Tailwind CSS', 'State Management Solutions', 'Performance Optimization']
            },
            {
              icon: <FiServer />,
              title: 'Backend Development',
              color: theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600',
              items: ['Node.js & Express REST APIs', 'Python & Django Applications', 'Database Architecture', 'Authentication & Security']
            },
            {
              icon: <FiTrendingUp />,
              title: 'Aspiring Engineer',
              color: theme === 'dark' ? 'text-purple-400' : 'text-purple-600',
              items: ['Cloud-Native Development', 'Distributed Systems', 'Advanced Python', 'Software Architecture']
            }
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 rounded-2xl ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-white'}`}
            >
              <motion.div
                className={`w-8 h-8 mb-4 ${section.color}`}
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                {section.icon}
              </motion.div>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>
                {section.title}
              </h3>
              <ul className={`space-y-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    className="flex items-center"
                  >
                    <motion.span
                      className="mr-2"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: itemIndex * 0.5
                      }}
                    >
                      ▹
                    </motion.span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About1;