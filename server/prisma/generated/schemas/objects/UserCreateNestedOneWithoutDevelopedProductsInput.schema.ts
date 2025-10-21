import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserCreateWithoutDevelopedProductsInputObjectSchema as UserCreateWithoutDevelopedProductsInputObjectSchema } from './UserCreateWithoutDevelopedProductsInput.schema';
import { UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema as UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedCreateWithoutDevelopedProductsInput.schema';
import { UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema as UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema } from './UserCreateOrConnectWithoutDevelopedProductsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutDevelopedProductsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutDevelopedProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutDevelopedProductsInput>;
export const UserCreateNestedOneWithoutDevelopedProductsInputObjectZodSchema = makeSchema();
