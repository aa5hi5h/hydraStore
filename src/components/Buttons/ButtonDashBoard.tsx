"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"


const ButtonDashBoard = () => {
    const router = useRouter()
    return (
        <Button 
        className="bg-blue-200 text-black  hover:bg-blue-300" 
        onClick={() => router.push("/dashboard")} 
        >Dashboard</Button>
    )
}

export default ButtonDashBoard