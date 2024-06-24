"use client"
import FeaturedShopsLists from "@/components/FeaturedShopsList"
import FeaturedProductsItems from "@/components/FeturedProductsItems"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Box } from "lucide-react"
import {animate, motion, useMotionValue} from "framer-motion"
import StoreCard from "@/components/StoreCard"
import useMeasure from "react-use-measure"
import { useEffect } from "react"
import ProductsCaraousel from "@/components/ProductsCaraousel"

const Page = () => {

        const itemsList = [
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        ]

        let[ref,{width}] = useMeasure()

        const xStyles = useMotionValue(0)

        useEffect(() => {
            let controls
            let finsihPosition = -width
            console.log(width,finsihPosition)

            controls = animate(xStyles,[0,finsihPosition],{
                ease:"linear",
                duration: 15,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
        })

            return controls.stop

        },[xStyles,width])

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
                <div className="overflow-hidden">
                <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4" ref={ref} style={{x:xStyles}} >
                    <div className="flex gap-8">
                    {
                        [...itemsList,...itemsList].map((product,index) => (
                        <ProductsCaraousel key={index} name={product.name} description={product.description} image={product.image} href={product.href} price={product.price}  />
                        ))
                    }
                    </div>
                </motion.div>
                </div>
                <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem] mt-4">Accessories</h1>
                <div className="overflow-hidden">
                <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4" ref={ref} style={{x:xStyles}} >
                    <div className="flex gap-8 ">
                    {
                        [...itemsList,...itemsList].map((product,index) => (
                        <ProductsCaraousel key={index} name={product.name} description={product.description} image={product.image} href={product.href} price={product.price}  />
                        ))
                    }
                    </div>
                </motion.div>
                </div>
        </div>
    )
}

export default Page