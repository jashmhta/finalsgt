"use client";
/*
 * NAVBAR — Floating Circular Glass Pill
 * Disappears while actively scrolling, reappears when scroll stops
 * Compact centered pill with frosted glass effect
 */

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Home, Globe, MapPin, Image, Info, Mail, Phone, BookOpen } from "lucide-react";

const LOGO_URL = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-transparent.png";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: Home },
  { label: "Domestic", href: "/domestic", icon: MapPin },
  { label: "International", href: "/international", icon: Globe },
  { label: "Gallery", href: "/gallery", icon: Image },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "About", href: "/about", icon: Info },
  { label: "Contact", href: "/contact", icon: Mail },
];

function useScrollHide(mobileMenuOpen: boolean) {
  const [navVisible, setNavVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setAtTop(y < 30);
    if (mobileMenuOpen) return;
    if (y > 80) setNavVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setNavVisible(true), 350);
  }, [mobileMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (window.scrollY < 30) { setNavVisible(true); setAtTop(true); }
  }, []);

  return { navVisible, setNavVisible, atTop };
}

export default function Navbar() {
  const [location, setLoc] = useState("/");
  useEffect(() => { setLoc(window.location.pathname); }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navVisible, setNavVisible, atTop } = useScrollHide(mobileMenuOpen);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);
  useEffect(() => { if (mobileMenuOpen) setNavVisible(true); }, [mobileMenuOpen, setNavVisible]);

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);

  /* ── Glass style tokens ── */
  const glassBg = atTop ? "rgba(15, 25, 40, 0.6)" : "rgba(255, 255, 255, 0.82)";
  const glassBorder = atTop ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(200, 218, 235, 0.5)";
  const glassShadow = atTop
    ? "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
    : "0 8px 32px rgba(10,42,66,0.12), inset 0 1px 0 rgba(255,255,255,0.6)";
  const textColor = atTop ? "#ffffff" : "#1a3a5c";
  const dividerColor = atTop ? "rgba(255,255,255,0.15)" : "rgba(10,42,66,0.1)";

  return (
    <>
      {/* ═══════ DESKTOP + TABLET — Centered Floating Glass Pill ═══════ */}
      {/* Wrapper div handles centering; motion handles animation */}
      <div
        className="hidden md:block fixed z-[100]"
        style={{
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: "none",
          display: undefined,
        }}
      >
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "14px",
            pointerEvents: navVisible ? "auto" : "none",
          }}
          animate={{
            opacity: navVisible ? 1 : 0,
            y: navVisible ? 0 : -24,
            scale: navVisible ? 1 : 0.97,
          }}
          transition={{
            duration: navVisible ? 0.45 : 0.2,
            ease: navVisible ? [0.22, 1, 0.36, 1] : [0.4, 0, 1, 1],
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "2px",
              padding: "6px 14px 6px 10px",
              borderRadius: "9999px",
              background: glassBg,
              backdropFilter: "blur(28px) saturate(1.7)",
              WebkitBackdropFilter: "blur(28px) saturate(1.7)",
              border: glassBorder,
              boxShadow: glassShadow,
              transition: "background 0.45s ease, border 0.45s ease, box-shadow 0.45s ease",
              pointerEvents: "auto",
            }}
          >
            {/* Logo */}
            <Link href="/">
              <img
                src={LOGO_URL}
                alt="Shri Ganesh Travels"
                className="cursor-pointer"
                style={{
                  height: "38px",
                  width: "auto",
                  objectFit: "contain",
                  marginRight: "4px",
                  filter: atTop ? "brightness(1.08) drop-shadow(0 1px 2px rgba(0,0,0,0.25))" : "none",
                  transition: "filter 0.35s",
                }}
              />
            </Link>

            {/* Divider */}
            <div style={{ width: "1px", height: "22px", flexShrink: 0, background: dividerColor, margin: "0 6px", transition: "background 0.35s" }} />

            {/* Nav links */}
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.label} href={item.href}>
                  <span
                    className="cursor-pointer hidden lg:inline-block"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: active ? 700 : 500,
                      color: active ? "#e87a2f" : textColor,
                      padding: "7px 11px",
                      borderRadius: "9999px",
                      background: active ? (atTop ? "rgba(232,122,47,0.2)" : "rgba(232,122,47,0.1)") : "transparent",
                      transition: "color 0.2s, background 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = "#e87a2f"; e.currentTarget.style.background = atTop ? "rgba(255,255,255,0.08)" : "rgba(10,42,66,0.04)"; } }}
                    onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = textColor; e.currentTarget.style.background = "transparent"; } }}
                  >
                    {item.label}
                  </span>
                  {/* Tablet: shorter labels */}
                  <span
                    className="cursor-pointer hidden md:inline-block lg:hidden"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      fontWeight: active ? 700 : 500,
                      color: active ? "#e87a2f" : textColor,
                      padding: "5px 7px",
                      borderRadius: "9999px",
                      background: active ? (atTop ? "rgba(232,122,47,0.2)" : "rgba(232,122,47,0.1)") : "transparent",
                      transition: "color 0.2s, background 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "#e87a2f"; }}
                    onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = textColor; }}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}

            {/* Divider */}
            <div style={{ width: "1px", height: "22px", flexShrink: 0, background: dividerColor, margin: "0 4px", transition: "background 0.35s" }} />

            {/* Book Now CTA */}
            <Link href="/contact">
              <button
                className="cursor-pointer"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #e87a2f, #f09040)",
                  color: "#fff",
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  border: "none",
                  boxShadow: "0 4px 14px rgba(232,122,47,0.35)",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(232,122,47,0.45)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(232,122,47,0.35)"; }}
              >
                Book Now
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ═══════ MOBILE — Two floating glass pills ═══════ */}
      <div className="md:hidden fixed z-[100]" style={{ top: "12px", left: "12px", right: "12px" }}>
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pointerEvents: navVisible ? "auto" : "none",
          }}
          animate={{ opacity: navVisible ? 1 : 0, y: navVisible ? 0 : -20 }}
          transition={{ duration: navVisible ? 0.4 : 0.18, ease: navVisible ? [0.22, 1, 0.36, 1] : [0.4, 0, 1, 1] }}
        >
          {/* Logo pill */}
          <Link href="/">
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 12px",
                borderRadius: "9999px",
                background: glassBg,
                backdropFilter: "blur(28px) saturate(1.7)",
                WebkitBackdropFilter: "blur(28px) saturate(1.7)",
                border: glassBorder,
                boxShadow: glassShadow,
                transition: "all 0.45s ease",
                cursor: "pointer",
              }}
            >
              <img
                src={LOGO_URL}
                alt="Shri Ganesh Travels"
                style={{
                  height: "34px",
                  width: "auto",
                  objectFit: "contain",
                  filter: atTop ? "brightness(1.06) drop-shadow(0 1px 2px rgba(0,0,0,0.2))" : "none",
                  transition: "filter 0.35s",
                }}
              />
            </div>
          </Link>

          {/* Hamburger pill */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "9999px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: mobileMenuOpen ? "none" : glassBorder,
              background: mobileMenuOpen ? "linear-gradient(135deg, #e87a2f, #f09040)" : glassBg,
              backdropFilter: "blur(28px) saturate(1.7)",
              WebkitBackdropFilter: "blur(28px) saturate(1.7)",
              boxShadow: mobileMenuOpen ? "0 6px 20px rgba(232,122,47,0.35)" : glassShadow,
              color: mobileMenuOpen ? "#fff" : textColor,
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </div>

      {/* ═══════ MOBILE MENU OVERLAY ═══════ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 z-[90]"
              style={{ background: "rgba(10, 42, 66, 0.3)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ type: "spring", damping: 28, stiffness: 400 }}
              className="md:hidden fixed z-[95] overflow-hidden"
              style={{
                top: "72px",
                left: "12px",
                right: "12px",
                background: "rgba(255, 255, 255, 0.92)",
                backdropFilter: "blur(28px) saturate(1.6)",
                WebkitBackdropFilter: "blur(28px) saturate(1.6)",
                borderRadius: "24px",
                border: "1px solid rgba(200, 218, 235, 0.4)",
                boxShadow: "0 16px 48px rgba(10,42,66,0.14), inset 0 1px 0 rgba(255,255,255,0.6)",
                maxHeight: "calc(100vh - 6rem)",
                overflowY: "auto",
              }}
            >
              <nav style={{ padding: "12px", display: "flex", flexDirection: "column", gap: "4px" }}>
                {NAV_ITEMS.map((item, i) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <motion.div key={item.label} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                      <Link href={item.href}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 16px",
                            borderRadius: "16px",
                            background: active ? "rgba(232,122,47,0.08)" : "transparent",
                            color: active ? "#c2570a" : "#1a3a5c",
                            transition: "all 0.2s",
                            cursor: "pointer",
                          }}
                        >
                          <div style={{
                            width: "36px", height: "36px", borderRadius: "12px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: active ? "rgba(232,122,47,0.12)" : "rgba(232,244,253,0.6)",
                          }}>
                            <Icon size={18} />
                          </div>
                          <span style={{ fontFamily: "var(--font-sans)", fontSize: "15px", fontWeight: active ? 600 : 500 }}>
                            {item.label}
                          </span>
                          {active && <div style={{ marginLeft: "auto", width: "6px", height: "6px", borderRadius: "9999px", background: "#e87a2f" }} />}
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div style={{ padding: "0 12px 12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <a
                  href="https://wa.me/917977416112?text=Hi!%20I%20want%20to%20enquire%20about%20a%20tour%20package."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    width: "100%", padding: "14px 0", borderRadius: "16px",
                    background: "linear-gradient(135deg, #e87a2f, #f09040)",
                    color: "#fff", fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 700,
                    textDecoration: "none", boxShadow: "0 4px 16px rgba(232,122,47,0.25)",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp for Instant Quote
                </a>
                <div style={{ display: "flex", gap: "8px" }}>
                  <a href="tel:+917977416112" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "12px 0", borderRadius: "16px", background: "rgba(232,244,253,0.6)", color: "#1a5c8a", fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                    <Phone size={13} /> 7977416112
                  </a>
                  <a href="tel:+919082616663" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "12px 0", borderRadius: "16px", background: "rgba(232,244,253,0.6)", color: "#1a5c8a", fontFamily: "var(--font-sans)", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                    <Phone size={13} /> 9082616663
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
