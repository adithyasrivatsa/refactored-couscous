import { useState, useEffect } from "react";
import { Moon, Sun, Download } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3 cursor-hover"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          <img src={logo} alt="Adithya Srivatsa" className="h-10 w-10 rounded-full object-cover border-2 border-primary/40" />
          <span className="font-display text-xl font-bold">AS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Projects", "Research", "Achievements", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium hover:text-primary transition-colors cursor-hover"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </a>
          ))}
          <a
            href="/gallery"
            className="text-sm font-medium hover:text-primary transition-colors cursor-hover"
          >
            Gallery
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-hover"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="gap-2 cursor-hover neural-glow" asChild>
            <a href="/Adithya_Srivatsa_Resume.pdf" download>
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
