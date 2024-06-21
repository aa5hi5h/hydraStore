import { Button } from "./ui/button"


const Stores = () => {
    return (
        <div>
            <div className="space-y-4 p-4 border-[1px] flex flex-col border-blue-200 rounded-lg shadow-sm">
                <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Stores</h1>
                <Button className="bg-blue-200 hover:bg-blue-300 text-black">View all products</Button>
                </div>
            </div>
        </div>
    )
}

export default Stores