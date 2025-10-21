import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutPurchasedDealsInputObjectSchema as UserCreateWithoutPurchasedDealsInputObjectSchema } from './UserCreateWithoutPurchasedDealsInput.schema';
import { UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema as UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedCreateWithoutPurchasedDealsInput.schema';
import { UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema as UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema } from './UserCreateOrConnectWithoutPurchasedDealsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPurchasedDealsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPurchasedDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPurchasedDealsInput>;
export const UserCreateNestedOneWithoutPurchasedDealsInputObjectZodSchema = makeSchema();
