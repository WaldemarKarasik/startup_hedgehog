import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutApplicationInputObjectSchema as UserUpdateWithoutApplicationInputObjectSchema } from './UserUpdateWithoutApplicationInput.schema';
import { UserUncheckedUpdateWithoutApplicationInputObjectSchema as UserUncheckedUpdateWithoutApplicationInputObjectSchema } from './UserUncheckedUpdateWithoutApplicationInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutApplicationInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutApplicationInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutApplicationInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutApplicationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutApplicationInput>;
export const UserUpdateToOneWithWhereWithoutApplicationInputObjectZodSchema = makeSchema();
