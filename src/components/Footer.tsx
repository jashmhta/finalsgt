/*
 * Footer — Shri Ganesh Travels
 * Updated with Packages link and real destination categories
 */

import { useInView } from "@/hooks/useInView";
import Link from "next/link";

const LOGO_URL = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-new_9d44f3f0.png";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const SOCIALS = [
  { name: "Facebook", Icon: FacebookIcon, href: "#" },
  { name: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/shri_ganesh_tours_n_travels?igsh=NDM1dGNvNDdpYno2" },
  { name: "YouTube", Icon: YouTubeIcon, href: "#" },
];

export default function Footer() {
  const { ref: ctaRef, isVisible: ctaVisible } = useInView(0.15);
  const { ref: linksRef, isVisible: linksVisible } = useInView(0.1);

  return (
    <footer>
      {/* CTA Banner */}
      <section
        ref={ctaRef}
        style={{
          background: "linear-gradient(135deg, var(--orange-500) 0%, var(--orange-400) 35%, var(--blue-400) 100%)",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1rem, 3vw, 2rem)",
          textAlign: "center",
          opacity: ctaVisible ? 1 : 0,
          transform: ctaVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "200px", height: "200px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-40px", left: "-40px", width: "150px", height: "150px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />

        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
            position: "relative",
          }}
        >
          Your Next Holiday{" "}
          <em style={{ fontStyle: "italic", textShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>Starts Here.</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.88rem, 2.5vw, 1.05rem)",
            color: "rgba(255,255,255,0.92)",
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.65,
            position: "relative",
          }}
        >
          Domestic and international all-inclusive packages ready to book. WhatsApp us today and get your full itinerary within 24 hours.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap", position: "relative" }}>
          <a
            href="https://wa.me/917977416112?text=Hi!%20I%20want%20to%20book%20a%20tour.%20Please%20share%20packages."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700, background: "#fff", color: "var(--orange-600)", padding: "0.8rem 2rem", borderRadius: "12px", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp for a Free Quote
          </a>
          <a
            href="tel:+917977416112"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600, background: "rgba(255,255,255,0.18)", color: "#fff", padding: "0.8rem 2rem", borderRadius: "12px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)", transition: "transform 0.2s, background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; e.currentTarget.style.background = "rgba(255,255,255,0.28)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "rgba(255,255,255,0.18)"; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call 7977416112
          </a>
        </div>
      </section>

      {/* Links Grid */}
      <section
        ref={linksRef}
        style={{
          background: "linear-gradient(180deg, var(--blue-800) 0%, var(--blue-900) 60%, #0f2d42 100%)",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)",
          opacity: linksVisible ? 1 : 0,
          transform: linksVisible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "0", left: "50%", transform: "translateX(-50%)", width: "60%", height: "2px", background: "linear-gradient(90deg, transparent, var(--orange-400), transparent)", opacity: 0.5 }} />

        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))", gap: "2rem" }}>
          {/* Brand */}
          <div>
            <img src={LOGO_URL} alt="Shri Ganesh Travels" style={{ height: "60px", width: "auto", objectFit: "contain", display: "block", marginBottom: "1rem", filter: "brightness(1.5) contrast(0.9)" }} />
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.85rem", color: "var(--blue-300)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Group and family tours from Mumbai since 1987. Domestic, international, honeymoon, and corporate packages. All-inclusive, all handled.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {SOCIALS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  style={{ width: "38px", height: "38px", borderRadius: "10px", background: "linear-gradient(135deg, rgba(232,122,47,0.15), rgba(168,212,245,0.15))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--orange-300)", textDecoration: "none", transition: "all 0.2s", border: "1px solid rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, var(--orange-500), var(--orange-400))"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "scale(1.1)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(232,122,47,0.15), rgba(168,212,245,0.15))"; e.currentTarget.style.color = "var(--orange-300)"; e.currentTarget.style.transform = "scale(1)"; }}
                >
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange-400)", marginBottom: "1rem" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Home", href: "/" },
                { label: "Domestic Tours", href: "/domestic" },
                { label: "International Tours", href: "/international" },
                { label: "Group Tours", href: "/group-tours" },
                { label: "Customized Tours", href: "/customized" },
                { label: "Gallery", href: "/gallery" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label} style={{ marginBottom: "0.6rem" }}>
                  <Link href={link.href}
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-300)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLElement).style.color = "var(--orange-300)"; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLElement).style.color = "var(--blue-300)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Packages */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange-400)", marginBottom: "1rem" }}>Popular Packages</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                { label: "Singapore Tour", href: "/destination/singapore" },
                { label: "Dubai & Abu Dhabi", href: "/destination/dubai" },
                { label: "Bali, Indonesia", href: "/destination/bali" },
                { label: "Kerala Backwaters", href: "/destination/kerala" },
                { label: "Sri Lanka", href: "/destination/sri-lanka" },
                { label: "Switzerland Alps", href: "/destination/switzerland" },
              ].map((d) => (
                <li key={d.label} style={{ marginBottom: "0.6rem" }}>
                  <Link href={d.href}
                    style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-300)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLElement).style.color = "var(--orange-300)"; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { (e.target as HTMLElement).style.color = "var(--blue-300)"; }}
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--orange-400)", marginBottom: "1rem" }}>Contact Us</h4>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-300)", lineHeight: 2 }}>
              <p>
                <a href="tel:+917977416112" style={{ color: "#fff", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 79774 16112
                </a>
              </p>
              <p>
                <a href="tel:+919082616663" style={{ color: "#fff", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  +91 90826 16663
                </a>
              </p>
              <p>
                <a href="https://wa.me/917977416112" target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange-300)", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp Us
                </a>
              </p>
              <p>
                <a href="mailto:shriganeshtravelsofficial@gmail.com" style={{ color: "var(--blue-400)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  shriganeshtravelsofficial@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div
        style={{
          background: "linear-gradient(90deg, var(--blue-900) 0%, #0f2d42 50%, var(--blue-800) 100%)",
          padding: "1.1rem clamp(1rem, 3vw, 2rem)",
          textAlign: "center",
          borderTop: "1px solid rgba(232, 122, 47, 0.15)",
        }}
      >
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "0.78rem", color: "var(--blue-400)", margin: 0 }}>
          &copy; {new Date().getFullYear()} Shri Ganesh Travels, Mumbai. All rights reserved. &nbsp;·&nbsp; Est. 1987 &nbsp;·&nbsp; Powered by Mangirish Hospitality
        </p>
      </div>
    </footer>
  );
}
