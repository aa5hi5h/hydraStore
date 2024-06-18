import { Package } from "lucide-react"

interface CategoriesItemsProp{
    name: string
    href: string
    inStock: string
    description: string
}

const CategoriesItems: React.FC<CategoriesItemsProp> = ({name,href,inStock,description}) =>{
    return (
        <div className="flex flex-col space-y-4 cursor-pointer border-[1px] shadow-sm border-sky-300 px-3 py-4 rounded-md hover:bg-sky-200 transition-all">
            <div className="flex flex-col space-y-1">
            <span className="text-xl font-semibold tracking-tighter">{name}</span>
            <span className="text-md font-medium text-gray-700">{description}</span>
            </div>
            <span className="flex gap-1 items-center"><Package size={18} />{inStock} products</span>
        </div>
    )
}

export default CategoriesItems