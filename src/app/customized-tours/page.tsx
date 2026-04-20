import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Customized Tour Packages",
  description: "Design your perfect tour with Shri Ganesh Travels. Private family trips, honeymoons & corporate tours. Your dates, budget, preferences.",
  alternates: { canonical: "https://www.shriganeshtravel.com/customized-tours" },
  openGraph: {
    title: "Customized Tours — Private Tailor-Made Packages",
    description: "Design your perfect tour with Shri Ganesh Travels. Private family trips, honeymoons & corporate tours. Your dates, budget, preferences.",
    url: "https://www.shriganeshtravel.com/customized-tours",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
