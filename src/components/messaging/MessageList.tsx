import React from "react";
import { MessageItem } from './MessageItem';
import { useMessages } from '../../hooks/useMessages';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { Message, MessageThread } from '@/services/api/message';
import { Button } from "../ui/Button";
import { Download, Eye, Trash2 } from "lucide-react";

export function MessageList() {
  const { messages, isLoading }: { messages: MessageThread[] | undefined, isLoading: boolean } = useMessages();

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