import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutDisputesInputObjectSchema as UserCreateWithoutDisputesInputObjectSchema } from './UserCreateWithoutDisputesInput.schema';
import { UserUncheckedCreateWithoutDisputesInputObjectSchema as UserUncheckedCreateWithoutDisputesInputObjectSchema } from './UserUncheckedCreateWithoutDisputesInput.schema';
import { UserCreateOrConnectWithoutDisputesInputObjectSchema as UserCreateOrConnectWithoutDisputesInputObjectSchema } from './UserCreateOrConnectWithoutDisputesInput.schema';
import { UserUpsertWithoutDisputesInputObjectSchema as UserUpsertWithoutDisputesInputObjectSchema } from './UserUpsertWithoutDisputesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDisputesInputObjectSchema as UserUpdateToOneWithWhereWithoutDisputesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDisputesInput.schema';
import { UserUpdateWithoutDisputesInputObjectSchema as UserUpdateWithoutDisputesInputObjectSchema } from './UserUpdateWithoutDisputesInput.schema';
import { UserUncheckedUpdateWithoutDisputesInputObjectSchema as UserUncheckedUpdateWithoutDisputesInputObjectSchema } from './UserUncheckedUpdateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDisputesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDisputesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDisputesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDisputesInputObjectSchema), z.lazy(() => UserUpdateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDisputesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDisputesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDisputesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDisputesNestedInput>;
export const UserUpdateOneRequiredWithoutDisputesNestedInputObjectZodSchema = makeSchema();
