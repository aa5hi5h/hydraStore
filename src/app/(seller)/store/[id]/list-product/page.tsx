import ProductListingForm from "@/components/ProductListingForm"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"



const Page = async() => {

    const {userId} = auth()
    if(!userId){
        return <div>You need to be logged in to visite this page</div>
    }

    const store = await db.store.findFirst({
        where:{
            userId
        }
    })

    if(!store){
        return <div>You are not the owner of this store</div>
    }


    return (
        <div className="w-full h-full p-6 ">
            <div className="h-fit max-w-5xl mx-auto gap-x-5 space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight">Product listing setup</h1>
                <div className="px-6">
                    <ProductListingForm storeId={store.id}/>
                </div>
            </div>
        </div>
    )
}

export default Page