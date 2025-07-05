import React from 'react';
import { motion } from 'framer-motion';

const educations = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Daffodil International University',
    year: '2021 - 2024',
    result: 'CGPA: 3.87',
  },
  {
    degree: 'Diploma in CSE',
    institution: 'Bogura Polytecnic Institute',
    year: '2016 - 2021',
    result: 'GPA: 3.62',
  },
  {
    degree: 'S.S.C. (Science)',
    institution: 'Rani BilasMoni Govt. Boys High School',
    year: '2011 - 2016',
    result: 'GPA: 4.67',
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const arrowVariants = {
  initial: { x: -5, opacity: 0.7 },
  animate: { 
    x: 5, 
    opacity: 1,
    transition: { 
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-br from-[#1a1b2e] to-[#2d2b4e] text-white px-4 py-6 md:py-16 w-full min-h-screen">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-[#ff7e5f] text-center"
        >
          My Education
        </motion.h2>

        <motion.div 
          className="space-y-8 relative"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 h-full w-1 bg-gradient-to-b from-[#ff7e5f] to-[#2d2b4e] rounded-full -z-10"></div>

          {educations.map((edu, index) => (
            <motion.div
              key={index}
              className="relative group"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              {/* Animated Arrow indicator - alternating directions */}
              <motion.div
                className={`absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#ff7e5f]`}
                variants={arrowVariants}
                initial="initial"
                animate="animate"
                style={{ 
                  rotate: index === 1 ? '180deg' : '0deg', // Only middle arrow points left
                  left: index === 1 ? 'calc(50% - 0.75rem)' : '1.5rem'
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>

              <div className={`bg-[#2d2b4e] p-8 rounded-xl shadow-lg ml-12 md:ml-0 md:w-[45%] ${index === 1 ? 'md:ml-auto' : 'md:mr-auto'} hover:bg-[#3a3760] transition-all duration-300 relative overflow-hidden border border-[#4a4568]`}>
                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  boxShadow: '0 0 15px rgba(255, 126, 95, 0.3)'
                }}></div>
                
                <motion.h3 
                  className="text-2xl font-bold mb-2 text-[#ff9e7d]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {edu.degree}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-[#e2e1ff] mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {edu.institution}
                </motion.p>
                
                <motion.div 
                  className="flex flex-col sm:flex-row justify-between gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center gap-2 text-[#b8b7d5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#b8b7d5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>{edu.result}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;