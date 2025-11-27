
const MessageLoader = () => {
    return (
        <div className="flex gap-1 py-1">
            <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: '0ms' }}
            />
            <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: '150ms' }}
            />
            <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: '300ms' }}
            />
        </div>
    )
}

export default MessageLoader;