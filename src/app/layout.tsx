// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ScaleUpward — AI-Powered Marketing That Grows Businesses",
  description:
    "We use cutting-edge AI to build marketing systems that generate content, run campaigns, and grow revenue — on autopilot. More output. Less overhead. Better results.",
  keywords: [
    "AI marketing agency",
    "AI advertising",
    "short form video marketing",
    "TikTok marketing agency",
    "SEO agency Australia",
    "paid ads agency",
    "AI content marketing",
    "scale business",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
