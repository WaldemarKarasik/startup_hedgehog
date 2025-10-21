import * as z from 'zod';
export const AuditCreateManyResultSchema = z.object({
  count: z.number()
});