import React from "react";
import { Bot } from "lucide-react";
import { Button } from "../ui/Button";

interface AIAssistantBubbleProps {
  onOpen: () => void;
  unreadCount?: number; // Optional unread count  // ✅ Add a comment to explain why this is optional   
}
export const AIAssistantBubble: React.FC<AIAssistantBubbleProps> = ({ onOpen, unreadCount = 0 }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={onOpen}
        aria-label="Open AI Assistant"
        className="relative flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <Bot className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default AIAssistantBubble;