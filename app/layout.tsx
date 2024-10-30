import "./globals.css";
import { Metadata } from "next";

import Footer from "./(components)/Footer";
import { ThemeProvider } from "next-themes";
import { absoluteUrl } from "../lib/absoluteUrl";

const description = "Local Crafts made in Oxford, PA";

export const metadata: Metadata = {
  metadataBase: new URL("https://thecraftcloset.miavella.com"),
  title: {
    default: "The Craft Closet",
    template: "%s | The Craft Closet",
  },
  description,
  openGraph: {
    title: "The Craft Closet",
    description,
    url: absoluteUrl("/"),
    siteName: "The Craft Closet Links",
    images: [
      {
        url: absoluteUrl("/logo_max.png"),
        width: 1000,
        height: 1000,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon-32x32.png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  other: {
    darkreader: "thecraftcloset-vellapps",
    "darkreader-lock": "true",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white dark:bg-black">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          storageKey="theme"
          defaultTheme="system"
          enableSystem
          attribute="data-theme"
        >
          <div className="min-h-screen bg-gradient-to-t from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 p-2 md:flex items-center justify-center">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
