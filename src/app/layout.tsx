import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

const headingFont = localFont({
  src: "./fonts/NeulisAlt-Bold.woff2",
  variable: "--font-heading",
  weight: "700",
});

export const metadata: Metadata = {
  title: "Theo SEO Event",
  icons: [{ url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          fontSans.variable,
          headingFont.variable,
          "font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
