import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";

const PaymentSchema = z.object({
  id: z.string(),
  userId: z.number(),
  valor: z.number(),
  dataDeExecucao: z.date(),
  dataDeReembolso: z.date().nullable(),
  status: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

const PaymentSchemaJson = zodToJsonSchema(PaymentSchema);

export { PaymentSchema, PaymentSchemaJson };