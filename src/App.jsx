import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className=" bg-[#2c2e3a] w-full min-h-screen flex items-center p-6 text-white">
        <Hero/>
      </main>
    </div>
  );
}

export default App;
