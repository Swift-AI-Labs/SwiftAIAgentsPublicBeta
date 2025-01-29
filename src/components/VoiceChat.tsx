import { Mic, Send } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export function VoiceChat() {
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    const newMessages = [...messages, { role: "user", content: inputText }];
    setMessages(newMessages);
    setInputText("");
    setIsThinking(true);

    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      setIsThinking(false);
      typeWriterEffect(data.response);
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to fetch response. Please try again.");
      setIsThinking(false);
    }
  };

  const typeWriterEffect = (text: string) => {
    let index = 0;
    let currentText = "";

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      if (index < text.length) {
        currentText += text.charAt(index);
        index++;
        setMessages((prevMessages) => {
          const lastMessage = prevMessages[prevMessages.length - 1];
          if (lastMessage.role === "assistant") {
            return [
              ...prevMessages.slice(0, -1),
              { ...lastMessage, content: currentText },
            ];
          } else {
            return [
              ...prevMessages,
              { role: "assistant", content: currentText },
            ];
          }
        });
      } else {
        clearInterval(intervalRef.current!);
        intervalRef.current = null;
      }
    }, 50);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsThinking(false);
    }
  };

  const handleVoiceInput = () => {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.addEventListener("result", (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");
      setInputText(transcript);
    });

    recognition.addEventListener("end", () => {
      setIsListening(false);
    });

    recognition.start();
    setIsListening(true);
  };

  return (
    <div className="flex flex-col h-full bg-background/80 backdrop-blur-sm border border-white/10 rounded-lg shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            } items-end gap-2`}
          >
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
            )}
            <div
              className={`group relative max-w-[70%] px-4 py-3 rounded-2xl ${
                msg.role === "user"
                  ? "bg-blue-600/90 backdrop-blur-sm text-white"
                  : "bg-white/10 backdrop-blur-sm text-gray-100"
              }`}
            >
              <ReactMarkdown>{msg.content}</ReactMarkdown>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
            {msg.role === "user" && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0" />
            )}
          </div>
        ))}
        {isThinking && (
          <div className="flex justify-start items-end gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
            <div className="max-w-[70%] px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-sm">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-white/60 animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-white/10 bg-gradient-to-t from-background/80 to-transparent backdrop-blur-sm">
        <div className="relative flex items-center gap-2 max-w-3xl mx-auto">
          <input
            type="text"
            className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            placeholder="Message DeepSeek R1..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <Button
            onClick={handleVoiceInput}
            className="rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
            size="icon"
          >
            <Mic className={`w-5 h-5 ${isListening ? "text-red-500 animate-pulse" : "text-white/60"}`} />
          </Button>
          <Button
            onClick={handleSend}
            className="rounded-xl bg-blue-600/90 hover:bg-blue-700/90 transition-colors"
            size="icon"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
      </div>
    </div>
  );
}
