import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationUpdateWithoutUserInputObjectSchema as DeveloperApplicationUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUpdateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedUpdateWithoutUserInput.schema';
import { DeveloperApplicationCreateWithoutUserInputObjectSchema as DeveloperApplicationCreateWithoutUserInputObjectSchema } from './DeveloperApplicationCreateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedCreateWithoutUserInput.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './DeveloperApplicationWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => DeveloperApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => DeveloperApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema)]),
  where: z.lazy(() => DeveloperApplicationWhereInputObjectSchema).optional()
}).strict();
export const DeveloperApplicationUpsertWithoutUserInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationUpsertWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationUpsertWithoutUserInput>;
export const DeveloperApplicationUpsertWithoutUserInputObjectZodSchema = makeSchema();
