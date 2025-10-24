"use client";
import { GetCatalogSuccess } from "@/src/lib/api-client";
import { Check, X } from "lucide-react";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

export const ProductsTable = ({
  products,
}: {
  products: GetCatalogSuccess["data"];
}) => {
  function handleApproveClick(
    product: GetCatalogSuccess["data"][number]
  ): void {
    alert(product.name);
  }

  return (
    <DataTable value={products} showGridlines>
      <Column header="Название" field="name" />
      <Column header="Статус" field="status" />
      <Column
        header="Разработчик"
        body={(rowData) =>
          `${rowData.developer.firstName} ${rowData.developer.lastName}`
        }
      />
      <Column
        header="Действия"
        body={(product) => (
          <div className="flex items-center gap-5">
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
              tooltip="Отклонить"
              tooltipOptions={{ position: "top" }}
            />
          </div>
        )}
      />
    </DataTable>
  );
};
