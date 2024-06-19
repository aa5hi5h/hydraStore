"use client"
import { useRouter } from "next/navigation"
import  {Button}  from "../ui/button"

const ButtonStore = () => {

    const router = useRouter()
    return (
        <Button onClick={() => router.push("/create/store")} variant={"ghost"} className="bg-blue-200  hover:bg-blue-300" >Open store</Button>
    )
}

export default ButtonStore