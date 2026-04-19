import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "6rem 2rem", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "4rem", fontWeight: 800, color: "#1e3a5f", marginBottom: "1rem" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "#1e3a5f", marginBottom: "1rem" }}>Page Not Found</h2>
      <p style={{ color: "#64748b", marginBottom: "2rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" style={{ display: "inline-block", background: "#f97316", color: "#fff", padding: "0.75rem 2rem", borderRadius: "9999px", textDecoration: "none", fontWeight: 600 }}>
        Back to Home
      </Link>
    </div>
  );
}
