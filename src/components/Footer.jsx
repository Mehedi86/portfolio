import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#10B981] text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        {/* Left: Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Mehedi. All rights reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-[#00E6D8] transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00E6D8] transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#00E6D8] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
