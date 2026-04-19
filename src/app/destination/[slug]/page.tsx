export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import { Suspense } from "react";
import DestinationDetailClient from "./PageContent";

const OG_IMAGE = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png";

export function generateStaticParams() {
  return ['singapore', 'dubai', 'bali', 'thailand', 'vietnam', 'malaysia', 'hong-kong', 'switzerland', 'japan', 'australia', 'usa', 'sri-lanka', 'maldives', 'seychelles', 'azerbaijan', 'mauritius', 'kashmir', 'kerala', 'goa', 'rajasthan', 'andaman', 'himachal', 'uttarakhand', 'varanasi', 'ladakh', 'tirupati', 'south-india'].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const url = `https://www.shriganeshtravel.com/destination/${slug}`;
  const title = `${name} Tour Package | Shri Ganesh Travels`;
  const description = `Explore ${name} with Shri Ganesh Travels. All-inclusive group & family tour packages from Mumbai. Meals, hotels, sightseeing, and transfers included.`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
    },
  };
}

export default function DestinationDetail() {
  return <Suspense fallback={null}><DestinationDetailClient /></Suspense>;
}
