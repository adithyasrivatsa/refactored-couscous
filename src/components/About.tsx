import { Code2, Brain, Sparkles, GraduationCap, Calendar } from "lucide-react";
import professionalPhoto from "@/assets/professional-photo.jpeg";

const About = () => {
  const skills = [
    { category: "Languages", items: ["Python", "C++", "Java"], icon: Code2 },
    { category: "AI/ML", items: ["Transformers", "YOLOv8", "TensorFlow", "OpenCV", "Scikit-learn"], icon: Brain },
    { category: "Tools", items: ["Arch Linux", "Docker", "Git", "Streamlit"], icon: Sparkles },
  ];

  return (
    <section id="about" className="py-32 px-4">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Profile Summary */}
          <div className="space-y-6 animate-fade-in">
            <div className="glass p-8 rounded-2xl space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/40 flex-shrink-0">
                  <img 
                    src={professionalPhoto} 
                    alt="Adithya Srivatsa Professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-2xl font-semibold flex items-center justify-center md:justify-start gap-3 mb-2">
                    <Brain className="h-6 w-6 text-primary" />
                    Profile Summary
                  </h3>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Born: December 22, 2007</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                AI/ML engineer skilled in Computer Vision, NLP, and ML pipelines. Strong expertise in Python, 
                Linux systems, LLM workflows, and deployment. Completed Electronic Arts' Software Engineering 
                Office Simulation and continuously strengthening C++ fundamentals through guided tasks.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl space-y-4">
              <h3 className="font-display text-2xl font-semibold flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>
              <div>
                <p className="font-semibold">Diploma in Artificial Intelligence & Machine Learning</p>
                <p className="text-sm text-muted-foreground">Government Institute of Electronics, Telangana</p>
                <p className="text-sm text-primary font-medium mt-2">CGPA: 8.0/10 • Expected May 2026</p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="font-display text-2xl font-semibold">Technical Skills</h3>
            {skills.map((skillSet, idx) => (
              <div
                key={skillSet.category}
                className="glass p-6 rounded-2xl space-y-3 hover:scale-105 transition-transform cursor-hover"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <skillSet.icon className="h-5 w-5 text-primary" />
                  <h4 className="font-display font-semibold">{skillSet.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="glass p-6 rounded-2xl">
              <h4 className="font-display font-semibold mb-3">Domains</h4>
              <div className="flex flex-wrap gap-2">
                {["Computer Vision", "NLP", "Deep Learning", "Full-Stack AI", "ML Ops"].map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
