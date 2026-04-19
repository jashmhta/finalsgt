import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Mumbai's Most Trusted Tour Operator Since 1987",
  description: "Shri Ganesh Travels — 50,000+ families served. All-inclusive group & family tour packages to India, Dubai, Singapore, Bali, Thailand, Switzerland & 30+ countries. Powered by Mangirish Hospitality.",
  alternates: { canonical: "https://www.shriganeshtravel.com/" },
  openGraph: {
    title: "Mumbai's Most Trusted Tour Operator Since 1987",
    description: "Shri Ganesh Travels — 50,000+ families served. All-inclusive group & family tour packages to India, Dubai, Singapore, Bali, Thailand, Switzerland & 30+ countries. Powered by Mangirish Hospitality.",
    url: "https://www.shriganeshtravel.com/",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><HomeClient /></Suspense>;
}
