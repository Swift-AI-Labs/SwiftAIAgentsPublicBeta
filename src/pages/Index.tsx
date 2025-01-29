import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ChatCTA } from "@/components/ChatCTA";
import { Footer } from "@/components/Footer";
import { Roadmap } from "@/components/Roadmap";
import AnimatedBackground from "@/components/AnimatedBackground";
import { VoiceChat } from "@/components/VoiceChat";
import { useState } from "react";

const Index = () => {
  const [showVoiceChat, setShowVoiceChat] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navigation />
      <main className="flex-1">
        <Hero />
        <ChatCTA onChatClick={() => setShowVoiceChat(true)} />
        <Roadmap />
      </main>
      {showVoiceChat && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <button
            onClick={() => setShowVoiceChat(false)}
            className="absolute top-4 left-4 p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            ← Back
          </button>
          <VoiceChat />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Index;