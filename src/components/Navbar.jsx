import React, { useEffect, useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { motion } from "framer-motion";

const sections = ["home", "about", "skills", "works", "education", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const middleY = window.scrollY + window.innerHeight / 2;

      let current = "home";
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (middleY >= top && middleY < top + height) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: <IoHome />, label: "Home" },
    { id: "about", icon: <FaUserAlt />, label: "About" },
    { id: "skills", icon: <FaLaptopCode />, label: "Skills" },
    { id: "works", icon: <GoProjectRoadmap />, label: "Works" },
    { id: "education", icon: <FaGraduationCap />, label: "Education" },
    { id: "contact", icon: <FaProjectDiagram />, label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full fixed top-0 z-50 px-4 py-3 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? "backdrop-blur-lg bg-[#1A1A2E]/90 shadow-lg" 
          : "bg-[#1A1A2E]/50"
      }`}
    >
      <motion.div 
        className="text-white font-bold text-2xl md:text-3xl px-4"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-[#00E6D8]">Abdullah</span>
      </motion.div>

      <ul className="flex items-center space-x-2 md:space-x-6">
        {navItems.map((item) => (
          <motion.li
            key={item.id}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            whileHover={{ y: -3 }}
            className="relative"
          >
            <a 
              href={`#${item.id}`} 
              className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                activeSection === item.id 
                  ? "text-[#00E6D8]" 
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <div className="text-xl md:text-2xl">
                {item.icon}
              </div>
              
              {/* Animated label */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredItem === item.id ? 1 : 0,
                  y: hoveredItem === item.id ? 0 : 10
                }}
                className="absolute top-full mt-1 text-xs font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            </a>

            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div 
                layoutId="activeIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00E6D8] rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Navbar;