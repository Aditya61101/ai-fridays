export const TypingIndicator = () => {
    return (
        <div className="flex justify-start my-2">
            <div className="bg-muted px-4 py-2 rounded-xl shadow flex gap-2 items-center">
                <span className="w-2 h-2 rounded-full bg-foreground animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-foreground animate-bounce delay-150"></span>
                <span className="w-2 h-2 rounded-full bg-foreground animate-bounce delay-300"></span>
            </div>
        </div>
    );
};
