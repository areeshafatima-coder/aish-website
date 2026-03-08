import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import PromoBar from "@/components/layout/PromoBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aish.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Aish | Luxury Pakistani Fashion — UK & US",
    template: "%s | Aish",
  },
  description:
    "Luxury handcrafted Pakistani fashion. Designed in the UK. Serving UK & US. Free shipping over £300 / $300.",
  openGraph: {
    title: "Aish | Luxury Pakistani Fashion — UK & US",
    description:
      "Luxury handcrafted Pakistani fashion. Designed in the UK. Serving UK & US.",
    url: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Aish",
              url: baseUrl,
              sameAs: [
                "https://www.instagram.com/aish_officiall/",
              ],
            }),
          }}
        />
        <PromoBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
