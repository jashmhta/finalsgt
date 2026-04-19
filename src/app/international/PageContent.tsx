"use client";
/*
 * INTERNATIONAL TOURS — All international packages with country search + Group/Customized toggle + sub-categories
 */

import TourPageLayout from "@/components/TourPageLayout";
import { getPackages } from "@/data/packages";
import SEOHead from "@/components/SEOHead";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/international-hero-nXUuBjtbwQh9Z4DchVCgkW.png";

export default function InternationalTours() {
  const packages = getPackages("international");
  return (
    <>
      <SEOHead
        title="International Tours — World Travel Packages"
        description="Explore the world with Shri Ganesh Travels. Group & customized international tours to Dubai, Singapore, Bali, Thailand, Switzerland, Maldives, Sri Lanka & 25+ countries from Mumbai."
        canonical="/international"
      />
      <TourPageLayout
        title="International Tours"
        subtitle="All-inclusive international tours to 30+ countries — Dubai, Singapore, Bali, Thailand, Switzerland, Sri Lanka, and more. Indian meals included on all tours."
        heroImage={HERO}
        packages={packages}
        showTourTypeToggle
        showCountrySearch
      />
    </>
  );
}
