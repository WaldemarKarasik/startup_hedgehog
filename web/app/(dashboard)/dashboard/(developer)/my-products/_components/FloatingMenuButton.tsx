"use client";
import { Plus } from "lucide-react";
import { MenuItem } from "primereact/menuitem";
import { SpeedDial } from "primereact/speeddial";
import { Tooltip } from "primereact/tooltip";

export const FloatingMenuButton = ({
  onCreateClick,
}: {
  onCreateClick: () => void;
}) => {
  const items: MenuItem[] = [
    {
      label: "Добавить новый продукт",
      icon: <Plus size={30} />,

      command: () => onCreateClick(),
    },
  ];
  return (
    <>
      <Tooltip
        target=".speeddial-bottom-right .p-speeddial-action"
        position="left"
      />
      <SpeedDial
        model={items}
        direction="up"
        className="speeddial-bottom-right right-20 bottom-20"
        buttonClassName="p-button-primary"
      />
    </>
  );
};
