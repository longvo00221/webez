import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wezb",
  description: "Build your own website with Wezb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
