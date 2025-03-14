import type { Metadata } from "next";
import localFont from "next/font/local";

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
  description:
    "A silly bit of bingo for any event you (No) Money in the Bank have aligned themselves with.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "(No) Money in the Bank Bingo",
    description:
      "A silly bit of bingo for any event you (No) Money in the Bank have aligned themselves with.",
    url: "https://nomoneyinthebank.com",
    siteName: "(No) Money in the Bank",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "(No) Money in the Bank logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "(No) Money in the Bank Bingo",
    description:
      "A silly bit of bingo for any event you (No) Money in the Bank have aligned themselves with.",
    creator: "(No) Money in the Bank",
    images: {
      url: "/og-image.png",
      alt: "(No) Money in the Bank logo",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${specialElite.variable} ${bahiamita.variable} ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
