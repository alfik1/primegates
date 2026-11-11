import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Prime Gate General Trading FZE LLC | Premium trading partner for Saudi Arabia and the GCC",
  description:
    "Prime Gate General Trading supplies electronics, food and beverages, cosmetics, auto spare parts, office furniture and more to Saudi Arabia and the GCC.",
  icons: { icon: "/primelogo.jpeg" },
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