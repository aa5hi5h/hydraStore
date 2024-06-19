"use client"
import { LucideIcon, LucideProps } from "lucide-react"


interface PickCategoryProp{
    name: string
    image: LucideIcon
    onClick: (data: string) => void
    isSelected: boolean
}

const PickCategory = ({name,image: Image, onClick ,isSelected}:PickCategoryProp) => {

    
    return (
        <div>
            <div onClick={() => onClick(name)}  className={`px-2 py-4  gap-2 border-[1px] border-blue-200 cursor-pointer  bg-blue-200  ${isSelected ? `opacity-100 border-emerald-500`: `opacity-60`} items-center rounded-lg`}>
                <div className="flex items-center ml-[1rem] gap-2">
                {<Image />}
               <h2 className="text-lg font-medium">{name}</h2>
               </div>
            </div>
        </div>
    )
}

export default PickCategory