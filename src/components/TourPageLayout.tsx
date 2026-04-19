"use client";
/*
 * TOUR PAGE LAYOUT — Shared layout for Domestic/International/Group/Customized pages
 * Hero banner + sub-category filter + package grid
 * Includes SEO head support, memoized filters, and performance optimizations
 */

import { useState, useMemo, useEffect, memo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import PackageCard from "@/components/PackageCard";
import SEOHead from "@/components/SEOHead";
import { SUB_CATEGORIES, COUNTRIES, type Package } from "@/data/packages";
import { Search } from "lucide-react";

interface TourPageLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  packages: Package[];
  showCountrySearch?: boolean;
  showTourTypeToggle?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoCanonical?: string;
}

// Memoized PackageCard wrapper to prevent unnecessary re-renders
const MemoPackageCard = memo(PackageCard);

export default function TourPageLayout({
  title,
  subtitle,
  heroImage,
  packages,
  showCountrySearch = false,
  showTourTypeToggle = false,
  seoTitle,
  seoDescription,
  seoCanonical,
}: TourPageLayoutProps) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [activeSubCat, setActiveSubCat] = useState("all");
  const [activeTourType, setActiveTourType] = useState<"all" | "group" | "customized">("all");
  const [countrySearch, setCountrySearch] = useState("");

  const availableSubCats = useMemo(() => {
    const cats = new Set(packages.map((p) => p.subCategory));
    return SUB_CATEGORIES.filter((sc) => sc.id === "all" || cats.has(sc.id));
  }, [packages]);

  const filteredCountries = useMemo(() => {
    if (!countrySearch) return [];
    return COUNTRIES.filter((c) => c.toLowerCase().includes(countrySearch.toLowerCase()));
  }, [countrySearch]);

  const filtered = useMemo(() => {
    let result = packages;
    if (activeTourType !== "all") result = result.filter((p) => p.tourType === activeTourType);
    if (activeSubCat !== "all") result = result.filter((p) => p.subCategory === activeSubCat);
    if (countrySearch) result = result.filter((p) => p.country?.toLowerCase().includes(countrySearch.toLowerCase()));
    return result;
  }, [packages, activeTourType, activeSubCat, countrySearch]);

  return (
    <>
      {seoTitle && (
        <SEOHead
          title={seoTitle}
          description={seoDescription}
          canonical={seoCanonical}
          ogImage={heroImage}
        />
      )}
      <div style={{ minHeight: "100vh", background: "var(--blue-50)" }}>
        <Navbar />

        {/* Hero */}
        <div
          style={{
            position: "relative",
            height: "clamp(280px, 40vh, 420px)",
            overflow: "hidden",
          }}
        >
          <img
            src={heroImage}
            alt={title}
            loading="eager"
            fetchPriority="high"
            style={{ width: "100%", height: "100%", objectFit: "cover", willChange: "auto" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,42,66,0.3) 0%, rgba(10,42,66,0.7) 100%)" }} />
          <div style={{ position: "absolute", bottom: "clamp(1.5rem, 4vw, 3rem)", left: "clamp(1rem, 3vw, 2rem)", right: "clamp(1rem, 3vw, 2rem)", zIndex: 10 }}>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#fff", lineHeight: 1.1, textShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
              {title}
            </h1>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.85rem, 2vw, 1.05rem)", color: "rgba(255,255,255,0.85)", marginTop: "0.5rem", maxWidth: "600px" }}>
              {subtitle}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem clamp(1rem, 3vw, 2rem) 0" }}>
          {/* Tour type toggle */}
          {showTourTypeToggle && (
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              {(["all", "group", "customized"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTourType(t)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    padding: "0.55rem 1.4rem",
                    borderRadius: "9999px",
                    border: activeTourType === t ? "none" : "1px solid var(--blue-200)",
                    background: activeTourType === t ? "linear-gradient(135deg, var(--orange-500), var(--orange-400))" : "white",
                    color: activeTourType === t ? "#fff" : "var(--blue-700)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {t === "all" ? "All Tours" : t === "group" ? "Group Tours" : "Customized"}
                </button>
              ))}
            </div>
          )}

          {/* Country search for international */}
          {showCountrySearch && (
            <div style={{ position: "relative", marginBottom: "1rem", maxWidth: "400px" }}>
              <div style={{ position: "relative" }}>
                <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--blue-400)" }} />
                <input
                  type="text"
                  placeholder="Search by country..."
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem 0.75rem 2.5rem",
                    borderRadius: "12px",
                    border: "1px solid var(--blue-200)",
                    background: "white",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    color: "var(--blue-900)",
                    outline: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = "var(--orange-400)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,122,47,0.1)"; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "var(--blue-200)"; e.currentTarget.style.boxShadow = "none"; }}
                />
              </div>
              {filteredCountries.length > 0 && countrySearch && (
                <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "white", borderRadius: "12px", border: "1px solid var(--blue-200)", boxShadow: "0 8px 32px rgba(10,42,66,0.1)", zIndex: 20, marginTop: "4px", overflow: "hidden" }}>
                  {filteredCountries.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCountrySearch(c)}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "0.65rem 1rem", fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--blue-800)", border: "none", background: "transparent", cursor: "pointer", transition: "background 0.15s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-50)")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Sub-category pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {availableSubCats.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveSubCat(cat.id)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  padding: "0.45rem 1.1rem",
                  borderRadius: "9999px",
                  border: activeSubCat === cat.id ? "none" : "1px solid var(--blue-200)",
                  background: activeSubCat === cat.id ? "var(--blue-800)" : "white",
                  color: activeSubCat === cat.id ? "#fff" : "var(--blue-700)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Contact nudge */}
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--blue-500)", marginBottom: "1.5rem" }}>
            Can't find what you're looking for?{" "}
            <a href="/contact" style={{ color: "var(--orange-500)", fontWeight: 600, textDecoration: "none" }}>Contact us</a>{" "}
            for a custom itinerary.
          </p>
        </div>

        {/* Package Grid */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2rem) 4rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", color: "var(--blue-800)", marginBottom: "0.5rem" }}>No packages found</p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.9rem", color: "var(--blue-500)" }}>Try adjusting your filters or search criteria.</p>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: "1.5rem" }}>
              {filtered.map((pkg) => (
                <MemoPackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}
        </div>

        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
}
