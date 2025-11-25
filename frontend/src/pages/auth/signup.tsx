import { toast } from "sonner"
import { SignupForm } from "@/components/auth/SignupForm"
import { AuthAPI } from "@/api/auth";
import { useNavigate } from "react-router";
import type { ROLE_STR } from "@/lib/roles";

export default function SignupPage() {
    const navigate = useNavigate();
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-4xl">
                <SignupForm onSubmit={async (values) => {
                    try {
                        await AuthAPI.signup(values.name, values.email, values.password, values.role as ROLE_STR);
                        navigate("/auth/login");
                    } catch (error: unknown) {
                        console.error(error);
                        toast.error("Signup failed");
                    }
                }} />
            </div>
        </div>
    )
}
