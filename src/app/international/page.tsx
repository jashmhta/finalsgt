import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "International Tours — World Travel Packages from Mumbai | Shri Ganesh Travels",
  description: "Explore the world with Shri Ganesh Travels. Group & customized international tours to Dubai, Singapore, Bali, Thailand, Switzerland, Maldives, Sri Lanka & 25+ countries from Mumbai.",
  alternates: { canonical: "https://www.shriganeshtravel.com/international" },
  openGraph: {
    title: "International Tours — World Travel Packages from Mumbai | Shri Ganesh Travels",
    description: "Explore the world with Shri Ganesh Travels. Group & customized international tours to Dubai, Singapore, Bali, Thailand, Switzerland, Maldives, Sri Lanka & 25+ countries from Mumbai.",
    url: "https://www.shriganeshtravel.com/international",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
