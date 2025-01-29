import { ArrowRight, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.05)_100%)]" />
      <div className="container mx-auto text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm font-medium">Open Source & Public Beta</span>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
          Swift X Deepseek R1
        </h1>
        <p className="text-lg md:text-xl text-white/60 mb-8 max-w-2xl mx-auto">
          Powered by DeepSeek R1 - Your AI Companion for Web2 to Web3
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
           <Link  to="/explore">
          <Button size="lg" className="w-full sm:w-auto group" >
            Explore Agents <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
          <Link  to="/explore">
          
          
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 bg-white/5">
            <Github className="mr-2" /> View on GitHub
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}