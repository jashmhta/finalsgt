"use client";
/*
 * CUSTOMIZED TOURS — All customized tours (domestic + international) with sub-categories
 */

import TourPageLayout from "@/components/TourPageLayout";
import { ALL_PACKAGES } from "@/data/packages";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/honeymoon-banner-76fwwgxpvTL6YCAJJRPAaH.png";

export default function CustomizedTours() {
  const packages = ALL_PACKAGES.filter((p) => p.tourType === "customized");
  return (
    <TourPageLayout
      title="Customized Tours"
      subtitle="Private tours built around your dates, group size, and budget. Honeymoons, family trips, corporate outings — WhatsApp us with your requirements and we'll plan it."
      heroImage={HERO}
      packages={packages}
      showCountrySearch
      seoTitle="Customized Tours | Shri Ganesh Travels Mumbai"
      seoDescription="Private customized tour packages from Mumbai — honeymoons, family trips, corporate outings. Tailored itineraries for any budget and group size. WhatsApp us to plan your trip."
      seoCanonical="/customized-tours"
    />
  );
}
