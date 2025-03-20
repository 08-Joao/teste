import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const SubscriptionPlanSchema = z.object({
  id: z.number(),
  nome: z.string(),
  valor: z.number(),
  duracaoDias: z.number(),
  descricao: z.string(),
  subscriptions: z.number().array(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const SubscriptionPlanInputSchema = z.object({
  userId: z.number(),
  planId: z.number(),
});

const SubscriptionPlanUpdateSchema = z.object({
  userId: z.number(),
  planId: z.number(),
  subscriptionId: z.number(),
});

const SubscriptionPlanInputSchemaJson = zodToJsonSchema(
  SubscriptionPlanInputSchema
);
const SubscriptionPlanUpdateSchemaJson = zodToJsonSchema(
  SubscriptionPlanUpdateSchema
);

export {
  SubscriptionPlanSchema,
  SubscriptionPlanInputSchema,
  SubscriptionPlanUpdateSchema,
  SubscriptionPlanInputSchemaJson,
  SubscriptionPlanUpdateSchemaJson,
};
