"use client";
/*
 * HERO BACKGROUND — Cinematic Image Slideshow
 * Light blue & golden hour AI-generated images
 * Ken Burns slow zoom effect on each slide
 * Smooth crossfade transitions, dot indicators, location labels
 * NO heavy overlays — only subtle gradient for text readability
 */

import { useEffect, useRef, useState, useCallback } from "react";

const SLIDES = [
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-1-taj-mahal-27YjyXGmXwYjrqgd3BNk5N.png",
    label: "Taj Mahal, India",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-2-santorini-cjYbRMi7eVdarJuxb7YozA.png",
    label: "Santorini, Greece",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-3-maldives-4APhcvtErzbkVPpzitTeke.png",
    label: "Maldives",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-4-dubai-bBTdrpB2JM6iZG5XNsChCX.png",
    label: "Dubai, UAE",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-5-bali-PfR8LPxiYXtXeyECSeWpNG.png",
    label: "Bali, Indonesia",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-6-kerala-b6QkDyigerBiahDaVaQWEw.png",
    label: "Kerala, India",
  },
  {
    url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/hero-7-singapore-ZuhRNrcoYXgbD9iYUjG2fW.png",
    label: "Singapore",
  },
];

const SLIDE_DURATION = 6000;
const FADE_MS = 1400;

export default function VideoBackground() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const advance = useCallback(() => {
    const nextIdx = (current + 1) % SLIDES.length;
    setNext(nextIdx);
    setFading(true);
    fadeTimerRef.current = setTimeout(() => {
      setCurrent(nextIdx);
      setNext(null);
      setFading(false);
    }, FADE_MS);
  }, [current]);

  useEffect(() => {
    timerRef.current = setTimeout(advance, SLIDE_DURATION);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [advance]);

  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
  }, []);

  const goTo = (i: number) => {
    if (i === current || fading) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    setNext(i);
    setFading(true);
    fadeTimerRef.current = setTimeout(() => {
      setCurrent(i);
      setNext(null);
      setFading(false);
    }, FADE_MS);
  };

  // Ken Burns CSS keyframes injected once
  const kenBurnsStyle = `
    @keyframes kenBurns {
      0% { transform: scale(1); }
      100% { transform: scale(1.08); }
    }
  `;

  const imgStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        background: "#0c1a2a",
      }}
    >
      <style>{kenBurnsStyle}</style>

      {/* Current slide */}
      <div
        key={`cur-${current}`}
        style={{
          position: "absolute",
          inset: 0,
          opacity: fading ? 0 : 1,
          transition: fading ? `opacity ${FADE_MS}ms ease` : "none",
          zIndex: 1,
          animation: `kenBurns ${SLIDE_DURATION + FADE_MS}ms ease-out forwards`,
          willChange: "transform, opacity",
        }}
      >
        <img
          src={SLIDES[current].url}
          alt={SLIDES[current].label}
          style={imgStyle}
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Next slide fades in */}
      {next !== null && (
        <div
          key={`next-${next}`}
          style={{
            position: "absolute",
            inset: 0,
            opacity: fading ? 1 : 0,
            transition: `opacity ${FADE_MS}ms ease`,
            zIndex: 2,
            animation: `kenBurns ${SLIDE_DURATION + FADE_MS}ms ease-out forwards`,
            willChange: "transform, opacity",
          }}
        >
          <img
            src={SLIDES[next].url}
            alt={SLIDES[next].label}
            style={imgStyle}
            loading="eager"
            decoding="async"
          />
        </div>
      )}

      {/* Subtle bottom gradient for text readability — light images need darker gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.08) 50%, rgba(0,0,0,0.45) 100%)",
          zIndex: 3,
          pointerEvents: "none",
        }}
      />

      {/* Slide indicator dots */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1rem, 3vw, 1.5rem)",
          right: "clamp(1rem, 3vw, 1.75rem)",
          display: "flex",
          gap: "6px",
          zIndex: 10,
          alignItems: "center",
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`View ${SLIDES[i].label}`}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: "9999px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.4s ease, background 0.3s",
            }}
          />
        ))}
      </div>

      {/* Location label */}
      <div
        style={{
          position: "absolute",
          bottom: "clamp(1rem, 3vw, 1.5rem)",
          left: "clamp(1rem, 3vw, 1.75rem)",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "#fff",
            display: "inline-block",
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.6rem, 1.5vw, 0.72rem)",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.9)",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          {SLIDES[current].label}
        </span>
      </div>

      {/* Preload next images */}
      <div style={{ display: "none" }}>
        {SLIDES.map((s, i) =>
          i !== current ? (
            <link key={i} rel="preload" as="image" href={s.url} />
          ) : null
        )}
      </div>
    </div>
  );
}
