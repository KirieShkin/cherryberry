import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cherry Berry — 3D-конструктор одежды",
  description: "Персональная одежда по цифровому аватару: 3D-сканирование, дизайн и AR-примерка.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
