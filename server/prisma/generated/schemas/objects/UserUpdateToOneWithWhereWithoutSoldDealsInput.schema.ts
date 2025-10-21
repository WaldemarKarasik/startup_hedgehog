import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSoldDealsInputObjectSchema as UserUpdateWithoutSoldDealsInputObjectSchema } from './UserUpdateWithoutSoldDealsInput.schema';
import { UserUncheckedUpdateWithoutSoldDealsInputObjectSchema as UserUncheckedUpdateWithoutSoldDealsInputObjectSchema } from './UserUncheckedUpdateWithoutSoldDealsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSoldDealsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSoldDealsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSoldDealsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSoldDealsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSoldDealsInput>;
export const UserUpdateToOneWithWhereWithoutSoldDealsInputObjectZodSchema = makeSchema();
