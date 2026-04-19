import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us — Book Your Tour | Shri Ganesh Travels",
  description: "Contact Shri Ganesh Travels to book your dream tour. Call +91 79774 16112 or WhatsApp us. Mumbai's most trusted tour operator since 1987.",
  alternates: { canonical: "https://www.shriganeshtravel.com/contact" },
  openGraph: {
    title: "Contact Us — Book Your Tour | Shri Ganesh Travels",
    description: "Contact Shri Ganesh Travels to book your dream tour. Call +91 79774 16112 or WhatsApp us. Mumbai's most trusted tour operator since 1987.",
    url: "https://www.shriganeshtravel.com/contact",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
