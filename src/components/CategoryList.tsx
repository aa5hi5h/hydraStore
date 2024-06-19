"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { Bike, ChevronDown, Drill, MonitorSmartphone, Shirt, Star, X } from "lucide-react"
import { imageConfigDefault } from "next/dist/shared/lib/image-config"
import PickCategory from "./PickCategory"


interface CategoryListProp{
    onCategorySelect: (data: string[]) => void
}

const CategoryList = ({onCategorySelect}:CategoryListProp ) => {
    const [open,isOpen] = useState(false)
    const [selectedItems,setSelectedItems] = useState<string[]>([])

    const categoryItems = [
        { name:"Clothing", image: Shirt },
        {name:"Acessories", image:Star},
        {name:"Tech", image:MonitorSmartphone},
        {name:"Sports Gear", image:Bike },
        {name:"Tools", image:Drill}
    ]

    const handleCategoryClick = (data: string) => {
        setSelectedItems((prev) => prev.includes(data) ? prev.filter(item => item!==data): [...prev,data])
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement ,MouseEvent> ) => {
        e.preventDefault()
        onCategorySelect(selectedItems)
        isOpen(false)
    }

    return (
        <div className="w-full">
            <Button className="bg-cyan-700  hover:bg-cyan-800 gap-x-1 items-center" onClick={() => isOpen((prev) => !prev)}>
                Pick a category <ChevronDown size={20}/></Button>
                {
                    open && (
                        <div className="absolute w-[100vh] h-[60vh] mt-[-9rem] ml-[-3rem] grid grid-cols-2 bg-blue-300 rounded-md px-6 pt-12 gap-4">
                            <X className="absolute right-0 mt-[1rem] mr-[2rem] hover:opacity-60 cursor-pointer " onClick={() => isOpen(false)} />
                            {categoryItems.map((items,index) => (
                                <PickCategory key={index} name={items.name} onClick={handleCategoryClick} isSelected={selectedItems.includes(items.name)} image={items.image} />
                            ))}
                            <div className="col-span-2 flex justify-end">
                            <Button onClick={handleSubmit} className="ml-auto mx-4 mb-2 ">Submit</Button>
                            </div>
                        </div>
                    
                        )
                }
                </div>
    )
}

export default CategoryList