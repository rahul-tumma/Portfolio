import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollBeam from "./components/ScrollBeam";
import DeveloperClass from "./components/DeveloperClass";
import Loader from "./components/Loader";
import CustomCursor from './components/CustomCursor';
import HackingBackground from './components/HackingBackground';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CustomCursor />
      <HackingBackground/>
      <ScrollBeam />
      <Navbar />
      <main className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
          <Hero />
          <Projects />
          <DeveloperClass />

          <Contact />
          <Footer />

      </main>
    </div>
  );
}