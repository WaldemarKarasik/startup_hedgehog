import * as z from 'zod';

export const CustomizationReadyOptionSchema = z.enum(['yes', 'no', 'maybe'])

export type CustomizationReadyOption = z.infer<typeof CustomizationReadyOptionSchema>;