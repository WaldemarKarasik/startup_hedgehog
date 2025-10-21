import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  dealId: z.literal(true).optional(),
  templateVersion: z.literal(true).optional(),
  content: z.literal(true).optional(),
  pdfUrl: z.literal(true).optional(),
  fixedPrice: z.literal(true).optional(),
  revenueSharePercent: z.literal(true).optional(),
  revenueShareDuration: z.literal(true).optional(),
  supportPeriod: z.literal(true).optional(),
  criticalSLA: z.literal(true).optional(),
  normalSLA: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  signedAt: z.literal(true).optional()
}).strict();
export const ContractMinAggregateInputObjectSchema: z.ZodType<Prisma.ContractMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ContractMinAggregateInputType>;
export const ContractMinAggregateInputObjectZodSchema = makeSchema();
