import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DeveloperApplicationSelectObjectSchema as DeveloperApplicationSelectObjectSchema } from './objects/DeveloperApplicationSelect.schema';
import { DeveloperApplicationIncludeObjectSchema as DeveloperApplicationIncludeObjectSchema } from './objects/DeveloperApplicationInclude.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './objects/DeveloperApplicationWhereUniqueInput.schema';
import { DeveloperApplicationCreateInputObjectSchema as DeveloperApplicationCreateInputObjectSchema } from './objects/DeveloperApplicationCreateInput.schema';
import { DeveloperApplicationUncheckedCreateInputObjectSchema as DeveloperApplicationUncheckedCreateInputObjectSchema } from './objects/DeveloperApplicationUncheckedCreateInput.schema';
import { DeveloperApplicationUpdateInputObjectSchema as DeveloperApplicationUpdateInputObjectSchema } from './objects/DeveloperApplicationUpdateInput.schema';
import { DeveloperApplicationUncheckedUpdateInputObjectSchema as DeveloperApplicationUncheckedUpdateInputObjectSchema } from './objects/DeveloperApplicationUncheckedUpdateInput.schema';

export const DeveloperApplicationUpsertOneSchema: z.ZodType<Prisma.DeveloperApplicationUpsertArgs> = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema, create: z.union([ DeveloperApplicationCreateInputObjectSchema, DeveloperApplicationUncheckedCreateInputObjectSchema ]), update: z.union([ DeveloperApplicationUpdateInputObjectSchema, DeveloperApplicationUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.DeveloperApplicationUpsertArgs>;

export const DeveloperApplicationUpsertOneZodSchema = z.object({ select: DeveloperApplicationSelectObjectSchema.optional(), include: DeveloperApplicationIncludeObjectSchema.optional(), where: DeveloperApplicationWhereUniqueInputObjectSchema, create: z.union([ DeveloperApplicationCreateInputObjectSchema, DeveloperApplicationUncheckedCreateInputObjectSchema ]), update: z.union([ DeveloperApplicationUpdateInputObjectSchema, DeveloperApplicationUncheckedUpdateInputObjectSchema ]) }).strict();