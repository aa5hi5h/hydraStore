import FeaturedProductsItems from "@/components/FeturedProductsItems"
import SideBar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { Eye, Image } from "lucide-react"


const Page = () => {

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"}
    ]
    return (
        <div className="grid grid-cols-5 gap-x-8 p-6">
        <div className="col-span-1"><SideBar /></div>
        <div className="col-span-4 p-2 space-y-8">
            <div className="">
                <h1 className="text-5xl font-semibold">Products</h1>
                <h3 className="text-muted-foreground">View any activity in your products</h3>
            </div>
            <div className="p-6 mt-8 border-[1px] border-blue-300 rounded-md shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6  ">
                    {
                        itemsList.map((product) => (
                            <div className=" rounded-lg">
                            <div className="flex flex-col h-[50vh] shadow-sm w-full  ">
                                <div className="h-[40vh] w-full flex border-blue-300 border-2 bg-blue-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
                                <div className="flex flex-col p-3 border-2 border-blue-200 rounded-b-lg">
                                <h2 className="  text-xl font-semibold tracking-tight">{product.name}</h2>
                                <h3 className="  text-sm font-medium ">{product.price}</h3>
                                <div className="flex justify-between w-full gap-2 items-center mt-4">
                                    <Button variant={"outline"} className="w-[90%] bg-blue-300 hover:bg-blue-400 transition-all" >View activity</Button>
                                    <Eye className="hover:opacity-60 cursor-pointer " />
                                    </div>
                                </div>
                            </div>
                            </div>
                        )

                        )
                    }
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Page