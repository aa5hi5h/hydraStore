'use client'
import { Eye, Image, Shirt } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import FeaturedProductsItems from "./FeturedProductsItems"


const BuyerStoreDetail = () => {

    const router = useRouter()

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]

    return (
        <div className="flex flex-col space-y-4">
        <div className="p-4  rounded-md space-y-4">
        <div className="h-[30vh] w-full bg-blue-200 flex justify-center items-center">
            <Image size={36} />
        </div>
        <div className="flex justify-center items-center pb-2">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold tracking-tight">Store Name</h1>
            <div className="flex gap-8 mt-4 items-center ml-[-1rem]">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold">10</h2>
                    <h2 className="text-lg font-medium">Products</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">322</h2>
                    <h2 className="text-lg font-medium">Customers</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">$1.5k</h2>
                    <h2 className="text-lg font-medium">Sales</h2>
                </div>
            </div>
            </div>
        </div>
        <hr className="w-full h-[2px] bg-blue-300" />
        <div className="flex  space-y-4 p-4">
            <div className="flex flex-col w-full">
                <div className="">
                   <h1 className="text-2xl font-semibold tracking-tight">Popular Products</h1>
                </div>
                <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                        {itemsList.map((product) => (
                            <FeaturedProductsItems name={product.name} description={product.description} price={product.price} href={product.href} image={product.image} />
                        ))}
                    </div>
                </div>
                <div className="pt-[1rem]">
                   <h1 className="text-2xl font-semibold tracking-tight">Products On Sale</h1>
                </div>
                <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                        {itemsList.map((product) => (
                            <FeaturedProductsItems name={product.name} description={product.description} price={product.price} href={product.href} image={product.image} />
                        ))}
                    </div>
                </div>
                <div className="pt-[1rem]">
                    <h1 className="text-2xl font-semibold tracking-tight">All Products</h1>
                    <div className="p-6">
                        <div className="grid grid-cols md:grid-cols-4 gap-6">
                            {itemsList.map((product) => (
                                <div className="flex flex-col gap-6">
                                <FeaturedProductsItems name={product.name} description={product.description} price={product.price} image={product.image} href={product.href} />
                                <FeaturedProductsItems name={product.name} description={product.description} price={product.price} image={product.image} href={product.href} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default BuyerStoreDetail