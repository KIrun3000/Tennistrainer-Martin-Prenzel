import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Prenzel – Tennistraining in Bad Brückenau",
  description:
    "Professionelles Tennistraining für Kinder, Jugendliche und Erwachsene in Bad Brückenau. Einzeltraining, Gruppentraining und Probestunden bei Tennistrainer Martin Prenzel.",
  keywords: [
    "Tennistrainer",
    "Bad Brückenau",
    "Tennistraining",
    "Einzeltraining",
    "Gruppentraining",
    "Martin Prenzel",
  ],
  openGraph: {
    title: "Martin Prenzel – Tennistraining in Bad Brückenau",
    description:
      "Professionelles Tennistraining für alle Altersgruppen und Spielstärken.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
