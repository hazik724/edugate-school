import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ GLOBAL SEO (APPLIES TO WHOLE SITE)
export const metadata: Metadata = {
  metadataBase: new URL("https://the-edugate-school.vercel.app"),
  title: {
    default: "The Edugate School | Best School in Mirpurkhas",
    template: "%s | The Edugate School",
  },
  description:
    "The Edugate School is a leading school in Mirpurkhas providing quality education, experienced teachers, and a strong academic environment for students.",
  keywords: [
    "The Edugate School",
    "Best school in Mirpurkhas",
    "Private school in Mirpurkhas",
    "English medium school in Mirpurkhas",
    "Top school in Mirpurkhas",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "The Edugate School" }],
  creator: "The Edugate School",
  openGraph: {
    title: "The Edugate School | Best School in Mirpurkhas",
    description:
      "Join The Edugate School in Mirpurkhas for quality education and a brighter future.",
    url: "https://the-edugate-school.vercel.app",
    siteName: "The Edugate School",
    locale: "en_PK",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className="min-h-screen flex flex-col">
        <LayoutWrapper>
          <main className="flex-1">{children}</main>
        </LayoutWrapper>
      </body>
    </html>
  );
}