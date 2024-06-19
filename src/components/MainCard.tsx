import ButtonStore from "./Buttons/ButtonStore"
import BuyNow from "./Buttons/BuyNow"
import { Button } from "./ui/button"


const MainCard = () => {
    return (
        <div className="w-full  h-full p-6 gap-x-4 space-y-5">
            <div className="h-fit max-w-5xl mx-auto ">
                <div className="flex flex-col space-y-4 justify-center mt-12  h-full w-full">
                <h1 className="text-5xl font-semibold text-center tracking-tight">Convert your retail shop into online marketplace in one click</h1>
                <div className="max-w-3xl mx-auto pt-2 flex gap-4 justify-around">
                    <BuyNow />
                    <ButtonStore />
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default MainCard