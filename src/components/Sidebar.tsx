"use client"
import { it } from "node:test"
import { Input } from "./ui/input"
import SideBarList from "./SidebarList"
import { BellRing, Container, Home, LineChart, ShoppingCart, Store } from "lucide-react"


const SideBar = () => {
    const Items = [
        {name:"Dashboard",image:Home,href:"dashboard"},
        {name:"Orders",image:ShoppingCart,href:"dashboard/orders"},
        {name:"Stores",image:Store,href:"dashboard/my-stores"},
        {name:"Products", image:Container,href:'dashboard/my-products'},
        {name:"Analytics ", image:LineChart,href:"dashboard/analytics"},
    ]
    return (
        <div>
            <div className="flex justify-between">
                <div className="w-full pr-2">
            {Items.map((items,index) => (
                <SideBarList key={index} name={items.name} image={items.image} href={items.href} />
            ))}
            </div>
            <hr className="w-[1px] mt-[-1.5rem] h-[100vh] bg-blue-200" />
            </div>
        </div>
    )
}

export default SideBar