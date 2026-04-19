/*
 * FEATURED PACKAGES — Homepage section
 * Shows top 3 domestic + top 3 international packages with quick links
 * Links to /domestic and /international pages
 */

import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const FEATURED = [
  {
    title: "Domestic Tours",
    subtitle: "Group & customized tours across India",
    link: "/domestic",
    packages: [
      {
        name: "Kerala Backwaters",
        slug: "kerala",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg",
        duration: "4N / 5D",
        price: "₹14,999",
        location: "Kerala",
        type: "Group Tour",
      },
      {
        name: "Rajasthan Heritage",
        slug: "rajasthan",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg",
        duration: "10N / 11D",
        price: "₹25,000",
        location: "Rajasthan",
        type: "Group Tour",
      },
      {
        name: "Himalayan Escape",
        slug: "himachal",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg",
        duration: "6N / 7D",
        price: "₹18,999",
        location: "Himachal Pradesh",
        type: "Group Tour",
      },
    ],
  },
  {
    title: "International Tours",
    subtitle: "All-inclusive packages to 30+ countries",
    link: "/international",
    packages: [
      {
        name: "Dubai Dazzle",
        slug: "dubai",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg",
        duration: "5N / 6D",
        price: "₹45,999",
        location: "Dubai, UAE",
        type: "Group Tour",
      },
      {
        name: "Bali Paradise",
        slug: "bali",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-bali_56ea95d1.jpg",
        duration: "6N / 7D",
        price: "₹54,999",
        location: "Bali, Indonesia",
        type: "Customized",
      },
      {
        name: "Singapore Delight",
        slug: "singapore",
        image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-singapore_624447c8.jpg",
        duration: "4N / 5D",
        price: "₹49,999",
        location: "Singapore",
        type: "Group Tour",
      },
    ],
  },
];

function PackageCard({
  pkg,
  index,
}: {
  pkg: (typeof FEATURED)[0]["packages"][0];
  index: number;
}) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <Link href={`/destination/${pkg.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        ref={ref}
        className="fp-card"
        style={{
          borderRadius: "18px",
          overflow: "hidden",
          background: "#fff",
          border: "1px solid var(--blue-200)",
          cursor: "pointer",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, box-shadow 0.3s, border-color 0.3s`,
          boxShadow: "0 4px 20px rgba(10,42,66,0.05)",
          willChange: "opacity, transform",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
          <img
            src={pkg.image}
            alt={pkg.name}
            loading="lazy"
            decoding="async"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s",
              pointerEvents: "none",
            }}
          />

          {/* Type badge */}
          <div
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "rgba(0,0,0,0.5)",
              backdropFilter: "blur(8px)",
              color: "white",
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "6px",
              letterSpacing: "0.05em",
            }}
          >
            {pkg.type}
          </div>
        </div>

        {/* Info */}
        <div style={{ padding: "1rem 1.1rem" }}>
          <h3
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "var(--blue-900)",
              marginBottom: "0.4rem",
            }}
          >
            {pkg.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                color: "var(--blue-600)",
              }}
            >
              <MapPin size={12} style={{ color: "var(--orange-400)" }} />
              {pkg.location}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                fontFamily: "var(--font-sans)",
                fontSize: "0.78rem",
                color: "var(--blue-600)",
              }}
            >
              <Clock size={12} style={{ color: "var(--orange-400)" }} />
              {pkg.duration}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedPackages() {
  return (
    <section style={{ background: "var(--blue-50)", padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)" }}>
      <style>{`.fp-card:hover { transform: translateY(-6px) !important; box-shadow: 0 16px 48px rgba(10,42,66,0.1) !important; border-color: var(--orange-300) !important; } .fp-card:hover img { transform: scale(1.06); }`}</style>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3.5rem)" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--orange-500)",
              marginBottom: "1rem",
              padding: "6px 16px",
              background: "var(--orange-50)",
              borderRadius: "6px",
              border: "1px solid var(--orange-200)",
            }}
          >
            Our Packages
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--blue-900)",
              lineHeight: 1.08,
            }}
          >
            Tours That{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange-500)", fontWeight: 500 }}>Mumbai Books.</em>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
              color: "var(--blue-700)",
              marginTop: "0.8rem",
              maxWidth: "560px",
              margin: "0.8rem auto 0",
              lineHeight: 1.6,
            }}
          >
            Group departures every month. All-inclusive pricing. Indian meals on international tours.
          </p>
        </div>

        {/* Two category rows */}
        {FEATURED.map((category) => (
          <div key={category.title} style={{ marginBottom: "3rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.25rem",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                    fontWeight: 600,
                    color: "var(--blue-900)",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    color: "var(--blue-600)",
                    marginTop: "0.15rem",
                  }}
                >
                  {category.subtitle}
                </p>
              </div>
              <Link href={category.link} style={{ textDecoration: "none" }}>
                <span
                  className="fp-view-all"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "var(--orange-500)",
                    cursor: "pointer",
                    transition: "gap 0.2s",
                  }}
                >
                  View All <ArrowRight size={16} />
                </span>
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {category.packages.map((pkg, i) => (
                <PackageCard key={pkg.slug} pkg={pkg} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
