"use client"
import { useRouter } from "next/navigation"

interface NavbarOptionsProp {
    title: string
    href: string
}

const NavbarOptions: React.FC<NavbarOptionsProp> = ({title,href}) => {

    const router = useRouter()
    return (
        <div className="px-3 py-2 border-b-4 border-blue-100 hover:border-b-4 hover:border-sky-300 " onClick={() => router.push(href)}>
            {title}
        </div>
    )
}

export default NavbarOptions