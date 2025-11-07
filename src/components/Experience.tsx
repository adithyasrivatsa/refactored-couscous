import { Briefcase, Users, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Project Team Lead",
      organization: "College Development Group",
      period: "Jan 2025 – Present",
      description: [
        "Leading a 9-member ML engineering team building deployable AI systems",
        "Designed workflows for CV/NLP pipelines and model optimization",
      ],
      icon: Users,
    },
    {
      title: "Software Engineering Virtual Experience",
      organization: "Electronic Arts (Forage)",
      period: "Nov 2025",
      description: [
        "Completed EA's official office simulation",
        "Strengthened C++ fundamentals through structured tasks",
        "Understood EA workflow expectations and engineering discipline",
      ],
      icon: Briefcase,
    },
    {
      title: "Technical Event Organizer",
      organization: "Tech Community",
      period: "Sep 2024 – Present",
      description: [
        "Organized LLM, CV, and ML workshops for the college tech community",
      ],
      icon: Calendar,
    },
  ];

  return (
    <section id="experience" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass p-8 rounded-2xl hover:scale-105 transition-transform cursor-hover animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary mt-1">
                  <exp.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
