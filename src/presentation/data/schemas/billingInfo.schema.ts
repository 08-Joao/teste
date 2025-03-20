import { Subscription } from "../../interfaces/subscription.interface";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const SubscriptionSchema = z.object({
  id: z.number(),
  userId: z.number(),
  endereco: z.string(),
  numero: z.string(),
  cidade: z.string(),
  estado: z.string(),
  cep: z.string(),
  pais: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const SubscriptionInputSchema = z.object({
  userId: z.number(),
  endereco: z.string(),
  numero: z.string(),
  cidade: z.string(),
  estado: z.string(),
  cep: z.string(),
  pais: z.string(),
});

const SubscriptionUpdateSchema = z.object({
  endereco: z.string().optional(),
  numero: z.string().optional(),
  cidade: z.string().optional(),
  estado: z.string().optional(),
  cep: z.string().optional(),
  pais: z.string().optional(),
});

const SubscriptionInputSchemaJson = zodToJsonSchema(SubscriptionInputSchema);
const SubscriptionUpdateSchemaJson = zodToJsonSchema(SubscriptionUpdateSchema);

export {
  SubscriptionSchema,
  SubscriptionInputSchema,
  SubscriptionUpdateSchema,
  SubscriptionInputSchemaJson,
  SubscriptionUpdateSchemaJson,
};
