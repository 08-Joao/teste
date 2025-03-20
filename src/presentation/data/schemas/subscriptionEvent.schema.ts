import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const SubscriptionEventSchema = z.object({
    id: z.number(),
    subscriptionId: z.number(),
    tipo: z.string(),
    data: z.date(),
});

const SubscriptionEventSchemaJson = zodToJsonSchema(SubscriptionEventSchema);

export { SubscriptionEventSchema, SubscriptionEventSchemaJson };