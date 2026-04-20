import type { Metadata } from "next";
import Link from "next/link";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Travel Blog — Tips & Guides",
  description: "Expert travel tips, destination guides, and tour planning advice from Shri Ganesh Travels Mumbai. 37+ years of travel expertise.",
  alternates: { canonical: "https://www.shriganeshtravel.com/blog" },
  openGraph: {
    title: "Travel Blog — Tips & Guides",
    description: "Expert travel tips, destination guides, and tour planning advice from Shri Ganesh Travels Mumbai.",
    url: "https://www.shriganeshtravel.com/blog",
    images: [{ url: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png", width: 1200, height: 630 }],
  },
};

const blogPosts = [
  { slug: "best-tour-packages-from-mumbai", title: "Best Tour Packages from Mumbai in 2026", excerpt: "Discover the top-rated domestic and international tour packages departing from Mumbai. Group tours, family holidays, and customized trips.", date: "2026-04-15", category: "Guide" },
  { slug: "dubai-tour-guide-from-mumbai", title: "Complete Dubai Tour Guide from Mumbai — Itinerary, Cost & Tips", excerpt: "Everything you need to know about planning a Dubai trip from Mumbai. Best time to visit, visa process, must-see attractions, and budget breakdown.", date: "2026-04-10", category: "Destination" },
  { slug: "kerala-tour-packages-mumbai", title: "Kerala Tour Packages from Mumbai — Backwaters, Hills & Beaches", excerpt: "Explore God's Own Country with all-inclusive Kerala tour packages from Mumbai. Munnar, Alleppey, Kovalam, and Thekkady covered.", date: "2026-04-08", category: "Destination" },
  { slug: "singapore-family-tour-from-mumbai", title: "Singapore Family Tour from Mumbai — 5 Days Itinerary & Cost", excerpt: "Plan the perfect Singapore family vacation from Mumbai. Sentosa, Universal Studios, Gardens by the Bay, and Marina Bay Sands.", date: "2026-04-05", category: "Destination" },
  { slug: "rajasthan-group-tour-packages", title: "Rajasthan Group Tour Packages — Forts, Palaces & Desert Safari", excerpt: "Join our monthly Rajasthan group tours from Mumbai. Jaipur, Udaipur, Jodhpur, Jaisalmer covered with all meals and hotels.", date: "2026-04-01", category: "Destination" },
  { slug: "kashmir-tour-package-from-mumbai", title: "Kashmir Tour Package from Mumbai — Srinagar, Gulmarg & Pahalgam", excerpt: "Experience paradise on earth with our Kashmir tour packages. Dal Lake, Mughal Gardens, Gulmarg skiing, and Pahalgam valley.", date: "2026-03-28", category: "Destination" },
  { slug: "bali-honeymoon-packages-from-mumbai", title: "Bali Honeymoon Packages from Mumbai — Romantic Getaway Guide", excerpt: "Plan your dream Bali honeymoon from Mumbai. Ubud rice terraces, Seminyak beaches, Tanah Lot temple, and private villa stays.", date: "2026-03-25", category: "Destination" },
  { slug: "thailand-tour-from-mumbai-cost", title: "Thailand Tour from Mumbai — Cost, Visa & Best Itinerary 2026", excerpt: "Complete Thailand travel guide from Mumbai. Bangkok, Pattaya, Phuket, Krabi. Budget breakdown, visa on arrival, and top attractions.", date: "2026-03-20", category: "Destination" },
  { slug: "group-tours-for-senior-citizens-mumbai", title: "Group Tours for Senior Citizens from Mumbai — Safe & Comfortable", excerpt: "Specially designed group tours for senior citizens from Mumbai. Comfortable pacing, quality hotels, medical support, and experienced tour managers.", date: "2026-03-15", category: "Guide" },
  { slug: "char-dham-yatra-package-from-mumbai", title: "Char Dham Yatra Package from Mumbai — Complete Pilgrimage Guide", excerpt: "Sacred Char Dham yatra packages from Mumbai. Badrinath, Kedarnath, Gangotri, Yamunotri. Helicopter and road options available.", date: "2026-03-10", category: "Destination" },
  { slug: "maldives-tour-package-from-mumbai", title: "Maldives Tour Package from Mumbai — Luxury Island Getaway", excerpt: "Affordable Maldives packages from Mumbai. Water villas, snorkeling, sunset cruises. Direct flights and all-inclusive resort stays.", date: "2026-03-05", category: "Destination" },
  { slug: "switzerland-tour-from-mumbai", title: "Switzerland Tour from Mumbai — Alps, Lakes & Scenic Trains", excerpt: "Explore Switzerland from Mumbai. Zurich, Lucerne, Interlaken, Jungfraujoch. Swiss rail pass, best time to visit, and cost guide.", date: "2026-03-01", category: "Destination" },
  { slug: "goa-tour-packages-from-mumbai", title: "Goa Tour Packages from Mumbai — Beaches, Churches & Nightlife", excerpt: "Weekend and week-long Goa packages from Mumbai. North Goa beaches, Old Goa churches, water sports, and Dudhsagar Falls.", date: "2026-02-25", category: "Destination" },
  { slug: "andaman-tour-package-from-mumbai", title: "Andaman Tour Package from Mumbai — Islands, Beaches & Scuba", excerpt: "Discover Andaman & Nicobar Islands from Mumbai. Havelock Island, Radhanagar Beach, cellular jail, scuba diving, and sea walking.", date: "2026-02-20", category: "Destination" },
  { slug: "best-honeymoon-destinations-from-mumbai", title: "10 Best Honeymoon Destinations from Mumbai — 2026 Guide", excerpt: "Top honeymoon destinations from Mumbai: Maldives, Bali, Switzerland, Kashmir, Kerala, Goa, Andaman, Mauritius, Sri Lanka, Thailand.", date: "2026-02-15", category: "Guide" },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Travel Blog</h1>
          <p className="text-lg text-gray-400 mb-12">Expert travel tips, destination guides, and tour planning advice from Mumbai&apos;s most trusted tour operator since 1987.</p>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="border border-white/10 rounded-xl p-6 hover:border-[#E87A2F]/50 transition-all duration-300 hover:bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 bg-[#E87A2F]/20 text-[#E87A2F] rounded">{post.category}</span>
                    <time className="text-xs text-gray-500">{post.date}</time>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-[#E87A2F] transition-colors">{post.title}</h2>
                  <p className="text-gray-400 text-sm">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
