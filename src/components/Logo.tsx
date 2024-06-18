"use client"
import { Store } from "lucide-react"
import { useRouter } from "next/navigation"


const Logo = () => {

    const router = useRouter()
    return (
        <div className="flex gap-2 cursor-pointer items-center" onClick={() => router.push("/")}>
            <h1 className="text-xl font-semibold">HydraShop</h1>
            <Store  size={36} />
        </div>
    )
}

export default Logo