import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './DealOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  templateVersion: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  pdfUrl: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  fixedPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  signatures: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  signedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deal: z.lazy(() => DealOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ContractOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ContractOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractOrderByWithRelationInput>;
export const ContractOrderByWithRelationInputObjectZodSchema = makeSchema();
