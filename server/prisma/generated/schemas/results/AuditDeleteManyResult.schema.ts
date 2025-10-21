import * as z from 'zod';
export const AuditDeleteManyResultSchema = z.object({
  count: z.number()
});