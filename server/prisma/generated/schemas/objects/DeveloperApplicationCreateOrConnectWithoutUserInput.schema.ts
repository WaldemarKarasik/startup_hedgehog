import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './DeveloperApplicationWhereUniqueInput.schema';
import { DeveloperApplicationCreateWithoutUserInputObjectSchema as DeveloperApplicationCreateWithoutUserInputObjectSchema } from './DeveloperApplicationCreateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeveloperApplicationWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => DeveloperApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateOrConnectWithoutUserInput>;
export const DeveloperApplicationCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
