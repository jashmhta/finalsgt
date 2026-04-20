/*
 * Stats Section — Shri Ganesh Travels
 * Animated counters, beam border cards
 */

import { useAnimatedCounter } from "@/hooks/useScrollReveal";
import { CompassSvg, PlaneSvg } from "./SvgDecorations";

const TOUR_GLOBE_ICON = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663219430874/zIAlonVMaYDmGkYA.png";

const STATS = [
  { value: 37, suffix: "+", label: "Years of Trust", sub: "Est. 1987, Mumbai", icon: "🏆", image: null },
  { value: 37, suffix: "+", label: "Tour Packages", sub: "India & worldwide", icon: null, image: TOUR_GLOBE_ICON },
  { value: 50, suffix: "K+", label: "Happy Travellers", sub: "Families served", icon: "👨‍👩‍👧", image: null },
  { value: 30, suffix: "+", label: "Countries Covered", sub: "Asia, Europe & more", icon: "🌍", image: null },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  const { ref, count } = useAnimatedCounter(stat.value, 2200);

  return (
    <div
      ref={ref}
      className="beam-border rotating-light"
      style={{
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        background: "white",
        borderRadius: "20px",
        position: "relative",
        overflow: "hidden",
        animationDelay: `${index * 0.15}s`,
      }}
    >
      <div style={{ fontSize: "2.2rem", marginBottom: "0.6rem", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "3rem" }}>
        {stat.image ? (
          <img src={stat.image} alt={stat.label} style={{ width: 56, height: 56, objectFit: "contain" }} />
        ) : (
          stat.icon
        )}
      </div>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: "var(--orange-500)",
          lineHeight: 1,
          marginBottom: "0.3rem",
        }}
      >
        {count}
        <span style={{ fontSize: "0.65em" }}>{stat.suffix}</span>
      </div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--blue-800)", marginBottom: "0.3rem" }}>
        {stat.label}
      </div>
      <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--blue-500)" }}>
        {stat.sub}
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      style={{
        position: "relative",
        background: "linear-gradient(135deg, var(--blue-100) 0%, var(--blue-200) 50%, var(--blue-100) 100%)",
        padding: "clamp(4rem, 8vw, 7rem) clamp(1rem, 3vw, 2rem)",
        overflow: "hidden",
      }}
    >
      <div className="animate-float-slow" style={{ position: "absolute", top: "20px", left: "5%", opacity: 0.35, zIndex: 0 }}>
        <CompassSvg size={64} />
      </div>
      <div className="animate-float" style={{ position: "absolute", bottom: "20px", right: "8%", opacity: 0.25, zIndex: 0 }}>
        <PlaneSvg size={48} />
      </div>

      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(232,122,47,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              background: "rgba(255,255,255,0.7)",
              borderRadius: "6px",
              border: "1px solid var(--orange-200)",
            }}
          >
            Our Track Record
          </span>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 600, color: "var(--blue-900)", lineHeight: 1.1 }}>
            37+ Years of{" "}
            <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Unforgettable Journeys.</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "1.5rem" }}>
          {STATS.map((stat, i) => <StatCard key={stat.label} stat={stat} index={i} />)}
        </div>
      </div>
    </section>
  );
}
