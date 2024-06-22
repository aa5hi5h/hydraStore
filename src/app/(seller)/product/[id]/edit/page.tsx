import SideBar from "@/components/Sidebar"
import UpdateProductListingForm from "@/components/UpdateProductForm"


const Page = () => {
    return (
        <div className="grid grid-cols-5 gap-x-8 p-6">
            <div className="col-span-1"><SideBar /></div>
            <div className="col-span-4">
        <div className="w-full h-full p-2">
        <div className="h-fit max-w-5xl mx-auto gap-x-5 space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight">Update product listing</h1>
            <div className="p-2">
                <UpdateProductListingForm />
            </div>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Page