/**
 * Shared types для monorepo
 * Дублируем из server чтобы избежать circular dependencies
 */

export interface DeveloperApplicationForm {
  name: string;
  email: string;
  telegram: string;
  productName: string;
  productDescription: string;
  customizationPrice: number;
  revenueSharePercent: string;
  githubUrl: string;
  demoUrl: string;
  videoUrl: string;
  hasUsers: string;
  userCount?: string;
  customizationReady: string;
  targetBusinesses: string;
  portfolio?: string;
  additionalInfo?: string;
}
