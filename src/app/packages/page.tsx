import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "All Tour Packages — Domestic & International | Shri Ganesh Travels",
  description: "Browse all tour packages from Shri Ganesh Travels. Domestic and international all-inclusive group and family tours from Mumbai. Starting from ₹9,999.",
  alternates: { canonical: "https://www.shriganeshtravel.com/packages" },
  openGraph: {
    title: "All Tour Packages — Domestic & International | Shri Ganesh Travels",
    description: "Browse all tour packages from Shri Ganesh Travels. Domestic and international all-inclusive group and family tours from Mumbai. Starting from ₹9,999.",
    url: "https://www.shriganeshtravel.com/packages",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
