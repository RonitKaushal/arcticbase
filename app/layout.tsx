import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { Analytics } from "@vercel/analytics/next";

import { Toaster } from 'sonner';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ArcticBase – Creative & Digital Agency | Web, Design & WhatsApp",
  description:
    "Arctic Base is a creative and digital agency in Ahmedabad offering web development, design, branding, and official WhatsApp business messaging through Meta's APIs.",
  keywords: [
    "Arctic Base",
    "creative agency Ahmedabad",
    "web development",
    "UI UX design",
    "branding",
    "WhatsApp Business API",
    "WhatsApp Cloud API",
    "business messaging",
    "digital agency India",
  ],
  authors: [{ name: "Ronit Kaushal", url: "https://arcticbase.tech" }],
  creator: "Ronit Kaushal",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "ArcticBase – Creative & Digital Agency | Web, Design & WhatsApp",
    description:
      "Web, design, branding, and official WhatsApp business communication for companies—based in Ahmedabad, India.",
    url: "https://arcticbase.tech",
    siteName: "ArcticBase",
    images: [
      {
        url: "https://arcticbase.tech/preview.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "ArcticBase Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArcticBase – Creative & Digital Agency",
    description:
      "Web development, design, branding, and WhatsApp business messaging through Meta official APIs.",
    images: ["https://arcticbase.tech/preview.jpg"],
  },
  metadataBase: new URL("https://arcticbase.tech"),
};

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <Analytics />
          <Toaster richColors position="top-right" />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
