import * as z from 'zod';

import { HasUsersOptionSchema } from '../../enums/HasUsersOption.schema';
import { CustomizationReadyOptionSchema } from '../../enums/CustomizationReadyOption.schema';
import { ApplicationStatusSchema } from '../../enums/ApplicationStatus.schema';
// prettier-ignore
export const DeveloperApplicationResultSchema = z.object({
    id: z.string(),
    telegram: z.string().nullable(),
    productName: z.string(),
    productDescription: z.string(),
    customizationPrice: z.number().int(),
    revenueSharePercent: z.number().int(),
    githubUrl: z.string().nullable(),
    demoUrl: z.string().nullable(),
    videoUrl: z.string().nullable(),
    hasUsers: HasUsersOptionSchema,
    userCount: z.string().nullable(),
    customizationReady: CustomizationReadyOptionSchema,
    targetBusinesses: z.string().nullable(),
    portfolio: z.string().nullable(),
    additionalInfo: z.string().nullable(),
    status: ApplicationStatusSchema,
    reviewNotes: z.string().nullable(),
    reviewedBy: z.string().nullable(),
    reviewedAt: z.date().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type DeveloperApplicationResultType = z.infer<typeof DeveloperApplicationResultSchema>;
