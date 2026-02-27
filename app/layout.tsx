import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Тара для бизнеса - продажа и доставка поддонов",
  description: "ООО «Бизнес Паллет» - поставка поддонов в Санкт-Петербурге и Ленинградской области. Евро поддоны, типовые, широкие. Доставка, выкуп.",
  keywords: "поддоны, паллеты, евро поддоны, доставка поддонов, СПб, Ленинградская область",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body style={{ fontFamily: "'Maven Pro', sans-serif" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}