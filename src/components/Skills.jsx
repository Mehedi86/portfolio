import React from 'react';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiPostgresql, SiNextdotjs, SiExpress } from 'react-icons/si';

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

const Skills = () => {
  return (
    <section className="py-20 bg-[#0f172a] text-white" id="skills">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-teal-400 mb-6 tracking-wide drop-shadow-lg">
          Skills
        </h2>
        <p className="mb-12 text-gray-400 text-lg max-w-xl mx-auto">
          Technologies I've worked with — building modern, scalable, and performant web applications.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl shadow-lg p-7 flex flex-col items-center justify-center 
                         transform transition-transform duration-300 ease-in-out
                         hover:scale-110 hover:shadow-teal-500/50 cursor-pointer"
              aria-label={skill.name}
              role="img"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <p className="text-xl font-semibold tracking-wide">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
