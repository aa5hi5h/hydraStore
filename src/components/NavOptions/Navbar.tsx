import NavbarOptions from "./NavbarOptions"
import Logo from "../Logo"
import Search from "../Search"
import CartOption from "../CartOption"
import { Button } from "../ui/button"
import Link from "next/link"
import SignUp from "../SignUp"
import { auth } from "@clerk/nextjs/server"
import { SignOutButton, UserButton } from "@clerk/nextjs"


const Navbar = async() => {
    const NavItems = [
        {item:"Trending",href:"/trending"},
        {item:"Sale",href:'/sale'},
        {item:"Products",href:"/product" },
        {item:"Shops",href:"/shops"},
        {item:"Clothing",href:"/clothing"},
        {item:"Shoes",href:"/shoes"},
        {item:"Accessories",href:"/accessories"},
    ]

    const {userId} = auth()
    return (
        <div className="flex  gap-8 text-lg items-center font-medium">
            <Logo />
            <div className="flex gap-2">
            {NavItems.map((items) => 
            <NavbarOptions key={items.href} title={items.item} href={items.href} />)}
            </div>
            <div className="flex gap-8 items-center">
                <div className="flex gap-4 items-center">
            <Search />
            <CartOption />
            </div>
            { userId ? (<UserButton />) : (<SignUp />)}
            
            </div>
            
        </div>
    )
}

export default Navbar