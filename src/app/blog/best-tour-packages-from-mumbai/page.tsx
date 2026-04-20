import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Best Tour Packages from Mumbai 2026",
  description: "Top-rated tour packages from Mumbai. Group & family tours to India and 30+ countries. All-inclusive with meals, hotels, transport.",
  keywords: ["tour packages from Mumbai", "best tours Mumbai", "group tour packages Mumbai", "family holiday packages Mumbai"],
  alternates: { canonical: "https://www.shriganeshtravel.com/blog/best-tour-packages-from-mumbai" },
  openGraph: {
    title: "Best Tour Packages from Mumbai 2026 — Top Picks",
    description: "Top-rated tour packages from Mumbai. Group & family tours to India and 30+ countries. All-inclusive with meals, hotels, transport.",
    url: "https://www.shriganeshtravel.com/blog/best-tour-packages-from-mumbai",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Best Tour Packages from Mumbai in 2026</h1>
          <div className="text-sm text-gray-500 mb-8">By Shri Ganesh Travels &middot; Mumbai&apos;s Trusted Tour Operator Since 1987</div>
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-gray-200 [&_p]:text-gray-300 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: `<p>Looking for the <strong>best tour packages from Mumbai</strong>? Shri Ganesh Travels has been organizing all-inclusive group and family tours since 1987, serving over 50,000 happy families. Whether you want to explore the backwaters of Kerala, the forts of Rajasthan, or the beaches of Bali, we have the perfect package for you.</p>
        
        <h2>Why Choose Shri Ganesh Travels for Your Tour Package?</h2>
        <ul>
          <li><strong>37+ years of experience</strong> — operating since 1987</li>
          <li><strong>50,000+ families served</strong> — trusted by generations</li>
          <li><strong>All-inclusive packages</strong> — meals, hotels, transport, sightseeing included</li>
          <li><strong>Monthly group departures</strong> — fixed dates, guaranteed departures</li>
          <li><strong>Customized options</strong> — tailor-made for your budget and preferences</li>
        </ul>

        <h2>Top Domestic Tour Packages from Mumbai</h2>
        <h3>1. Kerala Tour Package — Starting from ₹14,999</h3>
        <p>Experience God's Own Country with our <strong>Kerala tour package from Mumbai</strong>. Visit Munnar tea gardens, Alleppey backwaters, Thekkady wildlife sanctuary, and Kovalam beach. 6 nights / 7 days all-inclusive.</p>
        
        <h3>2. Kashmir Tour Package — Starting from ₹18,999</h3>
        <p>Explore paradise on earth with our <strong>Kashmir tour package from Mumbai</strong>. Srinagar Dal Lake, Gulmarg skiing, Pahalgam valley, and Sonmarg glacier. 7 nights / 8 days with flights.</p>
        
        <h3>3. Rajasthan Tour Package — Starting from ₹12,999</h3>
        <p>Discover royal Rajasthan with our <strong>Rajasthan group tour from Mumbai</strong>. Jaipur, Udaipur, Jodhpur, Jaisalmer desert safari. 8 nights / 9 days with all meals.</p>
        
        <h3>4. Goa Tour Package — Starting from ₹6,999</h3>
        <p>Weekend getaway to Goa from Mumbai. North Goa beaches, Old Goa churches, water sports, Dudhsagar Falls. 3 nights / 4 days.</p>

        <h2>Top International Tour Packages from Mumbai</h2>
        <h3>1. Dubai Tour Package — Starting from ₹34,999</h3>
        <p>Experience the glamour of Dubai with our <strong>Dubai tour package from Mumbai</strong>. Burj Khalifa, Desert Safari, Dubai Mall, Palm Jumeirah. 5 nights / 6 days with visa.</p>
        
        <h3>2. Singapore Tour Package — Starting from ₹44,999</h3>
        <p>Family-friendly <strong>Singapore tour from Mumbai</strong>. Sentosa Island, Universal Studios, Gardens by the Bay, Marina Bay Sands. 5 nights / 6 days.</p>
        
        <h3>3. Bali Tour Package — Starting from ₹39,999</h3>
        <p>Tropical paradise <strong>Bali tour from Mumbai</strong>. Ubud rice terraces, Tanah Lot temple, Seminyak beaches, Kintamani volcano. 6 nights / 7 days.</p>
        
        <h3>4. Thailand Tour Package — Starting from ₹29,999</h3>
        <p>Vibrant <strong>Thailand tour from Mumbai</strong>. Bangkok temples, Pattaya beaches, Phuket islands, Krabi cliffs. 6 nights / 7 days with visa on arrival.</p>

        <h2>How to Book Your Tour Package</h2>
        <p>Booking with Shri Ganesh Travels is easy:</p>
        <ul>
          <li><strong>Call us:</strong> +91 7977416112 or +91 9082616663</li>
          <li><strong>WhatsApp:</strong> Send a message to +91 7977416112</li>
          <li><strong>Email:</strong> shriganeshtravelsofficial@gmail.com</li>
          <li><strong>Visit:</strong> Our office in Andheri, Mumbai</li>
        </ul>
        <p>We offer <strong>EMI options</strong> and accept all payment methods including UPI, credit cards, and bank transfers.</p>` }} />
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
