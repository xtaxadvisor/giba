import React, { useState, useRef, useEffect } from 'react';
import AIAssistantBubble from './AIAssistantBubble.js';
import { AIChat } from './AIChat.js';
import { useClickOutside } from '../../utils/hooks/useClickOutside.js'; // Removed `.ts` extension as TypeScript resolves `.ts` files automatically

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);
  

  useClickOutside(chatRef, () => {
    if (isOpen) setIsOpen(false);
  });

  const handleNewMessage = () => {
    if (!isOpen) {
      setUnreadCount(prev => prev + 1);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setUnreadCount(0);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      setIsOpen(false);
    };
  }, []);

  return (
    <>
      <AIAssistantBubble 
        onOpen={handleOpen} 
        unreadCount={unreadCount} 
      />
      {isOpen && (
        <div ref={chatRef}>
          <AIChat 
            onClose={handleClose} messages={[]} onSendMessage={function (message: string): void {
              throw new Error('Function not implemented.');
            } } isLoading={false}          />
        </div>
      )}
    </>
  );
}