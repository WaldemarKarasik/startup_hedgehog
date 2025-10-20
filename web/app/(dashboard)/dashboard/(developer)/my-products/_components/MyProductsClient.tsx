"use client";
import { useEffect, useState } from "react";
import { FloatingMenuButton } from "./FloatingMenuButton";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

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
          <div className="flex flex-col min-w-[90vw] md:min-w-[30vw] min-h-[60vh] md:min-h-[30vh] px-8 py-5 gap-4 bg-white rounded-xl">
            {/* Main content */}
            <div className="flex-1">
              <h3 className="text-2xl">Добавьте новый продукт</h3>
            </div>
            {/* Dialog actions */}
            <div className="flex gap-5">
              <Button label="Добавить" />
              <Button label="Закрыть" severity={"secondary"} onClick={hide} />
            </div>
          </div>
        )}
      />
      <FloatingMenuButton onCreateClick={() => setVisible(true)} />
    </div>
  );
};
