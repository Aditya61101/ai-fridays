import { useState } from "react";
import { sendMessage } from "@/api/chat";
import { useChatStore } from "@/store/chat";
import { Loader2, Send } from "lucide-react";

export const ChatInput = () => {
    const [input, setInput] = useState("");
    const isLoading = useChatStore((s) => s.isLoading);

    const onSend = async () => {
        if (!input.trim() || isLoading) return;

        await sendMessage(input);
        setInput("");
    };

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSend();
        }
    };

    return (
        <div className="border-t p-4 bg-background">
            <div className="flex items-center gap-3">
                <textarea
                    disabled={isLoading}
                    className="flex-1 rounded-lg border bg-background p-3 focus:outline-none resize-none h-12"
                    placeholder="Ask something..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                />

                <button
                    onClick={onSend}
                    disabled={isLoading}
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 disabled:opacity-50 transition"
                >
                    {isLoading ? (
                        <Loader2 className="animate-spin h-5 w-5" />
                    ) : (
                        <Send className="h-5 w-5" />
                    )}
                </button>
            </div>
        </div>
    );
};
