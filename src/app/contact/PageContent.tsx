"use client";
/*
 * Contact Page — Shri Ganesh Travels
 * Enhanced with WhatsApp-first approach + full form + expanded destination list
 */

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { FloatingCircles, PlaneSvg, CompassSvg } from "@/components/SvgDecorations";

const DESTINATIONS_LIST = [
  "Kerala Backwaters (4N/5D)",
  "Rajasthan Heritage (10N/11D)",
  "Himachal Pradesh (7N/8D)",
  "Chandigarh & Manali (5N/6D)",
  "Amritsar, Dharamshala & Dalhousie (6N/7D)",
  "Varanasi & Lucknow (6N/7D)",
  "Ayodhya Premium (3N/4D)",
  "Uttarakhand Pilgrimage (7N/8D)",
  "Andaman Islands (7N/8D)",
  "Sikkim & Darjeeling (6N/7D)",
  "Ooty & Coimbatore (5N/6D)",
  "Statue of Unity Gujarat (3N/4D)",
  "Ujjain & Omkareshwar (4N/5D)",
  "Singapore (5N/6D)",
  "Dubai & Abu Dhabi (6N/7D)",
  "Bali, Indonesia (6N/7D)",
  "Sri Lanka (7N/8D)",
  "Thailand Phuket & Krabi (5N/6D)",
  "Vietnam (5N/6D)",
  "Switzerland Alps (7N/8D)",
  "Azerbaijan (6N/7D)",
  "Bhutan (8N/9D)",
  "Maldives Luxury (5N/6D)",
  "Seychelles (6N/7D)",
  "Other / Custom",
];

const QUICK_CONTACTS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: "WhatsApp (Fastest)",
    value: "+91 79774 16112",
    href: "https://wa.me/917977416112?text=Hi!%20I%20want%20to%20enquire%20about%20a%20tour%20package.",
    color: "#25d366",
    bg: "rgba(37,211,102,0.08)",
    border: "rgba(37,211,102,0.2)",
    external: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 79774 16112",
    href: "tel:+917977416112",
    color: "var(--blue-700)",
    bg: "var(--blue-50)",
    border: "var(--blue-200)",
    external: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "Alternate Number",
    value: "+91 90826 16663",
    href: "tel:+919082616663",
    color: "var(--blue-700)",
    bg: "var(--blue-50)",
    border: "var(--blue-200)",
    external: false,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: "Email Us",
    value: "shriganeshtravelsofficial@gmail.com",
    href: "mailto:shriganeshtravelsofficial@gmail.com",
    color: "var(--orange-600)",
    bg: "var(--orange-50)",
    border: "var(--orange-200)",
    external: false,
  },
];

function InputField({ label, name, type = "text", value, onChange, placeholder, required = false }: {
  label: string; name: string; type?: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; required?: boolean;
}) {
  return (
    <div>
      <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, color: "var(--blue-800)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
        {label}{required && <span style={{ color: "var(--orange-500)", marginLeft: "3px" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "10px", border: "1.5px solid var(--blue-200)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-900)", background: "#fff", outline: "none", transition: "border-color 0.2s, box-shadow 0.2s" }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "var(--orange-400)"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(232,122,47,0.08)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = "var(--blue-200)"; e.currentTarget.style.boxShadow = "none"; }}
      />
    </div>
  );
}

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ name: "", email: "", phone: "", destination: "", travelers: "", date: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Tour Enquiry: ${form.destination || "General"} — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nDestination: ${form.destination}\nTravellers: ${form.travelers}\nPreferred Date: ${form.date}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:shriganeshtravelsofficial@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ minHeight: "100vh", background: "var(--blue-50)" }}>
      <SEOHead title="Contact Us" description="Get in touch with Shri Ganesh Travels. Call 7977416112 / 9082616663 or WhatsApp us for tour enquiries. We respond within 24 hours." canonical="/contact" />
      <Navbar />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          padding: "clamp(7rem, 12vw, 9rem) 1rem clamp(2.5rem, 5vw, 3.5rem)",
          overflow: "hidden",
          background: "linear-gradient(180deg, var(--blue-50) 0%, #fff 100%)",
        }}
      >
        <FloatingCircles />
        <div className="animate-float-slow" style={{ position: "absolute", top: "25px", right: "10%", opacity: 0.25 }}><PlaneSvg size={40} /></div>
        <div className="animate-float" style={{ position: "absolute", bottom: "25px", left: "8%", opacity: 0.25 }}><CompassSvg size={48} /></div>

        <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--orange-500)", marginBottom: "1rem", padding: "6px 16px", background: "rgba(255,255,255,0.8)", borderRadius: "6px", border: "1px solid var(--orange-200)" }}>
          Response Within 24 Hours
        </span>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5vw, 3.8rem)", fontWeight: 600, color: "var(--blue-900)", lineHeight: 1.1, marginBottom: "1rem" }}>
          Get in{" "}
          <em style={{ fontStyle: "italic", color: "var(--orange-500)" }}>Touch With Us</em>
        </h1>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.05rem", color: "var(--blue-600)", maxWidth: "520px", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
          WhatsApp is fastest. Or fill the form below — we'll send you a full itinerary with pricing within 24 hours.
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem 5rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 400px), 1fr))", gap: "2rem", alignItems: "start" }}>

        {/* Left: Quick contacts */}
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "1.25rem" }}>
            Reach Us Directly
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
            {QUICK_CONTACTS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1.1rem 1.25rem",
                  borderRadius: "14px",
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  textDecoration: "none",
                  color: c.color,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(10,42,66,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ flexShrink: 0, color: c.color }}>{c.icon}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: "2px" }}>{c.label}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700 }}>{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Office info */}
          <div style={{ marginTop: "1.5rem", background: "white", borderRadius: "14px", padding: "1.25rem", border: "1px solid var(--blue-200)" }}>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "0.75rem" }}>Office Hours</h3>
            {[
              { day: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
              { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
              { day: "WhatsApp", hours: "Available 7 days" },
            ].map((h) => (
              <div key={h.day} style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "var(--blue-600)" }}>{h.day}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.84rem", color: "var(--blue-900)", fontWeight: 600 }}>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 600, color: "var(--blue-900)", marginBottom: "1.25rem" }}>
            Send an Enquiry
          </h2>
          <form
            onSubmit={handleSubmit}
            className="beam-border"
            style={{ background: "white", borderRadius: "20px", padding: "clamp(1.75rem, 3vw, 2.5rem)", boxShadow: "0 8px 40px rgba(10, 42, 66, 0.06)" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: "1.1rem" }}>
              <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
              <InputField label="Phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 99999 99999" required />
              <InputField label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" />
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, color: "var(--blue-800)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>
                  Destination <span style={{ color: "var(--orange-500)" }}>*</span>
                </label>
                <select
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "10px", border: "1.5px solid var(--blue-200)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-900)", background: "#fff", outline: "none", transition: "border-color 0.2s" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--orange-400)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--blue-200)")}
                >
                  <option value="">Select a destination</option>
                  {DESTINATIONS_LIST.map((d) => <option key={d} value={d}>{d}</option>)}
                </select>
              </div>
              <InputField label="Number of Travellers" name="travelers" type="number" value={form.travelers} onChange={handleChange} placeholder="e.g. 4" />
              <InputField label="Preferred Travel Date" name="date" type="date" value={form.date} onChange={handleChange} placeholder="" />
            </div>

            <div style={{ marginTop: "1.1rem" }}>
              <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: "0.78rem", fontWeight: 600, color: "var(--blue-800)", marginBottom: "0.4rem", letterSpacing: "0.04em" }}>Message (Optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                placeholder="Any special requests, budget range, or specific requirements..."
                style={{ width: "100%", padding: "0.8rem 1rem", borderRadius: "10px", border: "1.5px solid var(--blue-200)", fontFamily: "var(--font-sans)", fontSize: "0.88rem", color: "var(--blue-900)", background: "#fff", outline: "none", resize: "vertical", transition: "border-color 0.2s" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--orange-400)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--blue-200)")}
              />
            </div>

            <button
              type="submit"
              style={{ width: "100%", marginTop: "1.25rem", padding: "1rem", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, var(--orange-500), var(--orange-400))", color: "white", fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 700, letterSpacing: "0.03em", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 6px 24px rgba(232, 122, 47, 0.3)", cursor: "pointer" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(232, 122, 47, 0.4)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(232, 122, 47, 0.3)"; }}
            >
              Send Enquiry →
            </button>

            <p style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontSize: "0.74rem", color: "var(--blue-400)", marginTop: "0.85rem" }}>
              This opens your email app with the details pre-filled. Or call{" "}
              <a href="tel:+917977416112" style={{ color: "var(--orange-500)", fontWeight: 600 }}>7977416112</a>
            </p>
          </form>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
