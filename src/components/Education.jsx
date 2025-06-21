import React from 'react';

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

const Education = () => {
  return (
    <section id="education" className="bg-[#0f172a] text-white px-4 py-6 md:py-16 w-full md:min-h-[800px]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#00E6D8] text-center md:text-left">
          Education
        </h2>

        <div className="space-y-6">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-[#16213E] p-6 rounded-xl shadow-md hover:bg-[#0F3460] transition duration-300"
            >
              <h3 className="text-xl font-semibold text-[#00E6D8]">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>{edu.year}</span>
                <span>{edu.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
