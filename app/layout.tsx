import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nezih | Software Engineer",
  description: "Personal portfolio of a Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} font-body antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground min-h-screen`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
