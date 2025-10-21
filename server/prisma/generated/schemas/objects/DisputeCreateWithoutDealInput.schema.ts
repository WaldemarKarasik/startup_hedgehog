import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { DisputeCreateevidenceUrlsInputObjectSchema as DisputeCreateevidenceUrlsInputObjectSchema } from './DisputeCreateevidenceUrlsInput.schema';
import { UserCreateNestedOneWithoutDisputesInputObjectSchema as UserCreateNestedOneWithoutDisputesInputObjectSchema } from './UserCreateNestedOneWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
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
  resolvedAt: z.coerce.date().optional().nullable(),
  initiator: z.lazy(() => UserCreateNestedOneWithoutDisputesInputObjectSchema)
}).strict();
export const DisputeCreateWithoutDealInputObjectSchema: z.ZodType<Prisma.DisputeCreateWithoutDealInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateWithoutDealInput>;
export const DisputeCreateWithoutDealInputObjectZodSchema = makeSchema();
