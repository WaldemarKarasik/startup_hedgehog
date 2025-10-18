import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../(landing)/_components/Header";
import Footer from "../(landing)/_components/Footer";
import "../globals.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "StartAppЁж - Биржа стартапов с Revenue Share",
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
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-primary-50/20 to-gray-50">
          <Header />
          <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
            <div className="w-full max-w-7xl">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
