import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDisputesInputObjectSchema as UserUpdateWithoutDisputesInputObjectSchema } from './UserUpdateWithoutDisputesInput.schema';
import { UserUncheckedUpdateWithoutDisputesInputObjectSchema as UserUncheckedUpdateWithoutDisputesInputObjectSchema } from './UserUncheckedUpdateWithoutDisputesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDisputesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDisputesInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDisputesInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDisputesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDisputesInput>;
export const UserUpdateToOneWithWhereWithoutDisputesInputObjectZodSchema = makeSchema();
