import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ContractArgsObjectSchema as ContractArgsObjectSchema } from './ContractArgs.schema';
import { TransactionFindManySchema as TransactionFindManySchema } from '../findManyTransaction.schema';
import { RevenueReportFindManySchema as RevenueReportFindManySchema } from '../findManyRevenueReport.schema';
import { DisputeFindManySchema as DisputeFindManySchema } from '../findManyDispute.schema';
import { DealCountOutputTypeArgsObjectSchema as DealCountOutputTypeArgsObjectSchema } from './DealCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  buyer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  developer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  contract: z.union([z.boolean(), z.lazy(() => ContractArgsObjectSchema)]).optional(),
  transactions: z.union([z.boolean(), z.lazy(() => TransactionFindManySchema)]).optional(),
  revenueReports: z.union([z.boolean(), z.lazy(() => RevenueReportFindManySchema)]).optional(),
  disputes: z.union([z.boolean(), z.lazy(() => DisputeFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => DealCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DealIncludeObjectSchema: z.ZodType<Prisma.DealInclude> = makeSchema() as unknown as z.ZodType<Prisma.DealInclude>;
export const DealIncludeObjectZodSchema = makeSchema();
