import React, { Suspense, useState, useEffect } from 'react';
import img from "/portfolio.jpg";
import Particles from './Particles';
import { Canvas } from '@react-three/fiber';
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import rocket from "/rocket.png";

const Hero = () => {
  const resume = () => {
    window.location.href = 'https://drive.google.com/file/d/1mk7s1GB8lxHA_1Gq1RqIWm5vcZtvFWrF/view?usp=sharing';
  };

  const [showRockets, setShowRockets] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRockets(false);
    }, 20000); // Hide after 20 seconds

    return () => clearTimeout(timer);
  }, [showRockets]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const Rocket = () => {
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endX, setEndX] = useState(0);
    const [endY, setEndY] = useState(0);
    const [duration, setDuration] = useState(1);

    useEffect(() => {
      const updatePosition = () => {
        const side = Math.floor(Math.random() * 4);
        let newStartX, newStartY;

        if (side === 0) {
          newStartX = Math.random() * 100;
          newStartY = -10;
        } else if (side === 1) {
          newStartX = 110;
          newStartY = Math.random() * 100;
        } else if (side === 2) {
          newStartX = Math.random() * 100;
          newStartY = 110;
        } else {
          newStartX = -10;
          newStartY = Math.random() * 100;
        }

        let newEndX, newEndY;
        if (side === 0 || side === 2) {
          newEndX = Math.random() * 100;
          newEndY = side === 0 ? 110 : -10;
        } else {
          newEndX = side === 1 ? -10 : 110;
          newEndY = Math.random() * 100;
        }

        setStartX(newStartX);
        setStartY(newStartY);
        setEndX(newEndX);
        setEndY(newEndY);
        setDuration(0.5 + Math.random() * 0.5);
      };

      updatePosition();
      const interval = setInterval(updatePosition, duration * 1000 + 500);

      return () => clearInterval(interval);
    }, [duration]);

    return (
      <motion.div
        initial={{
          x: `${startX}vw`,
          y: `${startY}vh`,
          rotate: Math.atan2(endY - startY, endX - startX) * (180 / Math.PI) + 90
        }}
        animate={{
          x: `${endX}vw`,
          y: `${endY}vh`,
          transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        }}
        className="absolute w-12 h-12 z-10 pointer-events-none"
      >
        <img src={rocket} alt="Rocket" className="w-full h-full object-contain" />
      </motion.div>
    );
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Particle Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.2} color="#1a1a40" />
            <Particles count={2000} />
          </Suspense>
        </Canvas>
      </div>

      {/* Show Rockets only for 20 seconds */}
      {showRockets && [...Array(4)].map((_, i) => <Rocket key={i} />)}

      {/* Tilt Container */}
      <div className="relative z-20 overflow-hidden px-4">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.2}
          glareColor="#ffffff"
          glarePosition="all"
          scale={1.01}
          tiltMaxAngleX={6}
          tiltMaxAngleY={6}
          transitionSpeed={1000}
          className="w-full"
        >
          <motion.div
            className="flex flex-col md:flex-row items-center justify-between gap-10 py-20 min-h-screen max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Text Section */}
            <motion.div
              className="w-full md:w-1/2 text-center md:text-left"
              variants={textVariants}
            >
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

              <motion.button
                onClick={resume}
                className="inline-block border border-[#00E6D8] text-[#00E6D8] hover:text-[#1A1A2E] font-semibold px-6 py-2 rounded shadow hover:bg-[#00c8bb] transition-all duration-300 cursor-pointer"
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                Download Resume
              </motion.button>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full md:w-3/6 flex justify-center"
              variants={imageVariants}
            >
              <img
                src={img}
                alt="Md. Abdullah"
                className="rounded-xl w-2/3 max-w-[300px] sm:max-w-sm md:max-w-md shadow-2xl border-4 border-[#00E6D8]/30"
              />
            </motion.div>
          </motion.div>
        </Tilt>
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
