import { BookOpen, ExternalLink } from "lucide-react";

const Research = () => {
  const publications = [
    {
      title: "A Survey on Multilingual Natural Language Processing: Data, Models, Evaluation, and Future Directions",
      year: "2024",
      type: "Research Paper",
      link: "https://zenodo.org/records/17201567",
    },
    {
      title: "Beyond the Cliff — Methodological Lessons",
      year: "2024",
      type: "Research Paper",
      link: "https://zenodo.org/records/17466718",
    },
  ];

  return (
    <section id="research" className="py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          Research
        </h2>

        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <a
              key={idx}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-2xl space-y-4 animate-fade-in block hover:scale-[1.02] transition-transform cursor-hover group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {pub.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {pub.type}
                    </span>
                    <span>{pub.year}</span>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
