"use client"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { StoreInputValidator } from "@/lib/Validators/StoreInput"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { StoreInputRequest } from "@/lib/Validators/StoreInput"
import CategoryList from "./CategoryList"

const StoreInputForm = () => {

    const [current,setCurrent] = useState(0)
    const form = useForm({
        resolver: zodResolver(StoreInputValidator),
        defaultValues: {
            title: "",
            description: '',
            category: ""
        }
    })

    const handleSubmit = async(data: StoreInputRequest) => {

        const payload = {
            title: data.title,
            description: data.description,
            category: data.category
        }


    }
    return (
        <div className="max-w-[34rem] mx-auto p-6 border-[1px] mt-[2rem] border-blue-300 bg-blue-200 rounded-md shadow-sm mb-[4rem]">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8 p-3">
                    {current === 0 && (
                         <FormField 
                         control={form.control}
                         name="title" 
                         render={({field}) => (
                             <FormItem>
                                 <FormLabel className="text-lg">Store Name</FormLabel>
                                 <FormControl>
                                     <Input placeholder="e.g. Urban Monkey" className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field}/>
                                 </FormControl>
                                 <FormDescription>This is your public store name</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                    )}
                    {
                        current === 1 && (
                            <FormField 
                         control={form.control}
                         name="description" 
                         render={({field}) => (
                             <FormItem>
                                 <FormLabel className="text-lg">Store description</FormLabel>
                                 <FormControl>
                                     <Input placeholder="" className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field}/>
                                 </FormControl>
                                 <FormDescription>This will be store description</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                        )
                    }
                    {
                        current === 2 && (
                            <FormField 
                         control={form.control}
                         name="category" 
                         render={({field}) => (
                             <FormItem>
                                 <FormLabel className="text-lg">Pick a category</FormLabel>
                                 <FormControl>
                                     <CategoryList />
                                 </FormControl>
                                 <FormDescription>This will help us to show your products to the relevant customers</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                        )
                    }
                    <div className="flex items-center">
                        {
                            current > 0 && (
                                <ChevronLeft className="mr-auto w-8 h-8 hover:opacity-60" onClick={() => setCurrent((prev) => prev - 1)} />
                            )
                        }
                        {
                            current === 2 ? (
                                <Button >Open store</Button>
                            ) : (
                                <Button type="button" onClick={() => setCurrent((prev) => prev + 1)} className=" ml-auto">Next</Button>
                            )
                        }
                    </div>
                </form>
            </Form>
        </div>
    )
}


export default StoreInputForm