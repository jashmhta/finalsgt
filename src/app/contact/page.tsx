import type { Metadata } from "next";
import { Suspense } from "react";
import PageClient from "./PageContent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Contact Us — Book Your Dream Tour Today",
  description: "Call +91 7977416112 or WhatsApp to book. Visit Shri Ganesh Travels in Andheri, Mumbai. Free tour consultation & instant quotes.",
  alternates: { canonical: "https://www.shriganeshtravel.com/contact" },
  openGraph: {
    title: "Contact Us — Book Your Dream Tour Today",
    description: "Call +91 7977416112 or WhatsApp to book. Visit Shri Ganesh Travels in Andheri, Mumbai. Free tour consultation & instant quotes.",
    url: "https://www.shriganeshtravel.com/contact",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};
export default function Page() {
  return <Suspense fallback={null}><PageClient /></Suspense>;
}
