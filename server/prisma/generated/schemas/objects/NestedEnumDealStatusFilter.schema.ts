import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema'

const nestedenumdealstatusfilterSchema = z.object({
  equals: DealStatusSchema.optional(),
  in: DealStatusSchema.array().optional(),
  notIn: DealStatusSchema.array().optional(),
  not: z.union([DealStatusSchema, z.lazy(() => NestedEnumDealStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumDealStatusFilterObjectSchema: z.ZodType<Prisma.NestedEnumDealStatusFilter> = nestedenumdealstatusfilterSchema as unknown as z.ZodType<Prisma.NestedEnumDealStatusFilter>;
export const NestedEnumDealStatusFilterObjectZodSchema = nestedenumdealstatusfilterSchema;
