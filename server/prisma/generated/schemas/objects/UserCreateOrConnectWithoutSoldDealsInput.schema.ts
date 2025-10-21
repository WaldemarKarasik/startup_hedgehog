import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSoldDealsInputObjectSchema as UserCreateWithoutSoldDealsInputObjectSchema } from './UserCreateWithoutSoldDealsInput.schema';
import { UserUncheckedCreateWithoutSoldDealsInputObjectSchema as UserUncheckedCreateWithoutSoldDealsInputObjectSchema } from './UserUncheckedCreateWithoutSoldDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSoldDealsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSoldDealsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSoldDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSoldDealsInput>;
export const UserCreateOrConnectWithoutSoldDealsInputObjectZodSchema = makeSchema();
