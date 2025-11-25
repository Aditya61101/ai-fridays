import { Button } from "@/components/ui/button"
import { Link } from "react-router"

// type Props = {}

const LandingPage = () => {
    return (
        <div className="flex justify-center">
            <Button asChild variant={"outline"}>
                <Link to={"/auth/signup"}>Register</Link>
            </Button>
            <Button asChild variant={"secondary"}>
                <Link to={"/auth/login"}>Login</Link>
            </Button>
        </div>
    )
}

export default LandingPage