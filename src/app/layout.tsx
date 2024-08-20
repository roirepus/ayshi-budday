import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ayshi's budday",
  description: "website to wish aysh birthday",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="../../src/images/favicon-16x16.png"/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
