"use client";
/**
 * LazyImage — Lighthouse-optimized image component
 * - Native lazy loading (loading="lazy")
 * - Blur-up placeholder effect
 * - Proper alt text enforcement
 * - Responsive sizes attribute
 * - Aspect ratio to prevent CLS (Cumulative Layout Shift)
 */
import { useState, useRef, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  aspectRatio?: string; // e.g. "16/9", "4/3", "1/1"
  objectFit?: "cover" | "contain" | "fill" | "none";
  priority?: boolean; // Set true for above-the-fold images (no lazy loading)
  onLoad?: () => void;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  style = {},
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  aspectRatio,
  objectFit = "cover",
  priority = false,
  onLoad,
}: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true);
    }
  }, []);

  const containerStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    ...(aspectRatio ? { aspectRatio } : {}),
    ...style,
  };

  const imgStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit,
    transition: "opacity 0.4s ease, filter 0.4s ease",
    opacity: loaded ? 1 : 0,
    filter: loaded ? "none" : "blur(8px)",
    display: "block",
  };

  const placeholderStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(135deg, #e8f4f8 0%, #f0e8d8 100%)",
    display: loaded ? "none" : "block",
  };

  if (error) {
    return (
      <div
        style={{
          ...containerStyle,
          background: "linear-gradient(135deg, #e8f4f8 0%, #f0e8d8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className={className}
      >
        <span style={{ fontSize: "2rem", opacity: 0.4 }}>🏔️</span>
      </div>
    );
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={placeholderStyle} aria-hidden="true" />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        sizes={sizes}
        style={imgStyle}
        onLoad={() => {
          setLoaded(true);
          onLoad?.();
        }}
        onError={() => setError(true)}
      />
    </div>
  );
}
