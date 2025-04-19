// components/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useThemeStore } from '../Navbar/ThemeStore';
import { FiGithub, FiExternalLink, FiCpu } from 'react-icons/fi';

const Projects = () => {
  const { theme } = useThemeStore();

  const projects = [
    {
      title: "Distributed Task Orchestrator",
      description: "Cloud-native task management system handling 50k+ RPM",
      tech: [
        { name: "Go", level: 95 },
        { name: "Kafka", level: 90 },
        { name: "K8s", level: 92 },
        { name: "Redis", level: 88 }
      ],
      github: "#",
      demo: "#",
      architecture: "/src/assets/codivora.jpg"
    },
    {
      title: "Real-Time Analytics Engine",
      description: "Stream processing platform with μs latency",
      tech: [
        { name: "Flink", level: 92 },
        { name: "WebAssembly", level: 88 },
        { name: "Rust", level: 85 },
        { name: "Arrow", level: 90 }
      ],
      github: "#",
      demo: "#",
      architecture: "/src/assets/codivora.jpg"
    },
    {
      title: "ML Ops Platform",
      description: "End-to-end model lifecycle management system",
      tech: [
        { name: "TFX", level: 90 },
        { name: "KServe", level: 87 },
        { name: "Prometheus", level: 93 },
        { name: "Grafana", level: 85 }
      ],
      github: "#",
      demo: "#",
      architecture: "/src/assets/codivora.jpg"
    }
  ];

  return (
    <section 
      id="projects"
      className={`relative py-20 ${theme === 'dark' ? 'bg-[#0a192f]' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-4xl font-extrabold text-center mb-12 ${theme === 'dark' ? 'text-accent' : 'text-primary'}`}
        >
          Engineering Showcase
        </motion.h2>

        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6 }}
              className={`group relative grid md:grid-cols-1 lg:grid-cols-2 gap-8 p-8 rounded-3xl transition-shadow
                ${theme === 'dark'
                  ? 'bg-gradient-to-br from-accent/10 to-primary/10 shadow-card-dark hover:shadow-inner'
                  : 'bg-white shadow-card-light hover:shadow-xl'}
              `}
            >
              {/* Left Column - Visuals */}
              <div className="relative h-96 overflow-hidden rounded-2xl">
                <motion.img
                  src={project.architecture}
                  alt="Architecture"
                  className="w-full h-full object-cover rounded-2xl"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    theme === 'dark' ? 'from-white/60' : 'from-black/60'
                  } via-transparent to-transparent`}
                />

                {/* Tech Stack Floating Panel */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 p-6 rounded-xl backdrop-blur-md bg-white/80 border border-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="grid grid-cols-4 gap-6">
                    {project.tech.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                        transition={{ type: 'spring', stiffness: 200 }}
                        className="relative"
                      >
                        <div
                          className={`radial-progress ${theme === 'dark' ? 'text-accent' : 'text-primary'}`}
                          style={{
                            '--value': tech.level,
                            '--size': '4rem',
                            '--thickness': '4px'
                          }}
                        >
                          <span
                            className={`absolute inset-0 flex items-center justify-center text-sm font-medium ${
                              theme === 'dark' ? 'text-gray-200' : 'text-primary-dark'
                            }`}
                          >
                            {tech.name}
                          </span>
                        </div>
                        <div
                          className={`absolute inset-0 ${
                            theme === 'dark' ? 'border-accent/20' : 'border-gray-200'
                          } border-2 rounded-full`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`inline-flex items-center gap-2 mb-4 ${
                      theme === 'dark' ? 'text-accent' : 'text-primary'
                    }`}
                  >
                    <FiCpu className="w-6 h-6" />
                    <span className="font-mono text-sm">SYSTEM ARCHITECTURE</span>
                  </motion.div>

                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className={`text-3xl font-semibold leading-tight mb-4 ${
                      theme === 'dark' ? 'text-gray-100' : 'text-primary-dark'
                    }`}
                  >
                    {project.title}
                  </motion.h3>

                  <p
                    className={`text-base md:text-lg mb-8 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Animated Divider */}
                  <div className={`relative h-px mb-8 ${theme === 'dark' ? 'bg-accent/20' : 'bg-gray-200'}`}>
                    <motion.div
                      className={`absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r ${
                        theme === 'dark' ? 'from-accent/50 to-transparent' : 'from-primary-light/50 to-transparent'
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: '33%' }}
                      transition={{ duration: 1, ease: 'easeInOut' }}
                    />
                  </div>
                </div>

                {/* Interactive Elements */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 px-8 py-3 rounded-full uppercase tracking-wide transition-colors ${
                        theme === 'dark'
                          ? 'bg-accent/10 text-accent hover:bg-accent/20'
                          : 'bg-primary-light text-primary hover:bg-primary-light/50'
                      }`}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Repository</span>
                    </motion.a>

                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      className={`flex items-center gap-2 px-8 py-3 rounded-full uppercase tracking-wide transition-colors ${
                        theme === 'dark'
                          ? 'bg-accent/10 text-accent hover:bg-accent/20'
                          : 'bg-primary-light text-primary hover:bg-primary-light/50'
                      }`}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>

                  {/* Code Snippet Preview */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className={`relative rounded-xl p-4 ${
                      theme === 'dark' ? 'bg-blue-900/30 shadow-inner' : 'bg-gray-50 shadow-inner'
                    }`}
                  >
                    <div className="flex gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <code
                      className={`font-mono text-base ${
                        theme === 'dark' ? 'text-accent' : 'text-primary-dark'
                      }`}
                    >
                      <span className="text-purple-400">$</span> kubectl get deployments<br />
                      <span className="text-blue-400">NAME</span>{" "}.repeat(8)
                      <span className="text-blue-400">READY</span><br />
                      {project.title.split(' ')[0].toLowerCase()}-core{" "}
                      .repeat(4)3/3<br />
                    </code>
                  </motion.div>
                </div>
              </div>

              {/* Floating Status Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: index * 0.3 }}
                className={`absolute top-8 right-8 flex items-center gap-2 ${
                  theme === 'dark' ? 'text-accent' : 'text-primary'
                }`}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-mono">Production</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
