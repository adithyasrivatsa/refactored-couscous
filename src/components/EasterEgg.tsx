import { Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";

interface EasterEggProps {
  show: boolean;
  onClose: () => void;
}

const EasterEgg = ({ show, onClose }: EasterEggProps) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="glass p-8 rounded-2xl max-w-md w-full relative neural-glow animate-fade-in">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 cursor-hover"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-neural-pulse">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>

          <h3 className="font-display text-2xl font-bold">You found it! 🎉</h3>

          <p className="text-muted-foreground">
            Exploring intelligence through code — that's what I do best. 
            Thanks for paying attention to the details!
          </p>

          <div className="pt-4">
            <Button onClick={onClose} className="cursor-hover">
              Continue Exploring
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasterEgg;
