import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
