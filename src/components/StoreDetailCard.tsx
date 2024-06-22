'use client'
import { Eye, Image } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"


const StoreDetailCard = () => {

    const router = useRouter()

    const itemsList = [
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
        {name:"Product name", image:'ItemsImage', description:'Items description',price:"Items Price",href:"/productpage"},
    ]

    return (
        <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Store detail</h1>
        <div className="flex gap-6">
        <Button onClick={() => router.push("/edit/store?id=2131313")}>Edit</Button>
        <Button variant={'destructive'}>Delete</Button>
        </div>
        </div >
        <div className="p-4 border-[1px] border-blue-200 rounded-md space-y-4 shadow-sm">
        <div className="h-[30vh] w-full bg-blue-200 flex justify-center items-center">
            <Image size={36} />
        </div>
        <div className="flex justify-center items-center pb-2">
            <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight">Store Name</h1>
            <div className="flex gap-8 mt-4 items-center ml-[-1rem]">
                <div className="flex flex-col items-center">
                    <h2 className="text-xl font-semibold">10</h2>
                    <h2 className="text-lg font-medium">Products</h2>
                </div>
                <div className="flex flex-col items-center ">
                    <h2 className="text-xl font-semibold">322</h2>
                    <h2 className="text-lg font-medium">Customers</h2>
                </div>
            </div>
            </div>
        </div>
        <hr className="w-full h-[2px] bg-blue-300" />
        <div className="flex  space-y-4 p-4">
            <div className="flex flex-col w-full">
                <div className="">
                   <h1 className="text-2xl font-semibold tracking-tight">Listed Products</h1>
                </div>
                <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
                        {itemsList.map((product) => (
                              <div key={product.href} className=" rounded-lg">
                              <div className="flex flex-col h-[50vh] shadow-sm w-full  ">
                                  <div className="h-[40vh] w-full flex border-blue-300 border-2 bg-blue-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
                                  <div className="flex flex-col p-3 border-2 border-blue-200 rounded-b-lg">
                                  <h2 className="  text-xl font-semibold tracking-tight">{product.name}</h2>
                                  <h3 className="  text-sm font-medium ">{product.price}</h3>
                                  <div className="flex justify-between w-full gap-2 items-center mt-4">
                                      <Button variant={"outline"} className="w-[90%] bg-blue-300 hover:bg-blue-400 transition-all" >View activity</Button>
                                      <Eye className="hover:opacity-60 cursor-pointer " />
                                      </div>
                                  </div>
                              </div>
                              </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default StoreDetailCard