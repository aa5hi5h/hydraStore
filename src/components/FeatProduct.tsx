import FeaturedProductsItems from "./FeturedProductsItems"
import { Button } from "./ui/button"


const FeaturedProducts = () => {

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},

    ]
    return (
        <div className="flex flex-col mt-[4rem] gap-x-4 space-y-6 w-full h-full ">
            <div className="h-fit ">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center ">
                        <div className="flex flex-col space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight" >Featured products</h1>
                    <p className="text-[16px] font-medium text-gray-700">Explore products from around the world</p>
                    </div>
                    <Button>View all products</Button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {
                        itemsList.map((product) => (
                            <FeaturedProductsItems key={product.href} name={product.name} description={product.description} image={product.image} price={product.price} href={product.href} />
                        )

                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts