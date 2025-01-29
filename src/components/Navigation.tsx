import { Github, Menu, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { Link , useLocation} from "react-router-dom";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToChat = () => {
    const chatSection = document.getElementById('chat');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExplore = () => {
    const exploreSection = document.getElementById('explore');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <a href="/" className="text-xl font-semibold">
          Swift X DeepSeek R1
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {location.pathname !== "/explore" && (
            <Link 
              to="/explore"
              className={`text-sm transition-colors ${location.pathname === "/explore" ? "text-primary/80" : "hover:text-primary/80"}`}
            >
              Explore Agents
            </Link>
          )}
          {location.pathname !== "/chat" && (
            <Link 
              to="/chat"
              className={`text-sm transition-colors ${location.pathname === "/chat" ? "text-primary/80" : "hover:text-primary/80"}`}
            >
              Chat
            </Link>
          )}
          <Link 
            to="/GitHubPages"
            className="text-sm hover:text-primary/80 transition-colors"
          >
            Docs
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:bg-primary/10 rounded-full transition-colors"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </nav>
  );
}