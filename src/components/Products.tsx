import FeaturedProducts from "./FeatProduct"
import FeaturedShopsLists from "./FeaturedShopsList"
import FeaturedProductsItems from "./FeturedProductsItems"
import { Button } from "./ui/button"



const Products = () => {

    const productList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]
    return (
        <div>
            <div className="space-y-4 p-4 border-[1px] flex flex-col border-blue-200 rounded-lg shadow-sm" >
                <div className="flex justify-between">             
                  <h1 className="text-3xl font-semibold">Products</h1>
                  <Button className="bg-blue-200 hover:bg-blue-300 text-black font-medium">View all products</Button>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                    {productList.map((items,index) => (
                        <FeaturedProductsItems key={index} name={items.name} description={items.description} image={items.image}
                        href={items.href} price={items.price} />
                    ))}
                  </div>
            </div>
        </div>
    )
}

export default Products