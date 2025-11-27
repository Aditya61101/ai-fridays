import type React from 'react';
import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import UploadModal from '@/components/chat/upload-modal';
import { useChatStore } from '@/store/chat-store';
import { sendMessage } from '@/api/chat';

interface ChatInputProps {
  // onSendMessage: (content: string) => Promise<void>;
  // onUpload?: (files: File[]) => Promise<void>;
  enableUpload?: boolean;
  // isLoading?: boolean;
}

export default function ChatInput({
  // onSendMessage,
  // onUpload,
  enableUpload = true,
  // isLoading = false,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [message, setMessage] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const isLoading = useChatStore((state) => state.isLoading);

  // Auto-resize textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
      textarea.focus();
    }
  }, [message]);

  const handleSend = async () => {
    if (message.trim() && !isLoading) {
      // await onSendMessage(message);
      await sendMessage(message);
      setMessage('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="border border-border rounded-xl bg-card p-2 space-y-1">
        <div className="flex flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Send a message…"
            disabled={isLoading}
            className={cn(
              'flex-1 min-h-10 max-h-30 px-3 py-2 rounded-lg',
              'text-sm text-foreground placeholder-muted-foreground',
              'resize-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring',
              'disabled:opacity-50 disabled:cursor-not-allowed'
            )}
            rows={1}
          />
        </div>

        <div className="flex justify-between items-center gap-2">
          {enableUpload && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setShowUploadModal(true)}
              disabled={isLoading}
              className="h-10 w-10"
              aria-label="Upload files"
            >
              <Upload className="h-4 w-4" />
            </Button>
          )}
          <Button
            onClick={handleSend}
            disabled={!message.trim() || isLoading}
            size="icon"
            className="h-10 w-10 ml-auto"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <UploadModal
        open={showUploadModal}
        onOpenChange={setShowUploadModal}
        // onUpload={handleUploadConfirm}
      />
    </>
  );
}
