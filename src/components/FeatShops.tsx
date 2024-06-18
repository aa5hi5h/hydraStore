import FeaturedShopsLists from "./FeaturedShopsList"
import FeaturedProductsItems from "./FeturedProductsItems"
import { Button } from "./ui/button"


const FeaturedShops = () => {

    const itemsList = [
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},
        {name:"Store Name", description:'Shop description',products:"10",href:"/storepage"},

    ]
    return (
        <div className="flex flex-col mt-[4rem] my-[6rem] gap-x-4 space-y-6 w-full h-full ">
            <div className="h-fit ">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center ">
                        <div className="flex flex-col space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight" >Featured shops</h1>
                    <p className="text-[16px] font-medium text-gray-700">Explore stores from around the world</p>
                    </div>
                    <Button>View all shops</Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        itemsList.map((product) => (
                            <FeaturedShopsLists key={product.href} name={product.name} description={product.description} product={product.products} href={product.href} />
                        )

                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedShops