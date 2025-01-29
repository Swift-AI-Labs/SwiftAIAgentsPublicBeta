import { VoiceChat } from "@/components/VoiceChat";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

export function ChatPage() {
  const [showVoiceChat, setShowVoiceChat] = useState(true);

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex">
        <Sidebar />
        <div className="relative flex-1 bg-gradient-to-b from-gray-900 to-gray-950">
          {showVoiceChat && <VoiceChat />}
        </div>
      </div>
    </div>
  );
}