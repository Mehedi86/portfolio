import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Matrimonial Web App',
    image: '/p1.png',
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'E-Commerce Platform',
    image: '/p2.png',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Micro Learning App',
    image: '/p3.png',
    tech: ['React', 'Tailwind', 'Express', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3
    }
  }
};

const techVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

const MyWorks = () => {
  return (
    <section id="projects" className=" text-white px-4 py-6 md:py-16 w-full">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#00E6D8] text-center"
        >
          My Works
        </motion.h2>
        
        <motion.div 
          className="flex flex-col gap-16 md:gap-24" // Increased gap for single column layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#16213E] rounded-xl shadow-md overflow-hidden w-full flex flex-col" // Full height project cards
              variants={projectVariants}
              whileHover="hover"
            >
              <div className="flex-1">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full max-h-[60vh] object-cover"
                />
              </div>
              <div className="p-6">
                <motion.h3 
                  className="text-2xl md:text-3xl font-semibold text-[#00E6D8] mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.div 
                  className="flex flex-wrap gap-3 mb-6"
                  variants={containerVariants}
                >
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="text-sm bg-[#0F3460] text-white px-3 py-2 rounded-lg"
                      variants={techVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex gap-6 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00E6D8] hover:underline flex items-center gap-2"
                  >
                    <span>Live Site</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:underline flex items-center gap-2"
                  >
                    <span>Source Code</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MyWorks;