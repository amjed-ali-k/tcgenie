import * as z from "zod"

export const userAuthSchema = z.object({
  email: z.string().email(),
   password: z.string().min(8).max(255).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number",
  }),
})
export const userNewAuthSchema = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(255),
  password: z.string().min(8).max(255).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, {
    message: "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and no symbols",
  }),
  confirmPassword: z.string().min(8).max(255),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})
