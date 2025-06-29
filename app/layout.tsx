import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arcticbase – Student Team for Web Development & Design",
  description:
    "Arcticbase is a student-led team offering affordable, professional web development, design, and branding services. No hierarchy, just trust, teamwork, and great results.",
  keywords: [
    "ArcticBase",
    "student developers",
    "web development team",
    "affordable design services",
    "Next.js developers",
    "UI UX student team",
    "freelance student devs",
    "affordable website design",
    "branding services by students",
    "creative student agency",
  ],
  authors: [{ name: "Ronit Kaushal", url: "https://arcticbase.tech" }],
  creator: "Ronit Kaushal",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Arctic Base – Student Team for Web Development & Design",
    description:
      "We’re a group of passionate students building high-quality websites, branding, and UI/UX—without the agency price tag.",
    url: "https://arctic-base.vercel.app",
    siteName: "Arctic Base",
    images: [
      {
        url: "https://arctic-base.vercel.app/og-image.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Arctic Base Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcticbase – Student Team for Web Development & Design",
    description:
      "Affordable, high-quality web and design services by students. We create clean, fast, and modern websites with passion.",
    images: ["https://arctic-base.vercel.app/og-image.jpg"],
  },
  metadataBase: new URL("https://arctic-base.vercel.app"),
};

export const runtime = "edge";

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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
