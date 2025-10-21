import * as z from 'zod';

import { HasUsersOptionSchema } from '../../enums/HasUsersOption.schema';
import { CustomizationReadyOptionSchema } from '../../enums/CustomizationReadyOption.schema';
import { ApplicationStatusSchema } from '../../enums/ApplicationStatus.schema';
// prettier-ignore
export const DeveloperApplicationInputSchema = z.object({
    id: z.string(),
    telegram: z.string().optional().nullable(),
    productName: z.string(),
    productDescription: z.string(),
    customizationPrice: z.number().int(),
    revenueSharePercent: z.number().int(),
    githubUrl: z.string().optional().nullable(),
    demoUrl: z.string().optional().nullable(),
    videoUrl: z.string().optional().nullable(),
    hasUsers: HasUsersOptionSchema,
    userCount: z.string().optional().nullable(),
    customizationReady: CustomizationReadyOptionSchema,
    targetBusinesses: z.string().optional().nullable(),
    portfolio: z.string().optional().nullable(),
    additionalInfo: z.string().optional().nullable(),
    status: ApplicationStatusSchema,
    reviewNotes: z.string().optional().nullable(),
    reviewedBy: z.string().optional().nullable(),
    reviewedAt: z.date().optional().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DeveloperApplicationInputType = z.infer<typeof DeveloperApplicationInputSchema>;
