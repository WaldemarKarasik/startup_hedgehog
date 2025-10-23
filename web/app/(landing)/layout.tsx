import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "StartAppЁж - Биржа готовых IT решений с Revenue Share",
  description:
    "Найдите готовый стартап или продайте свой проект на выгодных условиях. Revenue Share модель для долгосрочного партнёрства.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
