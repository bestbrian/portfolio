import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/nav";
import { siteConfig } from "./config/site";
import localFont from "@next/font/local";
import { IBM_Plex_Mono } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
const mono = IBM_Plex_Mono({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-mono",
});

const subway = localFont({
  src: [
    {
      path: "../public/fonts/TorontoSubway/Toronto-Subway-W01-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-subway",
  preload: true,
});
const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/fonts/Satoshi/Satoshi-Black.otf",
      weight: "900",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "shadcn",
      url: "https://shadcn.com",
    },
  ],
  creator: "shadcn",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${subway.variable} ${satoshi.variable} ${mono.variable} px-4 md:px-0`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <Nav />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
