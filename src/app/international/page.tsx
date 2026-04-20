import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "International Tour Packages Mumbai",
  description: "Group & family tours to 30+ countries from Mumbai. Dubai, Singapore, Bali, Thailand, Switzerland, Maldives. All-inclusive from ₹29,999.",
  alternates: { canonical: "https://www.shriganeshtravel.com/international" },
  openGraph: {
    title: "International Tour Packages Mumbai",
    description: "Group & family tours to 30+ countries from Mumbai. Dubai, Singapore, Bali, Thailand, Switzerland, Maldives. All-inclusive from ₹29,999.",
    url: "https://www.shriganeshtravel.com/international",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
