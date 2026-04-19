"use client";
/*
 * HERO SECTION — Clean, immersive hero with cinematic video slideshow
 * NO logo (navbar is sufficient), NO cards, NO badges
 * Just the video, tagline, subtitle, and CTA buttons
 */

import { motion } from "motion/react";
import VideoBackground from "./VideoBackground";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "550px",
        maxHeight: "1000px",
        overflow: "hidden",
      }}
    >
      <VideoBackground />

      {/* Content — centered, simple */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        }}
      >
        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.2rem, 6.5vw, 4.5rem)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.08,
            maxWidth: "850px",
            textShadow: "0 2px 20px rgba(0,0,0,0.6), 0 4px 40px rgba(0,0,0,0.4)",
            letterSpacing: "-0.01em",
          }}
        >
          Mumbai's Group Tour Specialist{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#ffd7b6",
            }}
          >
            Since 1987.
          </em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.88rem, 2vw, 1.12rem)",
            color: "rgba(255,255,255,0.9)",
            maxWidth: "620px",
            lineHeight: 1.7,
            marginTop: "clamp(0.75rem, 2vw, 1.5rem)",
            textShadow: "0 2px 16px rgba(0,0,0,0.55), 0 4px 30px rgba(0,0,0,0.35)",
          }}
        >
          Hotels, meals, transfers, sightseeing — all arranged before you board.
          Over 50,000 families have travelled with us. WhatsApp us to get your itinerary today.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "clamp(0.6rem, 2vw, 1rem)",
            marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="https://wa.me/917977416112?text=Hi!%20I%20want%20to%20book%20a%20tour.%20Please%20share%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4"
            style={{
              background: "linear-gradient(135deg, #f8a464 0%, #e87a2f 100%)",
              color: "#10243c",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
              letterSpacing: "0.02em",
              boxShadow: "0 18px 44px rgba(232,122,47,0.32)",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.boxShadow = "0 22px 52px rgba(232,122,47,0.42)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 18px 44px rgba(232,122,47,0.32)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>

          <a
            href="tel:+917977416112"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-4"
            style={{
              borderColor: "rgba(255,255,255,0.22)",
              background: "rgba(10, 26, 43, 0.32)",
              color: "#f8fbff",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "clamp(0.82rem, 2vw, 0.95rem)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              textDecoration: "none",
              transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(10, 26, 43, 0.32)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call 7977416112
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.8 }}
          style={{
            position: "absolute",
            bottom: "clamp(2rem, 4vw, 3rem)",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "#fff", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
