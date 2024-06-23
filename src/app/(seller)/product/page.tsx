import FeaturedShopsLists from "@/components/FeaturedShopsList"
import FeaturedProductsItems from "@/components/FeturedProductsItems"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Box } from "lucide-react"
import {motion} from "framer-motion"
import StoreCard from "@/components/StoreCard"

const Page = () => {

        const itemsList = [
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        ]
    return (
        <div className="flex flex-col p-6">
            <h1 className="text-2xl font-bold tracking-tight">Trending Products this week</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        itemsList.map((product,index) => (
                            <div key={index} className="">
                            <FeaturedProductsItems key={product.href} name={product.name} description={product.description} image={product.image} price={product.price} href={product.href} />
                        </div>)

                        )
                    }
                    </div>
            <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem] mt-4">Products currently have sales</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        itemsList.map((product,index) => (
                            <div key={index} className=" col-span-1">
                            <FeaturedProductsItems key={product.href} name={product.name} description={product.description} image={product.image} price={product.price} href={product.href} />
                        </div>)

                        )
                    }
                    </div>
                <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem] mt-4">Featured Prodcuts</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        itemsList.map((product,index) => (
                         <FeaturedProductsItems key={index} name={product.name} description={product.description} image={product.image} href={product.href} price={product.price} />
                        ))
                    }
                </div>
                <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem] mt-4">Clothing Products</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        itemsList.map((product,index) => (
                        <FeaturedProductsItems key={index} name={product.name} description={product.description} image={product.image} href={product.href} price={product.price}  />
                        ))
                    }
                </div>
                <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem] mt-4">Accessories</h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        itemsList.map((product,index) => (
                        <FeaturedProductsItems key={index} name={product.name} description={product.description} image={product.image} href={product.href} price={product.price} />
                        ))
                    }
                </div>
        </div>
    )
}

export default Page