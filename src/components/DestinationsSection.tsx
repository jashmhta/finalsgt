"use client";
/*
 * DESTINATIONS SECTION — Shri Ganesh Travels
 * Fully rebuilt with real package data from the PDF itineraries
 */

import { useInView } from "@/hooks/useInView";
import { useRef } from "react";
import Link from "next/link";

const INDIA = [
  {
    name: "Kerala Backwaters",
    slug: "kerala",
    region: "Kerala",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/ganesh-travel-kerala-PMTiwpKrnW6bMgo7ySafAp.webp",
    duration: "4N / 5D",
    price: "₹14,999",
    tag: "Nature",
  },
  {
    name: "Rajasthan Heritage",
    slug: "rajasthan",
    region: "Rajasthan",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/ganesh-travel-rajasthan-fbH9YBHr77qktvgJfv8Fy8.webp",
    duration: "10N / 11D",
    price: "₹1,07,680",
    tag: "Heritage",
  },
  {
    name: "Himalayan Escape",
    slug: "himalayas",
    region: "Himachal Pradesh",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/ganesh-travel-himalayas-RAhcybNjvDRJHYf4fToc8Q.webp",
    duration: "5N / 6D",
    price: "₹18,999",
    tag: "Adventure",
  },
  {
    name: "Agra & Taj Mahal",
    slug: "rajasthan",
    region: "Uttar Pradesh",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/ganesh-travel-hero-taj-edqPTsfxFXUfBaL3fyRGxX.webp",
    duration: "2N / 3D",
    price: "₹8,999",
    tag: "Pilgrimage",
  },
];

const GLOBAL = [
  {
    name: "Singapore",
    slug: "singapore",
    region: "South-East Asia",
    image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-singapore_624447c8.jpg",
    duration: "5N / 6D",
    price: "₹49,999",
    tag: "City",
  },
  {
    name: "Dubai & Abu Dhabi",
    slug: "dubai",
    region: "Middle East",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/global-dubai-f4mrHZZYQTxk67DoiymWhf.webp",
    duration: "6N / 7D",
    price: "₹48,555",
    tag: "Luxury",
  },
  {
    name: "Bali, Indonesia",
    slug: "bali",
    region: "South-East Asia",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/global-bali-g7C8vYAvnaCzeGYbhEpmqV.webp",
    duration: "6N / 7D",
    price: "₹54,999",
    tag: "Tropical",
  },
  {
    name: "Sri Lanka",
    slug: "sri-lanka",
    region: "South Asia",
    image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-sri-lanka_147875fb.jpg",
    duration: "7N / 8D",
    price: "₹55,750",
    tag: "Cultural",
  },
  {
    name: "Thailand",
    slug: "thailand",
    region: "South-East Asia",
    image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-thailand_1df987a8.jpg",
    duration: "5N / 6D",
    price: "₹38,999",
    tag: "Beach",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    region: "Europe",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663200820264/nnuVRcXfsaswMDXqi7uZ6K/global-switzerland-4CZTPQKc5hzE8YR3GzDyMo.webp",
    duration: "7N / 8D",
    price: "₹1,24,999",
    tag: "Luxury",
  },
];

function SectionHeader({ eyebrow, title, italic, subtitle, align = "left" }: {
  eyebrow: string; title: string; italic: string; subtitle: string; align?: "left" | "center";
}) {
  const { ref, isVisible } = useInView(0.2);
  return (
    <div
      ref={ref}
      style={{
        textAlign: align,
        marginBottom: "2.5rem",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
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
          background: "linear-gradient(135deg, var(--orange-50), rgba(232,244,253,0.5))",
          borderRadius: "6px",
          border: "1px solid var(--orange-200)",
        }}
      >
        {eyebrow}
      </span>
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.8rem, 4vw, 3.2rem)",
          fontWeight: 600,
          color: "var(--blue-900)",
          lineHeight: 1.08,
          letterSpacing: "-1px",
        }}
      >
        {title}{" "}
        <em style={{ fontStyle: "italic", color: "var(--orange-500)", fontWeight: 500 }}>{italic}</em>
      </h2>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
          color: "var(--blue-700)",
          marginTop: "0.8rem",
          lineHeight: 1.6,
          maxWidth: align === "center" ? "560px" : "480px",
          margin: align === "center" ? "0.8rem auto 0" : "0.8rem 0 0",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

function DestCard({ dest, index }: { dest: typeof INDIA[0]; index: number }) {
  const { ref, isVisible } = useInView(0.1);

  return (
    <Link href={`/destination/${dest.slug}`}>
      <div
        ref={ref}
        style={{
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
          cursor: "pointer",
          aspectRatio: "3/4",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.95)",
          transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
          boxShadow: "0 8px 32px rgba(10, 42, 66, 0.1)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(-6px) scale(1.02)";
          el.style.boxShadow = "0 20px 56px rgba(10, 42, 66, 0.18)";
          const img = el.querySelector("img") as HTMLImageElement;
          if (img) img.style.transform = "scale(1.08)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = "translateY(0) scale(1)";
          el.style.boxShadow = "0 8px 32px rgba(10, 42, 66, 0.1)";
          const img = el.querySelector("img") as HTMLImageElement;
          if (img) img.style.transform = "scale(1)";
        }}
      >
        <img
          src={dest.image}
          alt={dest.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(10, 40, 70, 0.82) 0%, rgba(232, 122, 47, 0.08) 42%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "absolute", top: "14px", left: "14px", background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))", color: "#fff", fontSize: "0.6rem", fontWeight: 700, fontFamily: "var(--font-sans)", padding: "4px 10px", borderRadius: "6px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          {dest.tag}
        </div>
        <div style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(232, 244, 253, 0.2)", backdropFilter: "blur(12px)", color: "#fff", fontSize: "0.65rem", fontWeight: 600, fontFamily: "var(--font-sans)", padding: "4px 10px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.2)" }}>
          {dest.duration}
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.25rem" }}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.6rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "4px" }}>
            {dest.region}
          </p>
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.1rem, 3vw, 1.35rem)", fontWeight: 600, color: "#fff", lineHeight: 1.15, marginBottom: "10px" }}>
            {dest.name}
          </h3>
          <div className="flex items-center justify-between" style={{ gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "1rem", color: "var(--orange-300)", fontWeight: 700 }}>
              {dest.price}
              <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.5)", fontWeight: 400, marginLeft: "4px" }}>/ person</span>
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))", color: "#fff", fontSize: "0.7rem", fontWeight: 600, fontFamily: "var(--font-sans)", padding: "6px 16px", borderRadius: "8px", boxShadow: "0 2px 12px rgba(232, 122, 47, 0.3)" }}>
              View →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/shri_ganesh_tours_n_travels?igsh=NDM1dGNvNDdpYno2";

const GALLERY_ITEMS = [
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-varanasi_61db5602.jpg", alt: "Taj Mahal at sunrise", caption: "Taj Mahal, Agra" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg", alt: "Kerala backwaters", caption: "Kerala Backwaters" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-seychelles_b463753f.jpg", alt: "Seychelles beach", caption: "Seychelles" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-bali_56ea95d1.jpg", alt: "Bali rice terraces", caption: "Bali, Indonesia" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg", alt: "Dubai skyline", caption: "Dubai, UAE" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg", alt: "Rajasthan palace", caption: "Rajasthan Heritage" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg", alt: "Himalayan mountains", caption: "Himachal Pradesh" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-thailand_1df987a8.jpg", alt: "Thailand temples", caption: "Thailand" },
  { src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-maldives_02c84184.jpg", alt: "Maldives overwater bungalow", caption: "Maldives" },
];

function InstagramGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useInView(0.1);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "clamp(4rem, 8vw, 6rem) 0",
        background: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          padding: "0 1rem",
        }}
      >
        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
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
            <InstagramIcon />
            @shri_ganesh_tours_n_travels
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
          Our Tours{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>on Instagram</em>
        </h2>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", color: "var(--blue-600)", marginTop: "0.6rem" }}>
          Photos and videos from our actual tours. Follow us for updates on new packages and group departures.
        </p>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "4px",
        }}
      >
        {GALLERY_ITEMS.map((item, i) => (
          <a
            key={i}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "block",
              aspectRatio: "1 / 1",
              overflow: "hidden",
              textDecoration: "none",
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease",
                display: "block",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(10, 42, 66, 0.6)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                opacity: 0,
                transition: "opacity 0.3s ease",
                color: "#fff",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0")}
            >
              <InstagramIcon />
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>View on Instagram</span>
              <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", color: "rgba(255,255,255,0.75)" }}>{item.caption}</span>
            </div>
          </a>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.75rem 2rem",
            borderRadius: "9999px",
            background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
            color: "#fff",
            fontFamily: "var(--font-sans)",
            fontSize: "0.9rem",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 8px 28px rgba(220,39,67,0.28)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          <InstagramIcon />
          Follow @shri_ganesh_tours_n_travels
        </a>
      </div>
    </section>
  );
}

export default function DestinationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: mainRef, isVisible: mainVisible } = useInView(0.05);

  return (
    <>
      {/* ── INSTAGRAM GALLERY ─────────────────────────────────────── */}
      <InstagramGallery />
      <div
        ref={mainRef}
        style={{
          textAlign: "center",
          padding: "clamp(3rem, 6vw, 5rem) 1rem 0",
          background: "linear-gradient(180deg, var(--blue-50) 0%, rgba(232,244,253,0.6) 100%)",
          opacity: mainVisible ? 1 : 0,
          transform: mainVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
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
            background: "linear-gradient(135deg, var(--orange-50), rgba(232,244,253,0.5))",
            borderRadius: "6px",
            border: "1px solid var(--orange-200)",
          }}
        >
          37+ Tour Packages
        </span>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 600,
            color: "var(--blue-900)",
            lineHeight: 1.08,
            letterSpacing: "-1px",
          }}
        >
          Where Will You{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)", fontWeight: 500 }}>Go Next?</em>
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
          Domestic and international tours with fixed group departures every month. Meals, hotels, and transport included in every package.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <Link href="/domestic">
            <button
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                fontWeight: 600,
                padding: "0.65rem 2rem",
                borderRadius: "9999px",
                border: "none",
                background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))",
                color: "white",
                boxShadow: "0 6px 20px rgba(232, 122, 47, 0.28)",
                cursor: "pointer",
              }}
            >
              See All 37+ Packages →
            </button>
          </Link>
        </div>
      </div>

      {/* India Destinations */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--blue-50) 0%, rgba(232,244,253,0.6) 50%, var(--blue-100) 100%)",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem) clamp(3rem, 5vw, 5rem)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "10%", right: "-5%", width: "300px", height: "300px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,122,47,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <SectionHeader
            eyebrow="Incredible India"
            title="Sacred Peaks,"
            italic="Golden Coasts."
            subtitle="Pilgrimages, hill stations, beaches, and heritage circuits. Fixed group departures every month from Mumbai."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 260px), 1fr))", gap: "1.25rem" }}>
            {INDIA.map((d, i) => <DestCard key={d.name} dest={d} index={i} />)}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div style={{ background: "linear-gradient(90deg, var(--orange-500) 0%, var(--orange-400) 30%, var(--blue-500) 70%, var(--blue-600) 100%)", padding: "1rem 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <div style={{ display: "inline-block", animation: "marquee 28s linear infinite" }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", fontWeight: 500, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em", marginRight: "3rem" }}>
              Singapore · Bali · Dubai · Sri Lanka · Thailand · Vietnam · Switzerland · Bhutan · Maldives · Seychelles · Kerala · Rajasthan
              <span style={{ color: "#fff", margin: "0 1.5rem" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Global Destinations */}
      <section
        style={{
          background: "linear-gradient(180deg, var(--blue-100) 0%, var(--blue-50) 50%, rgba(232,244,253,0.4) 100%)",
          padding: "clamp(3rem, 6vw, 6rem) 0 clamp(4rem, 7vw, 7rem)",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: "250px", height: "250px", borderRadius: "50%", background: "radial-gradient(circle, rgba(232,122,47,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 3vw, 2rem)", position: "relative", zIndex: 1 }}>
          <SectionHeader
            eyebrow="International Tours"
            title="Beyond Borders,"
            italic="Beyond Dreams."
            subtitle="Dubai, Singapore, Bali, Thailand, Switzerland, Sri Lanka, and 25+ more countries. Indian meals on all international tours."
            align="center"
          />
        </div>

        <div
          ref={scrollRef}
          style={{ display: "flex", gap: "1.25rem", overflowX: "auto", padding: "0 clamp(1rem, 3vw, 2rem) 1rem", scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          <div style={{ flex: "0 0 max(0px, calc((100vw - 1280px) / 2))" }} />
          {GLOBAL.map((d, i) => (
            <div key={d.name} style={{ flex: "0 0 clamp(240px, 38vw, 320px)", scrollSnapAlign: "start" }}>
              <div style={{ height: "clamp(340px, 48vw, 440px)" }}>
                <DestCard dest={d} index={i} />
              </div>
            </div>
          ))}
          <div style={{ flex: "0 0 1rem" }} />
        </div>

        <div className="flex items-center justify-center gap-3" style={{ marginTop: "2rem" }}>
          {[{ dir: -1, label: "←" }, { dir: 1, label: "→" }].map(({ dir, label }) => (
            <button
              key={label}
              onClick={() => scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" })}
              style={{ width: "44px", height: "44px", borderRadius: "50%", border: "1.5px solid var(--orange-500)", background: "transparent", color: "var(--orange-500)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", transition: "all 0.2s", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, var(--orange-500), var(--orange-400))"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "transparent"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange-500)"; e.currentTarget.style.borderColor = "var(--orange-500)"; }}
            >
              {label}
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link href="/domestic">
            <button
              style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", fontWeight: 600, padding: "0.65rem 2.5rem", borderRadius: "9999px", border: "1.5px solid var(--orange-400)", background: "transparent", color: "var(--orange-500)", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, var(--orange-500), var(--orange-400))"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "transparent"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--orange-500)"; e.currentTarget.style.borderColor = "var(--orange-400)"; }}
            >
              View All International Packages →
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
