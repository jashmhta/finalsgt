"use client";
/*
 * Error Boundary — Shri Ganesh Travels
 * Branded recovery screen with light blue + orange palette
 */

import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            background: "var(--blue-50)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: "560px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "var(--orange-50)",
                border: "1px solid var(--orange-200)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
              }}
            >
              <AlertTriangle size={32} style={{ color: "var(--orange-500)" }} />
            </div>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--blue-900)",
                marginBottom: "0.5rem",
              }}
            >
              Something went wrong
            </h2>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--blue-600)",
                marginBottom: "1.5rem",
                lineHeight: 1.6,
              }}
            >
              An unexpected error occurred. Please try reloading the page.
            </p>

            <div
              style={{
                width: "100%",
                padding: "1rem",
                borderRadius: "12px",
                background: "white",
                border: "1px solid var(--blue-200)",
                overflow: "auto",
                marginBottom: "1.5rem",
                maxHeight: "200px",
              }}
            >
              <pre
                style={{
                  fontSize: "0.75rem",
                  color: "var(--blue-600)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  textAlign: "left",
                  margin: 0,
                }}
              >
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.8rem 2rem",
                borderRadius: "9999px",
                border: "none",
                background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))",
                color: "#fff",
                fontFamily: "var(--font-sans)",
                fontSize: "0.9rem",
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(232, 122, 47, 0.3)",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
