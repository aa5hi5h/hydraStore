import { z } from "zod";


export const ProductDataVaidator = z.object({
    title: z.string()
    .min(3,{message:"Title cannot be less than 3 characters"})
    .max(512,{message:"Title cannot be this long"}),

    description: z.string(),
    image: z.string(),
    price: z.coerce.number(),
    stock: z.coerce.number().int(),
    storeId: z.string()
})

export type ProductCreationRequest = z.infer<typeof ProductDataVaidator>