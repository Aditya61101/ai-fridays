import { cn } from '@/lib/utils';
import { type Message } from '@/store/chat-store';
// import MessageLoader from '@/components/chat/message-loader';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';
  return (
    <div
      className={cn(
        'flex w-full animate-in fade-in slide-in-from-bottom-2 duration-300',
        isUser ? 'justify-end' : 'justify-start'
      )}
    >
      <div
        className={cn(
          'max-w-xs lg:max-w-md px-4 py-3 rounded-xl',
          isUser
            ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-tr-none'
            : 'bg-muted text-foreground rounded-tl-none'
        )}
      >
        <p className="text-sm leading-relaxed break-words">{message.content}</p>
        {/* {message.isStreaming ? (
         <MessageLoader/>
        ) : (
          <p className="text-sm leading-relaxed break-words">{message.content}</p>
        )} */}
      </div>
    </div>
  );
}
