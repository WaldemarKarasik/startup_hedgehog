import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { DeveloperApplicationCreateWithoutUserInputObjectSchema as DeveloperApplicationCreateWithoutUserInputObjectSchema } from './DeveloperApplicationCreateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedCreateWithoutUserInput.schema';
import { DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema as DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema } from './DeveloperApplicationCreateOrConnectWithoutUserInput.schema';
import { DeveloperApplicationUpsertWithoutUserInputObjectSchema as DeveloperApplicationUpsertWithoutUserInputObjectSchema } from './DeveloperApplicationUpsertWithoutUserInput.schema';
import { DeveloperApplicationWhereInputObjectSchema as DeveloperApplicationWhereInputObjectSchema } from './DeveloperApplicationWhereInput.schema';
import { DeveloperApplicationWhereUniqueInputObjectSchema as DeveloperApplicationWhereUniqueInputObjectSchema } from './DeveloperApplicationWhereUniqueInput.schema';
import { DeveloperApplicationUpdateToOneWithWhereWithoutUserInputObjectSchema as DeveloperApplicationUpdateToOneWithWhereWithoutUserInputObjectSchema } from './DeveloperApplicationUpdateToOneWithWhereWithoutUserInput.schema';
import { DeveloperApplicationUpdateWithoutUserInputObjectSchema as DeveloperApplicationUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUpdateWithoutUserInput.schema';
import { DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema as DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema } from './DeveloperApplicationUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => DeveloperApplicationCreateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedCreateWithoutUserInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => DeveloperApplicationCreateOrConnectWithoutUserInputObjectSchema).optional(),
  upsert: z.lazy(() => DeveloperApplicationUpsertWithoutUserInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => DeveloperApplicationWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => DeveloperApplicationWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => DeveloperApplicationWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => DeveloperApplicationUpdateToOneWithWhereWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUpdateWithoutUserInputObjectSchema), z.lazy(() => DeveloperApplicationUncheckedUpdateWithoutUserInputObjectSchema)]).optional()
}).strict();
export const DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInput>;
export const DeveloperApplicationUncheckedUpdateOneWithoutUserNestedInputObjectZodSchema = makeSchema();
