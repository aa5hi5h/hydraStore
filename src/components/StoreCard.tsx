import { ArrowUpRight, Image } from "lucide-react"
import ProductsCaraousel from "./ProductsCaraousel"


const StoreCard = () => {


    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]


    return (
        <div className="flex flex-col p-4  ">
            <div className=" flex justify-center items-center h-[30vh] w-[65vh] md:w-[150vh] mx-auto rounded-t-lg bg-blue-200">
                <h1 className="px-4 py-2 bg-black text-white text-sm rounded-full flex items-center gap-1">Urban Styles<ArrowUpRight /></h1>
            </div>
            <div className="flex flex-col w-[65vh] md:w-[150vh] rounded-b-lg mx-auto border-[1px] border-blue-200 p-4">
                <h1 className="text-2xl font-bold tracking-tight ">Products</h1>
                <div className=" flex gap-[4rem] px-2 py-8 ">
                    {
                        itemsList.map((items,index) => (
                            <ProductsCaraousel key={index} name={items.name} description={items.description} image={items.image} href={items.href} price={items.price}  />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default StoreCard