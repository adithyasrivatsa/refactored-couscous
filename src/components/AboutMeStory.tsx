import { useState } from "react";
import { Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutMeStory = () => {
  const [isDramatic, setIsDramatic] = useState(false);

  const professionalText = `I'm Adithya Srivatsa, born on 22 December 2007 in Hyderabad. I come from a Brahmin family with a documented and verified horoscope. I am currently pursuing a Diploma in Artificial Intelligence & Machine Learning, focusing on deep learning, system-level computing, and full-stack engineering.

My work spans AI development, Linux systems (Arch & Kali), and technical writing under the name Johan Aelius. I'm also building Nap & Code, a community platform for developers and engineers.

Outside academics and engineering, I have formal experience as an NCC cadet, a trained Mridangam artist, and a competitive go-kart driver.`;

  const dramaticText = `Let's talk about me… this is me being dramatic.

I arrived on 22 December 2007, right when Hyderabad's winter breeze was doing its overconfident "I'm cold" act. A Brahmin household welcomed me in—complete with a legit horoscope that looked less like astrology and more like a prewritten roadmap saying, "This kid isn't here to be normal."

Hyderabad raised me with its signature combo: tech dreams, city chaos, biryani debates, and enough cultural layering to make anyone interesting. And somewhere between all that, I started bending my life around intelligence—human, artificial, and everything in between.

While kids were choosing crayons, I was choosing circuits. While others were learning ABC, I was learning why Linux boots the way it does.

Tradition in one hand, terminal in the other.

The story kept escalating—NCC discipline shaping my grit, go-kart tracks sharpening my reflexes, Mridangam rhythms syncing my brain with precision.

Everything pointed to one thing: I wasn't built to follow; I was built to engineer, to create, to push boundaries until they pushed back.

Today, I'm the AI/ML mind in progress, the system-level tinkerer, the guy who treats Arch Linux like a stress toy, the writer who moonlights as Johan Aelius, and the builder behind Nap & Code.

Hyderabadi. Brahmin. Born on a mathematically poetic day. Horoscope certified.

And still evolving—version updates rolling in nonstop.`;

  return (
    <section id="about-story" className="py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass p-8 md:p-12 rounded-2xl space-y-6 animate-fade-in">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold flex items-center gap-3">
              {isDramatic ? (
                <>
                  <Sparkles className="h-8 w-8 text-primary" />
                  The Dramatic Version
                </>
              ) : (
                <>
                  <User className="h-8 w-8 text-primary" />
                  About Me
                </>
              )}
            </h2>
            <Button
              onClick={() => setIsDramatic(!isDramatic)}
              variant="outline"
              className="gap-2"
            >
              {isDramatic ? (
                <>
                  <User className="h-4 w-4" />
                  Professional Mode
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Make it Dramatic
                </>
              )}
            </Button>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/90 leading-relaxed whitespace-pre-line">
              {isDramatic ? dramaticText : professionalText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeStory;
