"use client"
import { LucideIcon } from "lucide-react"
import { useRouter } from "next/navigation"

interface SideBarListProp{
    name: string
    image: LucideIcon,
    href: string
}

const SideBarList = ({name,image: Image,href}: SideBarListProp) => {

    const router = useRouter()
    return (
        <div className="w-full">
            <div onClick={() => router.push(`/${href}`)} className="flex gap-2 hover:bg-blue-200 w-full rounded-sm items-center  p-4">
                <Image size={22} />
                <h1 className="text-xl font-semibold tracking-tight">{name}</h1>
            </div>
        </div>
    )
}

export default SideBarList