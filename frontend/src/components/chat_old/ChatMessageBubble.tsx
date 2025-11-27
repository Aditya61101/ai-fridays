import type { ChatMessage } from "@/store/chat";

export const ChatMessageBubble = ({ message }: { message: ChatMessage }) => {
    return (
        <div className="flex flex-col">
            {/* User bubble */}
            <div className="flex justify-end my-1">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-xl max-w-[80%] shadow">
                    {message.question}
                </div>
            </div>

            {/* Assistant bubble */}
            {message.answer && (
                <div className="flex justify-start my-1">
                    <div className="bg-muted text-foreground px-4 py-2 rounded-xl max-w-[80%] whitespace-pre-wrap shadow">
                        {message.answer}
                    </div>
                </div>
            )}
        </div>
    );
};
