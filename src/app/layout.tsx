import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AnimatedCursor } from "@/components/AnimatedCursor";
import Projects from "@/components/Projects";


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
        <main className=" dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] w-full flex-col relative min-h-screen">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
          <Navbar />
          <AnimatedCursor />
          {children}
          <SpeedInsights />
          <Projects />
        </main>
        </body>
    </html>
  );
}
