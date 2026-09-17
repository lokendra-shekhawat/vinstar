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
  title: "Vinstar IDV | Simple, Automated Identity Verification & Video KYC",
  description:
    "Vinstar is an automated, enterprise-grade Identity Verification platform featuring AI Document Forensics, ISO 30107-3 Biometric Liveness, Dynamic Action Challenges, and Live Video KYC.",
  keywords: [
    "Vinstar",
    "Vinstar IDV",
    "Identity Verification",
    "Video KYC",
    "Document Authentication",
    "Liveness Detection",
    "Biometric Face Match",
    "Automated KYC",
    "KYC Orchestration",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAFC] text-slate-900 font-sans selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
