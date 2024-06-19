import { LucideIcon, LucideProps } from "lucide-react"


interface PickCategoryProp{
    name: string
    image: LucideIcon
}

const PickCategory = ({name,image: Image}:PickCategoryProp) => {
    return (
        <div>
            <div className="px-2 py-4  gap-2 border-[1px] border-blue-200 bg-sky-200 cursor-pointer items-center rounded-lg">
                <div className="flex items-center ml-[1rem] gap-2">
                {<Image />}
               <h2 className="text-lg font-medium">{name}</h2>
               </div>
            </div>
        </div>
    )
}

export default PickCategory