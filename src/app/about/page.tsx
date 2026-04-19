import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Us — Mumbai Tour Operator Since 1987",
  description: "Shri Ganesh Travels: 37+ years, 50,000+ families. Mumbai's trusted group & family tour operator. Powered by Mangirish Hospitality.",
  alternates: { canonical: "https://www.shriganeshtravel.com/about" },
  openGraph: {
    title: "About Us — Mumbai Tour Operator Since 1987",
    description: "Shri Ganesh Travels: 37+ years, 50,000+ families. Mumbai's trusted group & family tour operator. Powered by Mangirish Hospitality.",
    url: "https://www.shriganeshtravel.com/about",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
