import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutSoldDealsInputObjectSchema as UserUpdateWithoutSoldDealsInputObjectSchema } from './UserUpdateWithoutSoldDealsInput.schema';
import { UserUncheckedUpdateWithoutSoldDealsInputObjectSchema as UserUncheckedUpdateWithoutSoldDealsInputObjectSchema } from './UserUncheckedUpdateWithoutSoldDealsInput.schema';
import { UserCreateWithoutSoldDealsInputObjectSchema as UserCreateWithoutSoldDealsInputObjectSchema } from './UserCreateWithoutSoldDealsInput.schema';
import { UserUncheckedCreateWithoutSoldDealsInputObjectSchema as UserUncheckedCreateWithoutSoldDealsInputObjectSchema } from './UserUncheckedCreateWithoutSoldDealsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSoldDealsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSoldDealsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSoldDealsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSoldDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSoldDealsInput>;
export const UserUpsertWithoutSoldDealsInputObjectZodSchema = makeSchema();
