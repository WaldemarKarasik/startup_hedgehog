import { useDeleteProduct } from "@/src/hooks/products";
import { GetDeveloperProductsSuccess } from "@/src/lib/api-client";
import { revalidate } from "@/src/lib/revalidate";
import { useAuthStore } from "@/src/stores/auth.store";
import { REVALIDATE_TYPES } from "@/src/types";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { useState } from "react";
import { PRODUCT_STATUS } from "shared";

export const MyProductsTable = ({
  developerProducts,
}: {
  developerProducts: GetDeveloperProductsSuccess["data"];
}) => {
  const userId = useAuthStore((s) => s.user?.id)!;
  const { mutateAsync: deleteProduct } = useDeleteProduct();
  return (
    <DataTable value={developerProducts} showGridlines>
      <Column header="Название" field="name"></Column>
      <Column
        header="Стоимость кастомизации"
        field="customizationPrice"
      ></Column>
      <Column header="Revenue Share %" field="revenueShare"></Column>
      <Column header="Статус" field="status"></Column>
      <Column
        header="Действия"
        body={(product: GetDeveloperProductsSuccess["data"][number]) => (
          <Button
            label="Удалить"
            severity={"danger"}
            size="small"
            onClick={async () => {
              deleteProduct({ developerId: userId, productId: product.id });
              await revalidate({
                type: REVALIDATE_TYPES.PATH,
                path: "/dashboard/my-products",
              });
              if (product.status == PRODUCT_STATUS.ACTIVE) {
                await revalidate({
                  type: REVALIDATE_TYPES.PATH,
                  path: "/catalog",
                });
              }
            }}
          />
        )}
      ></Column>
    </DataTable>
  );
};
