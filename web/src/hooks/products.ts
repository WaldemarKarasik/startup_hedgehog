import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  API_URL,
  apiClient,
  GetCatalog,
  GetCatalogSuccess,
  GetDeveloperProductsSuccess,
  GetProduct,
} from "../lib/api-client";

interface ProductFilters {
  status?: string;
  operator?: "IS" | "NOT";
  orderByDate?: "asc" | "desc";
  page?: number;
  limit?: number;
  developerId?: string;
}

export enum UpdateProductFields {
  status = "status",
}
export const useProducts = ({
  filters,
  initialData,
}: {
  filters: ProductFilters;
  initialData?: GetDeveloperProductsSuccess["data"];
}) => {
  return useQuery({
    queryKey: ["products", "list", filters],
    queryFn: async () => fetchProducts(filters),
    ...(initialData && { initialData }),
  });
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: { productId: string }) => {
      const deleteProduct = await apiClient.api.product.delete[
        ":productId"
      ].$delete({ param: { productId: input.productId } });
      const deleteProductRes = await deleteProduct.json();
      if (!deleteProductRes.success) {
        throw new Error(deleteProductRes.error);
      }
      return deleteProductRes;
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
};
export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (input: {
      productId: string;
      field: UpdateProductFields;
      fieldValue: any;
    }) => {
      console.log(input);
      const product = await apiClient.api.product.update[":productId"].$patch({
        param: {
          productId: input.productId,
        },
        json: {
          field: input.field,
          fieldValue: input.fieldValue,
        },
      });
      const productRes: any = await product.json();
      if (!productRes.success) {
        throw new Error(productRes.error);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
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

export const fetchDeveloperProducts = async (developerId: string) => {
  // const products = await apiClient.api.product.list[":developerId"].$get({
  //   param: { developerId },
  // });
  const products = await fetch(`${API_URL}/api/product/list/${developerId}`, {
    method: "GET",
  });
  const productsRes = await products.json();
  if (!productsRes.success) {
    throw new Error(productsRes.error);
  }
  return productsRes.data as GetDeveloperProductsSuccess["data"];
};
export const fetchProducts = async (
  filters: ProductFilters,
  options?: RequestInit
) => {
  const params = new URLSearchParams(
    Object.entries(filters).reduce(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value);
        }
        return acc;
      },
      {} as Record<string, string>
    )
  );

  const response = await fetch(
    `${API_URL}/api/product/list?${params}`,
    options && options
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const json: GetCatalog = await response.json();

  if (!json.success) {
    throw new Error(json.error);
  }

  return json.data;
};
