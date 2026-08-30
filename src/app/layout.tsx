import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { PageIntro } from "@/components/ui/PageIntro";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio-manav-surani.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manav Surani | Full-Stack Software Engineer & AI Integrator",
  description:
    "Portfolio of Manav Surani — MSc IT Scholar & Full-Stack Software Engineer specializing in Next.js, Python, FastAPI, and autonomous AI pipelines. Based in Surat, Gujarat.",
  keywords: [
    "Manav Surani",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "Python Developer",
    "AI Developer",
    "FastAPI",
    "React Developer",
    "MSc IT",
    "Surat Developer",
    "Portfolio",
    "PNP CRM",
    "FinTeam",
  ],
  authors: [{ name: "Manav Surani", url: siteUrl }],
  creator: "Manav Surani",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Manav Surani | Full-Stack Software Engineer & AI Integrator",
    description:
      "MSc IT Scholar & Full-Stack Engineer — Next.js, Python, FastAPI & autonomous AI pipelines. 6+ production apps. Open to Software Engineering roles.",
    siteName: "Manav Surani Portfolio",
    images: [
      {
        url: "/images/profile_suite.png",
        width: 1200,
        height: 630,
        alt: "Manav Surani - Full-Stack Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Surani | Full-Stack Software Engineer & AI Integrator",
    description:
      "MSc IT Scholar & Full-Stack Engineer — Next.js, Python, FastAPI & autonomous AI pipelines. 6+ production apps.",
    images: ["/images/profile_suite.png"],
    creator: "@ManavSurani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground selection:bg-navy-DEFAULT/15 selection:text-navy-DEFAULT`}>
        <MotionConfig reducedMotion="user">
          {/* C1 — Branded load-in wipe: once per session via sessionStorage */}
          <PageIntro />
          {/* 1.2 — Scroll progress bar: fixed top, z-[60], above navbar */}
          <ScrollProgress />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
