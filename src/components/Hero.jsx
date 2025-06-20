import React from 'react';
import img from "/portfolio.jpg";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-16 min-h-[calc(100vh-200px)] w-11/12 md:w-4/5 mx-auto">
            {/* Text Section */}
            <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Hi, I'm <span className="text-[#00E6D8]">Md. Abdullah</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                    Front-End Web Developer
                </h2>
                <p className="text-gray-400 text-base md:text-lg mb-6">
                    I build modern, responsive, and interactive UIs using <span className="text-[#00E6D8] font-medium">React</span>, <span className="text-[#00E6D8] font-medium">Tailwind CSS</span>, and follow best coding practices to ensure clean and scalable development.
                </p>

                {/* Optional Button */}
                <div>
                    <button className="inline-block border border-[#00E6D8] text-[#00E6D8] hover:text-[#1A1A2E] font-semibold px-6 py-2 rounded shadow hover:bg-[#00c8bb] transition-all duration-600 cursor-pointer">Download Resume</button>
                </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt="Md. Abdullah"
                    className="rounded-xl w-full max-w-sm shadow-2xl border-4 border-[#00E6D8]/30"
                />
            </div>
        </div>
    );
};

export default Hero;
