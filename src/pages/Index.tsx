import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AboutMeStory from "@/components/AboutMeStory";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import NeuralBackground from "@/components/NeuralBackground";
import EasterEgg from "@/components/EasterEgg";

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    let buffer = "";
    const handleKeyPress = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > 10) buffer = buffer.slice(-10);
      
      if (buffer.includes("ai")) {
        setShowEasterEgg(true);
        buffer = "";
        setTimeout(() => setShowEasterEgg(false), 5000);
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <main className="relative min-h-screen">
      <NeuralBackground />
      <Navbar />
      <Hero />
      <About />
      <AboutMeStory />
      <Experience />
      <Projects />
      <Research />
      <Achievements />
      <Contact />
      <EasterEgg show={showEasterEgg} onClose={() => setShowEasterEgg(false)} />
    </main>
  );
};

export default Index;
