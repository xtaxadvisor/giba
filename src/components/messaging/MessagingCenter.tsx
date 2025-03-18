import React, { useCallback } from "react";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { useMessages } from "../../hooks/useMessages";

const MessagingCenter: React.FC = () => {
  const { sendMessage, isSendingMessage } = useMessages();

  const handleSendMessage = useCallback(
    (content: string, attachments?: File[]) => {
      if (!content.trim()) return; // Prevent empty messages

      sendMessage({
        recipientId: "defaultRecipient",
        content,
        attachments: attachments?.map((file) => file.name) ?? [], // In real-world, upload files first
      });
    },
    [sendMessage]
  );

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col bg-white rounded-lg shadow">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4">
        <MessageList />
      </div>

      {/* Message Input */}
      <MessageInput onSendMessage={handleSendMessage} isLoading={isSendingMessage} />
    </div>
  );
};

export default MessagingCenter;