import { auth } from "@clerk/nextjs/server"
import ButtonStore from "./Buttons/ButtonStore"
import BuyNow from "./Buttons/BuyNow"
import { Button } from "./ui/button"
import { db } from "@/lib/db"
import ButtonDashBoard from "./Buttons/ButtonDashBoard"


const MainCard = async() => {

    const {userId} = auth()

  let isStoreOwner = false
  if(userId){
    const storeOwner = await db.store.findMany({
        where:{
            userId: userId
        },
        orderBy:{
            createdAt: 'desc'
        },
        include:{
            product: true
        }
    })

    isStoreOwner = storeOwner.length > 0
  }

    return (
        <div className="w-full  h-full p-6 gap-x-4 space-y-5">
            <div className="h-fit max-w-5xl mx-auto ">
                <div className="flex flex-col space-y-4 justify-center mt-12  h-full w-full">
                <h1 className="text-5xl font-semibold text-center tracking-tight">Convert your retail shop into online marketplace in one click</h1>
                <div className="max-w-3xl mx-auto pt-2 flex gap-4 justify-around">
                    <BuyNow />
                    {isStoreOwner ? (
                        <ButtonDashBoard />
                    ) : (
                        <ButtonStore />
                    )}
                </div>
                </div>
            
            </div>
        </div>
    )
}

export default MainCard