"use client"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"


const BuyNow = () => {

    const router = useRouter()


    return (
        <Button onClick={() => router.push("/products")} variant={"default"} className="">Buy now</Button>
    )
}

export default BuyNow