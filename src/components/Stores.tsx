import FeaturedShops from "./FeatShops"
import FeaturedShopsLists from "./FeaturedShopsList"
import { Button } from "./ui/button"


const Stores = () => {

    const storeList = [
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
    ]
    return (
        <div>
            <div className="space-y-4 p-4 border-[1px] flex flex-col border-blue-200 rounded-lg shadow-sm">
                <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Stores</h1>
                <Button className="bg-blue-200 hover:bg-blue-300 text-black">View all stores</Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4 ">
                {storeList.map((items,index) => (
                    <FeaturedShopsLists key={index} name={items.name} href={items.name} description={items.description} product={items.products} />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Stores