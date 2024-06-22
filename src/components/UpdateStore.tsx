"use client"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { useMutation } from "@tanstack/react-query"
import { Button } from "./ui/button"
import CategoryList from "./CategoryList"
import { Input } from "./ui/input"


const UpdateStore = () => {
    const form = useForm({})

    const {} = useMutation({})

    const handleSubmit = () => {

    }

    const handleCategorySelect = () => {

    }
    return (
        <div className="max-w-[34rem] mx-[5rem] p-6 border-[1px] border-blue-200 mt-[2rem] rounded-md shadow-sm mb-[4rem]">
           <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8  p-3">
                         <FormField 
                         control={form.control}
                         name="title" 
                         render={({field}) => (
                             <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg">
                                 <FormLabel className="text-xl">Store Name</FormLabel>
                                 <FormControl>
                                     <Input placeholder="e.g. Urban Monkey" className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field}/>
                                 </FormControl>
                                 <FormDescription>This is your public store name</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                            <FormField 
                            control={form.control}
                            name="category" 
                            render={({field}) => (
                                <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg">
                                    <FormLabel className="text-xl">Pick a category</FormLabel>
                                    <FormControl>
                                        <CategoryList onCategorySelect={handleCategorySelect} {...field} />
                                    </FormControl>
                                    <FormDescription className="">This will help us to show your products to the relevant customers</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        
                            <FormField 
                         control={form.control}
                         name="description" 
                         render={({field}) => (
                             <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg">
                                 <FormLabel className="text-xl">Store description</FormLabel>
                                 <FormControl>
                                     <Input placeholder="" className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field}/>
                                 </FormControl>
                                 <FormDescription>This will be store description</FormDescription>
                                 <FormMessage />
                             </FormItem>
                         )}/>
                        
                    <div className="flex items-center">
                        <Button className="ml-auto">Save Changes</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default UpdateStore