import { Eye, Image } from "lucide-react"
import { Button } from "./ui/button"


interface FeaturedItemsProps{
    name: string,
    description: string,
    price: string,
    image: string,
    href: string
}

const FeaturedProductsItems = ({name,description,price,image,href}:FeaturedItemsProps) => {
    return (
        <div className=" rounded-lg">
        <div className="flex flex-col h-[50vh] shadow-sm w-full  ">
            <div className="h-[40vh] w-full flex border-blue-300 border-2 bg-blue-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
            <div className="flex flex-col p-3 border-2 border-blue-200 rounded-b-lg">
            <h2 className="  text-xl font-semibold tracking-tight">{name}</h2>
            <h3 className="  text-sm font-medium ">{price}</h3>
            <div className="flex justify-between w-full gap-2 items-center mt-4">
                <Button variant={"outline"} className="w-[90%] bg-blue-200 hover:bg-blue-300 transition-all" >Add to cart</Button>
                <Eye className="hover:opacity-60 cursor-pointer " />
                </div>
            </div>
        </div>
        </div>
    )
}

export default FeaturedProductsItems