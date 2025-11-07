import { useState } from "react";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "LLM From Scratch",
      description: "Implemented tokenizer, attention mechanism, and training loop in pure NumPy",
      tech: ["NumPy", "Python", "Deep Learning"],
      details: "Built a language model from the ground up to understand transformer architecture at a fundamental level. Includes custom tokenization, multi-head attention, and gradient descent optimization.",
      category: "NLP",
      github: "https://github.com/adithyasrivatsa/llm-from-scratch",
    },
    {
      title: "Real-Time Object Tracking (MTS)",
      description: "YOLOv8 + Kalman Filter pipeline achieving 92% accuracy",
      tech: ["YOLOv8", "OpenCV", "Kalman Filter", "Python"],
      details: "Developed a robust multi-target tracking system combining YOLOv8 for detection with Kalman filters for smooth trajectory prediction. Optimized for real-time performance.",
      category: "Computer Vision",
      github: "https://github.com/adithyasrivatsa/Simulated-Missile-Tracking-System-MTS",
    },
    {
      title: "Threat Classification Dashboard",
      description: "CNN-based Streamlit dashboard for security threat detection",
      tech: ["TensorFlow", "CNN", "Streamlit", "Python"],
      details: "Created an interactive dashboard for classifying security threats using convolutional neural networks. Features real-time inference and visualization of model predictions.",
      category: "Deep Learning",
      github: "https://github.com/adithyasrivatsa/Threat-Assessment-Dashboard",
    },
    {
      title: "Smart Notes App",
      description: "Gemini-based summarization and semantic search application",
      tech: ["Gemini API", "NLP", "Vector Search", "Python"],
      details: "Built an intelligent note-taking system leveraging Google's Gemini model for automatic summarization and semantic search capabilities across documents.",
      category: "NLP",
      github: "https://github.com/adithyasrivatsa/Smart-Notes",
    },
  ];

  return (
    <section id="projects" className="py-32 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          Key Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-hover group animate-fade-in"
              style={{
                animationDelay: `${idx * 0.1}s`,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
              }}
            >
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{project.description}</p>
                </div>

                {expandedProject === idx && (
                  <p className="text-sm text-muted-foreground border-l-2 border-primary pl-4 animate-fade-in">
                    {project.details}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="gap-2 cursor-hover"
                    onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        expandedProject === idx ? "rotate-180" : ""
                      }`}
                    />
                    {expandedProject === idx ? "Show Less" : "Learn More"}
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="gap-2 cursor-hover"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            6+ open-source AI/ML projects •{" "}
            <a
              href="https://github.com/adithyasrivatsa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline cursor-hover"
            >
              View all on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
