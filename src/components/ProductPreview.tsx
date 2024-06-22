"use client"
import { Image, Maximize, X } from "lucide-react"
import { useRouter } from "next/navigation"


interface ProductPreviewProp{
    CloseModal: () => void
}


const ProductPreview = ({CloseModal}:ProductPreviewProp) => {

    const router = useRouter()

    return (
        <div className=" grid grid-cols-9 h-full rounded-lg ">
                <div className="col-span-4 bg-blue-200 bg-opacity-55 flex items-center h-full m-auto  justify-center">
                    <Image size={42}/>
                </div>
                <div className="col-span-5 bg-blue-300 bg-opacity-50  rounded-r-lg space-y-4">

                    <div className="flex justify-end gap-4 p-2 mt-2 mr-2">
                        <Maximize onClick={() =>router.push("/product/42342")} size={20} className="cursor-pointer hover:opacity-60" />
                        <X onClick={CloseModal} size={20} className="cursor-pointer hover:opacity-60" />
                    </div>
                    <div className="ml-[2.5rem]">
                        <div className="space-y-1">
                        <h1 className="text-3xl  font-bold tracking-tight opacity-100">Product title</h1>
                        <div>
                        <h2 className="text-lg font-medium ">Product price</h2>
                        <h2 className="text-lg font-medium">Review Star</h2>
                        <h2 className="text-lg font-medium">74 in stock</h2>
                        </div>
                        <div className="pt-[1.5rem]">
                        <p className="text-xl font-semibold tracking-normal">Product description</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default ProductPreview