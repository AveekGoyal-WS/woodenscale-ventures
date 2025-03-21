import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WoodenScale Ventures | Transform Ideas Into Successful Startups",
  description: "Empowering aspiring founders with knowledge, tools, and community to transform ideas into successful startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-primary-900 text-text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
