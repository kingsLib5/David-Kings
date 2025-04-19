// components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Project1 from '../../assets/codivora.jpg';
import Project2 from '../../assets/codivora.jpg';
import Project3 from '../../assets/codivora.jpg';

const Projects = () => {
  const { theme } = useThemeStore();

  const projects = [
    {
      title: "Inoviec Generator System",
      description: "This is a system that generates company or business invoice for sales",
      tech: ["React", "Tailwind CSS", "Node.js", "Mongo db"],
      github: "#",
      demo: "#",
      image: Project1
    },
    {
      title: "Real-Time Analytics Engine",
      description: "Low-latency stream processing platform",
      tech: ["Flink", "Rust", "WebAssembly", "Arrow"],
      github: "#",
      demo: "#",
      image: Project2
    },
    {
      title: "Computer Base System",
      description: "A computer base test that allows users practice their knowledge for Jamb",
      tech: ["TFX", "KServe", "Prometheus", "Grafana"],
      github: "#",
      demo: "#",
      image: Project3
    }
  ];

  return (
    <section id="projects" className={`py-20 ${theme === 'dark' ? 'bg-blue-950' : 'bg-blue-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden shadow-lg ${
                theme === 'dark' 
                  ? 'bg-blue-900/20 hover:bg-blue-900/30' 
                  : 'bg-white hover:bg-blue-50'
              }`}
            >
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-blue-950/80' : 'from-blue-50/80'
                }`} />
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-blue-100' : 'text-blue-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark'
                          ? 'bg-blue-800/40 text-blue-300'
                          : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'text-blue-300 hover:bg-blue-800/40'
                        : 'text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                      theme === 'dark'
                        ? 'text-blue-300 hover:bg-blue-800/40'
                        : 'text-blue-700 hover:bg-blue-200'
                    }`}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;