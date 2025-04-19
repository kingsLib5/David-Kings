import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import {
  FiCode,
  FiCloud,
  FiServer,
  FiDatabase,
  FiPackage,
  FiCheckSquare,
  FiChevronUp,
  FiMonitor
} from 'react-icons/fi';

const Expertise = () => {
  const { theme } = useThemeStore();

  const pipeline = [
    { label: 'Code', icon: <FiCode /> },
    { label: 'Build', icon: <FiPackage /> },
    { label: 'Test', icon: <FiCheckSquare /> },
    { label: 'Deploy', icon: <FiChevronUp /> },
    { label: 'Monitor', icon: <FiMonitor /> }
  ];

  const skills = [
    {
      category: 'Frontend Architecture',
      icon: <FiCode />, 
      technologies: ['React Ecosystem', 'TypeScript', 'Webpack/Vite', 'Micro Frontends'],
      level: 95
    },
    {
      category: 'Cloud Infrastructure',
      icon: <FiCloud />, 
      technologies: ['AWS Certified', 'Terraform', 'Serverless', 'Kubernetes'],
      level: 90
    },
    {
      category: 'Backend Systems',
      icon: <FiServer />, 
      technologies: ['Node.js', 'GraphQL', 'REST APIs', 'WebSockets'],
      level: 92
    },
    {
      category: 'Data Engineering',
      icon: <FiDatabase />, 
      technologies: ['PostgreSQL', 'Redis', 'Elasticsearch', 'BigQuery'],
      level: 88
    }
  ];

  return (
    <section 
    id="experience"
    className={`py-20 ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`}>      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl font-extrabold text-center mb-16 ${
            theme === 'dark' ? 'text-blue-200' : 'text-blue-800'
          }`}
        >
          Technical Expertise
        </motion.h2>

        {/* DevOps Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between relative">
            <div className={`absolute inset-0 h-1 rounded-full ${
              theme === 'dark' ? 'bg-blue-700' : 'bg-blue-200'
            }`} />
            {pipeline.map((stage, i) => (
              <motion.div
                key={stage.label}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                animate={{ rotateY: [0, 180, 0] }}
                transition={{
                  delay: i * 0.5,
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className={`relative flex flex-col items-center justify-center w-20 h-20 rounded-full p-4 shadow-lg bg-opacity-90 ${
                  theme === 'dark' ? 'bg-blue-900' : 'bg-white'
                }`}
              >
                <div className="text-2xl mb-1 text-blue-500">{stage.icon}</div>
                <span className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-blue-200' : 'text-blue-700'
                }`}>{stage.label}</span>
                <div className={`absolute inset-0 rounded-full border-2 animate-ping ${
                  theme === 'dark' ? 'border-blue-600' : 'border-blue-400'
                }`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}              
              animate={{ rotateY: [0, 180, 0] }}
              whileHover={{ scale: 1.05 }}
              transition={{
                delay: index * 1.5,
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              style={{ perspective: 3000 }}
              className="relative w-full h-96"
            >
              <div style={{ transformStyle: 'preserve-3d' }} className="relative w-full h-full">

                {/* Front Face */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)'
                  }}
                  className={`absolute w-full h-full rounded-3xl p-8 shadow-lg bg-opacity-90 ${
                    theme === 'dark' ? 'bg-blue-900' : 'bg-white'
                  }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div className={`text-5xl mb-4 ${
                      theme === 'dark' ? 'text-blue-300' : 'text-blue-600'
                    }`}>{skill.icon}</div>
                    <h3 className={`text-2xl font-semibold mb-4 ${
                      theme === 'dark' ? 'text-blue-100' : 'text-blue-800'
                    }`}>{skill.category}</h3>
                    <div className="relative pt-4">
                      <div className={`absolute inset-0 h-1 rounded-full ${
                        theme === 'dark' ? 'bg-blue-700' : 'bg-blue-200'
                      }`} />
                      <div className="absolute inset-0 h-1 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                  className={`absolute w-full h-full rounded-3xl p-8 shadow-lg bg-opacity-90 ${
                    theme === 'dark' ? 'bg-blue-800' : 'bg-blue-100'
                  }`}
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h4 className={`text-lg font-medium mb-4 ${
                        theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                      }`}>Key Technologies</h4>
                      <ul className="space-y-2">
                        {skill.technologies.map((tech) => (
                          <li key={tech} className={`flex items-center ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`}>
                            <span className="text-blue-500 mr-2">▹</span>
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className={`text-right text-sm italic ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`}>Mastery Level: {skill.level}%</p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
