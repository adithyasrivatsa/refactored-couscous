import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroPortrait from "@/assets/hero-portrait.jpeg";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const roles = ["Student", "AI Researcher", "Builder", "ML Engineer"];
  const [currentRole, setCurrentRole] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < role.length) {
            setTypedText(role.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(typedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 150
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRole]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden"
    >
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroPortrait})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-2xl bg-background/60" />
      </div>

      <div className="container mx-auto text-center space-y-8 animate-fade-in relative z-10">
        <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight">
          Adithya Srivatsa
        </h1>

        <div className="h-12 flex items-center justify-center">
          <p className="text-2xl md:text-3xl text-muted-foreground font-display">
            <span className="text-primary">{typedText}</span>
            <span className="animate-blink border-r-2 border-primary ml-1" />
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          AI/ML engineer specializing in Computer Vision, NLP, and Deep Learning.
          Building intelligent systems that learn, adapt, and scale.
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            className="gap-2 cursor-hover neural-glow"
            onClick={() => scrollToSection("projects")}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="gap-2 cursor-hover glass"
            onClick={() => scrollToSection("contact")}
          >
            Get in Touch
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="https://github.com/adithyasrivatsa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:scale-110 transition-transform cursor-hover"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adithyasrivatsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:scale-110 transition-transform cursor-hover"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://medium.com/@adithyasrivatsa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:scale-110 transition-transform cursor-hover"
          >
            <FileText className="h-5 w-5" />
          </a>
          <a
            href="mailto:archlinuxadithya@gmail.com"
            className="p-3 rounded-full glass hover:scale-110 transition-transform cursor-hover"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
