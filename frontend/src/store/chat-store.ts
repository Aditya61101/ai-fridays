import { create } from 'zustand';

export interface Message {
  id: string;
  role: 'user' | 'ai';
  content: string;
  isStreaming?: boolean;
}

export interface ChatStoreState {
  messages: Message[];
  isLoading: boolean;
  currentStreamMessageId?: string;
  files: File[];
  scrollLocked: boolean;
  threadId: string | null;
  shouldScroll: boolean;
}

export interface ChatStoreActions {
  addUserMessage: (content: string) => void;
  addAiMessage: (content:string) => void;
  // updateLastAIMessage: (content: string) => void; 
  startStreamMessage: () => void;
  updateStreamMessage: (token: string) => void;
  finishStreamMessage: () => void;
  setLoading: (loading: boolean) => void;
  addFiles: (files: File[]) => void;
  clearFiles: () => void;
  setScrollLocked: (locked: boolean) => void;
  clearMessages: () => void;
  setThreadId: (id: string | null) => void;
  setShouldScroll: (shouldScroll: boolean) => void;
}

export type ChatStore = ChatStoreState & ChatStoreActions;

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  isLoading: false,
  currentStreamMessageId: undefined,
  files: [],
  scrollLocked: false,
  threadId: null,
  shouldScroll: true,

  addUserMessage: (content: string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
    };
    set((state) => ({
      messages: [...state.messages, message],
      isLoading: true,
    }));
  },

  addAiMessage: (content:string) => {
    const message: Message = {
      id: crypto.randomUUID(),
      role: 'ai',
      content,
    };
    set((state) => ({
      messages: [...state.messages, message],
      isLoading: false
    }));
  },

  // updateLastAIMessage: (content: string) => {
  //   set((state) => {
  //     const messages = [...state.messages];
  //     let lastMessage = messages[messages.length - 1];
  //     if (lastMessage && lastMessage.role === 'ai') {
  //       lastMessage = { ...lastMessage, content, isMessageLoading:false };
  //       messages[messages.length - 1] = lastMessage;
  //     }
  //     return { messages };
  //   });
  // },

  setThreadId: (id) => set({ threadId: id }),

  setLoading: (loading: boolean) =>  set({ isLoading: loading }),

  setShouldScroll: (shouldScroll: boolean) => set({ shouldScroll }),

  addFiles: (files: File[]) => {
    set((state) => ({
      files: [...state.files, ...files],
    }));
  },

  clearFiles: () => {
    set({ files: [] });
  },

  setScrollLocked: (locked: boolean) => {
    set({ scrollLocked: locked });
  },

  clearMessages: () => {
    set({
      messages: [],
      isLoading: false,
      currentStreamMessageId: undefined,
    });
  },

  // for streaming purpose
  startStreamMessage: () => {
    const messageId = crypto.randomUUID();
    set((state) => ({
      currentStreamMessageId: messageId,
      messages: [
        ...state.messages,
        {
          id: messageId,
          role: 'ai',
          content: '',
          isStreaming: true,
        },
      ],
    }));
  },

  updateStreamMessage: (token: string) => {
    set((state) => {
      const messageId = state.currentStreamMessageId;
      if (!messageId) return state;

      return {
        messages: state.messages.map((msg) =>
          msg.id === messageId ? { ...msg, content: msg.content + token } : msg
        ),
      };
    });
  },

  finishStreamMessage: () => {
    set((state) => {
      const messageId = state.currentStreamMessageId;
      if (!messageId) return state;

      return {
        messages: state.messages.map((msg) =>
          msg.id === messageId ? { ...msg, isStreaming: false } : msg
        ),
        currentStreamMessageId: undefined,
        isLoading: false,
      };
    });
  }
}));
