import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealArgsObjectSchema as DealArgsObjectSchema } from './DealArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  dealId: z.boolean().optional(),
  deal: z.union([z.boolean(), z.lazy(() => DealArgsObjectSchema)]).optional(),
  templateVersion: z.boolean().optional(),
  content: z.boolean().optional(),
  pdfUrl: z.boolean().optional(),
  fixedPrice: z.boolean().optional(),
  revenueSharePercent: z.boolean().optional(),
  revenueShareDuration: z.boolean().optional(),
  supportPeriod: z.boolean().optional(),
  criticalSLA: z.boolean().optional(),
  normalSLA: z.boolean().optional(),
  signatures: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  signedAt: z.boolean().optional()
}).strict();
export const ContractSelectObjectSchema: z.ZodType<Prisma.ContractSelect> = makeSchema() as unknown as z.ZodType<Prisma.ContractSelect>;
export const ContractSelectObjectZodSchema = makeSchema();
