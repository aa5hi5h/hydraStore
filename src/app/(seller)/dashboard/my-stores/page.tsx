import FeaturedShopsLists from "@/components/FeaturedShopsList"
import SideBar from "@/components/Sidebar"
import { Activity, Box } from "lucide-react"
import { describe } from "node:test"


const Page = () => {

    const itemsList = [
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",},
        {name:"shop name", description:"Shop description",href:"/productid",products:"10",}
    ]
    return (
        <div className="grid grid-cols-5 gap-x-8 p-6">
        <div className="col-span-1"><SideBar /></div>
        <div className="col-span-4 p-2 space-y-8">
            <div className="">
                <h1 className="text-5xl font-semibold">Store</h1>
                <h3 className="text-muted-foreground">View any activity in all the stores</h3>
            </div>
            <div className="p-6 mt-8 border-[1px] border-blue-300 rounded-md shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6  ">
                    {
                        itemsList.map((product) => (
                            <div className="border-2 border-blue-200 p-4 rounded-lg shadow-sm">
        <div className="flex flex-col space-y-8 cursor-pointer">
            <div className="flex justify-between items-center">
            <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">{product.name}</h2>
            <h3 className="text-sm text-gray-700 font-medium">{product.description}</h3>
            </div>
            <Activity className="w-8 h-8 p-1 bg-blue-200 hover:opacity-60 rounded-full" />
            </div>
            <div className="flex gap-2 items-center">
                <Box size={18}/>
                <h4 className="text-sm font-semibold text-gray-700 ">{product.products} products</h4>
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