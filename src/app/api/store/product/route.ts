import { ProductDataVaidator } from "@/lib/Validators/ProductInput";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";



export async function POST(request:Request){
    try{

        const {userId} = auth()

        if(!userId){
            return new Response("UnAuthorized",{status: 400})
        }

        const body = await request.json()

        const {title,description,image,price,stock,storeId} = ProductDataVaidator.parse(body)

        const product = await db.product.create({
            data:{
                name:title,
                description,
                userId,
                price,
                stock,
                storeId,
                images:image
            }
        })

         return new Response(`${product}`,{status:200})
    }catch(error){
        if(error instanceof z.ZodError){
            return new Response("Error in the payload",{status:422})
        }

        return new Response("Internal server Error ", {status:500})
    }
}