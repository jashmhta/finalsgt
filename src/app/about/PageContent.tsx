"use client";
/*
 * About Page — Shri Ganesh Travels
 * Fully rebuilt with real brand story, real stats, proper Navbar
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Link from "next/link";
import SEOHead from "@/components/SEOHead";
import { FloatingCircles, CompassSvg, PlaneSvg } from "@/components/SvgDecorations";
import { useInView } from "@/hooks/useInView";
import { useEffect } from "react";

const LOGO_URL =
  "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-new_9d44f3f0.png";

const VALUES = [
  {
    icon: "🤝",
    title: "No Hidden Charges",
    desc: "Every package lists what's included — meals, hotels, transfers, entry fees. The price we quote is what you pay.",
  },
  {
    icon: "📋",
    title: "Full Itinerary Before You Pay",
    desc: "We share a day-by-day PDF on WhatsApp before you book. Hotel names, meal plan, and every stop — confirmed upfront.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Built for Indian Families",
    desc: "Indian meals on international tours, private AC coaches, and pacing that works for all ages. We've been doing this for 37 years.",
  },
  {
    icon: "🌍",
    title: "Mumbai Roots, 30+ Countries",
    desc: "We're a Mumbai company. We know what Indian families need abroad — the food, the pace, the comfort. That doesn't change by destination.",
  },
];

const MILESTONES = [
  { year: "1987", event: "Founded by the Mangirish Hospitality group in Mumbai" },
  { year: "1995", event: "Expanded to domestic pilgrimages — Char Dham, Tirupati, Varanasi" },
  { year: "2000", event: "Launched first international packages to Dubai & Singapore" },
  { year: "2010", event: "Crossed 10,000 satisfied travellers milestone" },
  { year: "2015", event: "Expanded to Europe — Switzerland, Paris, Czech Republic" },
  { year: "2019", event: "Launched WhatsApp-first booking experience" },
  { year: "2026", event: "50,000+ families served across 30+ countries" },
];

function ValueCard({ v, index }: { v: typeof VALUES[0]; index: number }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "clamp(1.25rem, 3vw, 2rem)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
        border: "1px solid var(--blue-200)",
        boxShadow: "0 4px 20px rgba(10, 42, 66, 0.04)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(10, 42, 66, 0.08)"; e.currentTarget.style.borderColor = "var(--orange-300)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(10, 42, 66, 0.04)"; e.currentTarget.style.borderColor = "var(--blue-200)"; }}
    >
      <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: "var(--orange-50)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", marginBottom: "1rem", border: "1px solid var(--orange-200)" }}>
        {v.icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "0.45rem" }}>{v.title}</h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--blue-600)", lineHeight: 1.65 }}>{v.desc}</p>
    </div>
  );
}

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { ref: storyRef, isVisible: storyVisible } = useInView(0.15);
  const { ref: timelineRef, isVisible: timelineVisible } = useInView(0.1);

  return (
    <div style={{ minHeight: "100vh", background: "var(--blue-50)" }}>
      <SEOHead title="About Us" description="Learn about Shri Ganesh Travels — Mumbai's most trusted tour operator since 1987, powered by Mangirish Hospitality. 50,000+ families served across 30+ countries." canonical="/about" />
      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "clamp(7rem, 12vw, 9rem) 1rem clamp(2.5rem, 5vw, 4rem)",
          overflow: "hidden",
          background: "linear-gradient(180deg, var(--blue-50) 0%, #fff 100%)",
        }}
      >
        <FloatingCircles />
        <div className="animate-float-slow" style={{ position: "absolute", top: "30px", right: "10%", opacity: 0.25 }}>
          <PlaneSvg size={40} />
        </div>
        <div className="animate-float" style={{ position: "absolute", bottom: "30px", left: "8%", opacity: 0.25 }}>
          <CompassSvg size={48} />
        </div>

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
            background: "rgba(255,255,255,0.8)",
            borderRadius: "6px",
            border: "1px solid var(--orange-200)",
          }}
        >
          Est. 1987 · Mumbai, India
        </span>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.8rem)",
            fontWeight: 600,
            color: "var(--blue-900)",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}
        >
          About{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Shri Ganesh Travels</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "1.05rem",
            color: "var(--blue-600)",
            maxWidth: "540px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Since 1987, we've been organising group and family tours from Mumbai.
          37 years, 50,000+ travellers, and a reputation built entirely on word of mouth.
        </p>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--orange-500) 0%, var(--orange-400) 40%, var(--blue-500) 100%)",
          padding: "2.5rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {[
            { value: "37+", label: "Years in Business" },
            { value: "50K+", label: "Happy Travellers" },
            { value: "37+", label: "Tour Packages" },
            { value: "30+", label: "Countries Covered" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", marginTop: "0.3rem", letterSpacing: "0.06em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Story */}
      <section
        ref={storyRef}
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) 1.5rem",
          opacity: storyVisible ? 1 : 0,
          transform: storyVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div
          className="beam-border"
          style={{ background: "white", borderRadius: "20px", padding: "clamp(2rem, 4vw, 3rem)" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem", flexWrap: "wrap" }}>
            <img src={LOGO_URL} alt="Shri Ganesh Travels" style={{ height: "70px", width: "auto", objectFit: "contain" }} />
            <div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 3vw, 1.8rem)", fontWeight: 600, color: "var(--blue-900)", marginBottom: "0.3rem" }}>Our Story</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.82rem", color: "var(--orange-500)", fontWeight: 600 }}>Mumbai's Group Tour Specialists since 1987 · Powered by Mangirish Hospitality</p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", color: "var(--blue-700)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Shri Ganesh Travels was founded in 1987 under the Mangirish Hospitality group in Mumbai. We started with domestic pilgrimages and hill-station tours for local families — Char Dham, Tirupati, Shimla, Manali. Word spread, the group grew, and so did the destinations.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", color: "var(--blue-700)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
            Today we run 37+ fixed tour packages covering India, South-East Asia, the Middle East, Europe, and beyond. Every package includes a day-by-day PDF itinerary, personally checked hotels, Indian meals on international tours, and private AC transport. That's been our standard since day one.
          </p>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.96rem", color: "var(--blue-700)", lineHeight: 1.85 }}>
            Every destination in our portfolio has been visited by our team. We don't recommend places we haven't been to ourselves. From the forts of Rajasthan to the beaches of Bali and the mountain passes of Switzerland — we've been there.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section
        ref={timelineRef}
        style={{
          background: "linear-gradient(180deg, var(--blue-50) 0%, var(--blue-100) 100%)",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange-500)", marginBottom: "1rem", padding: "6px 16px", background: "var(--orange-50)", borderRadius: "6px", border: "1px solid var(--orange-200)" }}>
              Our Journey
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--blue-900)", lineHeight: 1.1 }}>
              Our{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Journey Since 1987</em>
            </h2>
          </div>

          <div
            style={{
              opacity: timelineVisible ? 1 : 0,
              transform: timelineVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", left: "calc(80px + 1px)", top: 0, bottom: 0, width: "2px", background: "linear-gradient(180deg, var(--orange-300), var(--blue-300))", display: "none" }} className="hidden md:block" />

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  style={{
                    display: "flex",
                    gap: "1.5rem",
                    alignItems: "flex-start",
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      flexShrink: 0,
                      width: "80px",
                      textAlign: "right",
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--orange-500)",
                      paddingTop: "0.75rem",
                    }}
                  >
                    {m.year}
                  </div>
                  <div
                    style={{
                      flexShrink: 0,
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))",
                      marginTop: "1rem",
                      boxShadow: "0 0 0 3px rgba(232,122,47,0.2)",
                    }}
                  />
                  <div
                    style={{
                      flex: 1,
                      background: "white",
                      borderRadius: "12px",
                      padding: "1rem 1.25rem",
                      border: "1px solid var(--blue-200)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.9rem",
                      color: "var(--blue-800)",
                      lineHeight: 1.5,
                    }}
                  >
                    {m.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#fff", padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange-500)", marginBottom: "1rem", padding: "6px 16px", background: "var(--orange-50)", borderRadius: "6px", border: "1px solid var(--orange-200)" }}>
              Our Values
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--blue-900)", lineHeight: 1.1 }}>
              What We{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Stand For</em>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1rem" }}>
            {VALUES.map((v, i) => <ValueCard key={v.title} v={v} index={i} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "clamp(3rem, 6vw, 5rem) 1.5rem", background: "var(--blue-50)" }}>
        <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 600, color: "var(--blue-900)", marginBottom: "1rem" }}>
          Ready to travel with{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>us?</em>
        </h3>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--blue-600)", maxWidth: "420px", margin: "0 auto 2rem", lineHeight: 1.65 }}>
          Let's plan your next adventure. Just send a WhatsApp message and we'll have your full itinerary ready within 24 hours.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://wa.me/917977416112?text=Hi!%20I%20want%20to%20plan%20a%20trip.%20Please%20help."
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700, padding: "0.9rem 2.5rem", borderRadius: "9999px", border: "none", background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))", color: "white", boxShadow: "0 6px 24px rgba(232, 122, 47, 0.3)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            WhatsApp Us Now
          </a>
          <Link href="/domestic">
            <button style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600, padding: "0.9rem 2.5rem", borderRadius: "9999px", border: "1.5px solid var(--orange-400)", background: "transparent", color: "var(--orange-500)", cursor: "pointer" }}>
              Browse All Packages
            </button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
