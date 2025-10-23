"use client";
import { useEffect, useState } from "react";
import { FloatingMenuButton } from "./FloatingMenuButton";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { NewProductForm } from "./NewProductForm";
import { X } from "lucide-react";
import { useDeveloperProducts } from "@/src/hooks/products";
import { useAuthStore } from "@/src/stores/auth.store";
import { Skeleton } from "primereact/skeleton";
import { GetDeveloperProductsSuccess } from "@/src/lib/api-client";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { MyProductsTable } from "./MyProductsTable";
export const MyProductsClient = ({
  products,
}: {
  products: GetDeveloperProductsSuccess["data"];
}) => {
  const [visible, setVisible] = useState(false);
  const userId = useAuthStore((s) => s.user?.id);
  const {
    data: developerProducts,
    isLoading,
    isFetching,
    isRefetching,
  } = useDeveloperProducts({
    developerId: userId!,
    cacheKey: ["my-products"],
    initialData: products,
  });
  useEffect(() => {
    console.log(visible);
  }, [visible]);
  if (isLoading || isFetching || isRefetching) {
    return <Skeleton height="40" />;
  }
  return (
    <div>
      {/* New product dialog */}
      <Dialog
        modal
        visible={visible}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
        closeOnEscape
        content={({ hide }) => (
          <div className="flex flex-col w-full max-w-[95vw] sm:max-w-[80vw] md:max-w-[60vw] lg:max-w-[40vw]  px-8 py-5 gap-4 bg-white rounded-xl">
            {/* Main content */}
            <div className="flex-1">
              <div className="flex justify-between border-b-2 border-gray-300 ">
                <h3 className="text-2xl font-medium ">
                  Добавьте новый продукт
                </h3>
                <X
                  size={26}
                  className="cursor-pointer justify-self-end"
                  onClick={() => setVisible(false)}
                />
              </div>
              {/* Форма для добавления нового продукта */}
              <NewProductForm isDevelopersFirstProduct={true} />
            </div>
            {/* Dialog actions */}
            {/* <div className="flex gap-5 ">
              <Button label="Добавить" />
              <Button label="Закрыть" severity={"secondary"} onClick={hide} />
            </div> */}
          </div>
        )}
      />
      {developerProducts && (
        <MyProductsTable developerProducts={developerProducts} />
      )}

      <FloatingMenuButton onCreateClick={() => setVisible(true)} />
    </div>
  );
};
