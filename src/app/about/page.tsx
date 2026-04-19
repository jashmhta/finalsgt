import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us — Shri Ganesh Travels Since 1987",
  description: "Learn about Shri Ganesh Travels, Mumbai's most trusted tour operator since 1987. Part of Mangirish Hospitality. 50,000+ families served across India and 30+ countries.",
  alternates: { canonical: "https://www.shriganeshtravel.com/about" },
  openGraph: {
    title: "About Us — Shri Ganesh Travels Since 1987",
    description: "Learn about Shri Ganesh Travels, Mumbai's most trusted tour operator since 1987. Part of Mangirish Hospitality. 50,000+ families served across India and 30+ countries.",
    url: "https://www.shriganeshtravel.com/about",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
