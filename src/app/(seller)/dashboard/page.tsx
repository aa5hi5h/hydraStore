


import DashBoardCard from "@/components/DashBoardCard"
import SideBar from "@/components/Sidebar"



const Page = () => {
    return (
        <div className="grid grid-cols-5 gap-x-8 p-6">
            <div className="col-span-1"><SideBar /></div>
            <div className="col-span-4"><DashBoardCard /></div>
        </div>
    )
}

export default Page