import { useEffect, useRef, useState } from 'react';
import MessageBubble from './message-bubble';
import ScrollToBottomButton from '@/components/chat/scroll-to-bottom';
import { useChatStore } from '@/store/chat-store';
import EmptyState from '@/components/chat/empty-state';
import { sendMessage } from '@/api/chat';
import MessageLoader from './message-loader';

export default function MessageList() {
  const { messages, setScrollLocked } = useChatStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const isLoading = useChatStore((state) => state.isLoading);

  // Scroll to bottom when AI responds
  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  // Check if user is near bottom
  const isNearBottom = () => {
    if (!containerRef.current) return false;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    return scrollHeight - scrollTop - clientHeight < 100;
  };

  // Handle scroll event
  const handleScroll = () => {
    const nearBottom = isNearBottom();
    setShowScrollButton(!nearBottom);
    setScrollLocked(!nearBottom);
  };

  // Scroll to top when new user message is added
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage?.role === "user") {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          scrollToBottom();
        });
      });
    }
    // if (lastMessage?.role === 'user') {
    //   setTimeout(scrollToBottom, 100);
    // }
  }, [messages, isLoading]);

  const handlePromptClick = async (prompt: string) => {
    // const { addUserMessage } = useChatStore.getState();
    // addUserMessage(prompt);
    await sendMessage(prompt);
  };

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto space-y-4 p-4 scroll-smooth custom-scroll px-[calc(100vw-75rem)]"
    >
      {messages.length === 0 ? (
        <EmptyState onPromptClick={handlePromptClick} />
      ) : (
        <>
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && <div className="rounded-xl bg-muted text-foreground rounded-tl-none"><MessageLoader/></div>}
          <div className="h-[90%]" />
        </>
      )}

      {showScrollButton && <ScrollToBottomButton onClick={scrollToBottom} />}
    </div>
  );
}
