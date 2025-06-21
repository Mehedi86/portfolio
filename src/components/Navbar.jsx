import React, { useEffect, useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";

const sections = ["home", "about", "skills", "works", "education", "contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
    { id: "home", icon: <IoHome title="Home" /> },
    { id: "about", icon: <FaUserAlt title="About" /> },
    { id: "skills", icon: <FaLaptopCode title="Skills" /> },
    { id: "works", icon: <GoProjectRoadmap title="My Works" /> },
    { id: "education", icon: <FaGraduationCap title="Education" /> },
    { id: "contact", icon: <FaProjectDiagram title="Contact" /> },
  ];

  return (
    <div
      className={`w-full fixed top-0 z-50 px-4 py-3 flex justify-between items-center transition duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-[#1A1A2E]/80 shadow-md" : ""
      }`}
    >
      <ul className="text-[#F5EFE7] flex justify-between space-x-4 md:space-x-12">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`relative transition-all duration-300 ${
              activeSection === item.id
                ? "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white"
                : ""
            }`}
          >
            <a href={`#${item.id}`} className="text-lg md:text-3xl">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="text-lg md:text-3xl font-semibold">Abdullah</h1>
      </div>
    </div>
  );
};

export default Navbar;
