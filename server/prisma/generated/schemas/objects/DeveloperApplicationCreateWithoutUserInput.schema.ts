import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { HasUsersOptionSchema } from '../enums/HasUsersOption.schema';
import { CustomizationReadyOptionSchema } from '../enums/CustomizationReadyOption.schema';
import { ApplicationStatusSchema } from '../enums/ApplicationStatus.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  status: ApplicationStatusSchema.optional(),
  reviewNotes: z.string().optional().nullable(),
  reviewedBy: z.string().optional().nullable(),
  reviewedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const DeveloperApplicationCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateWithoutUserInput>;
export const DeveloperApplicationCreateWithoutUserInputObjectZodSchema = makeSchema();
