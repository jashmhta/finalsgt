import type { Metadata } from "next";
import { Suspense } from "react";
import HomeClient from "./HomeClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Shri Ganesh Travels — Tours from Mumbai Since 1987",
  description: "50,000+ families served. All-inclusive group & family tours to India, Dubai, Singapore, Bali, Thailand & 30+ countries. Book now!",
  alternates: { canonical: "https://www.shriganeshtravel.com/" },
  openGraph: {
    title: "Shri Ganesh Travels — Tours from Mumbai Since 1987",
    description: "50,000+ families served. All-inclusive group & family tours to India, Dubai, Singapore, Bali, Thailand & 30+ countries. Book now!",
    url: "https://www.shriganeshtravel.com/",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><HomeClient /></Suspense>;
}
