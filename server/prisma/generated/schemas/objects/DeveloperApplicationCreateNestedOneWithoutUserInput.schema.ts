import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationCreateWithoutUserInputObjectSchema as DeveloperApplicationCreateWithoutUserInputObjectSchema } from './DeveloperApplicationCreateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedCreateWithoutUserInput.schema';
import { DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema as DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema } from './DeveloperApplicationCreateOrConnectWithoutUserInput.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './DeveloperApplicationWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeveloperApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema).optional(),
  connect: z.lazy(() => DeveloperApplicationWhereUniqueInputObjectSchema).optional()
}).strict();
export const DeveloperApplicationCreateNestedOneWithoutUserInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationCreateNestedOneWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationCreateNestedOneWithoutUserInput>;
export const DeveloperApplicationCreateNestedOneWithoutUserInputObjectZodSchema = makeSchema();
