import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Gallery — Tour Photos & Videos | Shri Ganesh Travels",
  description: "Browse photos and videos from Shri Ganesh Travels tours. See real moments from Kerala, Rajasthan, Kashmir, Dubai, Singapore, Bali, Thailand, Switzerland and more.",
  alternates: { canonical: "https://www.shriganeshtravel.com/gallery" },
  openGraph: {
    title: "Gallery — Tour Photos & Videos | Shri Ganesh Travels",
    description: "Browse photos and videos from Shri Ganesh Travels tours. See real moments from Kerala, Rajasthan, Kashmir, Dubai, Singapore, Bali, Thailand, Switzerland and more.",
    url: "https://www.shriganeshtravel.com/gallery",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
