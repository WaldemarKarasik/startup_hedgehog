import { useMutation, useQuery } from "@tanstack/react-query";
import {
  API_URL,
  apiClient,
  GetDeveloperProductsSuccess,
} from "../lib/api-client";
import { useRouter } from "next/navigation";

export const useDeveloperProducts = ({
  developerId,
  cacheKey,
}: {
  developerId: string;
  cacheKey: string[];
}) => {
  return useQuery({
    queryKey: cacheKey,
    queryFn: async () => {
      const products = await apiClient.api.product.list.$get({
        query: { developerId },
      });
      const productsRes = await products.json();
      if (!productsRes.success) {
        throw new Error(productsRes.error);
      }
      return productsRes as GetDeveloperProductsSuccess;
    },
    staleTime: 0,
  });
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
