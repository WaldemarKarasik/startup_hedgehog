import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumCustomizationReadyOptionFilterObjectSchema as NestedEnumCustomizationReadyOptionFilterObjectSchema } from './NestedEnumCustomizationReadyOptionFilter.schema'

const nestedenumcustomizationreadyoptionwithaggregatesfilterSchema = z.object({
  equals: CustomizationReadyOptionSchema.optional(),
  in: CustomizationReadyOptionSchema.array().optional(),
  notIn: CustomizationReadyOptionSchema.array().optional(),
  not: z.union([CustomizationReadyOptionSchema, z.lazy(() => NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema).optional()
}).strict();
export const NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectSchema: z.ZodType<Prisma.NestedEnumCustomizationReadyOptionWithAggregatesFilter> = nestedenumcustomizationreadyoptionwithaggregatesfilterSchema as unknown as z.ZodType<Prisma.NestedEnumCustomizationReadyOptionWithAggregatesFilter>;
export const NestedEnumCustomizationReadyOptionWithAggregatesFilterObjectZodSchema = nestedenumcustomizationreadyoptionwithaggregatesfilterSchema;
