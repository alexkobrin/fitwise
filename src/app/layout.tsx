import type { Metadata } from "next";
 

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/providers/convexClerkProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitwise: Your Digital Fitness Partner",
  description: "Empower your fitness journey with digital precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ConvexClientProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar/>
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
          <div className="absolute inset-0 bg-[linear-gradient(var(--cyber-grid-color,rgba(0,0,0,0.05))_1px,transparent_1px),linear-gradient(90deg,var(--cyber-grid-color,rgba(0,0,0,0.05))_1px,transparent_1px)] bg-[size:24px_24px] opacity-80"></div>
        </div>
      <main className=" flex-grow pt-24">
      {children}

      </main>
        <Footer/>
      </body>
    </html>
     </ConvexClientProvider>
  );
}
