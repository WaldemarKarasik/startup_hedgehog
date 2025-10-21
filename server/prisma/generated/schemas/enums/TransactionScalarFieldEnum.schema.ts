import * as z from 'zod';

export const TransactionScalarFieldEnumSchema = z.enum(['id', 'dealId', 'amount', 'platformFee', 'developerAmount', 'type', 'status', 'paymentId', 'paymentMethod', 'payoutId', 'description', 'metadata', 'createdAt', 'updatedAt'])

export type TransactionScalarFieldEnum = z.infer<typeof TransactionScalarFieldEnumSchema>;