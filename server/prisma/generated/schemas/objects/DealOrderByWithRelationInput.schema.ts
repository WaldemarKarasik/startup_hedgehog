import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { ContractOrderByWithRelationInputObjectSchema as ContractOrderByWithRelationInputObjectSchema } from './ContractOrderByWithRelationInput.schema';
import { TransactionOrderByRelationAggregateInputObjectSchema as TransactionOrderByRelationAggregateInputObjectSchema } from './TransactionOrderByRelationAggregateInput.schema';
import { RevenueReportOrderByRelationAggregateInputObjectSchema as RevenueReportOrderByRelationAggregateInputObjectSchema } from './RevenueReportOrderByRelationAggregateInput.schema';
import { DisputeOrderByRelationAggregateInputObjectSchema as DisputeOrderByRelationAggregateInputObjectSchema } from './DisputeOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  buyerId: SortOrderSchema.optional(),
  developerId: SortOrderSchema.optional(),
  fixedPrice: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  revenueSharePercent: SortOrderSchema.optional(),
  revenueShareDuration: SortOrderSchema.optional(),
  supportPeriod: SortOrderSchema.optional(),
  criticalSLA: SortOrderSchema.optional(),
  normalSLA: SortOrderSchema.optional(),
  hasRevenueShare: SortOrderSchema.optional(),
  paymentMethodId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  escrowPaymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  escrowExpiresAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  activatedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pausedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  completedAt: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional(),
  buyer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  developer: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  contract: z.lazy(() => ContractOrderByWithRelationInputObjectSchema).optional(),
  transactions: z.lazy(() => TransactionOrderByRelationAggregateInputObjectSchema).optional(),
  revenueReports: z.lazy(() => RevenueReportOrderByRelationAggregateInputObjectSchema).optional(),
  disputes: z.lazy(() => DisputeOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const DealOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.DealOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.DealOrderByWithRelationInput>;
export const DealOrderByWithRelationInputObjectZodSchema = makeSchema();
