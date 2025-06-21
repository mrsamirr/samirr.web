import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AnimatedCursor } from "@/components/ui/AnimatedCursor";
import { Contact, Footer } from "@/components";
import { ViewTransitions } from 'next-view-transitions';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Samer Ansari",
  description: "A Full Stack developer based on Kolkata, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
    <html lang="en">
      <body className={inter.className}>
        <main className=" w-full flex-col min-h-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Navbar />
          <AnimatedCursor />
          {children}
          <SpeedInsights />
          <Analytics />
          <Contact />
          <Footer />
        </main>
        </body>
    </html>
    </ViewTransitions>
  );
}
