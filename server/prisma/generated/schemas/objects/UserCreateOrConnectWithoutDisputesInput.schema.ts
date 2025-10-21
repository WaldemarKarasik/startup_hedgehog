import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDisputesInputObjectSchema as UserCreateWithoutDisputesInputObjectSchema } from './UserCreateWithoutDisputesInput.schema';
import { UserUncheckedCreateWithoutDisputesInputObjectSchema as UserUncheckedCreateWithoutDisputesInputObjectSchema } from './UserUncheckedCreateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDisputesInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDisputesInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDisputesInput>;
export const UserCreateOrConnectWithoutDisputesInputObjectZodSchema = makeSchema();
