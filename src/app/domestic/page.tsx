import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Domestic Tours — India Packages from Mumbai",
  description: "All-inclusive India tours from Mumbai. Kerala, Kashmir, Goa, Rajasthan, Andaman, Himachal & more. Group & family packages from ₹9,999.",
  alternates: { canonical: "https://www.shriganeshtravel.com/domestic" },
  openGraph: {
    title: "Domestic Tours — India Packages from Mumbai",
    description: "All-inclusive India tours from Mumbai. Kerala, Kashmir, Goa, Rajasthan, Andaman, Himachal & more. Group & family packages from ₹9,999.",
    url: "https://www.shriganeshtravel.com/domestic",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
