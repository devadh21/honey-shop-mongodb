"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@compo/footer/Footer";
import Navbar from "@compo/header/Navbar";

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "next-themes";
import ClientOnly from "@/components/header/ClientOnly"; ////  For eliminates the hydration error.

import { SessionProvider } from "next-auth/react";


const roboto = Roboto({ subsets: ["latin"], weight: "400" }); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className=" scroll-smooth text-sm "
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <title>Bee Honey</title>
        <meta name="description" content="Bee Honey Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className={`  ${roboto.className} `}>
        <SessionProvider>
          <CartProvider>
            <ClientOnly>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem={false}
            >
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
            </ClientOnly>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
