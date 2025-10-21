import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutDisputesInputObjectSchema as UserUpdateWithoutDisputesInputObjectSchema } from './UserUpdateWithoutDisputesInput.schema';
import { UserUncheckedUpdateWithoutDisputesInputObjectSchema as UserUncheckedUpdateWithoutDisputesInputObjectSchema } from './UserUncheckedUpdateWithoutDisputesInput.schema';
import { UserCreateWithoutDisputesInputObjectSchema as UserCreateWithoutDisputesInputObjectSchema } from './UserCreateWithoutDisputesInput.schema';
import { UserUncheckedCreateWithoutDisputesInputObjectSchema as UserUncheckedCreateWithoutDisputesInputObjectSchema } from './UserUncheckedCreateWithoutDisputesInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDisputesInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDisputesInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDisputesInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDisputesInput>;
export const UserUpsertWithoutDisputesInputObjectZodSchema = makeSchema();
