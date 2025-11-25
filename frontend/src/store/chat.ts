import { create } from "zustand";

export type ChatMessage = {
    // role: "user" | "assistant";
    // content: string;
    id: string;
    question: string;
    answer: string;
    tool?: string;
};

type ChatStore = {
    messages: ChatMessage[];
    threadId: string | null;
    isLoading: boolean;

    // actions
    addMessage: (question: string, tool?: string) => void;
    updateLastMessage: (chunk: string) => void;
    setThreadId: (id: string | null) => void;
    setIsLoading: (value: boolean) => void;
    clearChat: () => void;
};

export const useChatStore = create<ChatStore>((set) => ({
    messages: [],
    threadId: null,
    isLoading: false,

    addMessage: (question, tool) =>
        set((state) => ({
            messages: [
                ...state.messages,
                { id: crypto.randomUUID(), question, answer:'', tool },
            ],
        })),

    updateLastMessage: (chunk) =>
        set((state) => {
            if(state.messages.length === 0) return state;
            const prevMessages = [...state.messages];
            const lastIndex = prevMessages.length - 1;

            // for streaming
            // prevMessages[lastIndex] = {
            //     ...prevMessages[lastIndex],
            //     answer: prevMessages[lastIndex].answer + chunk,
            // };

            // for normal response
            prevMessages[lastIndex] = {
                ...prevMessages[lastIndex],
                answer: chunk,
            };
            return {
                messages: prevMessages,
            };
        }),

    setThreadId: (id) => set({ threadId: id }),

    setIsLoading: (value) => set({ isLoading: value }),

    clearChat: () => set({ messages: [], threadId: null }),
}));
