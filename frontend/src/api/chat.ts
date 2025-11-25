import { useChatStore } from "@/store/chat";
import api from "./base";

export const sendMessage = async (content: string) => {
    const {
        addMessage,
        updateLastMessage,
        setThreadId,
        threadId,
        setIsLoading,
    } = useChatStore.getState();

    // addMessage("user", content);
    addMessage(content);
    setIsLoading(true);

    let finalThread = threadId;
    if (!finalThread) {
        finalThread = crypto.randomUUID();
        setThreadId(finalThread);
    }
    // const payload = {
    //     user_prompt: content,
    //     ...(threadId && { thread_id: threadId }),
    // };
    const payload = {
        user_prompt: content,
        thread_id: finalThread,
    };
    // for normal response
    const { data } = await api.post(
        "/chat",
        payload
    );
    setIsLoading(false);
    updateLastMessage(data.final_response);

    // for streaming response
    // const response = await fetch(
    //     `http://localhost:5000/chat`,
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(payload),
    //     }
    // );

    // if (!response.body) throw new Error("Readable stream not supported");

    // const reader = response.body.getReader();
    // const decoder = new TextDecoder("utf-8");

    // let done = false;
    // let firstChunk = true;
    // let buffer = "";
    // let lastUpdateTime = 0;
    // const UPDATE_INTERVAL = 50; // ms

    // while (!done) {
    //     const { value, done: doneReading } = await reader.read();
    //     done = doneReading;
    //     if (value) {
    //         const chunk = decoder.decode(value);
    //         buffer += chunk;
    //         const now = Date.now();
    //         if (firstChunk) {
    //             setIsLoading(false);
    //             firstChunk = false;
    //             updateLastMessage(buffer);
    //             buffer = "";
    //             lastUpdateTime = now;
    //             continue;
    //         }
    //         // Debounced flush
    //         if (now - lastUpdateTime > UPDATE_INTERVAL) {
    //             updateLastMessage(buffer);
    //             buffer = "";
    //             lastUpdateTime = now;
    //         }
    //     }
    // }
    // // Final flush at end of stream
    // if (buffer.length > 0) {
    //     updateLastMessage(buffer);
    // }


    // addMessage("assistant", data.final_response);
};
