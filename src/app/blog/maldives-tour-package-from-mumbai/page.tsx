import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Maldives Tour Package from Mumbai — Island Paradise",
  description: "Affordable Maldives packages from Mumbai. Water villas, snorkeling, sunset cruises. Direct flights. From ₹49,999 per person.",
  keywords: ["Maldives tour from Mumbai", "Maldives package cost", "Maldives honeymoon package"],
  alternates: { canonical: "https://www.shriganeshtravel.com/blog/maldives-tour-package-from-mumbai" },
  openGraph: {
    title: "Maldives Tour Package from Mumbai — Island Paradise",
    description: "Affordable Maldives packages from Mumbai. Water villas, snorkeling, sunset cruises. Direct flights. From ₹49,999 per person.",
    url: "https://www.shriganeshtravel.com/blog/maldives-tour-package-from-mumbai",
    type: "article",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-[#E87A2F] text-sm mb-6 inline-block hover:underline">&larr; Back to Blog</Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Maldives Tour Package from Mumbai — Luxury Island Getaway</h1>
          <div className="text-sm text-gray-500 mb-8">By Shri Ganesh Travels &middot; Mumbai&apos;s Trusted Tour Operator Since 1987</div>
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-gray-200 [&_p]:text-gray-300 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: `<p>Looking for the best <strong>Maldives tour from Mumbai</strong>? Shri Ganesh Travels offers all-inclusive packages with flights, hotels, meals, sightseeing, and transfers. With 37+ years of experience and 50,000+ happy families, we are Mumbai's most trusted tour operator.</p>
        
        <h2>Package Highlights</h2>
        <ul>
          <li>All-inclusive — flights, hotels, meals, transport, sightseeing</li>
          <li>Experienced tour managers and local guides</li>
          <li>Monthly group departures from Mumbai</li>
          <li>Customized private tours also available</li>
          <li>EMI payment options available</li>
        </ul>

        <h2>Why Book with Shri Ganesh Travels?</h2>
        <p>Since 1987, Shri Ganesh Travels has been Mumbai's go-to tour operator for <strong>Maldives tour from Mumbai</strong>. We are powered by Mangirish Hospitality and have served over 50,000 families with our all-inclusive group and family tour packages.</p>
        
        <h2>Book Your Tour Today</h2>
        <p>Call <strong>+91 7977416112</strong> or WhatsApp us. Email: shriganeshtravelsofficial@gmail.com. Visit us in Andheri, Mumbai.</p>` }} />
          <div className="mt-12 p-6 bg-[#E87A2F]/10 border border-[#E87A2F]/30 rounded-xl">
            <h3 className="text-xl font-bold mb-3 text-[#E87A2F]">Ready to Book?</h3>
            <p className="text-gray-300 mb-4">Call us at <strong className="text-white">+91 7977416112</strong> or WhatsApp for instant quotes.</p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="bg-[#E87A2F] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#d06a20] transition-colors">Contact Us</Link>
              <Link href="/packages" className="border border-[#E87A2F] text-[#E87A2F] px-6 py-2 rounded-lg font-medium hover:bg-[#E87A2F]/10 transition-colors">View All Packages</Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
