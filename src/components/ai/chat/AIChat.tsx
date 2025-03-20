import React from "react";

import { AIMessageList } from './AIMessageList.js';
import { AIMessageInput } from './AIMessageInput.js';
import { AIWelcomeMessage } from '../AIWelcomeMessage.js';
import { AISuggestions } from '../AISuggestions.js';
import { AIHeader } from './AIHeader.js';
import type { AIMessage } from '../../../types/ai.js';

interface AIChatProps {
  messages: AIMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  error?: Error;
}

export function AIChat({ messages, onSendMessage, isLoading, error }: AIChatProps) {
  const suggestions = [
    'What services do you offer?',
    'How can I schedule a consultation?',
    'What are your business hours?',
    'Do you offer virtual meetings?'
  ];

  return (
    <div className="flex flex-col h-[500px]">
      <AIHeader onClose={() => {}} />
      
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
        placeholder="Type your message..."
      />

      {error && (
        <div className="p-4 bg-red-50 text-red-600 text-sm border-t border-red-100">
          {error.message}
        </div>
      )}
    </div>
  );
}