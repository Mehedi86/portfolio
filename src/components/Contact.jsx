import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#1A1A2E] text-white px-4 sm:px-6 py-16 w-full">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#00E6D8] text-center sm:text-left">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#16213E] p-6 sm:p-8 md:p-10 rounded-xl shadow-md">
          {/* Left: Contact Info */}
          <div className="space-y-6 text-gray-300">
            <p className="text-base sm:text-lg">
              Feel free to reach out if you want to collaborate or have any questions.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#00E6D8] text-lg" />
                <a href="mailto:your.email@example.com" className="hover:underline break-all">
                  your.email@example.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-[#00E6D8] text-lg" />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  github.com/yourusername
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-[#00E6D8] text-lg" />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-all"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-[#0F3460] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E6D8]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-[#0F3460] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E6D8]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 rounded-md bg-[#0F3460] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00E6D8]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#00E6D8] text-[#1A1A2E] px-6 py-3 rounded-md font-semibold hover:bg-cyan-300 transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
