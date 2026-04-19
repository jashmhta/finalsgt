"use client";
/*
 * DOMESTIC TOURS — All domestic packages with Group/Customized toggle + sub-categories
 */

import TourPageLayout from "@/components/TourPageLayout";
import { getPackages } from "@/data/packages";
import SEOHead from "@/components/SEOHead";

const HERO = "https://d2xsxph8kpxj0f.cloudfront.net/310519663219430874/2h54D4sXofpUDadmXQJQic/domestic-hero-eFQfqn52skHRfHmJZMC3Ym.png";

export default function DomesticTours() {
  const packages = getPackages("domestic");
  return (
    <>
      <SEOHead
        title="Domestic Tours — India Travel Packages"
        description="Explore India with Shri Ganesh Travels. Group & customized tours to Kerala, Kashmir, Goa, Rajasthan, Andaman, Himachal Pradesh & more. All-inclusive packages from Mumbai since 1987."
        canonical="/domestic"
      />
      <TourPageLayout
        title="Domestic Tours"
        subtitle="Group departures every month across India — Kerala, Rajasthan, Himachal, Andaman, Kashmir, Uttarakhand and more. All meals and transport included."
        heroImage={HERO}
        packages={packages}
        showTourTypeToggle
      />
    </>
  );
}
