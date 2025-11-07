const NeuralBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Neural nodes */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full bg-primary/40 animate-neural-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full bg-primary/30 animate-neural-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-neural-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-60 right-1/3 w-3 h-3 rounded-full bg-primary/30 animate-neural-pulse" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-primary/40 animate-neural-pulse" style={{ animationDelay: "0.5s" }} />
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <line x1="5%" y1="15%" x2="90%" y2="25%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" />
        <line x1="25%" y1="75%" x2="65%" y2="55%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "1s" }} />
        <line x1="90%" y1="25%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
      </svg>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </div>
  );
};

export default NeuralBackground;
