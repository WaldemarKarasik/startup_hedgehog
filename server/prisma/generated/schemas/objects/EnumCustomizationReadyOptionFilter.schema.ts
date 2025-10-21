import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { NestedEnumCustomizationReadyOptionFilterObjectSchema as NestedEnumCustomizationReadyOptionFilterObjectSchema } from './NestedEnumCustomizationReadyOptionFilter.schema'

const makeSchema = () => z.object({
  equals: CustomizationReadyOptionSchema.optional(),
  in: CustomizationReadyOptionSchema.array().optional(),
  notIn: CustomizationReadyOptionSchema.array().optional(),
  not: z.union([CustomizationReadyOptionSchema, z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema)]).optional()
}).strict();
export const EnumCustomizationReadyOptionFilterObjectSchema: z.ZodType<Prisma.EnumCustomizationReadyOptionFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumCustomizationReadyOptionFilter>;
export const EnumCustomizationReadyOptionFilterObjectZodSchema = makeSchema();
