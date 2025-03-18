import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const UserSchema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
})

const UserInputSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(20),
})