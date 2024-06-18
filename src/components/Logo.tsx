import { Store } from "lucide-react"


const Logo = () => {
    
    return (
        <div className="flex gap-2 cursor-pointer items-center">
            <h1 className="text-xl font-semibold">HydraShop</h1>
            <Store  size={36} />
        </div>
    )
}

export default Logo