"use client";
import { Button } from "primereact/button";

export const BuyerActions = () => {
  const handleBuyCustomizationClick = () => {};

  return (
    <div className="grid md:grid-cols-2 justify-stretch gap-x-10 gap-y-5">
      <Button
        label="Заказать кастомизацию"
        icon="pi pi-shopping-cart"
        onClick={handleBuyCustomizationClick}
        className="hover:scale-102 duration-500 ease-in-out transition-transform"
        size="large"
      />
      <Button
        label="Обсудить условия"
        icon="pi pi-book"
        className="p-button-outlined flex-1"
        size="large"
      />
    </div>
  );
};
