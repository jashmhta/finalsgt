import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery — Tour Photos & Travel Moments",
  description: "Real photos & videos from Shri Ganesh Travels tours. See happy families in Kerala, Rajasthan, Dubai, Singapore, Bali & more destinations.",
  alternates: { canonical: "https://www.shriganeshtravel.com/gallery" },
  openGraph: {
    title: "Gallery — Tour Photos & Travel Moments",
    description: "Real photos & videos from Shri Ganesh Travels tours. See happy families in Kerala, Rajasthan, Dubai, Singapore, Bali & more destinations.",
    url: "https://www.shriganeshtravel.com/gallery",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
