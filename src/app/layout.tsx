"use client"

import type React from "react"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isLoading, setIsLoading] = useState(true);
  
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Kelson Vincien</title>
        <meta name="description" content="Portfolio of Kelson Vincien, Data Analyst and Python & SQL Developer" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <AnimatePresence 
          mode="wait"
          onExitComplete={() => setIsAnimationComplete(true)}
        >
          {isLoading && <Preloader />}
        </AnimatePresence>
        
        {isAnimationComplete && children}
      </body>
    </html>
  );
}