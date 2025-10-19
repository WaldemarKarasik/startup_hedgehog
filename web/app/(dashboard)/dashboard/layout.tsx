import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";
import DashboardLayout from "./_components/DashboardLayout";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Панель управления | StartAppЁж",
  robots: {
    follow: false,
    index: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <DashboardLayout>{children}</DashboardLayout>
      </body>
    </html>
  );
}
