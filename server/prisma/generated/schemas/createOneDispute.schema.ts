import type { Prisma } from '../../../src/generated/prisma';
import * as z from 'zod';
import { DisputeSelectObjectSchema as DisputeSelectObjectSchema } from './objects/DisputeSelect.schema';
import { DisputeIncludeObjectSchema as DisputeIncludeObjectSchema } from './objects/DisputeInclude.schema';
import { DisputeCreateInputObjectSchema as DisputeCreateInputObjectSchema } from './objects/DisputeCreateInput.schema';
import { DisputeUncheckedCreateInputObjectSchema as DisputeUncheckedCreateInputObjectSchema } from './objects/DisputeUncheckedCreateInput.schema';

export const DisputeCreateOneSchema: z.ZodType<Prisma.DisputeCreateArgs> = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), data: z.union([DisputeCreateInputObjectSchema, DisputeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.DisputeCreateArgs>;

export const DisputeCreateOneZodSchema = z.object({ select: DisputeSelectObjectSchema.optional(), include: DisputeIncludeObjectSchema.optional(), data: z.union([DisputeCreateInputObjectSchema, DisputeUncheckedCreateInputObjectSchema]) }).strict();