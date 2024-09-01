import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Toaster } from 'sonner';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AnimatedCursor } from "@/components/AnimatedCursor";


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
    <html lang="en">
      <body className={inter.className}>
        <main className=" dark:bg-black bg-white dark:bg-grid-small-white/[0.3] sm:dark:bg-grid-white/[0.1] bg-grid-black/[0.1]">
          <Navbar />
          <AnimatedCursor />
          {children}
          <SpeedInsights />
        </main>
        </body>
    </html>
  );
}
