import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { ExploreAgents } from "@/components/ExploreAgents";

export function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Navigation />
      <main className="flex-1">
        <ExploreAgents />
      </main>
      <Footer />
    </div>
  );
}