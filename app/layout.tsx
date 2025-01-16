import * as amplitude from "@amplitude/analytics-browser";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";
import { Nav } from "@/components/nav";
import { siteConfig } from "./config/site";
import localFont from "@next/font/local";
import { Inter } from "next/font/google";
import { IBM_Plex_Mono } from "@next/font/google";
import { useQueryTracking } from "@/hooks/use-query-tracking";
import AmplitudeContextProvider from "@/components/ui/telemetry-provider";
import { AnalyticsTracker } from "@/components/analytics-tracker";

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
    "Product Manager",
    "Software Engineer",
    "Marketing Manager",
    "Growth Manager",
    "Tech",
    "FinTech",
    "MarTech",
  ],
  authors: [
    {
      name: "Brian Best",
      url: "https://brianbest.dev",
    },
  ],
  creator: "Brian Best",
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
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [siteConfig.ogImage],
  //   creator: "@shadcn",
  // },
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
      <head>
        <Script
          src={`https://cdn.amplitude.com/script/${process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY}.js`}
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.amplitude.add(window.sessionReplay.plugin({sampleRate: 1}));
              window.amplitude.init('${process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY}', {
                fetchRemoteConfig: true,
                autocapture: true
              });
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} ${subway.variable} ${satoshi.variable} ${mono.variable} px-0`}
      >
        <AmplitudeContextProvider>
          <AnalyticsTracker />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <Nav />
            {children}
            <div id="drawer-root" />
            <Toaster />
          </ThemeProvider>
        </AmplitudeContextProvider>
      </body>
    </html>
  );
}
