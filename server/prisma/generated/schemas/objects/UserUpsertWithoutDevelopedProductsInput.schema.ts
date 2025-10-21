import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserUpdateWithoutDevelopedProductsInputObjectSchema as UserUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUpdateWithoutDevelopedProductsInput.schema';
import { UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema as UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutDevelopedProductsInput.schema';
import { UserCreateWithoutDevelopedProductsInputObjectSchema as UserCreateWithoutDevelopedProductsInputObjectSchema } from './UserCreateWithoutDevelopedProductsInput.schema';
import { UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema as UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedCreateWithoutDevelopedProductsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutDevelopedProductsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutDevelopedProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutDevelopedProductsInput>;
export const UserUpsertWithoutDevelopedProductsInputObjectZodSchema = makeSchema();
