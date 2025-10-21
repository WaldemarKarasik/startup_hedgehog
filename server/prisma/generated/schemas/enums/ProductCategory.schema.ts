import * as z from 'zod';

export const ProductCategorySchema = z.enum(['SAAS', 'MARKETPLACE', 'ECOMMERCE', 'FINTECH', 'EDTECH', 'HEALTHTECH', 'ANALYTICS', 'CRM', 'TOOL', 'OTHER'])

export type ProductCategory = z.infer<typeof ProductCategorySchema>;