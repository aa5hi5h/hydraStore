import SideBar from "@/components/Sidebar"
import UpdateStore from "@/components/UpdateStore"


const Page = () => {
    return (
        <div className="grid grid-cols-5 gap-x-8 p-6">
            <div className="col-span-1"><SideBar /></div>
            <div className="col-span-4">
        <div className="w-full h-full p-2">
        <div className="h-fit max-w-5xl mx-auto gap-x-5 space-y-1">
            <h1 className="text-4xl font-semibold tracking-tight">Update store listing</h1>
            <div className="p-2">
                <UpdateStore />
            </div>
        </div>
    </div>
    </div>
        </div>
    )
}

export default Page