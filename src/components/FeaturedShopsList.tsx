import { Box } from "lucide-react"


interface FeturedShopsProps{
    name: string,
    description: string,
    product: string,
    href: string
}

const FeaturedShopsLists : React.FC<FeturedShopsProps> = ({name,description,product,href}) => {
    return (
        <div className="border-2 border-blue-200 p-4 rounded-lg shadow-sm">
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
            <h3 className="text-sm text-gray-700 font-medium">{description}</h3>
            </div>
            <div className="flex gap-2 items-center">
                <Box size={18}/>
                <h4 className="text-sm font-semibold text-gray-700 ">{product} products</h4>
                </div>
        </div>
        </div>
    )
}

export default FeaturedShopsLists