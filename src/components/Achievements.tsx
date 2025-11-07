import { Award, Trophy } from "lucide-react";

const Achievements = () => {
  const certifications = [
    {
      title: "AI-Powered Software & System Design",
      score: "100%",
    },
    {
      title: "Generative AI for Everyone",
      score: "99.16%",
    },
    {
      title: "Cybersecurity for Everyone",
      score: "94.72%",
    },
  ];

  const achievements = [
    "2nd Place — College AI/ML Hackathon (2024)",
    "NCC Cadet (2023–2026)",
    "Mridangam Artist — 7+ years",
  ];

  return (
    <section id="achievements" className="py-32 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Certifications */}
          <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors cursor-hover"
                >
                  <p className="font-medium text-sm">{cert.title}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: cert.score }}
                      />
                    </div>
                    <span className="text-xs text-primary font-bold">{cert.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="glass p-8 rounded-2xl space-y-6 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <div className="flex items-center gap-3">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="font-display text-xl font-semibold">Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-colors cursor-hover"
                >
                  <p className="text-sm">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
