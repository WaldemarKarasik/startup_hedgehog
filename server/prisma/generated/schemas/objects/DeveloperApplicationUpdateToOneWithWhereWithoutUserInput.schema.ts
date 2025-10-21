import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './DeveloperApplicationWhereInput.schema';
import { DeveloperApplicationUpdateWithoutUserInputObjectSchema as DeveloperApplicationUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUpdateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => DeveloperApplicationWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => DeveloperApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const DeveloperApplicationUpdateToOneWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationUpdateToOneWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationUpdateToOneWithWhereWithoutUserInput>;
export const DeveloperApplicationUpdateToOneWithWhereWithoutUserInputObjectZodSchema = makeSchema();
