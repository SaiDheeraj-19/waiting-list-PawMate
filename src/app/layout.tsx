import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FreeOfferBanner } from "@/components/layout/FreeOfferBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PawMate · Digital Curator for Pets",
  description:
    "Join the waitlist for PawMate, the premier social club for the furry, feathered, and scaled.",
  keywords: "pet matchmaking, dog playdates, pet breeding, animal community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen font-plus-jakarta bg-[#faf8f4] text-[#1c1c1e]">
        <BackgroundPattern />
        <FreeOfferBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
