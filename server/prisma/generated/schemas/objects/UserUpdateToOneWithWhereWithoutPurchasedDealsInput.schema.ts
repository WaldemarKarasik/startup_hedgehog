import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPurchasedDealsInputObjectSchema as UserUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUpdateWithoutPurchasedDealsInput.schema';
import { UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema as UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema } from './UserUncheckedUpdateWithoutPurchasedDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPurchasedDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPurchasedDealsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPurchasedDealsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPurchasedDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPurchasedDealsInput>;
export const UserUpdateToOneWithWhereWithoutPurchasedDealsInputObjectZodSchema = makeSchema();
