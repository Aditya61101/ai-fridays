import ChatContainer from '@/components/chat/chat-container';

const ChatPage = () => {
  const handleSendMessage = async (content: string) => {
    // Simulate API call with streaming response
    return new Promise<AsyncGenerator<string>>((resolve) => {
      setTimeout(() => {
        async function* streamResponse() {
          const response = `I received your message: "${content}". This is a simulated streaming response where each token arrives gradually.`;
          for (const char of response) {
            yield char;
            // Simulate network latency
            await new Promise((r) => setTimeout(r, 20));
          }
        }
        resolve(streamResponse());
      }, 500);
    });
  };

  const handleUpload = async (files: File[]) => {
    console.log('Files uploaded:', files);
    // Handle file upload to your backend
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="w-full h-screen bg-background p-4">
      <div className="h-full">
        <ChatContainer
          fullPage={false}
          onSendMessage={handleSendMessage}
          onUpload={handleUpload}
          enableUpload={true}
          className="h-full"
        />
      </div>
    </div>
  );
};

export default ChatPage;
