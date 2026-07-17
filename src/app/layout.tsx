import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Manav Surani | Full-Stack Software Engineer",
  description: "Portfolio of Manav Surani, a Full-Stack Software Engineer & AI Integrator specializing in Next.js, Python, and scalable databases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${spaceGrotesk.variable} ${geistMono.variable} min-h-screen flex flex-col bg-background text-foreground selection:bg-navy-DEFAULT/15 selection:text-navy-DEFAULT`}>
        {children}
      </body>
    </html>
  );
}
