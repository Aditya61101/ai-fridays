import ChatContainer from '@/components/chat/chat-container';

const ChatPage = () => {
  // const handleSendMessage = async (content: string) => {
  //   // Simulate API call with streaming response
  //   return new Promise<AsyncGenerator<string>>((resolve) => {
  //     setTimeout(() => {
  //       async function* streamResponse() {
  //         const response = `I received your message: "${content}". This is a simulated streaming response where each token arrives gradually.`;
  //         for (const char of response) {
  //           yield char;
  //           // Simulate network latency
  //           await new Promise((r) => setTimeout(r, 20));
  //         }
  //       }
  //       resolve(streamResponse());
  //     }, 500);
  //   });
  // };

  
  return (
    <div className="w-full h-screen bg-background p-4">
      <div className="h-full">
        <ChatContainer
          fullPage={false}
          enableUpload={true}
          className="h-full"
          // onSendMessage={handleSendMessage}
          // onUpload={handleUpload}
        />
      </div>
    </div>
  );
};

export default ChatPage;
