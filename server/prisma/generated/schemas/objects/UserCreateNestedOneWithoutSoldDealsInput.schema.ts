import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutSoldDealsInputObjectSchema as UserCreateWithoutSoldDealsInputObjectSchema } from './UserCreateWithoutSoldDealsInput.schema';
import { UserUncheckedCreateWithoutSoldDealsInputObjectSchema as UserUncheckedCreateWithoutSoldDealsInputObjectSchema } from './UserUncheckedCreateWithoutSoldDealsInput.schema';
import { UserCreateOrConnectWithoutSoldDealsInputObjectSchema as UserCreateOrConnectWithoutSoldDealsInputObjectSchema } from './UserCreateOrConnectWithoutSoldDealsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSoldDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSoldDealsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSoldDealsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSoldDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSoldDealsInput>;
export const UserCreateNestedOneWithoutSoldDealsInputObjectZodSchema = makeSchema();
