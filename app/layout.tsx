import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavBar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arctic Base – Student-powered Web Development",
  description:
    "Affordable websites built by students. No drama, just clean code and good design.",
  keywords: [
    "web development",
    "student agency",
    "Arctic Base",
    "freelance devs",
    "Next.js",
    "Tailwind",
  ],
  authors: [{ name: "Arctic Base Team", url: "https://arcticbase.tech" }],
  robots: "index, follow",
  openGraph: {
    title: "Arctic Base – Web Dev Without the Corporate Nonsense",
    description:
      "We build clean, fast websites at chai-level pricing. Built by students, loved by clients.",
    url: "https://arcticbase.tech",
    siteName: "Arctic Base",
    images: [
      {
        url: "https://arcticbase.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arctic Base Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arctic Base – Student-led Web Agency",
    description:
      "Affordable, fast, and drama-free websites built by skilled student devs.",
    images: ["https://arcticbase.tech/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
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
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
