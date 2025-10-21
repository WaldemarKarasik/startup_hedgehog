import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DealOrderByWithRelationInputObjectSchema as DealOrderByWithRelationInputObjectSchema } from './DealOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  dealId: SortOrderSchema.optional(),
  initiatedBy: SortOrderSchema.optional(),
  type: SortOrderSchema.optional(),
  stage: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  evidenceUrls: SortOrderSchema.optional(),
  resolution: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  platformAction: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  resolvedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  deal: z.lazy(() => DealOrderByWithRelationInputObjectSchema).optional(),
  initiator: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const DisputeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DisputeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeOrderByWithRelationInput>;
export const DisputeOrderByWithRelationInputObjectZodSchema = makeSchema();
