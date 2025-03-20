import React from "react";
import { MessageItem } from './MessageItem.js';
import { useMessages } from '../../hooks/useMessages.js';
import { LoadingSpinner } from '../ui/LoadingSpinner.js';
import { messageService, Message, MessageThread } from '@/services/api/message.js';
import { Button } from "../ui/Button.js";
import { Download, Eye, Trash2 } from "lucide-react";

export function MessageList(): JSX.Element {
  const { messages, isLoading } = useMessages() as { messages: MessageThread[] | undefined, isLoading: boolean };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="space-y-4">
      {messages?.map((thread: MessageThread) => (
        thread.messages.map((message: Message) => (
          <MessageItem key={message.id} message={message} />
        ))
      ))}
      {messages?.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No messages yet
        </div>
      )}
    </div>
  );
}