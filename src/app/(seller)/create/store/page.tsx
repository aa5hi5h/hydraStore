import StoreInputForm from "@/components/StoreInputForm"
import { Input } from "@/components/ui/input"


const Page = () => {
    return (
        <div className="w-full h-full p-3 mt-[3rem] gap-x-5 space-y-6">
            <div className="max-w-4xl mx-auto h-fit">
                <div className="flex flex-col p-3 gap-6">
                    <h1 className="text-4xl font-semibold tracking-tight" >Store setup</h1>
                    <div>
                        <StoreInputForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page