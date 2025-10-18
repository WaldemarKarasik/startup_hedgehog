import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../(landing)/_components/Header";
import Footer from "../(landing)/_components/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "StartupЁж - Биржа стартапов с Revenue Share",
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
        <div className="min-h-screen flex flex-col ">
          <Header />
          <main className="mt-20 flex-1 h-full flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
