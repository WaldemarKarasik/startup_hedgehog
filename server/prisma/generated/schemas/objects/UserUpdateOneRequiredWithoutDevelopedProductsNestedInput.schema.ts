import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutDevelopedProductsInputObjectSchema as UserCreateWithoutDevelopedProductsInputObjectSchema } from './UserCreateWithoutDevelopedProductsInput.schema';
import { UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema as UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedCreateWithoutDevelopedProductsInput.schema';
import { UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema as UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema } from './UserCreateOrConnectWithoutDevelopedProductsInput.schema';
import { UserUpsertWithoutDevelopedProductsInputObjectSchema as UserUpsertWithoutDevelopedProductsInputObjectSchema } from './UserUpsertWithoutDevelopedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutDevelopedProductsInputObjectSchema as UserUpdateToOneWithWhereWithoutDevelopedProductsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutDevelopedProductsInput.schema';
import { UserUpdateWithoutDevelopedProductsInputObjectSchema as UserUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUpdateWithoutDevelopedProductsInput.schema';
import { UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema as UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedUpdateWithoutDevelopedProductsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutDevelopedProductsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUpdateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutDevelopedProductsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutDevelopedProductsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDevelopedProductsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutDevelopedProductsNestedInput>;
export const UserUpdateOneRequiredWithoutDevelopedProductsNestedInputObjectZodSchema = makeSchema();
