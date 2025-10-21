import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPurchasedDealsInputObjectSchema as UserCreateWithoutPurchasedDealsInputObjectSchema } from './UserCreateWithoutPurchasedDealsInput.schema';
import { UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema as UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedCreateWithoutPurchasedDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPurchasedDealsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPurchasedDealsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPurchasedDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPurchasedDealsInput>;
export const UserCreateOrConnectWithoutPurchasedDealsInputObjectZodSchema = makeSchema();
