import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../styles/globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "azael.dev",
  description: "Portafolio de desarrollador frontend desarrollado con Nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Nav />
        <main className="mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
