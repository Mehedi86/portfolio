import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="flex">
      <Navbar />
      <main className="w-full min-h-screen flex items-center p-6 text-white">
        <Hero />
      </main>
      <div>
        <h1 className="text-2xl m-4 font-bold text-white leading-tight cursor-pointer">
          Abdullah
        </h1>
      </div>
    </div>
  );
}

export default App;
