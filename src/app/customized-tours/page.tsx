import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Customized Tours — Tailor-Made Private Tour Packages | Shri Ganesh Travels",
  description: "Plan your perfect customized tour with Shri Ganesh Travels. Private family tours, honeymoon packages, and corporate trips tailored to your dates, budget, and preferences.",
  alternates: { canonical: "https://www.shriganeshtravel.com/customized-tours" },
  openGraph: {
    title: "Customized Tours — Tailor-Made Private Tour Packages | Shri Ganesh Travels",
    description: "Plan your perfect customized tour with Shri Ganesh Travels. Private family tours, honeymoon packages, and corporate trips tailored to your dates, budget, and preferences.",
    url: "https://www.shriganeshtravel.com/customized-tours",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
