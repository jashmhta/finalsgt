"use client";
/*
 * GROUP TOURS — All group tours (domestic + international) with sub-categories
 */

import TourPageLayout from "@/components/TourPageLayout";
import { ALL_PACKAGES } from "@/data/packages";

const HERO = "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg";

export default function GroupTours() {
  const packages = ALL_PACKAGES.filter((p) => p.tourType === "group");
  return (
    <TourPageLayout
      title="Group Tours"
      subtitle="Fixed group departures with set dates every month. All-inclusive — meals, hotels, AC coach, guided sightseeing. WhatsApp us for the next departure date."
      heroImage={HERO}
      packages={packages}
      showCountrySearch
      seoTitle="Group Tours from Mumbai | Shri Ganesh Travels"
      seoDescription="Fixed group departure tours from Mumbai — domestic and international. All-inclusive packages with meals, hotels, AC coach, and guided sightseeing. Monthly departures since 1987."
      seoCanonical="/group-tours"
    />
  );
}
