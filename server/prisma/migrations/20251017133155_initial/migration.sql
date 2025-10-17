-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NEW', 'IN_REVIEW', 'APPROVED', 'REJECTED', 'CONTACTED');

-- CreateEnum
CREATE TYPE "HasUsersOption" AS ENUM ('yes', 'no');

-- CreateEnum
CREATE TYPE "CustomizationReadyOption" AS ENUM ('yes', 'no', 'maybe');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('DEVELOPER', 'BUYER', 'ADMIN');

-- CreateEnum
CREATE TYPE "UserType" AS ENUM ('INDIVIDUAL', 'SELF_EMPLOYED', 'IP', 'LLC');

-- CreateEnum
CREATE TYPE "ProductCategory" AS ENUM ('SAAS', 'MARKETPLACE', 'ECOMMERCE', 'FINTECH', 'EDTECH', 'HEALTHTECH', 'ANALYTICS', 'CRM', 'TOOL', 'OTHER');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('DRAFT', 'MODERATION', 'ACTIVE', 'SOLD', 'ARCHIVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "DealStatus" AS ENUM ('AWAITING_DEVELOPER_CONFIRMATION', 'CONTRACT_GENERATION', 'AWAITING_SIGNATURES', 'ACTIVE', 'COMPLETED', 'DISPUTED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ContractStatus" AS ENUM ('DRAFT', 'AWAITING_SIGNATURES', 'PARTIALLY_SIGNED', 'FULLY_SIGNED', 'ACTIVE', 'TERMINATED');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('FIXED_PRICE', 'REVENUE_SHARE', 'REFUND', 'CHARGEBACK', 'PENALTY');

-- CreateEnum
CREATE TYPE "TransactionStatus" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'FAILED', 'REFUNDED');

-- CreateEnum
CREATE TYPE "RevenueReportStatus" AS ENUM ('PENDING', 'SUBMITTED', 'UNDER_REVIEW', 'DISPUTED', 'APPROVED', 'PAID');

-- CreateEnum
CREATE TYPE "DisputeType" AS ENUM ('UNPAID_REVENUE_SHARE', 'REVENUE_UNDERREPORTING', 'NO_DEVELOPER_SUPPORT', 'CODE_QUALITY', 'UNAUTHORIZED_RESALE', 'IP_VIOLATION', 'OTHER');

-- CreateEnum
CREATE TYPE "DisputeStage" AS ENUM ('NEGOTIATION', 'MEDIATION');

-- CreateEnum
CREATE TYPE "DisputeStatus" AS ENUM ('OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED', 'ESCALATED_TO_COURT');

-- CreateEnum
CREATE TYPE "ReviewType" AS ENUM ('DEVELOPER_REVIEW', 'STARTUP_REVIEW');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('DEAL_CREATED', 'DEAL_PAYMENT_RECEIVED', 'DEAL_ACTIVATED', 'CONTRACT_READY_TO_SIGN', 'CONTRACT_SIGNED', 'REVENUE_REPORT_DUE', 'REVENUE_SHARE_PAYMENT', 'DISPUTE_OPENED', 'DISPUTE_RESOLVED', 'REVIEW_RECEIVED', 'STARTUP_APPROVED', 'STARTUP_REJECTED');

-- CreateEnum
CREATE TYPE "AuditType" AS ENUM ('FRAUD_DETECTION', 'RANDOM_CHECK', 'USER_COMPLAINT', 'MANUAL_REVIEW');

-- CreateEnum
CREATE TYPE "AuditStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'COMPLETED', 'NO_ISSUES_FOUND', 'ISSUES_FOUND');

-- CreateTable
CREATE TABLE "DeveloperApplication" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT,
    "productName" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "revenueSharePercent" INTEGER NOT NULL,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    "videoUrl" TEXT,
    "hasUsers" "HasUsersOption" NOT NULL,
    "userCount" TEXT,
    "customizationReady" "CustomizationReadyOption" NOT NULL,
    "targetBusinesses" TEXT,
    "portfolio" TEXT,
    "additionalInfo" TEXT,
    "status" "ApplicationStatus" NOT NULL DEFAULT 'NEW',
    "reviewNotes" TEXT,
    "reviewedBy" TEXT,
    "reviewedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeveloperApplication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT,
    "avatar" TEXT,
    "bio" TEXT,
    "userType" "UserType",
    "legalName" TEXT,
    "inn" TEXT,
    "legalBasis" TEXT,
    "bankDetails" JSONB,
    "payoutMethod" TEXT,
    "payoutDetails" JSONB,
    "reputation" INTEGER NOT NULL DEFAULT 100,
    "trustScore" INTEGER NOT NULL DEFAULT 60,
    "rating" DECIMAL(3,2) NOT NULL DEFAULT 0,
    "reviewCount" INTEGER NOT NULL DEFAULT 0,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "isSuspended" BOOLEAN NOT NULL DEFAULT false,
    "suspendedReason" TEXT,
    "lastActiveAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fullDescription" TEXT,
    "category" "ProductCategory" NOT NULL,
    "techStack" TEXT[],
    "version" TEXT NOT NULL DEFAULT '1.0.0',
    "demoUrl" TEXT,
    "videoUrl" TEXT,
    "githubUrl" TEXT,
    "images" TEXT[],
    "userCount" INTEGER,
    "mrr" DECIMAL(10,2),
    "fixedPrice" DECIMAL(10,2),
    "revenueSharePercent" INTEGER NOT NULL,
    "revenueShareDuration" TEXT NOT NULL,
    "supportPeriod" INTEGER NOT NULL,
    "criticalSLA" INTEGER NOT NULL,
    "normalSLA" INTEGER NOT NULL,
    "includesTraining" BOOLEAN NOT NULL DEFAULT false,
    "customizationPrice" DECIMAL(10,2),
    "exclusivityPrice" DECIMAL(10,2),
    "status" "ProductStatus" NOT NULL DEFAULT 'DRAFT',
    "rejectionReason" TEXT,
    "slug" TEXT NOT NULL,
    "views" INTEGER NOT NULL DEFAULT 0,
    "favorites" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "publishedAt" TIMESTAMP(3),

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deal" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "buyerId" TEXT NOT NULL,
    "developerId" TEXT NOT NULL,
    "fixedPrice" DECIMAL(10,2),
    "revenueSharePercent" INTEGER NOT NULL,
    "revenueShareDuration" TEXT NOT NULL,
    "supportPeriod" INTEGER NOT NULL,
    "criticalSLA" INTEGER NOT NULL,
    "normalSLA" INTEGER NOT NULL,
    "hasRevenueShare" BOOLEAN NOT NULL DEFAULT true,
    "paymentMethodId" TEXT,
    "escrowPaymentId" TEXT,
    "escrowExpiresAt" TIMESTAMP(3),
    "status" "DealStatus" NOT NULL DEFAULT 'AWAITING_DEVELOPER_CONFIRMATION',
    "activatedAt" TIMESTAMP(3),
    "pausedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "templateVersion" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "pdfUrl" TEXT,
    "fixedPrice" DECIMAL(10,2),
    "revenueSharePercent" INTEGER NOT NULL,
    "revenueShareDuration" TEXT NOT NULL,
    "supportPeriod" INTEGER NOT NULL,
    "criticalSLA" INTEGER NOT NULL,
    "normalSLA" INTEGER NOT NULL,
    "signatures" JSONB[],
    "status" "ContractStatus" NOT NULL DEFAULT 'DRAFT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "signedAt" TIMESTAMP(3),

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "platformFee" DECIMAL(10,2) NOT NULL,
    "developerAmount" DECIMAL(10,2) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "status" "TransactionStatus" NOT NULL DEFAULT 'PENDING',
    "paymentId" TEXT,
    "paymentMethod" TEXT,
    "payoutId" TEXT,
    "description" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RevenueReport" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "monthNumber" INTEGER NOT NULL,
    "grossRevenue" DECIMAL(10,2) NOT NULL,
    "returns" DECIMAL(10,2) NOT NULL,
    "fees" DECIMAL(10,2) NOT NULL,
    "netRevenue" DECIMAL(10,2) NOT NULL,
    "revenueShareAmount" DECIMAL(10,2) NOT NULL,
    "proofUrls" TEXT[],
    "notes" TEXT,
    "status" "RevenueReportStatus" NOT NULL DEFAULT 'PENDING',
    "isAudited" BOOLEAN NOT NULL DEFAULT false,
    "auditFlags" TEXT[],
    "submittedAt" TIMESTAMP(3),
    "verifiedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RevenueReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dispute" (
    "id" TEXT NOT NULL,
    "dealId" TEXT NOT NULL,
    "initiatedBy" TEXT NOT NULL,
    "type" "DisputeType" NOT NULL,
    "stage" "DisputeStage" NOT NULL DEFAULT 'NEGOTIATION',
    "status" "DisputeStatus" NOT NULL DEFAULT 'OPEN',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "evidenceUrls" TEXT[],
    "resolution" TEXT,
    "platformAction" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "resolvedAt" TIMESTAMP(3),

    CONSTRAINT "Dispute_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "targetUserId" TEXT,
    "productId" TEXT,
    "type" "ReviewType" NOT NULL,
    "rating" INTEGER NOT NULL,
    "title" TEXT,
    "comment" TEXT NOT NULL,
    "isVerifiedPurchase" BOOLEAN NOT NULL DEFAULT false,
    "isVisible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "link" TEXT,
    "metadata" JSONB,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "readAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Audit" (
    "id" TEXT NOT NULL,
    "dealId" TEXT,
    "userId" TEXT,
    "type" "AuditType" NOT NULL,
    "status" "AuditStatus" NOT NULL DEFAULT 'PENDING',
    "flags" TEXT[],
    "priority" TEXT NOT NULL,
    "findings" TEXT,
    "actions" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "DeveloperApplication_email_idx" ON "DeveloperApplication"("email");

-- CreateIndex
CREATE INDEX "DeveloperApplication_status_idx" ON "DeveloperApplication"("status");

-- CreateIndex
CREATE INDEX "DeveloperApplication_createdAt_idx" ON "DeveloperApplication"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_inn_key" ON "User"("inn");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- CreateIndex
CREATE INDEX "User_reputation_idx" ON "User"("reputation");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_developerId_idx" ON "Product"("developerId");

-- CreateIndex
CREATE INDEX "Product_status_idx" ON "Product"("status");

-- CreateIndex
CREATE INDEX "Product_category_idx" ON "Product"("category");

-- CreateIndex
CREATE INDEX "Product_slug_idx" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Deal_buyerId_idx" ON "Deal"("buyerId");

-- CreateIndex
CREATE INDEX "Deal_developerId_idx" ON "Deal"("developerId");

-- CreateIndex
CREATE INDEX "Deal_productId_idx" ON "Deal"("productId");

-- CreateIndex
CREATE INDEX "Deal_status_idx" ON "Deal"("status");

-- CreateIndex
CREATE UNIQUE INDEX "Contract_dealId_key" ON "Contract"("dealId");

-- CreateIndex
CREATE INDEX "Contract_dealId_idx" ON "Contract"("dealId");

-- CreateIndex
CREATE INDEX "Contract_status_idx" ON "Contract"("status");

-- CreateIndex
CREATE INDEX "Transaction_dealId_idx" ON "Transaction"("dealId");

-- CreateIndex
CREATE INDEX "Transaction_status_idx" ON "Transaction"("status");

-- CreateIndex
CREATE INDEX "Transaction_type_idx" ON "Transaction"("type");

-- CreateIndex
CREATE INDEX "RevenueReport_dealId_idx" ON "RevenueReport"("dealId");

-- CreateIndex
CREATE INDEX "RevenueReport_status_idx" ON "RevenueReport"("status");

-- CreateIndex
CREATE INDEX "RevenueReport_month_idx" ON "RevenueReport"("month");

-- CreateIndex
CREATE UNIQUE INDEX "RevenueReport_dealId_month_key" ON "RevenueReport"("dealId", "month");

-- CreateIndex
CREATE INDEX "Dispute_dealId_idx" ON "Dispute"("dealId");

-- CreateIndex
CREATE INDEX "Dispute_initiatedBy_idx" ON "Dispute"("initiatedBy");

-- CreateIndex
CREATE INDEX "Dispute_status_idx" ON "Dispute"("status");

-- CreateIndex
CREATE INDEX "Review_authorId_idx" ON "Review"("authorId");

-- CreateIndex
CREATE INDEX "Review_targetUserId_idx" ON "Review"("targetUserId");

-- CreateIndex
CREATE INDEX "Review_productId_idx" ON "Review"("productId");

-- CreateIndex
CREATE INDEX "Notification_userId_idx" ON "Notification"("userId");

-- CreateIndex
CREATE INDEX "Notification_isRead_idx" ON "Notification"("isRead");

-- CreateIndex
CREATE INDEX "Audit_dealId_idx" ON "Audit"("dealId");

-- CreateIndex
CREATE INDEX "Audit_userId_idx" ON "Audit"("userId");

-- CreateIndex
CREATE INDEX "Audit_status_idx" ON "Audit"("status");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_buyerId_fkey" FOREIGN KEY ("buyerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Deal" ADD CONSTRAINT "Deal_developerId_fkey" FOREIGN KEY ("developerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RevenueReport" ADD CONSTRAINT "RevenueReport_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispute" ADD CONSTRAINT "Dispute_dealId_fkey" FOREIGN KEY ("dealId") REFERENCES "Deal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Dispute" ADD CONSTRAINT "Dispute_initiatedBy_fkey" FOREIGN KEY ("initiatedBy") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_targetUserId_fkey" FOREIGN KEY ("targetUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
