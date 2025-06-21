import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-[#1A1A2E] text-white px-6 py-12 md:py-36 w-full">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#00E6D8] text-center md:text-left">
          About Me
        </h2>

        <div className="bg-[#16213E] p-6 md:p-8 rounded-xl shadow-md space-y-5 text-base md:text-lg leading-relaxed text-gray-300">
          <p>
            I'm <span className="text-[#00E6D8] font-semibold">Md. Abdullah Al Mehedi</span>, a passionate and detail-oriented front-end web developer based in Bangladesh. I specialize in building responsive and interactive websites using modern technologies like <span className="text-[#00E6D8]">React.js</span>, <span className="text-[#00E6D8]">Tailwind CSS</span>, and <span className="text-[#00E6D8]">JavaScript</span>.
          </p>

          <p>
            I love translating design ideas into real-world web applications that are fast, clean, and user-friendly. I continuously improve my skills and stay updated with the latest trends in web development.
          </p>

          <p>
            When I’m not coding, I enjoy learning about UI/UX design, exploring new tech tools, and occasionally sharing what I learn with others.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
