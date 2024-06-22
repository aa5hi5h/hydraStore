"use client"
import { Eye, Image } from "lucide-react"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import ProductPreview from "./ProductPreview"


interface FeaturedItemsProps{
    name: string,
    description: string,
    price: string,
    image: string,
    href: string
}

const FeaturedProductsItems = ({name,description,price,image,href}:FeaturedItemsProps) => {

    const [isOpen, setIsOpen] = useState(false)


    useEffect(() => {
        const handleBodyOverflow = () => {
            if (isOpen) {
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollbarWidth}px`;
            } else {
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0px';
            }
        };

        handleBodyOverflow();

    },[isOpen])

    const toggleModal = () => {
        setIsOpen((prev) => !prev)
    }

    const CloseModal = () => {
        setIsOpen(false)
    }


    return (
        <div>
        <div className="rounded-lg">
        <div className="flex flex-col h-[50vh] shadow-sm w-full  ">
            <div className="h-[40vh] w-full flex border-blue-300 border-2 bg-blue-200 opacity-40 rounded-t-lg justify-center items-center"><Image size={36}/></div>
            <div className="flex flex-col p-3 border-2 border-blue-200 rounded-b-lg">
            <h2 className="  text-xl font-semibold tracking-tight">{name}</h2>
            <h3 className="  text-sm font-medium ">{price}</h3>
            <div className="flex justify-between w-full gap-2 items-center mt-4">
                <Button variant={"outline"} className="w-[90%] bg-blue-200 hover:bg-blue-300 transition-all" >Add to cart</Button>
                <Eye onClick={toggleModal} className="hover:opacity-60 cursor-pointer " />
            </div>
            </div>
        </div>
        </div>
        {
            isOpen && (
                <div className="fixed inset-0 z-10 bg-blue-100 bg-opacity-60" onClick={CloseModal}></div>
            )
        }
        {isOpen ?
        ( 
        <div className="fixed inset-0 z-50 m-auto  h-[70vh] rounded-lg  w-[120vh] bg-blue-200 ">
            <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
        <ProductPreview CloseModal={CloseModal}  />
        </div>
        </div>
        ) : null}
        </div>
    )
}

export default FeaturedProductsItems