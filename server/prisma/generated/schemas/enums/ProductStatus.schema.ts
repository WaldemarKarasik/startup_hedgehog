import * as z from 'zod';

export const ProductStatusSchema = z.enum(['DRAFT', 'MODERATION', 'ACTIVE', 'SOLD', 'ARCHIVED', 'REJECTED'])

export type ProductStatus = z.infer<typeof ProductStatusSchema>;