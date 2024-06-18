"use client"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"


const SignUp = () => {

    const router  = useRouter()
    return (
        <Button onClick={() => router.push("/sign-up")}>SignUp</Button>
    )
}

export default SignUp