import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Destinations — India & World Tour Destinations | Shri Ganesh Travels",
  description: "Explore all tour destinations covered by Shri Ganesh Travels. 30+ domestic and international destinations including Kerala, Rajasthan, Dubai, Singapore, Bali, Thailand and more.",
  alternates: { canonical: "https://www.shriganeshtravel.com/destinations" },
  openGraph: {
    title: "Destinations — India & World Tour Destinations | Shri Ganesh Travels",
    description: "Explore all tour destinations covered by Shri Ganesh Travels. 30+ domestic and international destinations including Kerala, Rajasthan, Dubai, Singapore, Bali, Thailand and more.",
    url: "https://www.shriganeshtravel.com/destinations",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
