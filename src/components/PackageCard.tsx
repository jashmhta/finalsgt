/*
 * PACKAGE CARD — Reusable card for tour packages
 * Used in Domestic, International, Group Tours, Customized pages
 */

import Link from "next/link";
import type { Package } from "@/data/packages";
import LazyImage from "@/components/LazyImage";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "18px",
        overflow: "hidden",
        border: "1px solid var(--blue-200)",
        boxShadow: "0 4px 20px rgba(10, 42, 66, 0.05)",
        transition: "transform 0.3s, box-shadow 0.3s",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 16px 48px rgba(10, 42, 66, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(10, 42, 66, 0.05)";
      }}
    >
      {/* Image */}
      <Link href={`/destination/${pkg.slug}`} aria-label={`View ${pkg.name} tour package`}>
        <div style={{ position: "relative", overflow: "hidden", height: "200px", cursor: "pointer" }}>
          <LazyImage
            src={pkg.image}
            alt={`${pkg.name} - ${pkg.duration} tour package from Mumbai`}
            style={{ height: "200px" }}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            objectFit="cover"
          />
          <div style={{ position: "absolute", top: "12px", left: "12px", background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))", color: "white", fontFamily: "var(--font-sans)", fontSize: "0.65rem", fontWeight: 700, padding: "4px 10px", borderRadius: "6px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            {pkg.tag}
          </div>
          <div style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(255,255,255,0.9)", color: "var(--blue-800)", fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, padding: "4px 10px", borderRadius: "6px", backdropFilter: "blur(4px)" }}>
            {pkg.duration}
          </div>
          {pkg.tourType === "customized" && (
            <div style={{ position: "absolute", bottom: "12px", left: "12px", background: "rgba(0,0,0,0.7)", color: "#ffd7b6", fontFamily: "var(--font-sans)", fontSize: "0.6rem", fontWeight: 700, padding: "3px 8px", borderRadius: "5px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Customized
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: "1.25rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--blue-500)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem" }}>
          {pkg.region}
        </p>
        <Link href={`/destination/${pkg.slug}`}>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "0.75rem", lineHeight: 1.2, cursor: "pointer" }}>
            {pkg.name}
          </h3>
        </Link>

        {/* Highlights */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "1rem" }}>
          {pkg.highlights.slice(0, 3).map((h) => (
            <span key={h} style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, padding: "3px 9px", borderRadius: "5px", background: "var(--blue-50)", color: "var(--blue-700)", border: "1px solid var(--blue-200)" }}>
              {h}
            </span>
          ))}
          {pkg.highlights.length > 3 && (
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 500, padding: "3px 9px", borderRadius: "5px", background: "var(--orange-50)", color: "var(--orange-600)", border: "1px solid var(--orange-200)" }}>
              +{pkg.highlights.length - 3} more
            </span>
          )}
        </div>

        <div style={{ marginTop: "auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 600, color: "var(--blue-500)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1px" }}>
              Starting from
            </div>
            <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, color: "var(--orange-500)", lineHeight: 1 }}>
              {pkg.price}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.68rem", color: "var(--blue-500)", marginTop: "2px" }}>
              {pkg.perPerson ? "per person" : "per couple"}
            </div>
          </div>
          <a
            href={`https://wa.me/917977416112?text=Hi!%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.name)}%20package%20(${pkg.duration}).%20Please%20share%20the%20detailed%20itinerary.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))",
              color: "white",
              fontFamily: "var(--font-sans)",
              fontSize: "0.78rem",
              fontWeight: 700,
              padding: "0.6rem 1.2rem",
              borderRadius: "10px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(232, 122, 47, 0.3)",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
}
