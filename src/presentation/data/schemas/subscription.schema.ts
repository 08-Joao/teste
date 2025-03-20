import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const SubscriptionSchema = z.object({
  id: z.number(),
  inicio: z.date(),
  renovacao: z.date().optional(),
  termino: z.date().optional(),
  status: z.string(),
  user: z.number(),
  plan: z.number(),
  subscriptionEvent: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional()
});

const SubscriptionInputSchema = z.object({
    userId: z.number(),
    planId: z.number()
});

const SubscriptionUpdateSchema = z.object({
    planId: z.number().optional()
});

const SubscriptionInputSchemaJson = zodToJsonSchema(SubscriptionInputSchema);
const SubscriptionUpdateSchemaJson = zodToJsonSchema(SubscriptionUpdateSchema);

export {
    SubscriptionSchema,
    SubscriptionInputSchema,
    SubscriptionUpdateSchema,
    SubscriptionInputSchemaJson,
    SubscriptionUpdateSchemaJson
};