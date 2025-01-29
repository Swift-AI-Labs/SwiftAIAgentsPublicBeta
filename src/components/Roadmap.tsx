import { CheckCircle2, Clock } from "lucide-react";

export function Roadmap() {
  const phases = [
    {
      phase: "Phase 1",
      title: "Launch & Integration",
      description: "Launch $SWIFT token and demonstrate DeepSeek's integration",
      status: "in-progress"
    },
    {
      phase: "Phase 2",
      title: "Email Automation",
      description: "Integrate an advanced automation system for email management",
      status: "upcoming"
    },
    {
      phase: "Phase 3",
      title: "Token Gating",
      description: "Integrate wallet connect allowing users holding sufficient $SWIFT to access premium features",
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Ecosystem Expansion",
      description: "Integration of advanced AI features, cross-chain compatibility, and enhanced trading tools",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Roadmap</h2>
          <p className="text-lg text-white/60">Our journey to revolutionize Web2 to Web3 integration</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-white/60">{phase.phase}</span>
                  {phase.status === "in-progress" ? (
                    <div className="flex items-center text-green-500">
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      <span className="text-xs">In Progress</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-white/40">
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="text-xs">Upcoming</span>
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-white/60">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}