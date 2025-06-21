import React from 'react';

const projects = [
  {
    title: 'Matrimonial Web App',
    image: '/images/matrimonial.jpg', // make sure this image path is valid in your project
    tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'E-Commerce Platform',
    image: '/images/ecommerce.jpg',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    liveLink: '#',
    codeLink: '#',
  },
  {
    title: 'Micro Learning App',
    image: '/images/learning.jpg',
    tech: ['React', 'Tailwind', 'Express', 'MongoDB'],
    liveLink: '#',
    codeLink: '#',
  },
];

const MyWorks = () => {
  return (
    <section id="projects" className="bg-[#1A1A2E] text-white px-4 py-6 md:py-16 w-full md:min-h-[600px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#00E6D8] text-center md:text-left">
          My Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#16213E] rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#00E6D8] mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-[#0F3460] text-white px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#00E6D8] hover:underline"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:underline"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
