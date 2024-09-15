import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Theo SEO Event",
  icons: [{ url: "/favicon.png" }],
};

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>{children}</body>
    </html>
  );
}
