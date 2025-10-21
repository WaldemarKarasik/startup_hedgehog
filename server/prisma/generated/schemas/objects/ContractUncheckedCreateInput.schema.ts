import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ContractStatusSchema } from '../enums/ContractStatus.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId: z.string(),
  templateVersion: z.string(),
  content: z.string(),
  pdfUrl: z.string().optional().nullable(),
  fixedPrice: z.number().optional().nullable(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  signatures: z.union([JsonNullValueInputSchema, jsonSchema]),
  status: ContractStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  signedAt: z.coerce.date().optional().nullable()
}).strict();
export const ContractUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ContractUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractUncheckedCreateInput>;
export const ContractUncheckedCreateInputObjectZodSchema = makeSchema();
