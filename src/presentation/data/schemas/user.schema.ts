import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  isAdmin: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

const UserInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

const UserUpdateInputSchema = z.object({
  name: z.string().optional(),
  password: z.string().min(6).max(20).optional(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});


const UserInputSchemaJson = zodToJsonSchema(UserInputSchema);
const UserUpdateInputSchemaJson = zodToJsonSchema(UserUpdateInputSchema);
const LoginSchemaJson = zodToJsonSchema(LoginSchema);

export const validateUser = (data: unknown) => {
  return UserSchema.safeParse(data);
};

export {
  UserSchema,
  UserInputSchema,
  UserUpdateInputSchema,
  UserInputSchemaJson,
  UserUpdateInputSchemaJson,
  LoginSchemaJson
};
