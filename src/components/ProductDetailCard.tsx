"use client"
import { Image } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useRouter } from "next/navigation"


const ProductDetailCard = () => {

    const router = useRouter()
    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Product detail</h1>
            <div className="flex gap-6">
            <Button onClick={() => router.push("/edit/product?id=2131313")}>Edit</Button>
            <Button variant={'destructive'}>Delete</Button>
            </div>
            </div>
            <div className="grid grid-cols-2  gap-8 mt-4 p-6">
                <div className="col-span-1 bg-blue-200">
                    <div className="h-[80vh] flex items-center justify-center" >
                        <Image size={38} />
                    </div>
                </div>
                <div className="cols-span-1  pl-8 space-y-2 ">

                    <h1 className="text-3xl font-bold tracking-tight">Product title</h1>
                    <h2 className="text-xl font-medium">Price</h2>
                    <h3 className="text-xl font-medium pb-4">Store : <Link href={"/dashboard/213123/store"} className="text-lg underline-offset-1 hover:underline">StoreName</Link></h3>
                    <hr className="w-full h-[2px]  bg-blue-300" />
                    <h2 className="pt-4 text-xl font-semibold">Category</h2>
                    <h3 className="text-xl font-medium pb-4">80 in stock</h3>
                    <hr className="w-full h-[2px] bg-blue-300" />
                    <Accordion type="single"  collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-xl font-semibold">Description</AccordionTrigger>
                            <AccordionContent>description of the post to be shown here</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailCard