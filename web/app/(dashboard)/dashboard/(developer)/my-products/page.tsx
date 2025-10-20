import { Edit } from "lucide-react";
import { MenuItem } from "primereact/menuitem";
import { SpeedDial } from "primereact/speeddial";
import { FloatingMenuButton } from "./_components/FloatingMenuButton";

export default function MyProductsPage() {
  const items: MenuItem[] = [
    {
      label: "Создать",
      icon: <Edit />,
      command: () => {},
    },
  ];
  return (
    <div>
      my products <FloatingMenuButton />
    </div>
  );
}
