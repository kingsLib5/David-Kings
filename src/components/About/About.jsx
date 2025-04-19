import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiTerminal, FiCpu, FiHeart, FiBook } from 'react-icons/fi';

const About = () => {
  const { theme } = useThemeStore();

  const timeline = [
    { year: 2018, title: "Full-Stack Foundation", tech: ["Node.js", "React", "Python"], description: "Built first production-scale e-commerce platform handling 10k+ daily transactions" },
    { year: 2020, title: "Cloud Architecture", tech: ["AWS", "Terraform", "Kubernetes"], description: "Designed cloud-native microservices architecture for fintech startup" },
    { year: 2022, title: "DevOps Mastery", tech: ["GitOps", "ArgoCD", "Prometheus"], description: "Implemented enterprise-grade CI/CD pipelines with 99.99% uptime" },
    { year: 2024, title: "AI Integration", tech: ["LLMs", "RAG", "TensorFlow"], description: "Developing ML-powered analytics platforms" }
  ];

  const personalityTraits = [
    { name: "Problem Solving", value: 95, color: "from-blue-400 to-blue-600" },
    { name: "System Design", value: 92, color: "from-purple-400 to-purple-600" },
    { name: "Team Leadership", value: 88, color: "from-green-400 to-green-600" },
    { name: "Technical Writing", value: 85, color: "from-orange-400 to-orange-600" }
  ];

  return (
    <section
    
      style={{ perspective: '1200px' }}
      className={`relative py-20 ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl font-bold text-center mb-16 ${
            theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
          }`}
        >
          Architecting Digital Foundations
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Timeline Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-8 top-0 h-full w-1 bg-blue-500/30" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, rotateY: index % 2 === 0 ? 10 : -10 }}
                animate={{ rotateY: [0, index % 2 === 0 ? 5 : -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                className="relative pl-24 mb-12"
              >
                <div className={`absolute left-0 top-0 h-16 w-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                  theme === 'dark' ? 'bg-blue-900 text-blue-400' : 'bg-blue-200 text-blue-800'
                }`}>
                  {item.year}
                </div>
                <div
                  className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-blue-900' : 'bg-white'} shadow-xl`}
                >
                  <motion.h3 whileHover={{ scale: 1.05 }} className={`text-xl font-semibold mb-4 ${
                    theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                  }`}>
                    {item.title}
                  </motion.h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tech.map(tech => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.1 }}
                        className={`px-3 py-1 rounded-full text-sm ${
                          theme === 'dark' ? 'bg-blue-800 text-blue-300' : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <p className={`${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Personality Radar Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
              className="relative w-64 h-64"
            >
              {personalityTraits.map((trait, index) => {
                // Use plain style object for CSS variables
                const cssVars = {
                  '--value': trait.value,
                  '--size': `${100 - index * 20}%`,
                  '--thickness': '4px'
                };
                return (
                  <motion.div
                    key={trait.name}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="absolute inset-0"
                  >
                    <div className="radial-progress" style={cssVars}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${trait.color} rounded-full`} />
                    </div>
                  </motion.div>
                );
              })}
              <div className={`absolute inset-0 flex items-center justify-center ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
              }`}>
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
                  <FiCpu className="w-16 h-16" />
                </motion.div>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-xs">
              {personalityTraits.map(trait => (
                <div key={trait.name} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${trait.color}`} />
                  <span className={`text-sm ${theme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>{trait.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technical Philosophy */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ rotateX: 15, rotateY: -15, scale: 1.03 }}
            className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-blue-900' : 'bg-white'} shadow-xl`}
          >
            <FiTerminal className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>Development Principles</h3>
            <ul className="space-y-3">
              {['Test-Driven Development', 'Clean Architecture', 'SOLID Principles', 'DRY Philosophy'].map(item => (
                <li key={item} className={`flex items-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  <span className="text-blue-500 mr-2">▸</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ rotateX: 15, rotateY: 15, scale: 1.03 }}
            className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-blue-900' : 'bg-white'} shadow-xl`}
          >
            <FiCpu className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>Infrastructure Standards</h3>
            <ul className="space-y-3">
              {['Immutable Infrastructure', 'GitOps Workflows', 'Observability First', 'Security by Design'].map(item => (
                <li key={item} className={`flex items-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  <span className="text-blue-500 mr-2">▸</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ rotateX: -15, rotateY: 15, scale: 1.03 }}
            className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-blue-900' : 'bg-white'} shadow-xl`}
          >
            <FiBook className={`w-12 h-12 mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
            <h3 className={`text-xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-200' : 'text-blue-800'}`}>Continuous Learning</h3>
            <ul className="space-y-3">
              {['Daily Tech Deep Dives', 'Open Source Contributions', 'Mentorship Programs', 'Architecture Reviews'].map(item => (
                <li key={item} className={`flex items-center ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  <span className="text-blue-500 mr-2">▸</span>{item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
