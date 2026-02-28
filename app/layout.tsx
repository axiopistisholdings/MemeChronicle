import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MemeChronicle – Free Meme Coin News Aggregator",
  description:
    "Free automated meme coin news aggregator. Curated summaries from trusted publishers: Latest, Market Movers, Announcements & Top 10 Prices. No hype, just facts for traders.",
  metadataBase: new URL("https://memechronicle.com"),
  openGraph: {
    title: "MemeChronicle – Free Meme Coin News Aggregator",
    description:
      "Curated meme coin news summaries from trusted publishers. No hype, just facts for traders.",
    url: "https://memechronicle.com",
    siteName: "MemeChronicle",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MemeChronicle – Free Meme Coin News Aggregator",
    description: "No hype, just facts for traders.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

