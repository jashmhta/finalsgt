import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Dubai Tour Guide from Mumbai — Itinerary & Cost",
  description: "Complete Dubai tour guide from Mumbai. 5-day itinerary, visa process, costs, attractions, and booking tips. Starting ₹34,999.",
  keywords: ["Dubai tour from Mumbai", "Dubai tour package cost", "Dubai visa from Mumbai", "Dubai trip from Mumbai"],
  alternates: { canonical: "https://www.shriganeshtravel.com/blog/dubai-tour-guide-from-mumbai" },
  openGraph: {
    title: "Dubai Tour Guide from Mumbai — Itinerary & Cost",
    description: "Complete Dubai tour guide from Mumbai. 5-day itinerary, visa process, costs, attractions, and booking tips. Starting ₹34,999.",
    url: "https://www.shriganeshtravel.com/blog/dubai-tour-guide-from-mumbai",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Complete Dubai Tour Guide from Mumbai — Itinerary, Cost & Tips</h1>
          <div className="text-sm text-gray-500 mb-8">By Shri Ganesh Travels &middot; Mumbai&apos;s Trusted Tour Operator Since 1987</div>
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-gray-200 [&_p]:text-gray-300 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: `<p>Planning a <strong>Dubai tour from Mumbai</strong>? This comprehensive guide covers everything — from visa requirements to the best itinerary, costs, and insider tips. Shri Ganesh Travels offers all-inclusive Dubai packages starting from just ₹34,999 per person.</p>
        
        <h2>Dubai Tour from Mumbai — Quick Facts</h2>
        <ul>
          <li><strong>Flight time:</strong> 3 hours 15 minutes (direct flights available)</li>
          <li><strong>Best time to visit:</strong> October to March (pleasant weather)</li>
          <li><strong>Visa:</strong> 14-day tourist visa — we handle the entire process</li>
          <li><strong>Currency:</strong> AED (1 AED ≈ ₹23)</li>
          <li><strong>Package cost:</strong> Starting from ₹34,999 per person (all-inclusive)</li>
        </ul>

        <h2>5-Day Dubai Itinerary from Mumbai</h2>
        <h3>Day 1: Arrival & Dubai Marina</h3>
        <p>Arrive at Dubai International Airport. Transfer to hotel. Evening walk at Dubai Marina and JBR Beach. Dinner cruise on Dubai Creek (optional).</p>
        
        <h3>Day 2: City Tour & Burj Khalifa</h3>
        <p>Full-day Dubai city tour. Visit Burj Khalifa (124th floor), Dubai Mall, Dubai Fountain show, Jumeirah Mosque, and Gold Souk.</p>
        
        <h3>Day 3: Desert Safari</h3>
        <p>Morning at leisure. Afternoon desert safari with dune bashing, camel riding, BBQ dinner, belly dancing, and henna painting.</p>
        
        <h3>Day 4: Abu Dhabi Day Trip</h3>
        <p>Full-day Abu Dhabi tour. Sheikh Zayed Grand Mosque, Yas Island, Ferrari World (optional), and Corniche Beach.</p>
        
        <h3>Day 5: Shopping & Departure</h3>
        <p>Morning shopping at Dubai Mall or Mall of the Emirates. Ski Dubai (optional). Transfer to airport for return flight to Mumbai.</p>

        <h2>Dubai Tour Package Cost from Mumbai</h2>
        <ul>
          <li><strong>Budget package:</strong> ₹34,999 per person (3-star hotels, shared transfers)</li>
          <li><strong>Standard package:</strong> ₹49,999 per person (4-star hotels, private transfers)</li>
          <li><strong>Luxury package:</strong> ₹74,999 per person (5-star hotels, private car, premium experiences)</li>
        </ul>
        <p>All packages include: flights, visa, hotel, breakfast, airport transfers, city tour, desert safari, and Burj Khalifa tickets.</p>

        <h2>Book Your Dubai Tour Today</h2>
        <p>Call Shri Ganesh Travels at <strong>+91 7977416112</strong> or WhatsApp us to book your Dubai tour from Mumbai. Monthly group departures available.</p>` }} />
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
