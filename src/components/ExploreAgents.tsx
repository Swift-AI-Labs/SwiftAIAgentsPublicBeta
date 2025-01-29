import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const agents = [
  {
    category: "Web3 Agents",
    items: [
      { title: "Pump.fun Trading Bot", description: "Automated trading strategies", comingSoon: true },
      { title: "Smart Contract Auditor", description: "Security analysis for smart contracts", comingSoon: true },
      { title: "NFT Portfolio Manager", description: "Track and manage digital assets", comingSoon: true },
    ],
  },
  {
    category: "Web2 Agents",
    items: [
      { title: "Email Auto-Responder", description: "Intelligent email management", comingSoon: true },
      { title: "Social Media Scheduler", description: "Automated content publishing", comingSoon: true },
    ],
  },
  {
    category: "Education & Tools",
    items: [
      { title: "Blockchain Tutor", description: "Learn Web3 fundamentals", comingSoon: true },
      { title: "On-Chain Data Visualizer", description: "Blockchain analytics made simple", comingSoon: true },
      { title: "Twitter Sentiment Analyzer", description: "Social media insights", comingSoon: true },
    ],
  },
];

export function ExploreAgents() {
  return (
    <section id="explore" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore AI Agents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our growing collection of specialized AI agents designed to enhance your workflow
          </p>
        </div>
        <div className="grid gap-8">
          {agents.map((section) => (
            <div key={section.category}>
              <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((agent) => (
                  <Card key={agent.title} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-medium mb-1">{agent.title}</h4>
                        <p className="text-sm text-muted-foreground">{agent.description}</p>
                      </div>
                      {agent.comingSoon && (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}