import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import FooterNav from "@/components/layout/FooterNav";
import SplashWrapper from "@/components/layout/SplashWrapper";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Imoni - Le site de rencontre immobilier",
  description:
    "Imoni connecte vendeurs, acquéreurs et professionnels dans un écosystème intelligent, neutre et sécurisé.",
  keywords:
    "immobilier, achat, vente, agence immobilière, application immobilière, coach vocal IA",
  openGraph: {
    title: "Imoni - Le site de rencontre immobilier",
    description:
      "Imoni connecte vendeurs, acquéreurs et professionnels dans un écosystème intelligent, neutre et sécurisé.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white overflow-x-hidden">
        <SplashWrapper />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <FooterNav />
      </body>
    </html>
  );
}
