import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000", // change later for production
    timeout: 15000,
});

// api.interceptors.request.use((config) => {
//   const token = useAuthStore.getState().token;
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

api.interceptors.response.use(
    (res) => res,
    (err) => {
        console.error("API Error:", err.response?.data || err.message);
        throw err;
    }
);

export default api;