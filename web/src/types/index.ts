import {
  GetApplications,
  GetApplicationsSuccess,
  GetMeSuccess,
} from "../lib/api-client";

export interface Startup {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: "web" | "mobile" | "saas" | "bot" | "extension";
  price: number;
  revenueShare: number; // процент для разработчика
  features: string[];
  techStack: string[];
  screenshots: string[];
  demoUrl?: string;
  developer: Developer;
  status: "active" | "sold" | "pending";
  views: number;
  likes: number;
  createdAt: string;
  monthlyRevenue?: number;
  users?: number;
}

export interface Developer {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  projectsCount: number;
  bio?: string;
}

export interface RevenueShareCalculation {
  initialInvestment: number;
  monthlyRevenue: number;
  developerShare: number;
  entrepreneurShare: number;
  breakEvenMonths: number;
  yearlyDeveloperIncome: number;
  yearlyEntrepreneurIncome: number;
}
export enum REVALIDATE_TYPES {
  PATH = "PATH",
  TAG = "TAG",
}
export type DeveloperApplication = GetApplicationsSuccess["data"][number];
