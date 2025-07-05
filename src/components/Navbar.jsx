import React, { useEffect, useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // 🍔 Lucide icons

const sections = ["home", "about", "skills", "works", "education", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    handleScroll();
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
      <div className="text-white font-bold text-2xl md:text-3xl px-4">
        <span className="text-[#00E6D8]">Abdullah</span>
      </div>

      {/* 👇 Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-2 md:space-x-6">
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
              onClick={() => setMobileOpen(false)} // Close menu on click
            >
              <div className="text-xl md:text-2xl">{item.icon}</div>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: hoveredItem === item.id ? 1 : 0,
                  y: hoveredItem === item.id ? 0 : 10,
                }}
                className="absolute top-full mt-1 text-xs font-medium whitespace-nowrap"
              >
                {item.label}
              </motion.span>
            </a>

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

      {/* 🍔 Mobile Toggle */}
      <div className="md:hidden">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-[#1A1A2E] flex flex-col items-center space-y-4 py-4 md:hidden z-40"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 text-lg text-white hover:text-[#00E6D8] transition`}
                >
                  {item.icon}
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
