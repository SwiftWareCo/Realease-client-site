import type { Metadata } from "next";
import Script from "next/script";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://realease-client-site.vercel.app"),
  title: "RealEase — Your Real Estate Copilot",
  description:
    "AI-powered command center for realtors. Manage leads, automate follow-ups, close more deals.",
  icons: {
    icon: "/realease-favicon.png",
    apple: "/realease-favicon.png",
  },
  openGraph: {
    title: "RealEase — Your Real Estate Copilot",
    description:
      "AI-powered command center for realtors. Manage leads, automate follow-ups, close more deals.",
    url: "https://realease.ai",
    siteName: "RealEase",
    images: [
      {
        url: "/realease-logo.png",
        width: 1200,
        height: 630,
        alt: "RealEase Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RealEase — Your Real Estate Copilot",
    description:
      "AI-powered command center for realtors. Manage leads, automate follow-ups, close more deals.",
    images: ["/realease-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dmSans.variable}`}>
        {children}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
