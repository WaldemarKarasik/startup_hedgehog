import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DealStatusSchema } from '../enums/DealStatus.schema';
import { NestedEnumDealStatusFilterObjectSchema as NestedEnumDealStatusFilterObjectSchema } from './NestedEnumDealStatusFilter.schema'

const makeSchema = () => z.object({
  equals: DealStatusSchema.optional(),
  in: DealStatusSchema.array().optional(),
  notIn: DealStatusSchema.array().optional(),
  not: z.union([DealStatusSchema, z.lazy(() => NestedEnumDealStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumDealStatusFilterObjectSchema: z.ZodType<Prisma.EnumDealStatusFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumDealStatusFilter>;
export const EnumDealStatusFilterObjectZodSchema = makeSchema();
