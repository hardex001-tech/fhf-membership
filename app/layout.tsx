import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || "https://fhf-nigeria.org"),
  title: "Female Health Foundation (FHF) | Official NGO Registration & Member Portal",
  description: "Official membership and volunteer induction portal for the Female Health Foundation (FHF). Dedicated to eradicating period poverty through the SPPIN campaign, funding fibroid surgeries, and providing breast cancer screenings across Nigeria.",
  keywords: [
    "Female Health Foundation",
    "FHF",
    "FHF Nigeria",
    "NGO Registration",
    "SPPIN Campaign",
    "Period Poverty Nigeria",
    "Breast Cancer Screening",
    "Fibroid Surgery Grants",
    "Women Healthcare NGO",
    "Ilorin Kwara State NGO",
  ],
  authors: [{ name: "Female Health Foundation (FHF)" }],
  openGraph: {
    title: "Female Health Foundation (FHF) – National Induction Portal",
    description: "Join thousands of advocates and healthcare volunteers. Free official NGO registration with instant digital credentials and confirmation letter.",
    url: "https://fhf-nigeria.org",
    siteName: "Female Health Foundation",
    images: [
      {
        url: "/fhf-logo.png",
        width: 800,
        height: 600,
        alt: "Female Health Foundation Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  icons: {
    icon: "/fhf-logo.png",
    apple: "/fhf-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
