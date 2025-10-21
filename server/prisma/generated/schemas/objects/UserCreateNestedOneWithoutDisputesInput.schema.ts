import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutDisputesInputObjectSchema as UserCreateWithoutDisputesInputObjectSchema } from './UserCreateWithoutDisputesInput.schema';
import { UserUncheckedCreateWithoutDisputesInputObjectSchema as UserUncheckedCreateWithoutDisputesInputObjectSchema } from './UserUncheckedCreateWithoutDisputesInput.schema';
import { UserCreateOrConnectWithoutDisputesInputObjectSchema as UserCreateOrConnectWithoutDisputesInputObjectSchema } from './UserCreateOrConnectWithoutDisputesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDisputesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDisputesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDisputesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDisputesInput>;
export const UserCreateNestedOneWithoutDisputesInputObjectZodSchema = makeSchema();
