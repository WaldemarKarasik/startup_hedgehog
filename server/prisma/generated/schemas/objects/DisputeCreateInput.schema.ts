import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DisputeTypeSchema } from '../enums/DisputeType.schema';
import { DisputeStageSchema } from '../enums/DisputeStage.schema';
import { DisputeStatusSchema } from '../enums/DisputeStatus.schema';
import { DisputeCreateevidenceUrlsInputObjectSchema as DisputeCreateevidenceUrlsInputObjectSchema } from './DisputeCreateevidenceUrlsInput.schema';
import { DealCreateNestedOneWithoutDisputesInputObjectSchema as DealCreateNestedOneWithoutDisputesInputObjectSchema } from './DealCreateNestedOneWithoutDisputesInput.schema';
import { UserCreateNestedOneWithoutDisputesInputObjectSchema as UserCreateNestedOneWithoutDisputesInputObjectSchema } from './UserCreateNestedOneWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  type: DisputeTypeSchema,
  stage: DisputeStageSchema.optional(),
  status: DisputeStatusSchema.optional(),
  title: z.string(),
  description: z.string(),
  evidenceUrls: z.union([z.lazy(() => DisputeCreateevidenceUrlsInputObjectSchema), z.string().array()]),
  resolution: z.string().optional().nullable(),
  platformAction: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  resolvedAt: z.coerce.date().optional().nullable(),
  deal: z.lazy(() => DealCreateNestedOneWithoutDisputesInputObjectSchema),
  initiator: z.lazy(() => UserCreateNestedOneWithoutDisputesInputObjectSchema)
}).strict();
export const DisputeCreateInputObjectSchema: z.ZodType<Prisma.DisputeCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.DisputeCreateInput>;
export const DisputeCreateInputObjectZodSchema = makeSchema();
