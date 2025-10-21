"use client";
import { useEffect, useState } from "react";
import { FloatingMenuButton } from "./FloatingMenuButton";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { NewProductForm } from "./NewProductForm";
import { X } from "lucide-react";

export const MyProductsClient = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    console.log(visible);
  }, [visible]);
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
      <FloatingMenuButton onCreateClick={() => setVisible(true)} />
    </div>
  );
};
