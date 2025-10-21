import * as z from 'zod';
export const ContractDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  dealId: z.string(),
  deal: z.unknown(),
  templateVersion: z.string(),
  content: z.string(),
  pdfUrl: z.string().optional(),
  fixedPrice: z.number().optional(),
  revenueSharePercent: z.number().int(),
  revenueShareDuration: z.string(),
  supportPeriod: z.number().int(),
  criticalSLA: z.number().int(),
  normalSLA: z.number().int(),
  signatures: z.unknown(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  signedAt: z.date().optional()
}));