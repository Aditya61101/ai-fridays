// import { useState } from 'react';
import { cn } from '@/lib/utils';
import MessageList from '@/components/chat/message-list';
import ChatInput from '@/components/chat/chat-input';

export interface ChatContainerProps {
  fullPage?: boolean;
  onSendMessage?: (content: string) => Promise<string | AsyncGenerator<string, void>>;
  onUpload?: (files: File[]) => Promise<void>;
  enableUpload?: boolean;
  className?: string;
}

export default function ChatContainer({
  fullPage = false,
  enableUpload = true,
  className,
}: ChatContainerProps) {
  // const { addUserMessage, setLoading } = useChatStore();
  // const [isProcessing, setIsProcessing] = useState(false);
  
  // const handleSendMessage = async (content: string) => {
  //   if (!content.trim() || isProcessing) return;

  //   addUserMessage(content);
  //   setIsProcessing(true);
  //   try {
  //     if (onSendMessage) {
  //       const result = await onSendMessage(content);

  //       // Handle streaming response
  //       if (result && typeof result === 'object' && Symbol.asyncIterator in result) {
  //         const { startStreamMessage, updateStreamMessage, finishStreamMessage } =
  //           useChatStore.getState();
  //         startStreamMessage();

  //         for await (const token of result as AsyncGenerator<string>) {
  //           updateStreamMessage(token);
  //         }

  //         finishStreamMessage();
  //       } else {
  //         // Handle non-streaming response
  //         const { addAiMessage } = useChatStore.getState();
  //         addAiMessage(result as string);
  //       }
  //     }
  //   } finally {
  //     setIsProcessing(false);
  //     setLoading(false);
  //   }
  // };

  // const handleUpload = async (files: File[]) => {
  //   if (onUpload) {
  //     await onUpload(files);
  //   }
  // };

  const containerClasses = cn(
    'flex flex-col',
    fullPage ? 'w-full h-screen' : 'w-full h-[600px]',
    className
  );

  return (
    <div className={containerClasses}>
      <MessageList />
      <div className="px-[calc(100vw-75rem)]">
        <ChatInput
          enableUpload={enableUpload}
          // onSendMessage={handleSendMessage}
          // onUpload={handleUpload}
          // isLoading={isProcessing}
        />
      </div>
    </div>
  );
}
