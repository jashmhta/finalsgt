"use client";
/**
 * SEOHead — Dynamic per-page meta tags using document.title + meta manipulation
 * Injects page-specific title, description, canonical, and OG tags
 * og:image must be an ABSOLUTE URL for WhatsApp/Telegram/email crawlers
 */
import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
}

const BASE_TITLE = "Shri Ganesh Travels";
const BASE_URL = "https://www.shriganeshtravel.com";
// Branded OG preview image — 1200×630 with logo, tagline, destinations
const DEFAULT_OG_IMAGE = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png";

function setMeta(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEOHead({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  structuredData,
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${BASE_TITLE}`
      : `${BASE_TITLE} | Mumbai's Most Trusted Tour Operator Since 1987`;
    document.title = fullTitle;

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, true);
      setMeta("twitter:description", description);
    }

    // Ensure ogImage is always an absolute URL (required by WhatsApp/Telegram/email crawlers)
    const absoluteOgImage = ogImage.startsWith("http")
      ? ogImage
      : `${BASE_URL}${ogImage}`;

    setMeta("og:title", fullTitle, true);
    setMeta("twitter:title", fullTitle);
    setMeta("og:type", ogType, true);
    setMeta("og:image", absoluteOgImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", "Shri Ganesh Travels — Group & Family Tours from Mumbai Since 1987", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:image", absoluteOgImage);

    if (canonical) {
      const fullCanonical = canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`;
      setLink("canonical", fullCanonical);
      setMeta("og:url", fullCanonical, true);
      setMeta("twitter:url", fullCanonical);
    }

    if (structuredData) {
      const existingScript = document.querySelector('script[data-page-sd]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-sd", "true");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      document.title = `${BASE_TITLE} | Mumbai's Most Trusted Tour Operator Since 1987`;
    };
  }, [title, description, canonical, ogImage, ogType, structuredData]);

  return null;
}
