import * as z from 'zod';

export const NotificationTypeSchema = z.enum(['DEAL_CREATED', 'DEAL_PAYMENT_RECEIVED', 'DEAL_ACTIVATED', 'CONTRACT_READY_TO_SIGN', 'CONTRACT_SIGNED', 'REVENUE_REPORT_DUE', 'REVENUE_SHARE_PAYMENT', 'DISPUTE_OPENED', 'DISPUTE_RESOLVED', 'REVIEW_RECEIVED', 'STARTUP_APPROVED', 'STARTUP_REJECTED'])

export type NotificationType = z.infer<typeof NotificationTypeSchema>;