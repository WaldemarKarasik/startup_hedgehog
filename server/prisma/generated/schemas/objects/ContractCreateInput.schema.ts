import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { ContractStatusSchema } from '../enums/ContractStatus.schema';
import { DealCreateNestedOneWithoutContractInputObjectSchema as DealCreateNestedOneWithoutContractInputObjectSchema } from './DealCreateNestedOneWithoutContractInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  signedAt: z.coerce.date().optional().nullable(),
  deal: z.lazy(() => DealCreateNestedOneWithoutContractInputObjectSchema)
}).strict();
export const ContractCreateInputObjectSchema: z.ZodType<Prisma.ContractCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ContractCreateInput>;
export const ContractCreateInputObjectZodSchema = makeSchema();
