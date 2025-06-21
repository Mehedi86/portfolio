import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import MyWorks from "./components/MyWorks";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="works"><MyWorks /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
