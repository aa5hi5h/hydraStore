import { z } from "zod";

export const StoreInputValidator = z.object({
    title: z.string()
    .min(3,{message:"Title must be longer than 3 character"})
    .max(124,{message:"Store Name must be less than 124 characters long"}),
    description: z.string()
    .min(1, {message:"Description must be more than a single character long"})
    .max(1024,{message:"description must be less than 1024 characters"}),
    category: z.string().array().min(1,{message:"Please atleast choose 1"})
})


export type StoreInputRequest = z.infer<typeof StoreInputValidator>


