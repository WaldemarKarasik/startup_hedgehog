import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../lib/api-client";
import { useRouter } from "next/navigation";

export const useDeveloperProducts = ({
  developerId,
  cacheKey,
}: {
  developerId: string;
  cacheKey: [];
}) => {
  return;
};

export const useCreateProduct = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (formData: FormData) => {
      const newProduct = await fetch(`${API_URL}/api/product/create`, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const newProductRes = await newProduct.json();
      if (!newProductRes.success) {
        throw new Error(newProductRes.error);
      }
      return newProductRes;
    },
    onSuccess: () => {
      router.push("/dashboard/my-products");
    },
  });
};
