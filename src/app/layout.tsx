import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "700", "900"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PawMate — Find the Perfect Match. For Your Pet.",
  description:
    "Join 12,000+ pet owners on the PawMate waitlist. The world's most beautiful pet matchmaking platform for playdates, breeding, and genuine animal friendships.",
  keywords: "pet matchmaking, dog playdates, pet social network, cat breeding, rabbit playdate",
  openGraph: {
    title: "PawMate — Pet Matchmaking Reimagined",
    description: "Join the waitlist for the world's most beautiful pet social platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${plusJakarta.variable}`} data-scroll-behavior="smooth">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
