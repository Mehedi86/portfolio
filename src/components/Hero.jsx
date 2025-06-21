import React, { Suspense } from 'react';
import img from "/portfolio.jpg";
import Particles from './Particles';
import { Canvas } from '@react-three/fiber';
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";

const Hero = () => {
    const resume = () => {
        window.location.href = 'https://drive.google.com/file/d/1zCKRqJf4jV6EJezVtnHJy3GZflpMhM--/view?usp=drive_link';
    }
    return (
        <div className="relative w-full min-h-screen">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Particle Canvas */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.2} color="#1a1a40" />
                        <Particles count={2000} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Section */}
            <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-20 min-h-screen w-full max-w-7xl mx-auto">
                {/* Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                        Hi, I'm <span className="text-[#00E6D8]">Md. Abdullah Al Mehedi</span>
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4">
                        <Typewriter
                            words={["Front-End Developer", "React Enthusiast", "UI/UX Explorer"]}
                            loop={true}
                            cursor
                            cursorStyle="_"
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6">
                        I build modern, responsive, and interactive UIs using{" "}
                        <span className="text-[#00E6D8] font-medium">React</span>,{" "}
                        <span className="text-[#00E6D8] font-medium">Tailwind CSS</span>, and follow
                        best coding practices to ensure clean and scalable development.
                    </p>

                    <button onClick={resume} className="inline-block border border-[#00E6D8] text-[#00E6D8] hover:text-[#1A1A2E] font-semibold px-6 py-2 rounded shadow hover:bg-[#00c8bb] transition-all duration-300 cursor-pointer">
                        Download Resume
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={img}
                        alt="Md. Abdullah"
                        className="rounded-xl w-2/3 xl:w-full max-w-[300px] sm:max-w-sm md:max-w-md shadow-2xl border-4 border-[#00E6D8]/30"
                    />
                </div>
            </div>

            {/* Down Arrow Button */}
            <div className="absolute hidden lg:block bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                <button className="text-[#00E6D8] animate-bounce">
                    <ChevronDown size={80} />
                </button>
            </div>
        </div>
    );
};

export default Hero;
