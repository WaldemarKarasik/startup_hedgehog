import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutNotificationsInputObjectSchema as UserCreateWithoutNotificationsInputObjectSchema } from './UserCreateWithoutNotificationsInput.schema';
import { UserUncheckedCreateWithoutNotificationsInputObjectSchema as UserUncheckedCreateWithoutNotificationsInputObjectSchema } from './UserUncheckedCreateWithoutNotificationsInput.schema';
import { UserCreateOrConnectWithoutNotificationsInputObjectSchema as UserCreateOrConnectWithoutNotificationsInputObjectSchema } from './UserCreateOrConnectWithoutNotificationsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutNotificationsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutNotificationsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutNotificationsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput>;
export const UserCreateNestedOneWithoutNotificationsInputObjectZodSchema = makeSchema();
