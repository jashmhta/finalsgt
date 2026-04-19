"use client";
/*
 * Shri Ganesh Travels — Homepage
 * Section order: Hero → Stats → Featured Packages → Why Choose Us → Google Reviews → Footer
 * Hero has its own VideoBackground built-in
 */

import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <div style={{ overflowX: "hidden", position: "relative" }}>
      <SEOHead
        title="Mumbai's Most Trusted Tour Operator Since 1987"
        description="Shri Ganesh Travels — 50,000+ families served. All-inclusive group & family tour packages to India, Dubai, Singapore, Bali, Thailand, Switzerland & 30+ countries. Powered by Mangirish Hospitality."
        canonical="/"
      />
      {/* ── GRAIN TEXTURE OVERLAY ──────────────────────────────────── */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── HERO (video slideshow is built into HeroSection) ─────── */}
      <HeroSection />

      {/* ── FADE: Hero → Stats ────────────────────────────────────── */}
      <div className="section-fade section-fade--hero-to-dest" />

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <div className="glow-dual" style={{ overflow: "hidden" }}>
        <StatsSection />
      </div>

      {/* ── FEATURED PACKAGES ─────────────────────────────────────── */}
      <FeaturedPackages />

      {/* ── FADE: Packages → Why Choose Us ────────────────────────── */}
      <div className="section-fade section-fade--stats-to-why" />

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <div className="glow-blue-top-left" style={{ overflow: "hidden" }}>
        <WhyChooseUs />
      </div>

      {/* ── FADE: Why Choose Us → Google Reviews ──────────────────── */}
      <div className="section-fade section-fade--why-to-test" />

      {/* ── GOOGLE REVIEWS MARQUEE ────────────────────────────────── */}
      <div className="glow-orange-center" style={{ overflow: "hidden" }}>
        <TestimonialsSection />
      </div>

      {/* ── FADE: Reviews → Footer ────────────────────────────────── */}
      <div className="section-fade section-fade--test-to-footer" />

      {/* ── FOOTER ────────────────────────────────────────────────── */}
      <Footer />

      {/* ── WHATSAPP FLOATING ICON ────────────────────────────────── */}
      <WhatsAppFloat />
    </div>
  );
}
