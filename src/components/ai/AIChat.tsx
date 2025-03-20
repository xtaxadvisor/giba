import React from "react";

import { AIMessageList } from "./chat/AIMessageList.js"; // ✅ Correct import path
import { AIMessageInput } from './chat/AIMessageInput.js';  // ✅ Corrected path
import { AIWelcomeMessage } from './AIWelcomeMessage.js';
import { AISuggestions } from './AISuggestions.js';
import { AIHeader } from './AIHeader.js';
import type { AIMessage } from '../../types/ai.js';

interface AIChatProps {
  messages: AIMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error?: Error;
  onClose: () => void;
}

export function AIChat({ messages, onSendMessage, isLoading, error, onClose }: AIChatProps) {
  const suggestions = [
    'What tax deductions can I claim?',
    'How do I calculate my estimated taxes?',
    'What documents do I need for tax filing?',
    'Can you explain business tax obligations?'
  ];

  return (
    <div className="flex flex-col h-[500px]">
      <AIHeader onClose={onClose} title="GRAKON AI" />
      
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <>
            <AIWelcomeMessage />
            <AISuggestions
              suggestions={suggestions}
              onSelect={onSendMessage}
            />
          </>
        ) : (
          <AIMessageList 
            messages={messages} 
            isTyping={isLoading} 
          />
        )}
      </div>

      <AIMessageInput
        onSend={onSendMessage}
        isDisabled={isLoading}
        placeholder="Ask me anything about taxes or finance..."
      />

      {error && (
        <div className="p-4 bg-red-50 text-red-600 text-sm border-t border-red-100">
          {error.message}
        </div>
      )}
    </div>
  );
}