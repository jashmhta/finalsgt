import type { Metadata, Viewport } from "next";
import "./globals.css";

const BASE_URL = "https://www.shriganeshtravel.com";
const OG_IMAGE = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/og-preview.png";
const LOGO = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/sgt-logo-transparent_latest.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E87A2F",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Shri Ganesh Travels | Group & Family Tours from Mumbai Since 1987",
    template: "%s | Shri Ganesh Travels",
  },
  description:
    "Mumbai's trusted tour operator since 1987. 50,000+ families served. All-inclusive group & family tour packages to India, Dubai, Singapore, Bali, Thailand, Switzerland & 30+ countries. Meals, hotels, transport included.",
  keywords: [
    "Shri Ganesh Travels", "Mumbai tour operator", "group tours Mumbai",
    "family tour packages Mumbai", "domestic tours India", "international tour packages",
    "Kerala tour package", "Rajasthan tour package", "Kashmir tour package",
    "Dubai tour package from Mumbai", "Singapore tour package from Mumbai",
    "Bali tour package", "Thailand tour package", "Switzerland tour package",
    "Mangirish Hospitality", "all inclusive tours Mumbai",
    "best tour operator Mumbai", "group travel India",
    "family holiday packages India", "senior citizen tours Mumbai",
    "honeymoon packages from Mumbai", "pilgrimage tours India",
    "Char Dham yatra package", "Goa tour package", "Andaman tour package",
    "Himachal tour package", "Varanasi tour package",
    "Maldives tour package from Mumbai", "Sri Lanka tour package",
    "customized tour packages Mumbai", "budget tour packages India",
    "luxury tour packages Mumbai", "tour operator Andheri Mumbai",
  ],
  authors: [{ name: "Shri Ganesh Travels", url: BASE_URL }],
  creator: "Shri Ganesh Travels",
  publisher: "Shri Ganesh Travels",
  category: "Travel",
  classification: "Travel Agency",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Shri Ganesh Travels",
    title: "Shri Ganesh Travels | Group & Family Tours from Mumbai Since 1987",
    description: "Mumbai's trusted tour operator since 1987. 50,000+ families served. All-inclusive group & family tour packages to India & 30+ countries.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Shri Ganesh Travels — Group & Family Tours from Mumbai Since 1987" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Ganesh Travels | Tours from Mumbai Since 1987",
    description: "50,000+ families served. All-inclusive group & family tours to India & 30+ countries from Mumbai.",
    images: [OG_IMAGE],
    creator: "@shriganeshtravel",
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      "en-IN": BASE_URL,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.0760;72.8777",
    "ICBM": "19.0760, 72.8777",
    "revisit-after": "7 days",
    "rating": "General",
    "distribution": "Global",
    "language": "English",
  },
};

const GLOBAL_SCHEMA = [
  // 1. TravelAgency + LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${BASE_URL}/#organization`,
    name: "Shri Ganesh Travels",
    alternateName: ["Shri Ganesh Tours & Travels", "SGT Mumbai", "Shri Ganesh Travel"],
    description: "Mumbai's most trusted group and family tour operator since 1987. All-inclusive packages with meals, hotels, transfers, and guided sightseeing across India and 30+ countries. Powered by Mangirish Hospitality.",
    url: `${BASE_URL}/`,
    logo: { "@type": "ImageObject", url: LOGO, width: 1280, height: 371 },
    image: [
      "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg",
      "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg",
      "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg",
    ],
    telephone: ["+917977416112", "+919082616663"],
    email: "shriganeshtravelsofficial@gmail.com",
    foundingDate: "1987",
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: 10, maxValue: 50 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Andheri",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400069",
      addressCountry: { "@type": "Country", name: "IN" },
    },
    geo: { "@type": "GeoCoordinates", latitude: 19.076, longitude: 72.8777 },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer, UPI, Google Pay, PhonePe",
    areaServed: [
      { "@type": "City", name: "Mumbai" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    serviceArea: { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 19.076, longitude: 72.8777 }, geoRadius: "50000" },
    sameAs: [
      "https://www.instagram.com/shri_ganesh_tours_n_travels",
      "https://www.google.com/maps/place/Shree+Ganesh+Tours+%26+Travels",
      "https://www.facebook.com/ShreGaneshToursandTravels/",
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "312", bestRating: "5", worstRating: "1" },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Rajesh Sharma" },
        datePublished: "2025-12-15",
        reviewBody: "Excellent tour operator! Our family trip to Kerala was perfectly organized. Every detail was taken care of.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Priya Mehta" },
        datePublished: "2025-11-20",
        reviewBody: "Best group tour experience to Dubai. Value for money with all meals and hotels included.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      },
    ],
    parentOrganization: { "@type": "Organization", name: "Mangirish Hospitality" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour Packages",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Domestic Tours", url: `${BASE_URL}/domestic` },
        { "@type": "OfferCatalog", name: "International Tours", url: `${BASE_URL}/international` },
        { "@type": "OfferCatalog", name: "Group Tours", url: `${BASE_URL}/group-tours` },
        { "@type": "OfferCatalog", name: "Customized Tours", url: `${BASE_URL}/customized-tours` },
      ],
    },
  },
  // 2. WebSite with SearchAction (for sitelinks search box)
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "Shri Ganesh Travels",
    alternateName: "SGT Mumbai",
    url: BASE_URL,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/destinations?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
  // 3. BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Domestic Tours", item: `${BASE_URL}/domestic` },
      { "@type": "ListItem", position: 3, name: "International Tours", item: `${BASE_URL}/international` },
      { "@type": "ListItem", position: 4, name: "Group Tours", item: `${BASE_URL}/group-tours` },
      { "@type": "ListItem", position: 5, name: "Customized Tours", item: `${BASE_URL}/customized-tours` },
      { "@type": "ListItem", position: 6, name: "Destinations", item: `${BASE_URL}/destinations` },
      { "@type": "ListItem", position: 7, name: "Gallery", item: `${BASE_URL}/gallery` },
      { "@type": "ListItem", position: 8, name: "About Us", item: `${BASE_URL}/about` },
      { "@type": "ListItem", position: 9, name: "Contact", item: `${BASE_URL}/contact` },
    ],
  },
  // 4. FAQPage schema (boosts rich snippets)
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in Shri Ganesh Travels tour packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our tour packages are all-inclusive. They cover accommodation in quality hotels, all meals (breakfast, lunch, dinner), air-conditioned transport, sightseeing with experienced guides, and all entry fees. Airport transfers and travel insurance are also included in international packages.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a tour with Shri Ganesh Travels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book a tour by calling us at +91 7977416112 or +91 9082616663, sending a WhatsApp message, emailing shriganeshtravelsofficial@gmail.com, or visiting our office in Andheri, Mumbai. We also accept online bookings through our website.",
        },
      },
      {
        "@type": "Question",
        name: "Does Shri Ganesh Travels offer customized tour packages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We offer fully customized tour packages tailored to your preferences, budget, and schedule. Whether it's a family vacation, honeymoon, corporate retreat, or pilgrimage, we design the perfect itinerary for you.",
        },
      },
      {
        "@type": "Question",
        name: "What domestic destinations does Shri Ganesh Travels cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover all major domestic destinations including Kerala, Rajasthan, Kashmir, Goa, Himachal Pradesh, Andaman & Nicobar Islands, Varanasi, Char Dham, Uttarakhand, and many more. We have monthly group departures to popular destinations.",
        },
      },
      {
        "@type": "Question",
        name: "What international destinations does Shri Ganesh Travels offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer international tours to 30+ countries including Dubai, Singapore, Bali, Thailand, Switzerland, Maldives, Sri Lanka, Vietnam, Paris, Azerbaijan, Seychelles, Bhutan, and many more. All international packages include visa assistance.",
        },
      },
      {
        "@type": "Question",
        name: "Is Shri Ganesh Travels suitable for senior citizens?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We specialize in senior-citizen-friendly group tours with comfortable pacing, quality hotels, and dedicated tour managers. Many of our group tours are designed keeping senior travelers in mind.",
        },
      },
      {
        "@type": "Question",
        name: "How long has Shri Ganesh Travels been in business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Shri Ganesh Travels has been operating since 1987, making us one of Mumbai's most experienced tour operators with over 37 years of service and 50,000+ happy families.",
        },
      },
    ],
  },
  // 5. Service schema for tour services
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Tour Operator Services",
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tour Packages from Mumbai",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "TouristTrip", name: "Domestic Group Tours", description: "All-inclusive group tours across India from Mumbai" },
          priceCurrency: "INR",
          price: "9999",
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", price: "9999", unitText: "per person" },
          url: `${BASE_URL}/domestic`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "TouristTrip", name: "International Group Tours", description: "All-inclusive international group tours from Mumbai to 30+ countries" },
          priceCurrency: "INR",
          price: "29999",
          priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", price: "29999", unitText: "per person" },
          url: `${BASE_URL}/international`,
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "TouristTrip", name: "Customized Tours", description: "Tailor-made tour packages designed to your preferences" },
          priceCurrency: "INR",
          url: `${BASE_URL}/customized-tours`,
        },
      ],
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://d2xsxph8kpxj0f.cloudfront.net" crossOrigin="anonymous" />

        {/* DNS prefetch for secondary origins */}
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />

        {/* PWA manifest */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Structured data */}
        {GLOBAL_SCHEMA.map((schema, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
