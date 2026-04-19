import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.shriganeshtravel.com";
const OG_IMAGE = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png";
const LOGO = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-transparent_latest.png";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shri Ganesh Travels | Group & Family Tours from Mumbai Since 1987",
    template: "%s | Shri Ganesh Travels",
  },
  description:
    "Group and family tours from Mumbai since 1987. All-inclusive packages to India and 30+ countries. Meals, hotels, and transport included.",
  keywords: [
    "Shri Ganesh Travels", "Mumbai tour operator", "group tours Mumbai",
    "family tour packages", "domestic tours India", "international tour packages",
    "Kerala tour", "Rajasthan tour", "Kashmir tour", "Dubai tour package",
    "Singapore tour", "Bali tour", "Thailand tour", "Switzerland tour", "Mangirish Hospitality",
  ],
  authors: [{ name: "Shri Ganesh Travels", url: BASE_URL }],
  creator: "Shri Ganesh Travels",
  publisher: "Shri Ganesh Travels",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shri Ganesh Travels",
    title: "Shri Ganesh Travels | Group & Family Tours from Mumbai Since 1987",
    description: "Group and family tours from Mumbai since 1987. All-inclusive packages to India and 30+ countries. Meals, hotels, and transport included.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shri Ganesh Travels — Group & Family Tours from Mumbai Since 1987" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ganesh Travels | Group & Family Tours from Mumbai Since 1987",
    description: "Group and family tours from Mumbai since 1987. All-inclusive packages to India and 30+ countries.",
    images: [OG_IMAGE],
  },
  alternates: { canonical: BASE_URL },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

const GLOBAL_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    name: "Shri Ganesh Travels",
    alternateName: "Shri Ganesh Tours & Travels",
    description: "Group and family tour operator from Mumbai since 1987. All-inclusive packages with meals, hotels, transfers, and guided sightseeing across India and 30+ countries. Powered by Mangirish Hospitality.",
    url: `${BASE_URL}/`,
    logo: LOGO,
    image: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg",
    telephone: ["+917977416112", "+919082616663"],
    email: "shriganeshtravelsofficial@gmail.com",
    foundingDate: "1987",
    address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: "19.0760", longitude: "72.8777" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00", closes: "21:00",
    },
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    areaServed: "Worldwide",
    sameAs: [
      "https://www.instagram.com/shri_ganesh_tours_n_travels",
      "https://www.google.com/maps/place/Shree+Ganesh+Tours+%26+Travels",
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "312", bestRating: "5" },
    parentOrganization: { "@type": "Organization", name: "Mangirish Hospitality" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Domestic Tours", item: `${BASE_URL}/domestic` },
      { "@type": "ListItem", position: 3, name: "International Tours", item: `${BASE_URL}/international` },
      { "@type": "ListItem", position: 4, name: "Gallery", item: `${BASE_URL}/gallery` },
      { "@type": "ListItem", position: 5, name: "About Us", item: `${BASE_URL}/about` },
      { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
        <link rel="manifest" href="/site.webmanifest" />
        {GLOBAL_SCHEMA.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
