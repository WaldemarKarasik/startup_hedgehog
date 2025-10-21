import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutDevelopedProductsInputObjectSchema as UserCreateWithoutDevelopedProductsInputObjectSchema } from './UserCreateWithoutDevelopedProductsInput.schema';
import { UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema as UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema } from './UserUncheckedCreateWithoutDevelopedProductsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutDevelopedProductsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutDevelopedProductsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutDevelopedProductsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutDevelopedProductsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutDevelopedProductsInput>;
export const UserCreateOrConnectWithoutDevelopedProductsInputObjectZodSchema = makeSchema();
