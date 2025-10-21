import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutApplicationInputObjectSchema as UserCreateWithoutApplicationInputObjectSchema } from './UserCreateWithoutApplicationInput.schema';
import { UserUncheckedCreateWithoutApplicationInputObjectSchema as UserUncheckedCreateWithoutApplicationInputObjectSchema } from './UserUncheckedCreateWithoutApplicationInput.schema';
import { UserCreateOrConnectWithoutApplicationInputObjectSchema as UserCreateOrConnectWithoutApplicationInputObjectSchema } from './UserCreateOrConnectWithoutApplicationInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApplicationInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutApplicationInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutApplicationInput>;
export const UserCreateNestedOneWithoutApplicationInputObjectZodSchema = makeSchema();
