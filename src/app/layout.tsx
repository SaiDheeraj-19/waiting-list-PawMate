import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { FreeOfferBanner } from "@/components/layout/FreeOfferBanner";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundPattern } from "@/components/layout/BackgroundPattern";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "PawMate · Find the perfect match for your pet",
  description:
    "Join the waitlist for PawMate, the first social matchmaking app built for pet playdates, breeding, and local animal friendships.",
  keywords: "pet matchmaking, dog playdates, pet breeding, animal community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable, dmSans.variable, "font-sans", geist.variable)}>
      <body className="antialiased min-h-screen">
        <BackgroundPattern />
        <FreeOfferBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
