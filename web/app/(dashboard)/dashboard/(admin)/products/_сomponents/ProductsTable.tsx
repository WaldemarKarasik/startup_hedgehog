"use client";
import {
  UpdateProductFields,
  useDeleteProduct,
  useProducts,
  useUpdateProduct,
} from "@/src/hooks/products";
import { GetCatalogSuccess } from "@/src/lib/api-client";
import { revalidate } from "@/src/lib/revalidate";
import { REVALIDATE_TYPES } from "@/src/types";
import { useQuery } from "@tanstack/react-query";
import { Check, Trash, X } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { PRODUCT_STATUS } from "shared";

export const ProductsTable = ({
  products,
}: {
  products: GetCatalogSuccess["data"];
}) => {
  const { data, isPending } = useProducts({
    filters: {},
    initialData: products,
  });
  const { mutate: updateProduct, isPending: isUpdatingProduct } =
    useUpdateProduct();
  const { mutate: deleteProduct } = useDeleteProduct();
  function handleApproveClick(
    product: GetCatalogSuccess["data"][number]
  ): void {
    updateProduct({
      productId: product.id,
      field: UpdateProductFields.status,
      fieldValue: PRODUCT_STATUS.ACTIVE,
    });
    revalidate({ type: REVALIDATE_TYPES.TAG, tag: "products" });
  }

  function handleRejectClick(product: GetCatalogSuccess["data"][number]) {
    updateProduct({
      productId: product.id,
      field: UpdateProductFields.status,
      fieldValue: PRODUCT_STATUS.REJECTED,
    });
  }
  function handleDeleteClick(product: GetCatalogSuccess["data"][number]) {
    deleteProduct({ productId: product.id });
    revalidate({ type: REVALIDATE_TYPES.TAG, tag: "products" });
  }
  return (
    <DataTable value={data} showGridlines>
      <Column header="Название" field="name" />
      <Column header="Статус" field="status" />
      <Column
        header="Разработчик"
        body={(rowData) =>
          `${rowData.developer.firstName} ${rowData.developer.lastName}`
        }
      />
      <Column header="Стоимость кастомизации" field="customizationPrice" />
      <Column header="Revenue Share " field="revenueShare" />

      <Column
        header="Действия"
        body={(product: GetCatalogSuccess["data"][number]) => (
          <div className="flex items-center gap-5">
            {product.status == PRODUCT_STATUS.MODERATION ? (
              <>
                <Button
                  icon={<Check />}
                  rounded
                  className="bg-green-500"
                  tooltip="Одобрить"
                  onClick={() => handleApproveClick(product)}
                  tooltipOptions={{ position: "top" }}
                />
                <Button
                  icon={<X />}
                  rounded
                  severity={"danger"}
                  onClick={() => handleRejectClick(product)}
                  tooltip="Отклонить"
                  tooltipOptions={{ position: "top" }}
                />
              </>
            ) : (
              <Button
                icon={<Trash />}
                rounded
                severity="danger"
                tooltip="Удалить"
                onClick={() => handleDeleteClick(product)}
                tooltipOptions={{ position: "top" }}
              />
            )}
          </div>
        )}
      />
    </DataTable>
  );
};
