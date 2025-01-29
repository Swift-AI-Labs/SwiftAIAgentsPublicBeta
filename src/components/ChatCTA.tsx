import { MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

interface ChatCTAProps {
  onChatClick: () => void;
}

export function ChatCTA({ onChatClick }: ChatCTAProps) {
  return (
    <section id="chat" className="section-padding">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <MessageSquare className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Talk to Deepseek R1 → Ask Anything!
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            From cooking recipes to on-chain arbitrage strategies, I'm here to help.
            Start a conversation and experience the future of AI assistance.
          </p>
          <Button size="lg" className="w-full sm:w-auto" onClick={onChatClick}>
            Chat Now
          </Button>
        </div>
      </div>
    </section>
  );
}