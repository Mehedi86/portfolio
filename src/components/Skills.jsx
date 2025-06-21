import React from 'react';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiTypescript, SiPostgresql, SiNextdotjs, SiExpress } from 'react-icons/si';

const skills = [
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-800" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
];

const Skills = () => {
    return (
        <section className="py-16 bg-[#0f172a] text-white" id="skills">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-teal-400 mb-4">Skills</h2>
                <p className="mb-10 text-gray-300">Technologies I've worked with</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform"
                        >
                            <div className="text-4xl mb-2">{skill.icon}</div>
                            <p className="text-lg font-medium">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
