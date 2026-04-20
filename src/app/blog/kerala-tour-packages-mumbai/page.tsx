import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Kerala Tour Packages from Mumbai",
  description: "All-inclusive Kerala tour packages from Mumbai. Munnar, Alleppey, Thekkady, Kovalam. Group & family tours from ₹14,999.",
  keywords: ["Kerala tour package from Mumbai", "Kerala trip from Mumbai", "Munnar tour package", "Alleppey houseboat package"],
  alternates: { canonical: "https://www.shriganeshtravel.com/blog/kerala-tour-packages-mumbai" },
  openGraph: {
    title: "Kerala Tour Packages from Mumbai — Best Deals",
    description: "All-inclusive Kerala tour packages from Mumbai. Munnar, Alleppey, Thekkady, Kovalam. Group & family tours from ₹14,999.",
    url: "https://www.shriganeshtravel.com/blog/kerala-tour-packages-mumbai",
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
          <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Kerala Tour Packages from Mumbai — Backwaters, Hills & Beaches</h1>
          <div className="text-sm text-gray-500 mb-8">By Shri Ganesh Travels &middot; Mumbai&apos;s Trusted Tour Operator Since 1987</div>
          <div className="prose prose-invert prose-lg max-w-none [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-white [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-gray-200 [&_p]:text-gray-300 [&_p]:mb-4 [&_p]:leading-relaxed [&_ul]:text-gray-300 [&_ul]:mb-4 [&_li]:mb-2 [&_strong]:text-white"
            dangerouslySetInnerHTML={{ __html: `<p>Discover <strong>God's Own Country</strong> with our all-inclusive <strong>Kerala tour packages from Mumbai</strong>. From the misty hills of Munnar to the serene backwaters of Alleppey, Kerala offers a perfect blend of nature, culture, and relaxation. Shri Ganesh Travels has been organizing Kerala tours since 1987.</p>
        
        <h2>Popular Kerala Tour Packages from Mumbai</h2>
        
        <h3>1. Kerala Complete Package — 7 Days / 6 Nights (₹14,999)</h3>
        <p>Cochin → Munnar → Thekkady → Alleppey → Kovalam → Trivandrum. Includes houseboat stay, spice plantation visit, Periyar wildlife sanctuary, and Kovalam beach.</p>
        
        <h3>2. Kerala Honeymoon Package — 6 Days / 5 Nights (₹19,999)</h3>
        <p>Romantic Kerala honeymoon from Mumbai. Munnar tea gardens, Alleppey houseboat, Kumarakom resort. Private transfers and candlelight dinner included.</p>
        
        <h3>3. Kerala Family Package — 5 Days / 4 Nights (₹12,999)</h3>
        <p>Family-friendly Kerala tour. Cochin sightseeing, Munnar tea museum, Thekkady elephant ride, Alleppey houseboat. Kids-friendly activities included.</p>

        <h2>Best Time to Visit Kerala from Mumbai</h2>
        <p>The best time for a <strong>Kerala trip from Mumbai</strong> is September to March when the weather is pleasant. Monsoon season (June-August) is ideal for Ayurvedic treatments and budget travel.</p>

        <h2>What's Included in Our Kerala Packages</h2>
        <ul>
          <li>Return flights from Mumbai (or train option available)</li>
          <li>All hotel accommodation (3-star/4-star/5-star options)</li>
          <li>All meals — breakfast, lunch, and dinner</li>
          <li>AC vehicle for all transfers and sightseeing</li>
          <li>Alleppey houseboat stay with all meals</li>
          <li>Experienced tour guide</li>
          <li>All entry fees and permits</li>
        </ul>

        <h2>Book Your Kerala Tour</h2>
        <p>Call <strong>+91 7977416112</strong> or WhatsApp us to book your Kerala tour from Mumbai. Monthly group departures available. Customized packages also available.</p>` }} />
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
