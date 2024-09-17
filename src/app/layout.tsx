import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import "./globals.css";

const font = DM_Sans({ subsets: ["latin"] });

const headingFont = localFont({
  src: [
    { path: "./fonts/NeulisAlt-Bold.woff2", weight: "700" },
    { path: "./fonts/NeulisAlt-Medium.woff2", weight: "500" },
  ],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Theo SEO Event",
  icons: [{ url: "/favicon.png" }],
  verification: {
    google: "pXTLSSJjcflnvaRvFObF-nF8Fp_OmCUj0us6g1SO8a0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, headingFont.variable, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
