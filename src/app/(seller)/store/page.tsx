import BuyerStoreDetail from "@/components/BuyerStoreDetail"
import FeaturedShopsLists from "@/components/FeaturedShopsList"
import FeaturedProductsItems from "@/components/FeturedProductsItems"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Box } from "lucide-react"
import {motion} from "framer-motion"
import StoreCard from "@/components/StoreCard"

const Page = () => {


    const storeList = [
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
    ]

        const itemsList = [
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
            {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        ]
    return (
        <div className="flex flex-col p-6">
            <h1 className="text-2xl font-bold tracking-tight">Trending stores this week</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        storeList.map((product,index) => (
                            <div key={index} className="">
                            <FeaturedShopsLists key={product.href} name={product.name} description={product.description} product={product.products} href={product.href} />
                        </div>)

                        )
                    }
                    </div>
            <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem]">Store currently have sales</h1>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8 px-4">
                    {
                        storeList.map((product,index) => (
                            <div key={index} className=" col-span-1">
                            <FeaturedShopsLists key={product.href} name={product.name} description={product.description} product={product.products} href={product.href} />
                        </div>)

                        )
                    }
                    </div>
                <h1 className="text-2xl font-bold tracking-tight pt-[2.5rem]">Featured stores</h1>
                <div className="flex flex-col gap-6 mt-8">
                    {
                        storeList.map((product,index) => (
                        <StoreCard key={index} />
                        ))
                    }
                </div>
        </div>
    )
}

export default Page