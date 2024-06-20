"use client"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import TextareaAutosize from 'react-textarea-autosize';
import { ProductCreationRequest, ProductDataVaidator } from "@/lib/Validators/ProductInput"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"

interface ProductListingProp{
    storeId: string
}

const ProductListingForm = ({storeId}:ProductListingProp) => {

    const form = useForm<ProductCreationRequest>({
        resolver: zodResolver(ProductDataVaidator),
        defaultValues:{
            title: '',
            description: "",
            price: 0.00,
            stock: 0 ,
            image: ""
        }
    })

    const {mutate:ListProduct} = useMutation({
        mutationFn: async(payload:ProductCreationRequest) => {
            const {data} = await axios.post("/api/store/product",payload)
            return data
        },
        onError: (error) => {
            alert("There is an error ")
        },
        onSuccess: () => {
            alert("Product listed")
        }
    })

    const handleSubmit = (data: ProductCreationRequest) => {
        const payload : ProductCreationRequest = {
            title: data.title,
            description: data.description,
            image: data.image,
            price: parseFloat(data.price.toString()),
            stock: parseInt(data.stock.toString(),10),
            storeId
        }
        console.log(payload)
        ListProduct(payload)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className=" flex flex-col sm:flex-row " >
                <div className="max-w-[420px] space-y-8 p-4">
                <FormField 
                control={form.control}
                name="title"
                render={({field}) => (
                    <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg shadow-sm">
                        <FormLabel className="text-xl">Add name</FormLabel>
                        <FormControl>
                            <Input className=" focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                        </FormControl>
                        <FormDescription>This will be your public title of the product</FormDescription>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField 
                name="description"
                control={form.control}
                render={({field}) => (
                    <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg shadow-sm">
                        <FormLabel className="text-xl ">Product description</FormLabel>
                        <FormControl>
                            <TextareaAutosize className="w-full appearance-none resize-none p-2 rounded-md focus:outline-none"  minRows={5} {...field} />
                        </FormControl>
                        <FormDescription>This will contain the  description of product , please provide a relevant description </FormDescription>
                        <FormMessage />
                    </FormItem>
                )} />
                <FormField 
                name="image"
                control={form.control}
                render={({field}) => (
                    <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg shadow-sm">
                        <FormLabel className="text-xl">Add Images</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormDescription>Atleast add 1 Image</FormDescription>
                        <FormMessage />
                    </FormItem>
                )} />
                </div>
                <div className="max-w-[420px] space-y-8 p-4">
                    <FormField
                    name="price"
                    control={form.control}
                    render={({field}) => (
                        <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg shadow-sm">
                            <FormLabel className="text-xl">Add price</FormLabel>
                            <FormControl>
                                <Input type="number" className="focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormDescription>This will be at what price your product will be listed .</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                    <FormField 
                    name="stock"
                    control={form.control}
                    render={({field}) => (
                        <FormItem className="p-4 border bg-blue-200 border-blue-300 rounded-lg shadow-sm">
                            <FormLabel className="text-xl">Items in Stock</FormLabel>
                            <FormControl>
                                <Input type="number" className="focus-visible:ring-0 focus-visible:ring-offset-0" {...field} />
                            </FormControl>
                            <FormDescription>List how many items are currently available in the present, you can change this later.</FormDescription>
                            <FormMessage />
                        </FormItem>
                    )} />
                </div>
                <div className="flex max-w-[420px] mt-[1rem]  ">
                    <div className="w-full">
                        <h1></h1>
                    </div>
                    <Button type="submit" className=" mt-auto mx-auto">Launch Product</Button>
                </div>
            </form>
        </Form>
    )
}

export default ProductListingForm