import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fjellro - Mountain Cabin Rental in Syndin, Norway",
  description: "Experience the ultimate Norwegian mountain retreat at Fjellro. Luxury cabin rental in Syndin, Vestre Slidre, near Fagernes. Perfect for hiking, skiing, and finding mountain calm.",
  keywords: ["cabin rental", "Norway", "Syndin", "Fagernes", "mountain retreat", "skiing", "hiking", "Vestre Slidre"],
  authors: [{ name: "Fjellro" }],
  creator: "Fjellro",
  openGraph: {
    title: "Fjellro - Mountain Cabin Rental in Syndin, Norway",
    description: "Experience the ultimate Norwegian mountain retreat at Fjellro. Luxury cabin rental in Syndin, Vestre Slidre, near Fagernes.",
    url: "https://fjellro.no",
    siteName: "Fjellro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fjellro - Mountain Cabin Rental in Syndin, Norway",
    description: "Experience the ultimate Norwegian mountain retreat at Fjellro.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#15803d" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}