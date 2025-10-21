import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutSoldDealsInputObjectSchema as UserCreateWithoutSoldDealsInputObjectSchema } from './UserCreateWithoutSoldDealsInput.schema';
import { UserUncheckedCreateWithoutSoldDealsInputObjectSchema as UserUncheckedCreateWithoutSoldDealsInputObjectSchema } from './UserUncheckedCreateWithoutSoldDealsInput.schema';
import { UserCreateOrConnectWithoutSoldDealsInputObjectSchema as UserCreateOrConnectWithoutSoldDealsInputObjectSchema } from './UserCreateOrConnectWithoutSoldDealsInput.schema';
import { UserUpsertWithoutSoldDealsInputObjectSchema as UserUpsertWithoutSoldDealsInputObjectSchema } from './UserUpsertWithoutSoldDealsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSoldDealsInputObjectSchema as UserUpdateToOneWithWhereWithoutSoldDealsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSoldDealsInput.schema';
import { UserUpdateWithoutSoldDealsInputObjectSchema as UserUpdateWithoutSoldDealsInputObjectSchema } from './UserUpdateWithoutSoldDealsInput.schema';
import { UserUncheckedUpdateWithoutSoldDealsInputObjectSchema as UserUncheckedUpdateWithoutSoldDealsInputObjectSchema } from './UserUncheckedUpdateWithoutSoldDealsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSoldDealsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSoldDealsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSoldDealsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUpdateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSoldDealsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutSoldDealsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSoldDealsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutSoldDealsNestedInput>;
export const UserUpdateOneRequiredWithoutSoldDealsNestedInputObjectZodSchema = makeSchema();
