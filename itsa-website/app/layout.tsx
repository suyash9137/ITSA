import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://itsa-pvppcoe.vercel.app"),
  title: {
    default: "ITSA — Information Technology Student Association, PVPPCOE",
    template: "%s — ITSA PVPPCOE",
  },
  description:
    "ITSA is the Information Technology Student Association of PVPPCOE, Sion — running hackathons, developer workshops, faculty mentorship, and design-systems initiatives for 300+ student members.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "ITSA — Information Technology Student Association, PVPPCOE",
    description:
      "Hackathons, developer workshops, mentorship, and design systems — run by the IT students of PVPPCOE, Sion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
