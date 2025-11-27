import { useAuthStore } from "@/store/auth";
import type { ROLE_STR } from "../lib/roles";
import { useChatStore } from "@/store/chat_old";
import api from "./base";



export const AuthAPI = {
    // LOGIN
    login: async (email: string, password: string, role: ROLE_STR) => {
        const res = await api.post("/auth/login", {
            email,
            password,
            role,
        });

        // Expect backend returns:
        // { user: {...}, token: "...", role: "user" | "admin" }
        const { user, token } = res.data;
        const userRole = res.data.role;

        useAuthStore.getState().login(user, userRole, token);

        return res.data;
    },

    // SIGNUP
    signup: async (name: string, email: string, password: string, role: ROLE_STR) => {
        const res = await api.post("/auth/signup", {
            name,
            email,
            password,
            role
        });

        return res.data;
    },

    // LOGOUT
    logout: async () => {
        useAuthStore.getState().logout();
        useChatStore.getState().clearChat();
    },
};

export default api;
