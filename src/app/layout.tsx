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
const bahiamita = localFont({
  src: "./fonts/Bahianita-Regular.ttf",
  variable: "--title-font",
  weight: "400",
});
const specialElite = localFont({
  src: "./fonts/SpecialElite-Regular.ttf",
  variable: "--body-font",
  weight: "400",
});
const urbanist = localFont({
  src: "./fonts/Urbanist-SemiBold.ttf",
  variable: "--button-font",
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
      <body className={`${urbanist.variable} ${specialElite.variable} ${bahiamita.variable} ${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
