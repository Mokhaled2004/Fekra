import type { Metadata } from "next";
import { Russo_One, Inter } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FEKRA — Anatomy Battle",
  description: "Fast-paced competitive upper limb anatomy card game",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${russoOne.variable} ${inter.variable}`}>
      <body className="bg-white text-gray-900 font-sans antialiased selection:bg-yellow-400 selection:text-gray-900">
        {children}
      </body>
    </html>
  );
}
