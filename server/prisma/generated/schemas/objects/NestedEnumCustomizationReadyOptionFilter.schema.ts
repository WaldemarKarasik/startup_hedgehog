import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema'

const nestedenumcustomizationreadyoptionfilterSchema = z.object({
  equals: CustomizationReadyOptionSchema.optional(),
  in: CustomizationReadyOptionSchema.array().optional(),
  notIn: CustomizationReadyOptionSchema.array().optional(),
  not: z.union([CustomizationReadyOptionSchema, z.lazy(() => NestedEnumCustomizationReadyOptionFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumCustomizationReadyOptionFilterObjectSchema: z.ZodType<Prisma.NestedEnumCustomizationReadyOptionFilter> = nestedenumcustomizationreadyoptionfilterSchema as unknown as z.ZodType<Prisma.NestedEnumCustomizationReadyOptionFilter>;
export const NestedEnumCustomizationReadyOptionFilterObjectZodSchema = nestedenumcustomizationreadyoptionfilterSchema;
