import { z } from "zod"

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXT_BASE_URL_API: z.string().url(),
})

export const env = envSchema.parse(process.env)
