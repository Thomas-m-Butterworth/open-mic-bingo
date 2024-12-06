import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const antonSC = localFont({
  src: "./fonts/AntonSC-Regular.ttf",
  variable: "--font-anton-sc",
  weight: "100 900",
});
const chicle = localFont({
  src: "./fonts/Chicle-Regular.ttf",
  variable: "--font-chicle",
  weight: "400",
});
const bahiamita = localFont({
  src: "./fonts/Bahianita-Regular.ttf",
  variable: "--title-font",
  weight: "400",
});
const milonga = localFont({
  src: "./fonts/Milonga-Regular.ttf",
  variable: "--font-milonga",
  weight: "400",
});
const specialElite = localFont({
  src: "./fonts/SpecialElite-Regular.ttf",
  variable: "--body-font",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Open Mic Bingo",
  description: "A silly game of bingo based on open mic comedy sets by (No) Money in the Bank.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${specialElite.variable} ${milonga.variable} ${bahiamita.variable} ${chicle.variable} ${antonSC.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
