import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import { profile } from "@/lib/data";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: `${profile.name} — Frontend Engineer`,
  description: profile.tagline,
  keywords: [
    "Fatin Noor Anik",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "UI Engineer",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Frontend Engineer`,
    description: profile.tagline,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
