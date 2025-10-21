import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutApplicationInputObjectSchema as UserCreateWithoutApplicationInputObjectSchema } from './UserCreateWithoutApplicationInput.schema';
import { UserUncheckedCreateWithoutApplicationInputObjectSchema as UserUncheckedCreateWithoutApplicationInputObjectSchema } from './UserUncheckedCreateWithoutApplicationInput.schema';
import { UserCreateOrConnectWithoutApplicationInputObjectSchema as UserCreateOrConnectWithoutApplicationInputObjectSchema } from './UserCreateOrConnectWithoutApplicationInput.schema';
import { UserUpsertWithoutApplicationInputObjectSchema as UserUpsertWithoutApplicationInputObjectSchema } from './UserUpsertWithoutApplicationInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutApplicationInputObjectSchema as UserUpdateToOneWithWhereWithoutApplicationInputObjectSchema } from './UserUpdateToOneWithWhereWithoutApplicationInput.schema';
import { UserUpdateWithoutApplicationInputObjectSchema as UserUpdateWithoutApplicationInputObjectSchema } from './UserUpdateWithoutApplicationInput.schema';
import { UserUncheckedUpdateWithoutApplicationInputObjectSchema as UserUncheckedUpdateWithoutApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutApplicationInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApplicationInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutApplicationInputObjectSchema), z.lazy(() => UserUpdateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApplicationInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutApplicationNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutApplicationNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutApplicationNestedInput>;
export const UserUpdateOneRequiredWithoutApplicationNestedInputObjectZodSchema = makeSchema();
