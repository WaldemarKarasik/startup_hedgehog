import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutPurchasedDealsInputObjectSchema as UserUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUpdateWithoutPurchasedDealsInput.schema';
import { UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema as UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasedDealsInput.schema';
import { UserCreateWithoutPurchasedDealsInputObjectSchema as UserCreateWithoutPurchasedDealsInputObjectSchema } from './UserCreateWithoutPurchasedDealsInput.schema';
import { UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema as UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedCreateWithoutPurchasedDealsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPurchasedDealsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPurchasedDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPurchasedDealsInput>;
export const UserUpsertWithoutPurchasedDealsInputObjectZodSchema = makeSchema();
