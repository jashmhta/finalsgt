import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tour Packages — Domestic & International Tours",
  description: "Browse all tour packages from Shri Ganesh Travels Mumbai. Group & family tours across India and 30+ countries. Starting from ₹9,999.",
  alternates: { canonical: "https://www.shriganeshtravel.com/packages" },
  openGraph: {
    title: "Tour Packages — Domestic & International Tours",
    description: "Browse all tour packages from Shri Ganesh Travels Mumbai. Group & family tours across India and 30+ countries. Starting from ₹9,999.",
    url: "https://www.shriganeshtravel.com/packages",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
