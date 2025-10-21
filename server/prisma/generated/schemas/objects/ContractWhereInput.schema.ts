import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema as DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { EnumContractStatusFilterObjectSchema as EnumContractStatusFilterObjectSchema } from './EnumContractStatusFilter.schema';
import { ContractStatusSchema } from '../enums/ContractStatus.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { DateTimeNullableFilterObjectSchema as DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DealScalarRelationFilterObjectSchema as DealScalarRelationFilterObjectSchema } from './DealScalarRelationFilter.schema';
import { DealWhereInputObjectSchema as DealWhereInputObjectSchema } from './DealWhereInput.schema'

const contractwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ContractWhereInputObjectSchema), z.lazy(() => ContractWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ContractWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ContractWhereInputObjectSchema), z.lazy(() => ContractWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  dealId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  templateVersion: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  pdfUrl: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  fixedPrice: z.union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()]).optional().nullable(),
  revenueSharePercent: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  revenueShareDuration: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  supportPeriod: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  criticalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  normalSLA: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  signatures: z.lazy(() => JsonFilterObjectSchema).optional(),
  status: z.union([z.lazy(() => EnumContractStatusFilterObjectSchema), ContractStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  signedAt: z.union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()]).optional().nullable(),
  deal: z.union([z.lazy(() => DealScalarRelationFilterObjectSchema), z.lazy(() => DealWhereInputObjectSchema)]).optional()
}).strict();
export const ContractWhereInputObjectSchema: z.ZodType<Prisma.ContractWhereInput> = contractwhereinputSchema as unknown as z.ZodType<Prisma.ContractWhereInput>;
export const ContractWhereInputObjectZodSchema = contractwhereinputSchema;
