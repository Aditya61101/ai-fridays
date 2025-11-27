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
}

export interface ChatStoreActions {
  addUserMessage: (content: string) => void;
  addAiMessage: (content: string) => void;
  startStreamMessage: () => void;
  updateStreamMessage: (token: string) => void;
  finishStreamMessage: () => void;
  setLoading: (loading: boolean) => void;
  addFiles: (files: File[]) => void;
  clearFiles: () => void;
  setScrollLocked: (locked: boolean) => void;
  clearMessages: () => void;
}

export type ChatStore = ChatStoreState & ChatStoreActions;

const generateId = () => Math.random().toString(36).substring(2, 11);

export const useChatStore = create<ChatStore>((set, get) => ({
  messages: [],
  isLoading: false,
  currentStreamMessageId: undefined,
  files: [],
  scrollLocked: false,

  addUserMessage: (content: string) => {
    const message: Message = {
      id: generateId(),
      role: 'user',
      content,
      isStreaming: false,
    };
    set((state) => ({
      messages: [...state.messages, message],
      isLoading: true,
    }));
  },

  addAiMessage: (content: string) => {
    const message: Message = {
      id: generateId(),
      role: 'ai',
      content,
      isStreaming: false,
    };
    set((state) => ({
      messages: [...state.messages, message],
    }));
  },

  startStreamMessage: () => {
    const messageId = generateId();
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
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

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
}));
