import { useEffect, useRef } from "react";
import { useChatStore } from "@/store/chat_old";
import { ChatInput } from "./ChatInput";
import { ChatMessageBubble } from "./ChatMessageBubble";
import { TypingIndicator } from "./TypingIndicator";

export const ChatWindow = () => {
    const messages = useChatStore((s) => s.messages);
    const isLoading = useChatStore((s) => s.isLoading);
    const bottomRef = useRef<HTMLDivElement | null>(null);

    // auto-scroll when messages change
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-full max-h-screen">

            {/* Chat messages area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-background">
                {messages.map((msg) => (
                    <ChatMessageBubble key={msg.id} message={msg} />
                ))}

                {/* Loader bubble */}
                {isLoading && <TypingIndicator />}

                <div ref={bottomRef} />
            </div>

            {/* Chat input */}
            <ChatInput />
        </div>
    );
};
