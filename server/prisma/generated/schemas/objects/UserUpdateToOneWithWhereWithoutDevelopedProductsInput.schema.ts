import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutDevelopedProductsInputObjectSchema as UserUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUpdateWithoutDevelopedProductsInput.schema';
import { UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema as UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutDevelopedProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutDevelopedProductsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDevelopedProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutDevelopedProductsInput>;
export const UserUpdateToOneWithWhereWithoutDevelopedProductsInputObjectZodSchema = makeSchema();
