"use client";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
      <h2 style={{ fontFamily: "var(--font-heading)", color: "#1e3a5f" }}>Something went wrong</h2>
      <p style={{ color: "#64748b", marginBottom: "1.5rem" }}>{error.message || "An unexpected error occurred."}</p>
      <button onClick={reset} style={{ background: "#f97316", color: "#fff", padding: "0.75rem 2rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontWeight: 600 }}>
        Try again
      </button>
    </div>
  );
}
