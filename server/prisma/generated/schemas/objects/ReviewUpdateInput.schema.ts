import * as z from 'zod';
import type { Prisma } from '../../../../src/generated/prisma';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ReviewTypeSchema } from '../enums/ReviewType.schema';
import { EnumReviewTypeFieldUpdateOperationsInputObjectSchema as EnumReviewTypeFieldUpdateOperationsInputObjectSchema } from './EnumReviewTypeFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema as UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutReviewsNestedInput.schema';
import { UserUpdateOneWithoutReceivedReviewsNestedInputObjectSchema as UserUpdateOneWithoutReceivedReviewsNestedInputObjectSchema } from './UserUpdateOneWithoutReceivedReviewsNestedInput.schema';
import { ProductUpdateOneWithoutReviewsNestedInputObjectSchema as ProductUpdateOneWithoutReviewsNestedInputObjectSchema } from './ProductUpdateOneWithoutReviewsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  type: z.union([ReviewTypeSchema, z.lazy(() => EnumReviewTypeFieldUpdateOperationsInputObjectSchema)]).optional(),
  rating: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  comment: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVerifiedPurchase: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isVisible: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  author: z.lazy(() => UserUpdateOneRequiredWithoutReviewsNestedInputObjectSchema).optional(),
  targetUser: z.lazy(() => UserUpdateOneWithoutReceivedReviewsNestedInputObjectSchema).optional(),
  product: z.lazy(() => ProductUpdateOneWithoutReviewsNestedInputObjectSchema).optional()
}).strict();
export const ReviewUpdateInputObjectSchema: z.ZodType<Prisma.ReviewUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.ReviewUpdateInput>;
export const ReviewUpdateInputObjectZodSchema = makeSchema();
