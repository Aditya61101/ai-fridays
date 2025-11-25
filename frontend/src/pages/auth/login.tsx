import { LoginForm } from "@/components/auth/LoginForm"
import { AuthAPI } from "@/api/auth";
import type { ROLE_STR } from "@/lib/roles";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export default function LoginPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <LoginForm onSubmit={async (values) => {
                    try {
                        await AuthAPI.login(values.email, values.password, values.role as ROLE_STR);
                        navigate("/dashboard");
                    } catch (error: unknown) {
                        console.error(error);
                        toast.error("Login failed");
                    }
                }} />
            </div>
        </div>
    )
}
