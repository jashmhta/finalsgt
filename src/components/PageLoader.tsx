"use client";
/**
 * PageLoader — Custom logo loader animation
 * Design: Light/Day theme — white background, navy + amber accents
 * Shows ONLY on the very first page load of the session (not on route changes)
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LOGO_URL = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-new_9d44f3f0.png";
const SESSION_KEY = "sgt_loader_shown";

export default function PageLoader() {
  // Check if loader was already shown this session
  const [visible, setVisible] = useState(() => {
    try {
      return !sessionStorage.getItem(SESSION_KEY);
    } catch {
      return false;
    }
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // Mark as shown so it won't appear again this session
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // ignore
    }

    // Start fade-out after 2.0s
    const fadeTimer = setTimeout(() => setFadeOut(true), 2000);
    // Remove from DOM after fade completes
    const removeTimer = setTimeout(() => setVisible(false), 2800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      {!fadeOut && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
          }}
        >
          {/* Soft amber glow behind logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.18, scale: 2 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            style={{
              position: "absolute",
              width: 360,
              height: 360,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,158,11,0.5) 0%, rgba(245,158,11,0.08) 50%, transparent 70%)",
              filter: "blur(24px)",
            }}
          />

          {/* Outer ring pulse — navy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.18, 0], scale: [0.6, 1.5, 1.9] }}
            transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity, repeatDelay: 0.1 }}
            style={{
              position: "absolute",
              width: 200,
              height: 200,
              borderRadius: "50%",
              border: "1.5px solid rgba(30,58,95,0.3)",
            }}
          />

          {/* Inner ring — amber */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: [0, 0.35, 0], scale: [0.4, 1.1, 1.5] }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.3, repeat: Infinity, repeatDelay: 0.1 }}
            style={{
              position: "absolute",
              width: 140,
              height: 140,
              borderRadius: "50%",
              border: "1px solid rgba(245,158,11,0.45)",
            }}
          />

          {/* Logo + brand name + dots */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}
          >
            <img
              src={LOGO_URL}
              alt="Shri Ganesh Travels"
              style={{ width: 108, height: 108, objectFit: "contain", filter: "drop-shadow(0 4px 16px rgba(245,158,11,0.25)) drop-shadow(0 2px 8px rgba(30,58,95,0.12))" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ textAlign: "center" }}
            >
              <p style={{ color: "#1e3a5f", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 600, margin: 0 }}>
                Shri Ganesh Travels
              </p>
              <p style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif", fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 400, marginTop: "4px" }}>
                Since 1987
              </p>
            </motion.div>

            {/* Loading dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ display: "flex", gap: "6px", marginTop: "4px" }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  style={{ display: "block", width: 6, height: 6, borderRadius: "50%", background: "#f59e0b" }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
