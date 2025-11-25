import type { ROLE_STR } from "@/lib/roles";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type User = {
    id: string;
    name: string;
    email: string;
};

type AuthStore = {
    user: User | null;
    role: ROLE_STR | null;
    token: string | null;

    login: (user: User, role: ROLE_STR, token: string) => void;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
    persist(
        (set) => ({
            user: null,
            role: null,
            token: null,

            login: (user, role, token) => {
                set({ user, role, token });
            },

            logout: () => {
                set({ user: null, role: null, token: null });
            },
        }),

        {
            name: "auth-storage",
            partialize: (state) => ({
                user: state.user,
                role: state.role,
                token: state.token,
            }),
        }
    )
);
