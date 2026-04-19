import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Group Tours — Monthly Group Departures from Mumbai | Shri Ganesh Travels",
  description: "Join Shri Ganesh Travels group tours departing every month from Mumbai. All-inclusive group packages to India and international destinations. Ideal for families and senior citizens.",
  alternates: { canonical: "https://www.shriganeshtravel.com/group-tours" },
  openGraph: {
    title: "Group Tours — Monthly Group Departures from Mumbai | Shri Ganesh Travels",
    description: "Join Shri Ganesh Travels group tours departing every month from Mumbai. All-inclusive group packages to India and international destinations. Ideal for families and senior citizens.",
    url: "https://www.shriganeshtravel.com/group-tours",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
