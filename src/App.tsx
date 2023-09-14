import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${
        isOpen ? "h-[100vh] overflow-hidden" : "h-full"
      } w-full max-w-[1400px] mx-auto font-BioRhyme bg-black text-white`}
    >
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
