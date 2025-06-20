import React from 'react';
import { IoHome } from "react-icons/io5";
import { FaUserAlt, FaLaptopCode, FaProjectDiagram, FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className='bg-[#F5EFE7] h-72 w-16 rounded m-4 flex flex-col items-center py-4 space-y-6'>
            <ul className='space-y-6'>
                <li><IoHome size={32} title="Home" /></li>
                <li><FaUserAlt size={32} title="About" /></li>
                <li><FaLaptopCode size={32} title="Skills" /></li>
                <li><FaProjectDiagram size={32} title="Projects" /></li>
                <li><FaGraduationCap size={32} title="Education" /></li>
            </ul>
        </div>
    );
};

export default Navbar;
