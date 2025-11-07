import { Mail, MapPin, Phone, Github, Linkedin, FileText, Send, Video, Code } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "archlinuxadithya@gmail.com",
      href: "mailto:archlinuxadithya@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8121200722",
      href: "tel:+918121200722",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
    },
  ];

  const socials = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/adithyasrivatsa",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adithyasrivatsa/",
    },
    {
      icon: FileText,
      label: "Medium",
      href: "https://medium.com/@adithyasrivatsa",
    },
    {
      icon: Code,
      label: "Dev.to",
      href: "https://dev.to/adithyasrivatsa",
    },
    {
      icon: Video,
      label: "YouTube",
      href: "https://www.youtube.com/@adithyasrivatsa",
    },
  ];

  return (
    <section id="contact" className="py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-16 animate-fade-in">
          Let's Connect
        </h2>

        <div className="glass p-8 md:p-12 rounded-2xl space-y-8 animate-fade-in">
          <p className="text-center text-lg text-muted-foreground">
            Interested in collaboration, research opportunities, or just want to chat about AI/ML? 
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <div
                key={idx}
                className="p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-colors cursor-hover text-center"
              >
                <info.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{info.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass hover:scale-110 transition-transform cursor-hover group"
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button
              size="lg"
              className="gap-2 cursor-hover neural-glow"
              onClick={() => window.location.href = "mailto:archlinuxadithya@gmail.com"}
            >
              <Send className="h-5 w-5" />
              Send a Message
            </Button>
          </div>
        </div>

        <footer className="text-center mt-16 text-sm text-muted-foreground">
          <p>© 2025 Adithya Srivatsa. Built with curiosity and code.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
