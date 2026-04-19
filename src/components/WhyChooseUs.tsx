/*
 * WHY CHOOSE US — Shri Ganesh Travels
 * Rebuilt with real differentiators sourced from the PDF packages
 */

import { useInView } from "@/hooks/useInView";

const FEATURES = [
  {
    icon: "🏆",
    title: "37 Years in Business",
    desc: "Started in 1987 under Mangirish Hospitality, Mumbai. Most of our bookings come from repeat travellers and family referrals — not paid ads.",
  },
  {
    icon: "📋",
    title: "37+ Fixed Itineraries",
    desc: "Every tour has a day-by-day PDF shared on WhatsApp before you book. Hotel names, meals, and every stop — confirmed before you pay.",
  },
  {
    icon: "🍽️",
    title: "All Meals Included",
    desc: "Breakfast, lunch, and dinner on every tour. Indian meals available on international trips so you always feel at home.",
  },
  {
    icon: "🚌",
    title: "Private AC Transport",
    desc: "AC coaches, tempo travellers, and sedans for every group size. Door-to-door pickup from Mumbai — no shared buses with strangers.",
  },
  {
    icon: "🏨",
    title: "Hotels We've Checked",
    desc: "We don't list hotels we haven't visited ourselves. Every property is reviewed by our team for cleanliness, location, and value.",
  },
  {
    icon: "📱",
    title: "WhatsApp Support",
    desc: "Full itinerary, hotel vouchers, and daily schedule on WhatsApp before departure. Our team stays reachable throughout your trip.",
  },
  {
    icon: "🛂",
    title: "Visa Help Included",
    desc: "We walk you through the visa process for Dubai, Singapore, Thailand, Bali, Sri Lanka, and other destinations. No extra charge.",
  },
  {
    icon: "💰",
    title: "No Hidden Costs",
    desc: "Every package lists inclusions and exclusions clearly. The price you see is what you pay. No surprises at checkout or on tour.",
  },
];

const PROCESS = [
  { step: "01", title: "WhatsApp Us", desc: "Message us your destination and travel dates. We respond the same day." },
  { step: "02", title: "Receive the Itinerary", desc: "We send a day-by-day PDF with hotel names, meals, and full pricing within 24 hours." },
  { step: "03", title: "Confirm & Pay Advance", desc: "Lock your seats with a small advance. Balance due closer to departure." },
  { step: "04", title: "We Handle the Rest", desc: "Hotels, meals, transfers, sightseeing, visa guidance — all taken care of." },
];

function FeatureCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const { ref, isVisible } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "clamp(1.25rem, 3vw, 1.75rem)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.07}s`,
        border: "1px solid var(--blue-200)",
        boxShadow: "0 4px 20px rgba(10, 42, 66, 0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(10, 42, 66, 0.08)";
        e.currentTarget.style.borderColor = "var(--orange-300)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(10, 42, 66, 0.04)";
        e.currentTarget.style.borderColor = "var(--blue-200)";
      }}
    >
      <div
        style={{
          width: "46px",
          height: "46px",
          borderRadius: "12px",
          background: "var(--orange-50)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.3rem",
          marginBottom: "0.9rem",
          border: "1px solid var(--orange-200)",
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "0.45rem" }}>
        {title}
      </h3>
      <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.86rem", color: "var(--blue-600)", lineHeight: 1.65 }}>
        {desc}
      </p>
    </div>
  );
}

export default function WhyChooseUs() {
  const { ref: processRef, isVisible: processVisible } = useInView(0.1);

  return (
    <>
      {/* Why Choose Us features grid */}
      <section style={{ background: "var(--blue-50)", padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              Why Families Choose Us
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
                fontWeight: 600,
                color: "var(--blue-900)",
                lineHeight: 1.08,
              }}
            >
              37 Years.{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange-500)", fontWeight: 500 }}>One Standard.</em>
            </h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", color: "var(--blue-700)", marginTop: "0.8rem", maxWidth: "560px", margin: "0.8rem auto 0", lineHeight: 1.6 }}>
              We've been running group tours since 1987. Here's what every package includes — no asterisks.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1rem" }}>
            {FEATURES.map((f, i) => <FeatureCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />)}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        ref={processRef}
        style={{
          background: "linear-gradient(135deg, var(--blue-800) 0%, var(--blue-900) 100%)",
          padding: "clamp(3rem, 6vw, 6rem) clamp(1rem, 3vw, 2rem)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "280px", height: "280px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,122,47,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", left: "-30px", width: "200px", height: "200px", borderRadius: "50%", background: "radial-gradient(circle, rgba(168,212,245,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange-400)", marginBottom: "1rem", padding: "6px 16px", background: "rgba(232,122,47,0.12)", borderRadius: "6px", border: "1px solid rgba(232,122,47,0.25)" }}>
              How It Works
            </span>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 600, color: "#fff", lineHeight: 1.1 }}>
              Book a Tour in{" "}
              <em style={{ fontStyle: "italic", color: "var(--orange-300)" }}>4 Simple Steps</em>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: "1.5rem",
              opacity: processVisible ? 1 : 0,
              transform: processVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {PROCESS.map((p, i) => (
              <div
                key={p.step}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "1.75rem 1.5rem",
                  border: "1px solid rgba(255,255,255,0.1)",
                  position: "relative",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "2.5rem", fontWeight: 700, color: "rgba(232,122,47,0.25)", lineHeight: 1, marginBottom: "1rem" }}>
                  {p.step}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "rgba(200,220,240,0.8)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="https://wa.me/917977416112?text=Hi!%20I%20want%20to%20enquire%20about%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(135deg, #f8a464, var(--orange-500))",
                color: "#10243c",
                fontFamily: "var(--font-sans)",
                fontSize: "0.95rem",
                fontWeight: 700,
                padding: "1rem 2.5rem",
                borderRadius: "9999px",
                textDecoration: "none",
                boxShadow: "0 12px 36px rgba(232,122,47,0.3)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start on WhatsApp — It's Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
