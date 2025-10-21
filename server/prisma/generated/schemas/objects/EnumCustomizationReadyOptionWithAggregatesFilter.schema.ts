import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectSchema as NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectSchema } from './NestedEnumCustomizationReadyOptionWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCustomizationReadyOptionFilterObjectSchema as NestedEnumCustomizationReadyOptionFilterObjectSchema } from './NestedEnumCustomizationReadyOptionFilter.schema'

const makeSchema = () => z.object({
  equals: CustomizationReadyOptionSchema.optional(),
  in: CustomizationReadyOptionSchema.array().optional(),
  notIn: CustomizationReadyOptionSchema.array().optional(),
  not: z.union([CustomizationReadyOptionSchema, z.lazy(() => NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema).optional()
}).strict();
export const EnumCustomizationReadyOptionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumCustomizationReadyOptionWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCustomizationReadyOptionWithAggregatesFilter>;
export const EnumCustomizationReadyOptionWithAggregatesFilterObjectZodSchema = makeSchema();
