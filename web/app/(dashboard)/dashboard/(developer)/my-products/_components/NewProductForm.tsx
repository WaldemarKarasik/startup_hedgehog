"use client";

import { useForm } from "react-hook-form";
import z from "zod";

const NewProductSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  customizationPrice: z.number().min(300000).max(450000),
  revenueShare: z.number().min(5).max(20),
  techStack: z.string().optional(),
});

type NewProductFormData = z.infer<typeof NewProductSchema>;
export const NewProductForm = () => {
  const form = useForm<NewProductFormData>();
};
