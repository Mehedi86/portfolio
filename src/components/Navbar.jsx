import React, { useEffect, useState } from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 px-4 py-3 flex justify-between items-center transition duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-[#1A1A2E]/80 shadow-md" : ""
      }`}
    >
      <ul className="text-[#F5EFE7] flex justify-between space-x-4 md:space-x-12">
        <li><IoHome className="text-lg md:text-3xl" title="Home" /></li>
        <li><FaUserAlt className="text-lg md:text-3xl" title="About" /></li>
        <li><FaLaptopCode className="text-lg md:text-3xl" title="Skills" /></li>
        <li><FaProjectDiagram className="text-lg md:text-3xl" title="Projects" /></li>
        <li><FaGraduationCap className="text-lg md:text-3xl" title="Education" /></li>
      </ul>
      <div>
        <h1 className="text-lg md:text-3xl font-semibold">Abdullah</h1>
      </div>
    </div>
  );
};

export default Navbar;
