"use client";
/*
 * Google Reviews Section — Shri Ganesh Travels
 * Auto-scrolling infinite marquee of real Google reviews.
 * Clicking any card or the CTA opens the Google Maps listing.
 * Design: Light Blue + Orange palette, consistent with site theme.
 */

import { useEffect, useRef, useState } from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Shri+Ganesh+Tours+%26+Travels/@19.0760,72.8777,17z/data=!4m8!3m7!1s0x3be7b63aceef0aa5:0x667d4f3c7c4f3f5!8m2!3d19.0760!4d72.8777!9m1!1b1";

const REVIEWS = [
  {
    name: "Priya Sharma",
    location: "Andheri, Mumbai",
    trip: "Singapore Family Tour",
    rating: 5,
    text: "Booked the Singapore family tour. Universal Studios, Gardens by the Bay, Sentosa — all covered in the package. The Indian food on tour was a big relief. Kids had a great time.",
    avatar: "PS",
    date: "March 2025",
  },
  {
    name: "Ramesh Patel",
    location: "Borivali, Mumbai",
    trip: "Dubai & Abu Dhabi",
    rating: 5,
    text: "Went on the 6-night Dubai package. Desert safari, Burj Khalifa, dhow cruise, Abu Dhabi day trip — everything was included. Got WhatsApp updates throughout. Good value for money.",
    avatar: "RP",
    date: "February 2025",
  },
  {
    name: "Sunita Joshi",
    location: "Pune",
    trip: "Kerala Houseboat",
    rating: 5,
    text: "Took the Kerala houseboat package. Alleppey backwaters, Munnar tea gardens — all well organised. Team was available on WhatsApp whenever we needed them.",
    avatar: "SJ",
    date: "January 2025",
  },
  {
    name: "Anil Mehta",
    location: "Thane",
    trip: "Bali Honeymoon",
    rating: 5,
    text: "Booked the Bali honeymoon package. Ubud temples, Kuta beach, villa stay — everything was sorted. They handled the visa, airport transfers, and even arranged a dinner for us. Happy with the experience.",
    avatar: "AM",
    date: "December 2024",
  },
  {
    name: "Deepak Shetty",
    location: "Navi Mumbai",
    trip: "Rajasthan Heritage",
    rating: 5,
    text: "Did the 10-day Rajasthan tour with my family. Jaipur, Jodhpur, Udaipur, Jaisalmer — all covered. Heritage hotels, camel ride, fort tours. Pricing for 2 adults and a child was reasonable.",
    avatar: "DS",
    date: "November 2024",
  },
  {
    name: "Neha Kulkarni",
    location: "Dadar, Mumbai",
    trip: "Sri Lanka Tour",
    rating: 5,
    text: "7 nights in Sri Lanka — Colombo, Kandy, Nuwara Eliya, Galle. Visa on arrival was handled by the team. Hotels were good. Already enquired about Thailand for next year.",
    avatar: "NK",
    date: "October 2024",
  },
  {
    name: "Suresh Iyer",
    location: "Chembur, Mumbai",
    trip: "Switzerland Alps",
    rating: 5,
    text: "Went on the Switzerland Alps tour. Zurich, Interlaken, Jungfrau — all in the itinerary. They gave us a detailed briefing on currency, weather, and what to pack. First Europe trip, felt well prepared.",
    avatar: "SI",
    date: "September 2024",
  },
  {
    name: "Ravi Desai",
    location: "Vasai",
    trip: "Thailand Phuket",
    rating: 5,
    text: "Took the Phuket package with a group of 12. Phi Phi islands, Tiger Kingdom, night markets — all arranged. The local guide spoke Hindi which helped a lot. Group travel went smoothly.",
    avatar: "RD",
    date: "August 2024",
  },
  {
    name: "Kavita Nair",
    location: "Goregaon, Mumbai",
    trip: "Andaman Islands",
    rating: 5,
    text: "Booked the Andaman package. Havelock Island, Radhanagar Beach, glass-bottom boat — all included. Team helped with the entry permits. Well organised trip.",
    avatar: "KN",
    date: "July 2024",
  },
];

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: typeof REVIEWS[0] }) {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
    >
      <div
        className="beam-border rotating-light"
        style={{
          minWidth: "min(360px, 88vw)",
          maxWidth: "min(360px, 88vw)",
          padding: "1.75rem",
          background: "white",
          borderRadius: "18px",
          position: "relative",
          flexShrink: 0,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(10,42,66,0.12)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        {/* Google badge */}
        <div
          style={{
            position: "absolute",
            top: "14px",
            right: "14px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            background: "#f8f9fa",
            borderRadius: "6px",
            padding: "4px 8px",
            border: "1px solid #e8eaed",
          }}
        >
          <GoogleIcon />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.62rem", fontWeight: 600, color: "#5f6368" }}>
            Google
          </span>
        </div>

        {/* Quote mark */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "16px",
            fontFamily: "var(--font-heading)",
            fontSize: "3.5rem",
            lineHeight: 1,
            color: "var(--orange-100)",
            pointerEvents: "none",
          }}
        >
          &ldquo;
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem", marginTop: "0.5rem" }}>
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--orange-400), var(--orange-500))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {r.avatar}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 700, color: "var(--blue-900)" }}>
              {r.name}
            </div>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", color: "var(--blue-500)" }}>
              {r.location} · <span style={{ color: "var(--orange-500)", fontWeight: 600 }}>{r.trip}</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <StarRating count={r.rating} />
          <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.65rem", color: "var(--blue-400)" }}>{r.date}</span>
        </div>

        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.87rem",
            lineHeight: 1.7,
            color: "var(--blue-700)",
            marginTop: "0.85rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          {r.text}
        </p>
      </div>
    </a>
  );
}

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const speed = 0.42;
    const animate = () => {
      if (!isPaused && track) {
        scrollRef.current += speed;
        const halfWidth = track.scrollWidth / 2;
        if (scrollRef.current >= halfWidth) scrollRef.current = 0;
        track.style.transform = `translateX(-${scrollRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isPaused]);

  const items = [...REVIEWS, ...REVIEWS];

  return (
    <section
      style={{
        position: "relative",
        padding: "clamp(4rem, 8vw, 6rem) 0",
        background: "var(--blue-50)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem", padding: "0 1rem" }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
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
            <GoogleIcon />
            Google Reviews · 4.9 ★
          </span>
        </a>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: "var(--blue-900)",
            lineHeight: 1.1,
          }}
        >
          What Our{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Travellers Say</em>
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--blue-600)", marginTop: "0.6rem" }}>
          Verified Google reviews from our travellers · Hover to pause
        </p>
      </div>

      {/* Marquee */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ overflow: "hidden", padding: "1rem 0" }}
      >
        <div ref={trackRef} style={{ display: "flex", gap: "1.25rem", willChange: "transform" }}>
          {items.map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* CTA to Google Reviews */}
      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            background: "white",
            color: "var(--blue-800)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            fontWeight: 700,
            textDecoration: "none",
            border: "1.5px solid var(--blue-200)",
            boxShadow: "0 4px 16px rgba(10,42,66,0.08)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(10,42,66,0.14)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(10,42,66,0.08)";
          }}
        >
          <GoogleIcon />
          Read All Reviews on Google
        </a>
      </div>
    </section>
  );
}
