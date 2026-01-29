import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keittisak Phasomsap - AI Developer & Web3 Expert",
  description: "Portfolio of Keittisak Phasomsap - AI Developer, Web3 Solana Expert, Game Developer & Udemy Instructor. 5+ years experience in software development, AI platforms, and blockchain solutions.",
  keywords: ["AI Developer", "Web3", "Solana", "Game Developer", "Udemy Instructor", "Next.js", "TypeScript", "Blockchain"],
  authors: [{ name: "Keittisak Phasomsap" }],
  creator: "Keittisak Phasomsap",
  icons: {
    icon: [
      { url: '/icons/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    shortcut: '/icons/icon.png',
    apple: '/icons/icon.png',
  },
  openGraph: {
    title: "Keittisak Phasomsap - AI Developer & Web3 Expert",
    description: "Portfolio showcasing AI platforms, Web3 projects, games, and educational content",
    url: "https://emspace.dev",
    siteName: "KM Dev Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/icons/icon.png',
        width: 1200,
        height: 630,
        alt: 'KM Dev Portfolio',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keittisak Phasomsap - AI Developer & Web3 Expert",
    description: "Portfolio showcasing AI platforms, Web3 projects, games, and educational content",
    images: ['/icons/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://emspace.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" href="/icons/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/icons/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KM Dev" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
