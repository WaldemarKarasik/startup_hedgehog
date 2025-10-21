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
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  buyerId: z.boolean().optional(),
  buyer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  developerId: z.boolean().optional(),
  developer: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  fixedPrice: z.boolean().optional(),
  revenueSharePercent: z.boolean().optional(),
  revenueShareDuration: z.boolean().optional(),
  supportPeriod: z.boolean().optional(),
  criticalSLA: z.boolean().optional(),
  normalSLA: z.boolean().optional(),
  hasRevenueShare: z.boolean().optional(),
  paymentMethodId: z.boolean().optional(),
  escrowPaymentId: z.boolean().optional(),
  escrowExpiresAt: z.boolean().optional(),
  status: z.boolean().optional(),
  activatedAt: z.boolean().optional(),
  pausedAt: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  contract: z.union([z.boolean(), z.lazy(() => ContractArgsObjectSchema)]).optional(),
  transactions: z.union([z.boolean(), z.lazy(() => TransactionFindManySchema)]).optional(),
  revenueReports: z.union([z.boolean(), z.lazy(() => RevenueReportFindManySchema)]).optional(),
  disputes: z.union([z.boolean(), z.lazy(() => DisputeFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => DealCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const DealSelectObjectSchema: z.ZodType<Prisma.DealSelect> = makeSchema() as unknown as z.ZodType<Prisma.DealSelect>;
export const DealSelectObjectZodSchema = makeSchema();
