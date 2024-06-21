import { StoreInputValidator } from "@/lib/Validators/StoreInput";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";
import { db } from "../../../lib/db";



export async function POST(request:Request){
    try{

        const {userId} = auth()
        if(!userId){
            return new Response("Unauthorized",{status:400})
        }

        const body = await request.json()

        const {title,description,category} = StoreInputValidator.parse(body)

        const store = await db.store.create({
            data:{
                userId,
                name:title,
                description,
                category
            }
        })

        return new Response(JSON.stringify(store),{status:200})

    }catch(error){
        if(error instanceof z.ZodError){
            return new Response("Error in the payload",{status:422})
        }
        return new Response("Internal server Error",{status:500})
    }
}