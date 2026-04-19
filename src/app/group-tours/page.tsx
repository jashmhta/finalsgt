import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Group Tours — Monthly Departures from Mumbai",
  description: "Join monthly group tour departures from Mumbai. All-inclusive packages for families & seniors. India & international destinations covered.",
  alternates: { canonical: "https://www.shriganeshtravel.com/group-tours" },
  openGraph: {
    title: "Group Tours — Monthly Departures from Mumbai",
    description: "Join monthly group tour departures from Mumbai. All-inclusive packages for families & seniors. India & international destinations covered.",
    url: "https://www.shriganeshtravel.com/group-tours",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
