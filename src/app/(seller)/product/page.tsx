"use client"
import FeaturedShopsLists from "@/components/FeaturedShopsList"
import FeaturedProductsItems from "@/components/FeturedProductsItems"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Box } from "lucide-react"
import {animate, motion, useMotionValue} from "framer-motion"
import StoreCard from "@/components/StoreCard"
import useMeasure from "react-use-measure"
import { useEffect, useState } from "react"
import ProductsCaraousel from "@/components/ProductsCaraousel"

const Page = () => {

    const FAST_DURATION = 15
    const SLOW_DURATION = 35

    const[clothingMustFinish,setClothingMustFinish] = useState(false)
    const [accessoriesMustFinish,setAccessoriesMustFinish] = useState(false)
    const [render,setRender] = useState(false)
    const[clothingDuration,setClothingDuration] = useState(FAST_DURATION)
    const[accessoriesDuration,setAccessoriesDuration] = useState(FAST_DURATION)

        const itemsList = [
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        ]

        let[ClothingRef,{width:ClothingWidth}] = useMeasure()
        let[AccessoriesRef,{width:AccessoriesWidth}] = useMeasure()

        const ClothingXTranslation = useMotionValue(0)
        const AccessoriesXTranslation = useMotionValue(0)

        useEffect(() => {
            let clothingControls;
            let finishPosition = -ClothingWidth;
        
            if (clothingMustFinish) {
              clothingControls = animate(ClothingXTranslation, [ClothingXTranslation.get(), finishPosition], {
                ease: "linear",
                duration: clothingDuration * (1 - ClothingXTranslation.get() / finishPosition),
                onComplete: () => {
                  setClothingMustFinish(false);
                },
              });
            } else {
              clothingControls = animate(ClothingXTranslation, [0, finishPosition], {
                ease: "linear",
                duration: clothingDuration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
              });
            }
        
            return () => clothingControls?.stop();
          }, [ClothingXTranslation, ClothingWidth, clothingDuration, clothingMustFinish]);

          useEffect(() => {
        
            let accessoriesControls;
            let finishPosition = -AccessoriesWidth;
        
            if (accessoriesMustFinish) {
              accessoriesControls = animate(AccessoriesXTranslation, [AccessoriesXTranslation.get(), finishPosition], {
                ease: "linear",
                duration: accessoriesDuration * (1 - AccessoriesXTranslation.get() / finishPosition),
                onComplete: () => {
                  setAccessoriesMustFinish(false);
                },
              });
            } else {
              accessoriesControls = animate(AccessoriesXTranslation, [0, finishPosition], {
                ease: "linear",
                duration: accessoriesDuration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
              });
            }
        
            return () => accessoriesControls?.stop();
          }, [AccessoriesXTranslation, AccessoriesWidth, accessoriesDuration, accessoriesMustFinish]);

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
                <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4" ref={ClothingRef} style={{x:ClothingXTranslation}}
                onHoverStart={() => {
                    setClothingDuration(SLOW_DURATION)
                    setClothingMustFinish(true)
                }}
                onHoverEnd={() => {
                    setClothingDuration(FAST_DURATION)
                    setClothingMustFinish(true)
                }} >
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
                <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4" ref={AccessoriesRef} style={{x:AccessoriesXTranslation}}
                onHoverStart={() => {
                    setAccessoriesMustFinish(true)
                    setAccessoriesDuration(SLOW_DURATION)
                }}
                onHoverEnd={() => {
                    setAccessoriesMustFinish(true)
                    setAccessoriesDuration(FAST_DURATION)
                }}
                 >
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