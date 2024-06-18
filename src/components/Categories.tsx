import CategoriesItems from "./CategoriesItems"

const Categories = () => {
    const Items = [
        {name:"Clothing",href:"/categories/clothing",description:"loremd ksadkasjd",stock:"7"},
        {name:"Trending",href:"/trending",description:"loremd ksadkasjd asdadas" ,stock:"32"},
        {name:"Shoes",href:"/categories/shoes",description:"loremd ksadkasjd asdad",stock:"3"},
        {name:"Fetured",href:"/categories/",description:"loremd ksadkasjd",stock:"7"},
        {name:"Clothing",href:"/categories/clothing",description:"loremd ksadkasjd",stock:"7"},
        {name:"Clothing",href:"/categories/clothing",description:"loremd ksadkasjd",stock:"7"},
        {name:"Clothing",href:"/categories/clothing",description:"loremd ksadkasjd",stock:"7"},
        {name:"Clothing",href:"/categories/clothing",description:"loremd ksadkasjd",stock:"7"}
    ]
    return (
        <div className="flex flex-col mt-12 w-full h-full">
            <div className="max-w-5xl mx-auto h-fit">
                <div className="grid grid-cols-2  md:grid-cols-4 gap-8 ">
                    {Items.map((products) => (
                        <CategoriesItems key={products.href} 
                        name={products.name} 
                        href={products.href} 
                        description={products.description}
                        inStock={products.stock} />
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default Categories