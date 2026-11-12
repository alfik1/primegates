import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/config";

const title = "Prime Gate General Trading FZE LLC | Premium trading partner for the UAE and the GCC";
const description =
  "Prime Gate General Trading supplies electronics, food and beverages, cosmetics, auto spare parts, office furniture and more to the UAE and the GCC.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/primelogo.jpeg" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Prime Gate General Trading",
    images: [{ url: "/primelogo.jpeg" }],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}