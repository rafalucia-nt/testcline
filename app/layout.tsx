// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GrowthbookProvider from "@/services/growthbook/growthbook-provider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GrowthbookProvider>{children}</GrowthbookProvider>
      </body>
    </html>
  );
}
