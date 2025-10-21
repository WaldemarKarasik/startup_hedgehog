import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './objects/DisputeInclude.schema';
import { DisputeWhereUniqueInputObjectSchema as DisputeWhereUniqueInputObjectSchema } from './objects/DisputeWhereUniqueInput.schema';

export const DisputeFindUniqueOrThrowSchema: z.ZodType<Prisma.DisputeFindUniqueOrThrowArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), where: DisputeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.DisputeFindUniqueOrThrowArgs>;

export const DisputeFindUniqueOrThrowZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), where: DisputeWhereUniqueInputObjectSchema }).strict();