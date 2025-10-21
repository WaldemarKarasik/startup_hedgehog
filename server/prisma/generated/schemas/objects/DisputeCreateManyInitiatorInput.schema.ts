import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { DisputeCreateevidenceUrlsInputObjectSchema as DisputeCreateevidenceUrlsInputObjectSchema } from './DisputeCreateevidenceUrlsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  dealId: z.string(),
  type: DisputeTypeSchema,
  stage: DisputeStageSchema.optional(),
  status: DisputeStatusSchema.optional(),
  title: z.string(),
  description: z.string(),
  evidenceUrls: z.union([z.lazy(() => DisputeCreateevidenceUrlsInputObjectSchema), z.string().array()]).optional(),
  resolution: z.string().optional().nullable(),
  platformAction: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  resolvedAt: z.coerce.date().optional().nullable()
}).strict();
export const DisputeCreateManyInitiatorInputObjectSchema: z.ZodType<Prisma.DisputeCreateManyInitiatorInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateManyInitiatorInput>;
export const DisputeCreateManyInitiatorInputObjectZodSchema = makeSchema();
