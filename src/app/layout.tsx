import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../styles/globals.css";

import { AnimatedVerticalLine } from "@/components/widgets";
import { Nav, Footer } from "@/components/nav";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "flores.dev",
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

        <div id="contenedor">
          <AnimatedVerticalLine />
          <main className="mt-10 flex flex-col pl-8 md:pl-48 md:pr-10">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
