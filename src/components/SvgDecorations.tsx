/*
 * Reusable SVG decorations — waves, circles, compass, plane
 * Light Blue + Orange palette
 */

export function WaveDivider({ flip = false, color = "var(--blue-100)" }: { flip?: boolean; color?: string }) {
  return (
    <div style={{ transform: flip ? "scaleY(-1)" : "none", lineHeight: 0, marginTop: flip ? "-1px" : 0, marginBottom: flip ? 0 : "-1px" }}>
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function FloatingCircles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <div
        className="animate-float-slow"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,122,47,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "60%",
          right: "8%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(77,163,224,0.1) 0%, transparent 70%)",
          animationDelay: "1s",
        }}
      />
      <div
        className="animate-float-slow"
        style={{
          position: "absolute",
          bottom: "15%",
          left: "15%",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid rgba(232,122,47,0.12)",
          animationDelay: "2s",
        }}
      />
    </div>
  );
}

export function CompassSvg({ size = 48, color = "var(--orange-400)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="22" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <circle cx="24" cy="24" r="16" stroke={color} strokeWidth="1" opacity="0.2" />
      <path d="M24 6L26 12H22L24 6Z" fill={color} opacity="0.6" />
      <path d="M24 42L22 36H26L24 42Z" fill={color} opacity="0.4" />
      <path d="M6 24L12 22V26L6 24Z" fill={color} opacity="0.4" />
      <path d="M42 24L36 26V22L42 24Z" fill={color} opacity="0.4" />
      <polygon points="24,14 28,24 24,34 20,24" fill={color} opacity="0.15" />
    </svg>
  );
}

export function PlaneSvg({ size = 32, color = "var(--orange-500)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.6 }}>
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
}

export function DotPattern({ opacity = 0.04 }: { opacity?: number }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        backgroundImage: `radial-gradient(circle, rgba(232,122,47,${opacity}) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}
