import React from 'react';
import { motion } from 'framer-motion';
import GlowingCard from './GlowingCard'; // adjust the import path if necessary

const AboutMe = () => {
  return (
    <section id="about" className="text-white px-6 py-16 md:py-28 w-full">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#00E6D8] text-center relative inline-block">
            About Me
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-[#00E6D8]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00E6D8] to-transparent mt-2" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#16213E] to-[#0D1B2A] p-8 rounded-2xl shadow-xl border border-[#00E6D8]/20 space-y-6 text-lg leading-relaxed text-gray-300">
              <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:rounded-full before:bg-[#00E6D8]">
                I'm <span className="text-[#00E6D8] font-semibold">Md. Abdullah Al Mehedi</span>, a passionate and detail‑oriented front‑end web developer based in Bangladesh. I specialize in building responsive and interactive websites using modern technologies like <span className="text-[#00E6D8]">React.js</span>, <span className="text-[#00E6D8]">Tailwind CSS</span>, and <span className="text-[#00E6D8]">JavaScript</span>.
              </p>

              <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:rounded-full before:bg-[#00E6D8]">
                I love translating design ideas into real‑world web applications that are fast, clean, and user‑friendly. I continuously improve my skills and stay updated with the latest trends in web development.
              </p>

              <p className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:rounded-full before:bg-[#00E6D8]">
                When I'm not coding, I enjoy learning about UI/UX design, exploring new tech tools, and occasionally sharing what I learn with others.
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-4 mt-8">
                {['React', 'JavaScript', 'Tailwind', 'UI/UX', 'Frontend', 'Responsive'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="px-4 py-2 bg-[#00E6D8]/10 text-[#00E6D8] rounded-full text-sm font-medium border border-[#00E6D8]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Glowing 3D Card Section */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border border-[#00E6D8]/30">
              <GlowingCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
