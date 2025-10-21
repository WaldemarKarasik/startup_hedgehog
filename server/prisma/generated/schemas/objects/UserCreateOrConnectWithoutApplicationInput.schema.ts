import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutApplicationInputObjectSchema as UserCreateWithoutApplicationInputObjectSchema } from './UserCreateWithoutApplicationInput.schema';
import { UserUncheckedCreateWithoutApplicationInputObjectSchema as UserUncheckedCreateWithoutApplicationInputObjectSchema } from './UserUncheckedCreateWithoutApplicationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutApplicationInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutApplicationInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutApplicationInput>;
export const UserCreateOrConnectWithoutApplicationInputObjectZodSchema = makeSchema();
