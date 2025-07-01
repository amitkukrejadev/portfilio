import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Kukreja | Frontend Developer",
  description:
    "Frontend-focused Developer with growing full-stack proficiency. Passionate about clean, functional code and delivering web solutions using modern tools and continuous learning.",
  openGraph: {
    title: "Amit Kukreja | Frontend Developer",
    description:
      "Frontend-focused Developer with growing full-stack proficiency. Passionate about clean, functional code and delivering web solutions using modern tools and continuous learning.",
    url: "https://amitkukreja.vercel.app",
    siteName: "Amit Kukreja Portfolio",
    type: "website",
    images: [
      {
        url: "https://amitkukreja.vercel.app/images/portfolio-image.png",
        width: 1200,
        height: 630,
        alt: "Amit Kukreja | Frontend Developer Portfolio",
      },
    ],
  },
  metadataBase: new URL("https://amitkukreja.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
