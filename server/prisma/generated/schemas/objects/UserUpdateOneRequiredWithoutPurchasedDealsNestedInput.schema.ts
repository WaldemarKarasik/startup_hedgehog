import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutPurchasedDealsInputObjectSchema as UserCreateWithoutPurchasedDealsInputObjectSchema } from './UserCreateWithoutPurchasedDealsInput.schema';
import { UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema as UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedCreateWithoutPurchasedDealsInput.schema';
import { UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema as UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema } from './UserCreateOrConnectWithoutPurchasedDealsInput.schema';
import { UserUpsertWithoutPurchasedDealsInputObjectSchema as UserUpsertWithoutPurchasedDealsInputObjectSchema } from './UserUpsertWithoutPurchasedDealsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPurchasedDealsInputObjectSchema as UserUpdateToOneWithWhereWithoutPurchasedDealsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPurchasedDealsInput.schema';
import { UserUpdateWithoutPurchasedDealsInputObjectSchema as UserUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUpdateWithoutPurchasedDealsInput.schema';
import { UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema as UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasedDealsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPurchasedDealsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUpdateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPurchasedDealsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPurchasedDealsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPurchasedDealsNestedInput>;
export const UserUpdateOneRequiredWithoutPurchasedDealsNestedInputObjectZodSchema = makeSchema();
