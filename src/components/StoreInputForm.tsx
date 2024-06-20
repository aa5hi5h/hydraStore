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
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/navigation"

const StoreInputForm = () => {

    const [current,setCurrent] = useState(0)
    const [category,setCategory] =useState<string[]>([])

    const router = useRouter()
    const form = useForm({
        resolver: zodResolver(StoreInputValidator),
        defaultValues: {
            title: "",
            description: '',
            category: [""]
        }
    })


    const { mutate:CreateStore} = useMutation({
        mutationFn: async(payload:StoreInputRequest) => {
            
            const {data} = await axios.post("/api/store",payload)
            console.log(data)
            return data 
        },
        onError: (error) => {
            alert("to perform this action you need to be logged in")

        },
        onSuccess: (data) => {
            router.push(`/store/${data.title}`)
        }
    })

    const handleSubmit = async(data: StoreInputRequest) => {

         const payload = {
            title: data.title,
            description: data.description,
            category: data.category 
        }

        CreateStore(payload)

    }

    const handleCategorySelect = (selectedCategory: string[]) => {
        setCategory(selectedCategory)
        form.setValue("category", selectedCategory )
    }

    const handleNext = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setCurrent((prev) => prev + 1)
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
                                 <FormLabel className="text-xl">Store Name</FormLabel>
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
                            name="category" 
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="text-xl">Pick a category</FormLabel>
                                    <FormControl>
                                        <CategoryList onCategorySelect={handleCategorySelect} {...field} />
                                    </FormControl>
                                    <FormDescription className="">This will help us to show your products to the relevant customers</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        )
                    }
                    {
                        current === 2 && (
                            <FormField 
                         control={form.control}
                         name="description" 
                         render={({field}) => (
                             <FormItem>
                                 <FormLabel className="text-xl">Store description</FormLabel>
                                 <FormControl>
                                     <Input placeholder="" className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field}/>
                                 </FormControl>
                                 <FormDescription>This will be store description</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                        )
                    }
                    <div className="flex items-center">
                        {
                            current > 0 && (
                                <ChevronLeft className="mr-auto w-8 h-8 hover:opacity-60 mt-[-1rem]" onClick={() => setCurrent((prev) => prev - 1)} />
                            )
                        }
                        {
                            current === 2 ? (
                                <Button >Open store</Button>
                            ) : (
                                <Button type="button" onClick={handleNext} className=" ml-auto">Next</Button>
                            )
                        }
                    </div>
                </form>
            </Form>
        </div>
    )
}


export default StoreInputForm