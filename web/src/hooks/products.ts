import { useMutation, useQuery } from "@tanstack/react-query";
import {
  API_URL,
  apiClient,
  GetCatalog,
  GetCatalogSuccess,
  GetDeveloperProductsSuccess,
  GetProduct,
} from "../lib/api-client";

export const useDeveloperProducts = ({
  developerId,
  cacheKey,
  initialData,
}: {
  developerId: string;
  cacheKey: string[];
  initialData?: GetDeveloperProductsSuccess["data"];
}) => {
  return useQuery({
    queryKey: cacheKey,
    queryFn: async () => fetchDeveloperProducts(developerId),
    ...(initialData && { initialData, refetchOnMount: false }),
  });
};

export const fetchDeveloperProducts = async (developerId: string) => {
  // const products = await apiClient.api.product.list[":developerId"].$get({
  //   param: { developerId },
  // });
  const products = await fetch(`${API_URL}/api/product/list/${developerId}`, {
    method: "GET",
    next: {
      revalidate: 300,
      tags: ["developer-products"],
    },
  });
  const productsRes = await products.json();
  if (!productsRes.success) {
    throw new Error(productsRes.error);
  }
  return productsRes.data as GetDeveloperProductsSuccess["data"];
};

export const useCreateProduct = (onSuccess?: (data: any) => any) => {
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
    ...(onSuccess && { onSuccess }),
  });
};
export const useDeleteProduct = (onSuccess?: (data: any) => any) => {
  return useMutation({
    mutationFn: async (input: { developerId: string; productId: string }) => {
      const deleteProduct = await fetch(
        `${API_URL}/api/product/delete/${input.developerId}/${input.productId}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      const deleteProductRes = await deleteProduct.json();
      if (!deleteProductRes.success) {
        throw new Error(deleteProductRes.error);
      }
      return deleteProductRes;
    },
    ...(onSuccess && { onSuccess }),
  });
};

export const useCatalog = ({
  cacheKey,
  initialData,
}: {
  cacheKey: string[];
  initialData?: GetCatalogSuccess["data"];
}) => {
  return useQuery({
    queryKey: cacheKey,
    queryFn: () => fetchCatalog(),
    ...(initialData && { initialData, refetchOnMount: false }),
  });
};

export const fetchCatalog = async () => {
  const catalog = await fetch(
    `${API_URL}/api/product/list?status=MODERATION&operator=NOT`,
    {
      method: "GET",
      next: {
        revalidate: 1000,
        tags: ["catalog"],
      },
    }
  );
  const catalogRes: GetCatalog = await catalog.json();
  if (!catalogRes.success) {
    throw new Error(catalogRes.error);
  }
  return catalogRes.data;
};

export const fetchProduct = async (productId: string) => {
  const product = await fetch(`${API_URL}/api/product/${productId}`, {
    method: "GET",
    next: { revalidate: 1000, tags: [`product-${productId}`] },
  });
  const productRes: GetProduct = await product.json();
  if (!productRes.success) {
    throw new Error(productRes.error);
  }
  return productRes.data;
};
