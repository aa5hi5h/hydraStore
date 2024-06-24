"use client"
import { ArrowUpRight, Image } from "lucide-react"
import ProductsCaraousel from "./ProductsCaraousel"
import {animate, motion, useMotionValue} from "framer-motion"
import useMeasure from "react-use-measure"
import { useEffect } from "react"
const StoreCard = () => {

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]

    let[ref,{width}] = useMeasure()

        const xStyles = useMotionValue(0)

        useEffect(() => {
            let controls
            let finsihPosition = -width -170

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
        <div className="flex flex-col p-4  ">
            <div className=" flex justify-center items-center h-[30vh] w-[65vh] md:w-[150vh] mx-auto rounded-t-lg bg-blue-200">
                <h1 className="px-4 py-2 bg-black text-white text-sm rounded-full flex items-center gap-1">Urban Styles<ArrowUpRight /></h1>
            </div>
            <div className="flex flex-col w-[65vh] md:w-[150vh] rounded-b-lg mx-auto border-[1px] border-blue-200 p-4">
                <h1 className="text-2xl font-bold tracking-tight ">Products</h1>
                <div className=" flex gap-[4rem] px-2 py-8 ">
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
                </div>
            </div>
        </div>
    )
}

export default StoreCard