"use client";
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body style={{ textAlign: "center", padding: "4rem 2rem", fontFamily: "sans-serif" }}>
        <h2>Something went wrong</h2>
        <p style={{ color: "#666", marginBottom: "1.5rem" }}>{error.message || "An unexpected error occurred."}</p>
        <button onClick={reset} style={{ background: "#f97316", color: "#fff", padding: "0.75rem 2rem", borderRadius: "9999px", border: "none", cursor: "pointer", fontWeight: 600 }}>
          Try again
        </button>
      </body>
    </html>
  );
}
