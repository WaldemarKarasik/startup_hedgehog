import type { Metadata } from "next";
import QueryProvider from "@/src/lib/TanstackQueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "StartAppЁж - Платформа для продажи IT-решений",
  description: "Покупай и продавай готовые IT-решения с Revenue Share моделью",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
