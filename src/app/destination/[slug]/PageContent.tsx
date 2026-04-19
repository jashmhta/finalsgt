"use client";
/*
 * DestinationDetail — Shri Ganesh Travels
 * Full itineraries, hero images, overview, day-by-day planning,
 * includes/excludes, cancellation policy dropdown
 * Parent company: Mangirish Hospitality | Est. 1987
 */

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ChevronLeft,
  MapPin,
  Clock,
  Users,
  Star,
  CheckCircle,
  XCircle,
  Phone,
  MessageCircle,
  Calendar,
  Info,
  AlertTriangle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

interface DayPlan {
  day: number;
  title: string;
  activities: string[];
}

interface DestinationData {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  duration: string;
  priceRange: string;
  groupSize: string;
  rating: number;
  reviews: number;
  heroImage: string;
  overview: string;
  itinerary: DayPlan[];
  includes: string[];
  excludes: string[];
  highlights: string[];
  bestTime: string;
  category: "domestic" | "international";
}

const DESTINATIONS: DestinationData[] = [
  {
    slug: "singapore",
    name: "Singapore",
    tagline: "The Lion City — Where Modernity Meets Magic",
    region: "Singapore",
    duration: "4N / 5D",
    priceRange: "₹49,999 – ₹75,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 312,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-singapore_624447c8.jpg",
    overview: "Singapore packs theme parks, city skyline, cable car rides, and night safari into one compact destination. Safe, clean, and easy to navigate — a strong first international trip for Indian families.",
    itinerary: [
      { day: 1, title: "Arrival & Night Safari", activities: ["Arrival at Changi Airport", "Hotel transfer & check-in", "Evening visit to Night Safari", "Tram ride & wildlife show"] },
      { day: 2, title: "City Tour & Sentosa Island", activities: ["Half-day city tour — Merlion Park, Marina Bay Sands", "Visit Sentosa Island", "Cable car ride", "Wings of Time show"] },
      { day: 3, title: "Universal Studios Adventure", activities: ["Full-day at Universal Studios Singapore", "Thrilling rides & live shows", "Explore themed zones"] },
      { day: 4, title: "Leisure & Shopping", activities: ["Orchard Road shopping", "Optional Gardens by the Bay", "Hawker Centre dinner experience"] },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport transfers", "Night Safari entry", "Sentosa Island cable car", "Universal Studios entry", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Universal Studios", "Gardens by the Bay", "Sentosa Island", "Night Safari", "Marina Bay Sands"],
    bestTime: "February – April, September – November",
    category: "international",
  },
  {
    slug: "dubai",
    name: "Dubai & Abu Dhabi",
    tagline: "Where Luxury Meets the Desert",
    region: "UAE",
    duration: "5N / 6D",
    priceRange: "₹45,000 – ₹90,000",
    groupSize: "20–40 pax",
    rating: 4.9,
    reviews: 428,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg",
    overview: "Experience the grandeur of Dubai with iconic landmarks, luxury shopping, thrilling desert safaris, and modern attractions. A day trip to Abu Dhabi adds the majestic Sheikh Zayed Mosque and Ferrari World to your itinerary.",
    itinerary: [
      { day: 1, title: "Arrival + Marina Dhow Cruise", activities: ["Arrival at Dubai International Airport", "Transfer to hotel & check-in", "Evening Marina Dhow Cruise", "Buffet dinner with live entertainment"] },
      { day: 2, title: "Dubai City Tour + Burj Khalifa", activities: ["Guided city tour — Jumeirah Beach, Palm Island, Atlantis", "Visit Burj Khalifa (124th floor)", "Explore Dubai Mall & Fountain Show"] },
      { day: 3, title: "Desert Safari — Arabian Adventure", activities: ["Afternoon pickup for desert safari", "Thrilling dune bashing", "Camel ride & sandboarding", "BBQ dinner with belly dance & Tanoura show"] },
      { day: 4, title: "Abu Dhabi Day Tour", activities: ["Visit Sheikh Zayed Grand Mosque", "Photo stop at Ferrari World", "Corniche drive", "Return to Dubai"] },
      { day: 5, title: "Leisure & Shopping", activities: ["Global Village or Dubai Frame visit", "Gold Souk & Spice Souk", "Free time for shopping"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with golden memories"] },
    ],
    includes: ["4/5-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Burj Khalifa (124th floor)", "Desert Safari with BBQ dinner", "Dhow Cruise with dinner", "Abu Dhabi city tour", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Sheikh Zayed Mosque", "Ferrari World"],
    bestTime: "November – March",
    category: "international",
  },
  {
    slug: "bali",
    name: "Bali, Indonesia",
    tagline: "Island of the Gods",
    region: "Bali, Indonesia",
    duration: "5N / 6D",
    priceRange: "₹45,000 – ₹90,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 389,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-bali_56ea95d1.jpg",
    overview: "Explore Bali's natural beauty, ancient temples, volcanic landscapes, waterfalls, and pristine beaches. A perfect blend of adventure, culture, and relaxation.",
    itinerary: [
      { day: 1, title: "Arrival — Leisure & Relaxation", activities: ["Airport pickup & hotel check-in", "Free time to relax by the pool", "Welcome dinner at local restaurant"] },
      { day: 2, title: "Kintamani Volcano & Ubud Tour", activities: ["Visit Mount Batur volcano viewpoint", "Explore Ubud village & rice terraces", "Coffee plantation (Luwak coffee tasting)", "Tegalalang Rice Terrace walk"] },
      { day: 3, title: "Water Sports & Uluwatu Temple", activities: ["Morning water sports — banana boat, jet ski, parasailing", "Visit Uluwatu Cliff Temple", "Watch the sunset from the cliff edge", "Kecak fire dance performance"] },
      { day: 4, title: "Nusa Penida Island Tour", activities: ["Full-day island excursion by speedboat", "Visit Kelingking Beach (T-Rex cliff)", "Broken Beach & Angel's Billabong", "Crystal Bay snorkeling"] },
      { day: 5, title: "Leisure / Shopping Day", activities: ["Relax at resort or optional spa", "Seminyak shopping & cafes", "Sunset at Tanah Lot Temple"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["4-star resort accommodation", "Daily breakfast", "Airport transfers", "All sightseeing as per itinerary", "Nusa Penida speedboat tour", "Water sports session", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Nusa Penida Island", "Water Sports", "Kecak Dance"],
    bestTime: "April – October",
    category: "international",
  },
  {
    slug: "thailand",
    name: "Thailand — Phuket & Krabi",
    tagline: "Tropical Paradise Awaits",
    region: "Thailand",
    duration: "4N / 5D",
    priceRange: "₹35,000 – ₹75,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 456,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-thailand_1df987a8.jpg",
    overview: "Phuket and Krabi back-to-back — beaches, island hopping, Thai food, and temples. One of the most popular international packages we run from Mumbai, with departures every month.",
    itinerary: [
      { day: 1, title: "Arrival in Phuket", activities: ["Arrival at Phuket International Airport", "Private transfer to hotel & check-in", "Evening at Patong Beach", "Explore Bangla Road nightlife"] },
      { day: 2, title: "Phi Phi Island Tour", activities: ["Full-day Phi Phi Island tour by speedboat", "Visit Maya Bay (from 'The Beach')", "Explore Viking Cave & Loh Samah Bay", "Snorkeling, swimming & beach relaxation"] },
      { day: 3, title: "Transfer to Krabi", activities: ["Breakfast & hotel check-out", "Scenic coastal drive to Krabi", "Check-in at Krabi hotel", "Evening at Ao Nang Beach"] },
      { day: 4, title: "Krabi 4 Island Tour", activities: ["Full-day 4 Island tour by longtail boat", "Visit Chicken Island, Tup Island, Poda Island", "Beach time, photography & water activities", "Sunset return to hotel"] },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Phi Phi Island speedboat tour", "4 Island tour Krabi", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Phi Phi Islands", "4 Island Tour", "Patong Beach", "Maya Bay", "Krabi Cliffs"],
    bestTime: "November – April",
    category: "international",
  },
  {
    slug: "vietnam",
    name: "Vietnam Discovery",
    tagline: "Halong Bay & Beyond",
    region: "Vietnam",
    duration: "5N / 6D",
    priceRange: "₹55,000 – ₹95,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 198,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-vietnam_5b7df41f.jpg",
    overview: "A scenic destination offering natural beauty, rich culture, and unique experiences. From the ancient streets of Hanoi to the emerald waters of Halong Bay and the golden bridge of Ba Na Hills.",
    itinerary: [
      { day: 1, title: "Hanoi Arrival", activities: ["Arrival & hotel check-in", "Old Quarter walking tour", "Hoan Kiem Lake & Ngoc Son Temple", "Welcome dinner at local restaurant"] },
      { day: 2, title: "Halong Bay Cruise", activities: ["Transfer to Halong Bay (3.5 hrs)", "Board overnight cruise", "Kayaking & cave exploration", "Sunset cocktails on deck"] },
      { day: 3, title: "Return to Hanoi", activities: ["Morning tai chi on deck", "Breakfast & check-out from cruise", "Return to Hanoi", "Afternoon flight to Da Nang"] },
      { day: 4, title: "Da Nang — Marble Mountains", activities: ["Visit Marble Mountains", "My Khe Beach leisure", "Dragon Bridge evening walk"] },
      { day: 5, title: "Ba Na Hills — Golden Bridge", activities: ["Cable car to Ba Na Hills", "Walk the iconic Golden Bridge", "French Village exploration", "Return to Da Nang"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "Halong Bay overnight cruise", "Airport & inter-city transfers", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Halong Bay Cruise", "Golden Bridge Ba Na Hills", "Hoi An Ancient Town", "Marble Mountains", "Old Quarter Hanoi"],
    bestTime: "March – May, September – November",
    category: "international",
  },
  {
    slug: "malaysia",
    name: "Malaysia — KL & Genting",
    tagline: "Truly Asia",
    region: "Malaysia",
    duration: "4N / 5D",
    priceRange: "₹45,000 – ₹85,000",
    groupSize: "20–40 pax",
    rating: 4.6,
    reviews: 167,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-malaysia_f5eaaf22.jpg",
    overview: "Malaysia offers a perfect mix of modern city life, theme parks, shopping, and scenic highlands. Ideal for families and short international getaways with a diverse cultural experience.",
    itinerary: [
      { day: 1, title: "Arrival in Kuala Lumpur", activities: ["Arrival at KLIA", "Transfer to hotel & check-in", "Evening at Bukit Bintang"] },
      { day: 2, title: "Kuala Lumpur City Tour", activities: ["Petronas Twin Towers photo stop", "King's Palace & National Mosque", "Independence Square", "KL Tower observation deck"] },
      { day: 3, title: "Genting Highlands", activities: ["Cable car ride to Genting Highlands", "Visit Batu Caves en route", "Theme park & casino complex"] },
      { day: 4, title: "Leisure & Shopping", activities: ["Bukit Bintang shopping", "Optional Sunway Lagoon water park", "Farewell dinner"] },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport transfers", "City tour", "Genting cable car", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Petronas Towers", "Genting Highlands", "Batu Caves", "Bukit Bintang", "KL Tower"],
    bestTime: "March – October",
    category: "international",
  },
  {
    slug: "hong-kong",
    name: "Hong Kong & Macau",
    tagline: "East Meets West",
    region: "Hong Kong & Macau",
    duration: "5N / 6D",
    priceRange: "₹90,000 – ₹1,80,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 143,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-hong-kong_148974c3.jpg",
    overview: "A vibrant destination combining Hong Kong's iconic skyline and Disneyland with the glamour and heritage of Macau. A unique blend of East and West that dazzles at every turn.",
    itinerary: [
      { day: 1, title: "Arrival in Hong Kong", activities: ["Arrival & hotel check-in", "Tsim Sha Tsui evening walk", "Symphony of Lights harbour show"] },
      { day: 2, title: "Hong Kong City Tour", activities: ["Victoria Peak tram & panoramic views", "Aberdeen Fishing Village", "Stanley Market", "Harbour cruise"] },
      { day: 3, title: "Disneyland Experience", activities: ["Full day at Hong Kong Disneyland", "All themed lands & parades", "Fireworks show"] },
      { day: 4, title: "Macau Day Tour", activities: ["Ferry to Macau", "Ruins of St. Paul's", "Senado Square", "Casino strip visit"] },
      { day: 5, title: "Leisure & Shopping", activities: ["Mong Kok markets", "Ladies Market & Temple Street", "Farewell dinner"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Check-out & airport transfer", "Depart with beautiful memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport transfers", "Disneyland entry", "Macau ferry", "City tour", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Victoria Peak", "Disneyland", "Macau Casino Strip", "Harbour Cruise", "Symphony of Lights"],
    bestTime: "October – December",
    category: "international",
  },
  {
    slug: "switzerland",
    name: "Switzerland Alps",
    tagline: "Top of Europe",
    region: "Switzerland",
    duration: "6N / 7D",
    priceRange: "₹1,80,000 – ₹3,50,000",
    groupSize: "20–40 pax",
    rating: 4.9,
    reviews: 234,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-switzerland_d5407be3.jpg",
    overview: "Snow-capped Alps, scenic train rides, Interlaken, and Lucerne lakeside. Switzerland is our most-booked European destination, with Indian meals and guided sightseeing throughout.",
    itinerary: [
      { day: 1, title: "Arrival in Zurich", activities: ["Arrival at Zurich Airport", "Transfer to hotel & check-in", "Old Town Zurich evening walk"] },
      { day: 2, title: "Lucerne City Tour", activities: ["Chapel Bridge & Lion Monument", "Lake Lucerne boat cruise", "Old Town exploration"] },
      { day: 3, title: "Mt. Titlis Excursion", activities: ["Cable car to Mt. Titlis (3,020m)", "Glacier walk & snow activities", "Revolving cable car experience"] },
      { day: 4, title: "Transfer to Interlaken", activities: ["Scenic drive through Swiss countryside", "Check-in at Interlaken hotel", "Jungfrau region orientation"] },
      { day: 5, title: "Jungfraujoch — Top of Europe", activities: ["Train to Jungfraujoch (3,454m)", "Sphinx Observatory", "Aletsch Glacier views", "Ice Palace"] },
      { day: 6, title: "Leisure / Shopping", activities: ["Interlaken shopping", "Optional paragliding", "Farewell dinner"] },
      { day: 7, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Zurich Airport", "Depart with alpine memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Mt. Titlis cable car", "Jungfraujoch train", "Lucerne boat cruise", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Jungfraujoch", "Mt. Titlis", "Interlaken", "Lucerne", "Rhine Falls"],
    bestTime: "June – September, December – February",
    category: "international",
  },
  {
    slug: "japan",
    name: "Japan — Tokyo & Kyoto",
    tagline: "Where Tradition Meets Tomorrow",
    region: "Japan",
    duration: "6N / 7D",
    priceRange: "₹1,20,000 – ₹2,50,000",
    groupSize: "20–40 pax",
    rating: 4.9,
    reviews: 189,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-japan_f1795542.jpg",
    overview: "A unique blend of ancient tradition and futuristic technology. From the neon-lit streets of Tokyo to the serene temples of Kyoto and the iconic silhouette of Mt. Fuji.",
    itinerary: [
      { day: 1, title: "Arrival in Tokyo", activities: ["Arrival at Narita/Haneda Airport", "Transfer to hotel & check-in", "Shinjuku evening exploration"] },
      { day: 2, title: "Tokyo City Tour", activities: ["Shibuya Crossing & Harajuku", "Asakusa Senso-ji Temple", "Akihabara electronics district", "Tokyo Skytree observation"] },
      { day: 3, title: "Mt. Fuji Excursion", activities: ["Day trip to Mt. Fuji 5th Station", "Hakone ropeway & Lake Ashi cruise", "Scenic views of Fuji-san"] },
      { day: 4, title: "Bullet Train to Osaka", activities: ["Shinkansen (bullet train) experience", "Osaka Castle visit", "Dotonbori food street"] },
      { day: 5, title: "Kyoto Cultural Tour", activities: ["Fushimi Inari Shrine (1,000 torii gates)", "Arashiyama Bamboo Grove", "Kinkaku-ji (Golden Pavilion)", "Gion district evening walk"] },
      { day: 6, title: "Leisure & Shopping", activities: ["Namba shopping", "Optional teamLab digital art", "Farewell dinner"] },
      { day: 7, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Osaka/Kansai Airport", "Transfer to airport and depart"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport & bullet train transfers", "Mt. Fuji day trip", "Hakone ropeway", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Mt. Fuji", "Shibuya Crossing", "Kyoto Temples", "Bullet Train", "Fushimi Inari"],
    bestTime: "March – May (Cherry Blossom), October – November",
    category: "international",
  },
  {
    slug: "australia",
    name: "Australia — Sydney & Melbourne",
    tagline: "The Land Down Under",
    region: "Australia",
    duration: "6N / 7D",
    priceRange: "₹2,20,000 – ₹4,20,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 112,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-australia_90a3daaf.jpg",
    overview: "Sydney Opera House, Great Ocean Road, Blue Mountains, and Cairns reef. Australia is a long-haul trip done right — we handle visa, flights, hotels, and guided tours end to end.",
    itinerary: [
      { day: 1, title: "Arrival in Sydney", activities: ["Arrival at Sydney Airport", "Transfer to hotel & check-in", "Darling Harbour evening walk"] },
      { day: 2, title: "Sydney City Tour", activities: ["Sydney Opera House & Harbour Bridge", "Bondi Beach visit", "The Rocks historic district", "Harbour cruise"] },
      { day: 3, title: "Blue Mountains Tour", activities: ["Three Sisters rock formation", "Scenic World cable car", "Leura village walk", "Wentworth Falls"] },
      { day: 4, title: "Flight to Melbourne", activities: ["Morning flight to Melbourne", "Hotel check-in", "Federation Square & Flinders Street"] },
      { day: 5, title: "Great Ocean Road", activities: ["Twelve Apostles limestone stacks", "Loch Ard Gorge", "Scenic coastal drive", "Wildlife spotting"] },
      { day: 6, title: "Melbourne Leisure", activities: ["Queen Victoria Market", "Melbourne CBD shopping", "Farewell dinner at Crown Casino"] },
      { day: 7, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Melbourne Airport", "Depart with amazing memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Blue Mountains tour", "Great Ocean Road tour", "Harbour cruise", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Sydney Opera House", "Harbour Bridge", "Great Ocean Road", "Blue Mountains", "Twelve Apostles"],
    bestTime: "September – November, March – May",
    category: "international",
  },
  {
    slug: "usa",
    name: "USA — New York & Las Vegas",
    tagline: "The American Dream",
    region: "USA",
    duration: "7N / 8D",
    priceRange: "₹2,20,000 – ₹4,50,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 98,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-usa_773c7149.jpg",
    overview: "Experience the best of the USA with iconic cities, world-famous entertainment, and natural wonders. From the skyscrapers of New York to the dazzling lights of Las Vegas and the grandeur of the Grand Canyon.",
    itinerary: [
      { day: 1, title: "Arrival in New York", activities: ["Arrival at JFK/Newark Airport", "Transfer to hotel & check-in", "Times Square evening walk"] },
      { day: 2, title: "New York City Tour", activities: ["Statue of Liberty & Ellis Island ferry", "Brooklyn Bridge walk", "Central Park", "Empire State Building"] },
      { day: 3, title: "NYC Free Day", activities: ["Optional 9/11 Memorial", "Metropolitan Museum of Art", "Fifth Avenue shopping", "Broadway show (optional)"] },
      { day: 4, title: "Flight to Las Vegas", activities: ["Morning flight to Las Vegas", "Hotel check-in on The Strip", "Evening Vegas Strip walk"] },
      { day: 5, title: "Las Vegas Tour", activities: ["Fremont Street Experience", "Bellagio Fountains", "High Roller observation wheel", "Casino experience"] },
      { day: 6, title: "Grand Canyon Tour", activities: ["Day trip to Grand Canyon South Rim", "Helicopter ride (optional)", "Desert Watchtower", "Scenic viewpoints"] },
      { day: 7, title: "Leisure & Shopping", activities: ["Las Vegas Premium Outlets", "Optional shows & entertainment", "Farewell dinner"] },
      { day: 8, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Las Vegas Airport", "Depart with incredible memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Statue of Liberty ferry", "Grand Canyon tour", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Statue of Liberty", "Times Square", "Grand Canyon", "Vegas Strip", "Empire State Building"],
    bestTime: "April – June, September – November",
    category: "international",
  },
  {
    slug: "sri-lanka",
    name: "Sri Lanka Splendour",
    tagline: "The Pearl of the Indian Ocean",
    region: "Sri Lanka",
    duration: "6N / 7D",
    priceRange: "₹47,525 – ₹80,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 176,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-sri-lanka_147875fb.jpg",
    overview: "Ancient temples, tea plantations, Sigiriya Rock, and Mirissa beach — all within a 7-night circuit. Sri Lanka is one of our best-value international packages, with Indian meals included.",
    itinerary: [
      { day: 1, title: "Colombo Arrival", activities: ["Arrival at Bandaranaike Airport", "Transfer to hotel", "Colombo city orientation"] },
      { day: 2, title: "Sigiriya Rock Fortress", activities: ["Drive to Sigiriya", "Climb the iconic Lion Rock fortress", "Dambulla Cave Temple visit"] },
      { day: 3, title: "Kandy — Temple of the Tooth", activities: ["Drive to Kandy", "Temple of the Sacred Tooth Relic", "Kandy Lake walk", "Cultural dance show"] },
      { day: 4, title: "Nuwara Eliya Tea Country", activities: ["Scenic train ride through tea estates", "Tea factory visit & tasting", "Gregory Lake", "Horton Plains (optional)"] },
      { day: 5, title: "Galle Fort & South Coast", activities: ["Drive to Galle", "UNESCO-listed Galle Fort walk", "Unawatuna Beach leisure"] },
      { day: 6, title: "Colombo Leisure", activities: ["Colombo shopping & sightseeing", "Gangaramaya Temple", "Farewell dinner"] },
      { day: 7, title: "Departure", activities: ["Breakfast at hotel", "Transfer to airport", "Depart with beautiful memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Sigiriya entry", "Train ride", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Sigiriya Rock", "Temple of the Tooth", "Nuwara Eliya Tea", "Galle Fort", "Kandy"],
    bestTime: "December – April",
    category: "international",
  },
  {
    slug: "maldives",
    name: "Maldives Luxury Escape",
    tagline: "Heaven on Earth",
    region: "Maldives",
    duration: "5N / 6D",
    priceRange: "₹70,000 – ₹2,00,000+",
    groupSize: "2–20 pax",
    rating: 5.0,
    reviews: 267,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-maldives_02c84184.jpg",
    overview: "The ultimate luxury escape with overwater villas, crystal-clear lagoons, and vibrant coral reefs. Perfect for honeymooners and luxury travellers seeking absolute privacy and tranquility.",
    itinerary: [
      { day: 1, title: "Arrival & Resort Check-in", activities: ["Arrival at Malé Airport", "Speedboat/seaplane transfer to resort", "Check-in to water villa", "Welcome cocktail & sunset"] },
      { day: 2, title: "Snorkelling & Diving", activities: ["Morning house reef snorkelling", "Guided scuba diving session", "Afternoon beach relaxation", "Sunset dolphin cruise"] },
      { day: 3, title: "Island Excursion", activities: ["Visit local Maldivian island", "Sandbank picnic lunch", "Kayaking & paddleboarding", "Overwater dining experience"] },
      { day: 4, title: "Water Sports Day", activities: ["Jet ski & banana boat", "Windsurfing lesson", "Spa treatment (optional)", "Stargazing on the deck"] },
      { day: 5, title: "Leisure & Farewell", activities: ["Morning beach walk", "Spa & wellness session", "Farewell dinner on the beach"] },
      { day: 6, title: "Departure", activities: ["Breakfast at resort", "Speedboat transfer to Malé", "Depart with paradise memories"] },
    ],
    includes: ["Water villa / beach villa accommodation", "All meals (full board)", "Speedboat transfers", "Snorkelling equipment", "Sunset cruise", "Tour manager"],
    excludes: ["Airfare", "Seaplane transfers (if applicable)", "Personal expenses", "Optional activities"],
    highlights: ["Water Villa Stay", "Snorkelling & Diving", "Sunset Cruise", "Overwater Dining", "Sandbank Picnic"],
    bestTime: "November – April",
    category: "international",
  },
  {
    slug: "seychelles",
    name: "Seychelles — Mahé & Praslin",
    tagline: "Nature's Finest Creation",
    region: "Seychelles",
    duration: "6N / 7D",
    priceRange: "₹1,20,000 – ₹2,50,000",
    groupSize: "2–20 pax",
    rating: 4.9,
    reviews: 89,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-seychelles_b463753f.jpg",
    overview: "The Seychelles archipelago offers pristine granite-boulder beaches, lush tropical forests, and unique wildlife found nowhere else on Earth. An exclusive paradise for discerning travellers.",
    itinerary: [
      { day: 1, title: "Arrival in Mahé", activities: ["Arrival at Seychelles International Airport", "Transfer to resort", "Victoria town evening walk"] },
      { day: 2, title: "Mahé Island Tour", activities: ["Morne Seychellois National Park", "Mission Lodge viewpoint", "Anse Intendance beach", "Craft market"] },
      { day: 3, title: "Ferry to Praslin", activities: ["Ferry to Praslin Island", "Vallée de Mai UNESCO site", "Coco de Mer palm forest", "Anse Lazio beach"] },
      { day: 4, title: "La Digue Day Trip", activities: ["Boat to La Digue", "Anse Source d'Argent (world's most photographed beach)", "Giant tortoise sanctuary", "Cycling around the island"] },
      { day: 5, title: "Leisure & Water Activities", activities: ["Snorkelling at coral reefs", "Glass-bottom boat tour", "Creole cooking class", "Sunset beach dinner"] },
      { day: 6, title: "Return to Mahé", activities: ["Ferry back to Mahé", "Last-minute shopping", "Farewell dinner"] },
      { day: 7, title: "Departure", activities: ["Breakfast at resort", "Transfer to airport", "Depart with paradise memories"] },
    ],
    includes: ["4/5-star resort accommodation", "Daily breakfast", "Airport & ferry transfers", "Vallée de Mai entry", "La Digue day trip", "Tour manager"],
    excludes: ["Airfare", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Anse Lazio Beach", "Vallée de Mai", "Giant Tortoises", "La Digue Island", "Creole Cuisine"],
    bestTime: "April – May, October – November",
    category: "international",
  },
  {
    slug: "azerbaijan",
    name: "Azerbaijan — Baku",
    tagline: "Land of Fire",
    region: "Azerbaijan",
    duration: "5N / 6D",
    priceRange: "₹70,000 – ₹1,20,000",
    groupSize: "20–40 pax",
    rating: 4.6,
    reviews: 134,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-azerbaijan_4769e260.jpg",
    overview: "Azerbaijan is a fascinating blend of ancient history and ultra-modern architecture. Baku's iconic Flame Towers rise above a UNESCO-listed Old City, while the surrounding landscape offers mud volcanoes and ancient petroglyphs.",
    itinerary: [
      { day: 1, title: "Arrival in Baku", activities: ["Arrival at Heydar Aliyev Airport", "Transfer to hotel & check-in", "Flame Towers evening view", "Baku Boulevard walk"] },
      { day: 2, title: "Baku City Tour", activities: ["Old City (Icherisheher) UNESCO site", "Maiden Tower", "Palace of the Shirvanshahs", "Carpet Museum"] },
      { day: 3, title: "Gobustan & Mud Volcanoes", activities: ["Gobustan National Park", "Ancient rock petroglyphs", "Mud volcanoes excursion", "Ateshgah Fire Temple"] },
      { day: 4, title: "Gabala Day Trip", activities: ["Scenic drive to Gabala", "Tufandag Mountain Resort", "Nohur Lake", "Waterfall visit"] },
      { day: 5, title: "Leisure & Shopping", activities: ["Nizami Street shopping", "Taza Bazaar market", "Farewell dinner at local restaurant"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Transfer to airport", "Depart with fiery memories"] },
    ],
    includes: ["4-star hotel accommodation", "Daily breakfast", "Airport & inter-city transfers", "Gobustan tour", "City tour", "Tour manager"],
    excludes: ["Airfare & visa charges", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Flame Towers", "Old City Baku", "Mud Volcanoes", "Gobustan Petroglyphs", "Gabala"],
    bestTime: "April – June, September – November",
    category: "international",
  },
  {
    slug: "mauritius",
    name: "Mauritius Island",
    tagline: "A Jewel of the Indian Ocean",
    region: "Mauritius",
    duration: "5N / 6D",
    priceRange: "₹90,000 – ₹1,80,000",
    groupSize: "2–40 pax",
    rating: 4.8,
    reviews: 156,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-mauritius_402c91f6.jpg",
    overview: "A luxury island destination with stunning beaches, vibrant coral reefs, and scenic volcanic landscapes. Mauritius offers the perfect blend of relaxation, adventure, and cultural diversity.",
    itinerary: [
      { day: 1, title: "Arrival & Resort Check-in", activities: ["Arrival at SSR International Airport", "Transfer to resort", "Welcome cocktail & beach leisure"] },
      { day: 2, title: "North Island Tour", activities: ["Port Louis city tour", "Caudan Waterfront", "Pamplemousses Botanical Garden", "Local market visit"] },
      { day: 3, title: "South Island Tour", activities: ["Chamarel Coloured Earth", "Chamarel Waterfall", "Black River Gorges National Park", "La Vanille Nature Park"] },
      { day: 4, title: "Ile Aux Cerfs Island", activities: ["Speedboat to Ile Aux Cerfs", "White sand beach leisure", "Water sports & snorkelling", "BBQ lunch on the island"] },
      { day: 5, title: "Leisure Beach Day", activities: ["Resort beach relaxation", "Optional spa treatment", "Sunset cocktails", "Farewell dinner"] },
      { day: 6, title: "Departure", activities: ["Breakfast at resort", "Transfer to airport", "Depart with beautiful memories"] },
    ],
    includes: ["4/5-star resort accommodation", "Daily breakfast", "Airport transfers", "Ile Aux Cerfs tour", "South island tour", "Tour manager"],
    excludes: ["Airfare", "Lunch & dinner (unless specified)", "Personal expenses", "Optional activities"],
    highlights: ["Ile Aux Cerfs", "Black River Gorges", "Chamarel Coloured Earth", "Underwater Waterfall", "Creole Cuisine"],
    bestTime: "May – December",
    category: "international",
  },
  // ─── DOMESTIC ────────────────────────────────────────────────────────────
  {
    slug: "kashmir",
    name: "Kashmir Valley",
    tagline: "Paradise on Earth",
    region: "Jammu & Kashmir, India",
    duration: "5N / 6D",
    priceRange: "₹18,000 – ₹45,000",
    groupSize: "20–40 pax",
    rating: 4.9,
    reviews: 512,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kashmir_1b72022f.jpg",
    overview: "Experience the mesmerizing beauty of Kashmir with snow-capped mountains, serene lakes, and picturesque valleys. Dal Lake, Gulmarg's gondola, and Pahalgam's meadows make Kashmir truly a paradise on Earth.",
    itinerary: [
      { day: 1, title: "Srinagar Arrival — Houseboat", activities: ["Arrival at Srinagar Airport", "Transfer to houseboat on Dal Lake", "Shikara ride on Dal Lake", "Welcome Wazwan dinner"] },
      { day: 2, title: "Gulmarg — Snow & Adventure", activities: ["Full-day excursion to Gulmarg", "Gondola ride to Apharwat Peak (optional)", "Snow activities & skiing", "Meadow walk"] },
      { day: 3, title: "Pahalgam — Valley of Shepherds", activities: ["Drive to Pahalgam", "Betaab Valley & Aru Valley", "Lidder River views", "Leisure & photography"] },
      { day: 4, title: "Sonmarg — Glacier Views", activities: ["Day trip to Sonmarg", "Thajiwas Glacier excursion", "Scenic mountain landscapes", "Pony ride (optional)"] },
      { day: 5, title: "Srinagar Sightseeing", activities: ["Mughal Gardens (Shalimar, Nishat, Chashme Shahi)", "Shankaracharya Temple", "Local market & handicrafts shopping"] },
      { day: 6, title: "Departure", activities: ["Breakfast on houseboat", "Check-out & airport transfer", "Depart with heavenly memories"] },
    ],
    includes: ["Houseboat + hotel accommodation", "All meals", "Airport & inter-city transfers", "Shikara ride", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Gondola charges", "Personal expenses", "Optional activities"],
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Mughal Gardens", "Houseboat Stay"],
    bestTime: "April – June, September – November",
    category: "domestic",
  },
  {
    slug: "kerala",
    name: "Kerala Backwaters",
    tagline: "God's Own Country",
    region: "Kerala, India",
    duration: "5N / 6D",
    priceRange: "₹14,999 – ₹45,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 634,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg",
    overview: "Kerala offers a peaceful retreat with lush greenery, wildlife sanctuaries, and scenic backwaters. From the tea gardens of Munnar to the houseboat experience of Alleppey, Kerala is a sensory delight.",
    itinerary: [
      { day: 1, title: "Cochin Arrival", activities: ["Arrival at Cochin Airport", "Hotel check-in", "Fort Kochi walk", "Chinese fishing nets at sunset"] },
      { day: 2, title: "Munnar — Tea Gardens", activities: ["Drive to Munnar (4 hrs)", "Tea Museum visit", "Eravikulam National Park", "Echo Point & Mattupetty Dam"] },
      { day: 3, title: "Munnar Sightseeing", activities: ["Top Station viewpoint", "Attukal Waterfalls", "Spice plantation tour", "Local market"] },
      { day: 4, title: "Thekkady — Wildlife", activities: ["Drive to Thekkady", "Periyar Wildlife Sanctuary boat ride", "Spice garden tour", "Bamboo rafting (optional)"] },
      { day: 5, title: "Alleppey Houseboat", activities: ["Drive to Alleppey", "Board houseboat on backwaters", "Cruise through canals & villages", "All meals on board"] },
      { day: 6, title: "Departure", activities: ["Breakfast on houseboat", "Disembark & transfer to Cochin Airport", "Depart with beautiful memories"] },
    ],
    includes: ["3/4-star hotel + houseboat accommodation", "All meals", "Airport & inter-city transfers", "Periyar boat ride", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Personal expenses", "Optional activities"],
    highlights: ["Alleppey Houseboat", "Munnar Tea Gardens", "Periyar Wildlife", "Fort Kochi", "Spice Plantations"],
    bestTime: "September – March",
    category: "domestic",
  },
  {
    slug: "goa",
    name: "Goa Beach Holiday",
    tagline: "Sun, Sand & Serenity",
    region: "Goa, India",
    duration: "3N / 4D",
    priceRange: "₹10,000 – ₹30,000",
    groupSize: "20–40 pax",
    rating: 4.6,
    reviews: 789,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-goa_9ba89b00.jpg",
    overview: "India's most popular coastal destination offers a perfect blend of beaches, nightlife, Portuguese heritage, and water sports. Whether you seek relaxation or adventure, Goa has it all.",
    itinerary: [
      { day: 1, title: "Arrival & Leisure", activities: ["Arrival at Goa Airport", "Hotel check-in", "Calangute/Baga Beach evening", "Beachside dinner"] },
      { day: 2, title: "North Goa Tour", activities: ["Aguada Fort & Candolim Beach", "Calangute & Baga Beach", "Water sports (parasailing, jet ski)", "Anjuna Flea Market"] },
      { day: 3, title: "South Goa Tour", activities: ["Colva & Palolem Beach", "Basilica of Bom Jesus (UNESCO)", "Se Cathedral", "Sunset Cruise on Mandovi River"] },
      { day: 4, title: "Departure", activities: ["Breakfast at hotel", "Last-minute shopping at Mapusa Market", "Transfer to airport", "Depart with sunny memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "Airport transfers", "North & South Goa sightseeing", "Sunset cruise", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["North & South Goa", "Water Sports", "Sunset Cruise", "Portuguese Heritage", "Beach Shacks"],
    bestTime: "November – February",
    category: "domestic",
  },
  {
    slug: "rajasthan",
    name: "Rajasthan Heritage Grand",
    tagline: "Land of Kings",
    region: "Rajasthan, India",
    duration: "10N / 11D",
    priceRange: "₹25,000 – ₹60,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 423,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg",
    overview: "Rajasthan is a land of majestic forts, opulent palaces, vibrant culture, and the golden Thar Desert. This grand circuit covers Jaipur, Jodhpur, Udaipur, and Jaisalmer — the crown jewels of royal India.",
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", activities: ["Arrival & hotel check-in", "Chokhi Dhani cultural evening", "Welcome dinner"] },
      { day: 2, title: "Jaipur — Pink City", activities: ["Amber Fort (elephant/jeep ride)", "City Palace & Jantar Mantar", "Hawa Mahal photo stop", "Johri Bazaar shopping"] },
      { day: 3, title: "Jaipur — Leisure", activities: ["Nahargarh Fort sunset", "Birla Mandir", "Local market exploration"] },
      { day: 4, title: "Transfer to Jodhpur", activities: ["Drive to Jodhpur (6 hrs)", "Hotel check-in", "Clock Tower & Sardar Market"] },
      { day: 5, title: "Jodhpur — Blue City", activities: ["Mehrangarh Fort", "Jaswant Thada", "Umaid Bhawan Palace", "Blue City walk"] },
      { day: 6, title: "Transfer to Jaisalmer", activities: ["Drive to Jaisalmer (5 hrs)", "Hotel check-in", "Jaisalmer Fort evening walk"] },
      { day: 7, title: "Jaisalmer — Golden City", activities: ["Jaisalmer Fort & Havelis", "Patwon Ki Haveli", "Sam Sand Dunes", "Camel ride & cultural show"] },
      { day: 8, title: "Transfer to Udaipur", activities: ["Drive to Udaipur (7 hrs)", "Hotel check-in", "Lake Pichola evening"] },
      { day: 9, title: "Udaipur — City of Lakes", activities: ["City Palace", "Jagdish Temple", "Boat ride on Lake Pichola", "Saheliyon Ki Bari"] },
      { day: 10, title: "Udaipur Leisure", activities: ["Monsoon Palace sunset", "Fateh Sagar Lake", "Shopping & farewell dinner"] },
      { day: 11, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Udaipur Airport", "Depart with royal memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast & dinner", "AC coach transfers", "All sightseeing as per itinerary", "Camel ride at Sam Dunes", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch", "Personal expenses", "Optional activities"],
    highlights: ["Amber Fort", "Mehrangarh Fort", "Jaisalmer Desert", "Lake Pichola", "Camel Safari"],
    bestTime: "October – March",
    category: "domestic",
  },
  {
    slug: "andaman",
    name: "Andaman Islands",
    tagline: "India's Tropical Paradise",
    region: "Andaman Islands, India",
    duration: "5N / 6D",
    priceRange: "₹25,000 – ₹60,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 298,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-andaman_cf26b1f5.jpg",
    overview: "Havelock Island, Radhanagar Beach, and Neil Island — the Andamans are India's best beach destination. Snorkelling, glass-bottom boat rides, and seafood included in our package.",
    itinerary: [
      { day: 1, title: "Port Blair Arrival", activities: ["Arrival at Veer Savarkar Airport", "Hotel check-in", "Cellular Jail visit", "Light & Sound Show"] },
      { day: 2, title: "Havelock Island", activities: ["Ferry to Havelock Island", "Radhanagar Beach (Asia's Best Beach)", "Elephant Beach snorkelling", "Sunset at Kalapathar Beach"] },
      { day: 3, title: "Havelock — Water Sports", activities: ["Scuba diving session", "Sea walk experience", "Kayaking through mangroves", "Beach leisure"] },
      { day: 4, title: "Neil Island", activities: ["Ferry to Neil Island", "Natural Bridge", "Bharatpur Beach", "Laxmanpur Beach sunset"] },
      { day: 5, title: "Return Port Blair", activities: ["Ferry back to Port Blair", "Ross Island & North Bay Island", "Corbyn's Cove Beach", "Shopping at Aberdeen Bazaar"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Transfer to airport", "Depart with island memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "Airport & ferry transfers", "Cellular Jail entry", "Scuba diving session", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Radhanagar Beach", "Havelock Island", "Scuba Diving", "Neil Island", "Cellular Jail"],
    bestTime: "October – May",
    category: "domestic",
  },
  {
    slug: "himachal",
    name: "Himachal — Shimla & Manali",
    tagline: "Queen of Hills",
    region: "Himachal Pradesh, India",
    duration: "5N / 6D",
    priceRange: "₹15,000 – ₹35,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 567,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg",
    overview: "A perfect hill station escape offering snow views, adventure sports, and scenic Himalayan landscapes. Shimla's colonial charm and Manali's alpine beauty make this one of India's most beloved mountain getaways.",
    itinerary: [
      { day: 1, title: "Arrival in Shimla", activities: ["Arrival at Chandigarh/Shimla", "Hotel check-in", "Mall Road evening walk", "Christ Church visit"] },
      { day: 2, title: "Kufri Excursion", activities: ["Drive to Kufri", "Snow activities & yak ride", "Himalayan Nature Park", "Return to Shimla"] },
      { day: 3, title: "Transfer to Manali", activities: ["Scenic drive via Kullu Valley", "Kullu Shawl factory visit", "Arrival at Manali", "Hotel check-in"] },
      { day: 4, title: "Solang Valley — Adventure", activities: ["Drive to Solang Valley", "Skiing, zorbing & cable car", "Rohtang Pass (seasonal)", "Adventure sports"] },
      { day: 5, title: "Manali Sightseeing", activities: ["Hadimba Devi Temple", "Vashisht Hot Springs", "Old Manali & Tibetan Monastery", "Mall Road shopping"] },
      { day: 6, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Chandigarh/airport", "Depart with mountain memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "AC coach transfers", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Adventure sports charges"],
    highlights: ["Shimla Mall Road", "Kufri Snow", "Manali Hadimba Temple", "Solang Valley", "Rohtang Pass"],
    bestTime: "March – June, October – December",
    category: "domestic",
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand Char Dham",
    tagline: "Abode of the Gods",
    region: "Uttarakhand, India",
    duration: "7N / 8D",
    priceRange: "₹12,000 – ₹30,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 345,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-uttarakhand_1e1ea769.jpg",
    overview: "The Char Dham Yatra is one of Hinduism's most sacred pilgrimages, covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Set amidst the majestic Himalayas, this spiritual journey is a life-transforming experience.",
    itinerary: [
      { day: 1, title: "Haridwar Arrival", activities: ["Arrival at Haridwar", "Hotel check-in", "Har Ki Pauri Ganga Aarti"] },
      { day: 2, title: "Yamunotri", activities: ["Drive to Janki Chatti", "Trek to Yamunotri Temple", "Surya Kund hot spring", "Return to camp"] },
      { day: 3, title: "Gangotri", activities: ["Drive to Gangotri", "Gangotri Temple darshan", "Bhagirathi River", "Return to camp"] },
      { day: 4, title: "Kedarnath", activities: ["Drive to Gaurikund", "Helicopter/trek to Kedarnath", "Kedarnath Temple darshan", "Return to camp"] },
      { day: 5, title: "Badrinath", activities: ["Drive to Badrinath", "Badrinath Temple darshan", "Tapt Kund", "Mana Village (last Indian village)"] },
      { day: 6, title: "Rishikesh", activities: ["Drive to Rishikesh", "Laxman Jhula & Ram Jhula", "Ganga Aarti at Triveni Ghat", "Optional river rafting"] },
      { day: 7, title: "Haridwar Leisure", activities: ["Chandi Devi Temple", "Mansa Devi Temple", "Shopping at Haridwar market"] },
      { day: 8, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Haridwar/Dehradun", "Depart with divine blessings"] },
    ],
    includes: ["Hotel/camp accommodation", "All meals", "AC coach transfers", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Helicopter charges", "Personal expenses", "Optional activities"],
    highlights: ["Kedarnath Temple", "Badrinath Temple", "Gangotri", "Yamunotri", "Rishikesh Rafting"],
    bestTime: "May – June, September – October",
    category: "domestic",
  },
  {
    slug: "varanasi",
    name: "Varanasi & Ayodhya",
    tagline: "City of Light & Faith",
    region: "Uttar Pradesh, India",
    duration: "4N / 5D",
    priceRange: "₹12,000 – ₹30,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 412,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-varanasi_61db5602.jpg",
    overview: "Varanasi, one of the world's oldest living cities, offers a profound spiritual experience on the banks of the sacred Ganga. Combined with Ayodhya's Ram Mandir, this tour is a deeply moving pilgrimage.",
    itinerary: [
      { day: 1, title: "Varanasi Arrival", activities: ["Arrival & hotel check-in", "Evening Ganga Aarti at Dashashwamedh Ghat", "Boat ride on the Ganga"] },
      { day: 2, title: "Varanasi Temples", activities: ["Early morning sunrise boat ride", "Kashi Vishwanath Temple darshan", "Sankat Mochan Temple", "Tulsi Manas Temple"] },
      { day: 3, title: "Sarnath", activities: ["Visit Sarnath (where Buddha gave first sermon)", "Dhamek Stupa", "Sarnath Museum", "Ramnagar Fort"] },
      { day: 4, title: "Ayodhya", activities: ["Drive to Ayodhya (3 hrs)", "Ram Mandir darshan", "Hanuman Garhi", "Sarayu River Aarti", "Kanak Bhawan"] },
      { day: 5, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Varanasi Airport", "Depart with divine blessings"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "AC coach transfers", "Boat ride on Ganga", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Ganga Aarti", "Ram Mandir Darshan", "Kashi Vishwanath", "Sarnath", "Sunrise Boat Ride"],
    bestTime: "October – March",
    category: "domestic",
  },
  {
    slug: "ladakh",
    name: "Ladakh High Altitude",
    tagline: "The Land of High Passes",
    region: "Ladakh, India",
    duration: "6N / 7D",
    priceRange: "₹25,000 – ₹60,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 167,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-ladakh_a9f2651c.jpg",
    overview: "A high-altitude desert destination known for its stark landscapes, ancient monasteries, and pristine lakes. Ladakh offers an otherworldly experience that is unlike anywhere else in India.",
    itinerary: [
      { day: 1, title: "Leh Arrival & Acclimatization", activities: ["Arrival at Leh Airport", "Rest & acclimatization (important at 3,500m)", "Leh Palace & Shanti Stupa evening"] },
      { day: 2, title: "Leh Local Sightseeing", activities: ["Thiksey Monastery", "Hemis Monastery", "Shey Palace", "Hall of Fame Museum"] },
      { day: 3, title: "Nubra Valley", activities: ["Drive via Khardung La Pass (world's highest motorable road)", "Diskit Monastery & Giant Buddha statue", "Double-humped Bactrian camel ride", "Sand dunes at Hunder"] },
      { day: 4, title: "Pangong Lake", activities: ["Drive to Pangong Tso Lake", "Stunning blue-green lake views", "Changthang Wildlife Sanctuary", "Overnight at lake camp"] },
      { day: 5, title: "Return to Leh", activities: ["Morning at Pangong Lake", "Drive back via Chang La Pass", "Leh market shopping"] },
      { day: 6, title: "Magnetic Hill & Confluence", activities: ["Magnetic Hill", "Sangam (Indus-Zanskar confluence)", "Gurudwara Pathar Sahib", "Farewell dinner"] },
      { day: 7, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Leh Airport", "Depart with Himalayan memories"] },
    ],
    includes: ["Hotel + camp accommodation", "All meals", "Airport & inter-city transfers", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Personal expenses", "Optional activities", "Inner line permit (if applicable)"],
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La Pass", "Monasteries", "Camel Safari"],
    bestTime: "June – September",
    category: "domestic",
  },
  {
    slug: "tirupati",
    name: "Tirupati Pilgrimage",
    tagline: "Abode of Lord Venkateswara",
    region: "Andhra Pradesh, India",
    duration: "2N / 3D",
    priceRange: "₹10,000 – ₹25,000",
    groupSize: "20–40 pax",
    rating: 4.8,
    reviews: 567,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-tirupati_68b48719.jpg",
    overview: "Tirupati is home to the Tirumala Venkateswara Temple, one of the richest and most visited religious sites in the world. A deeply spiritual pilgrimage that draws millions of devotees every year.",
    itinerary: [
      { day: 1, title: "Tirupati Arrival", activities: ["Arrival at Tirupati Airport/Station", "Hotel check-in", "Padmavathi Temple darshan", "Govindharaja Swamy Temple"] },
      { day: 2, title: "Tirumala Darshan", activities: ["Early morning transfer to Tirumala", "Tirumala Venkateswara Temple darshan (special entry)", "Prasadam collection", "Return to Tirupati"] },
      { day: 3, title: "Departure", activities: ["Breakfast at hotel", "Srikalahasti Temple (optional)", "Transfer to airport/station", "Depart with divine blessings"] },
    ],
    includes: ["3-star hotel accommodation", "Daily breakfast", "AC coach transfers", "Special darshan entry", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Tirumala Darshan", "Padmavathi Temple", "Kalahasti Temple", "Special Entry", "Prasadam"],
    bestTime: "All year (avoid festival rush)",
    category: "domestic",
  },
  {
    slug: "south-india",
    name: "South India Temple Tour",
    tagline: "Dravidian Heritage Trail",
    region: "Tamil Nadu & Karnataka, India",
    duration: "7N / 8D",
    priceRange: "₹12,000 – ₹28,000",
    groupSize: "20–40 pax",
    rating: 4.7,
    reviews: 312,
    heroImage: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-south-india_a075b480.jpg",
    overview: "A grand tour of South India's most magnificent Dravidian temples, royal palaces, and scenic landscapes. From the towering gopurams of Madurai to the royal splendour of Mysore.",
    itinerary: [
      { day: 1, title: "Chennai Arrival", activities: ["Arrival at Chennai Airport", "Hotel check-in", "Marina Beach walk", "Kapaleeshwarar Temple"] },
      { day: 2, title: "Mahabalipuram", activities: ["Shore Temple (UNESCO)", "Arjuna's Penance rock carvings", "Five Rathas", "Return to Chennai"] },
      { day: 3, title: "Pondicherry", activities: ["Drive to Pondicherry", "French Colony walk", "Auroville visit", "Promenade Beach"] },
      { day: 4, title: "Madurai", activities: ["Drive to Madurai", "Meenakshi Amman Temple", "Thirumalai Nayakkar Palace", "Vandiyur Mariamman Teppakulam"] },
      { day: 5, title: "Rameshwaram", activities: ["Drive to Rameshwaram", "Ramanathaswamy Temple", "Dhanushkodi (Land's End)", "Pamban Bridge"] },
      { day: 6, title: "Mysore", activities: ["Drive to Mysore", "Mysore Palace (illuminated evenings)", "Chamundi Hills", "Devaraja Market"] },
      { day: 7, title: "Coorg", activities: ["Drive to Coorg", "Abbey Falls", "Raja's Seat", "Coffee plantation tour"] },
      { day: 8, title: "Departure", activities: ["Breakfast at hotel", "Transfer to Bangalore Airport", "Depart with cultural memories"] },
    ],
    includes: ["3/4-star hotel accommodation", "Daily breakfast", "AC coach transfers", "All sightseeing as per itinerary", "Tour manager"],
    excludes: ["Airfare / train tickets", "Lunch & dinner", "Personal expenses", "Optional activities"],
    highlights: ["Meenakshi Temple", "Rameshwaram", "Mysore Palace", "Mahabalipuram", "Coorg Coffee"],
    bestTime: "October – March",
    category: "domestic",
  },
];

const CANCELLATION_POLICY = [
  { days: "30+ days before departure", refund: "90% refund (10% admin charges)" },
  { days: "15–29 days before departure", refund: "75% refund" },
  { days: "7–14 days before departure", refund: "50% refund" },
  { days: "3–6 days before departure", refund: "25% refund" },
  { days: "0–2 days before departure / No-show", refund: "No refund" },
];

function CancellationPolicyDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-amber-200 rounded-xl overflow-hidden bg-amber-50/50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-amber-900 hover:bg-amber-100/60 transition-colors"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600" />
          Cancellation &amp; Refund Policy
        </span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-5 h-5 text-amber-600" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 space-y-3">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="text-left py-2 pr-4 font-semibold text-amber-900">Cancellation Timeline</th>
                      <th className="text-left py-2 font-semibold text-amber-900">Refund Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CANCELLATION_POLICY.map((row, i) => (
                      <tr key={i} className="border-b border-amber-100 last:border-0">
                        <td className="py-2 pr-4 text-amber-800">{row.days}</td>
                        <td className="py-2 text-amber-700 font-medium">{row.refund}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-amber-700 mt-3">
                * Cancellations must be submitted in writing via email to{" "}
                <a href="mailto:shriganeshtravelsofficial@gmail.com" className="underline">
                  shriganeshtravelsofficial@gmail.com
                </a>
                . Airfare, visa, and insurance charges are non-refundable. Refunds are processed within 7–10 business days.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function DestinationDetail() {
  const { slug } = useParams<{ slug: string }>();
  const destination = DESTINATIONS.find((d) => d.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
          <MapPin className="w-16 h-16 text-amber-400" />
          <h1 className="text-3xl font-bold text-gray-800">Destination Not Found</h1>
          <p className="text-gray-500 max-w-md">
            We couldn't find this destination. Please browse our packages to find your perfect holiday.
          </p>
          <Link href="/domestic" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-full transition-colors">
            Browse Packages
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the ${destination.name} package (${destination.duration}, ${destination.priceRange}). Please share more details.`
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEOHead
        title={`${destination.name} Tour Package — ${destination.duration}`}
        description={`${destination.name} tour package from Mumbai. ${destination.tagline} ${destination.duration}, ${destination.priceRange}. All-inclusive with meals, hotels, transfers & sightseeing.`}
        canonical={`/destination/${destination.slug}`}
        ogImage={destination.heroImage}
        ogType="product"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          "name": `${destination.name} Tour Package`,
          "description": destination.tagline,
          "image": destination.heroImage,
          "provider": {
            "@type": "TravelAgency",
            "name": "Shri Ganesh Travels",
            "telephone": "+917977416112"
          },
          "touristType": ["Family", "Group", "Honeymoon"],
          "itinerary": {
            "@type": "ItemList",
            "numberOfItems": destination.itinerary.length
          }
        }}
      />
      <Navbar />

      {/* HERO */}
      <section className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href={destination.category === "domestic" ? "/domestic" : "/international"}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to {destination.category === "domestic" ? "Domestic" : "International"} Tours
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 font-serif">{destination.name}</h1>
            <p className="text-xl text-amber-300 font-medium mb-4">{destination.tagline}</p>
            <div className="flex flex-wrap gap-4 text-white/90 text-sm">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{destination.region}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{destination.duration}</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" />{destination.groupSize}</span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                {destination.rating} ({destination.reviews} reviews)
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-10">

          {/* Overview */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 font-serif flex items-center gap-2">
              <Info className="w-6 h-6 text-amber-500" /> Overview
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">{destination.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {destination.highlights.map((h) => (
                <span key={h} className="bg-amber-50 border border-amber-200 text-amber-800 text-sm px-3 py-1 rounded-full">{h}</span>
              ))}
            </div>
          </motion.section>

          {/* Itinerary */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif flex items-center gap-2">
              <Calendar className="w-6 h-6 text-amber-500" /> Day-by-Day Itinerary
            </h2>
            <div className="space-y-4">
              {destination.itinerary.map((day, i) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-4"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {day.day}
                    </div>
                    {i < destination.itinerary.length - 1 && (
                      <div className="w-0.5 flex-1 bg-amber-200 mt-1" />
                    )}
                  </div>
                  <div className="pb-6 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{day.title}</h3>
                    <ul className="space-y-1">
                      {day.activities.map((act, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                          {act}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Includes / Excludes */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" /> Package Includes
                </h3>
                <ul className="space-y-2">
                  {destination.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-green-700 text-sm">
                      <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" /> Package Excludes
                </h3>
                <ul className="space-y-2">
                  {destination.excludes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-red-700 text-sm">
                      <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-800">
            <strong>⚠️ Important Note:</strong> Prices are indicative and may vary based on travel dates, flight availability, hotel category, and customization. Please contact us for the latest pricing and availability.
          </div>

          <CancellationPolicyDropdown />
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-6">
              <div className="text-center mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Starting from</p>
                <p className="text-3xl font-bold text-amber-600">{destination.priceRange.split("–")[0].trim()}</p>
                <p className="text-sm text-gray-500">per person (twin sharing)</p>
              </div>
              <div className="space-y-3 mb-5 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-amber-500" />{destination.duration}</div>
                <div className="flex items-center gap-2"><Users className="w-4 h-4 text-amber-500" />{destination.groupSize}</div>
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-500" />Best time: {destination.bestTime}</div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  {destination.rating}/5 ({destination.reviews} reviews)
                </div>
              </div>
              <a
                href={`https://wa.me/917977416112?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition-colors mb-3"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp Enquiry
              </a>
              <a
                href="tel:+917977416112"
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" /> Call Now
              </a>
              <p className="text-center text-xs text-gray-400 mt-4">Powered by Mangirish Hospitality</p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
              <p className="font-semibold text-amber-900 mb-1">Best Time to Visit</p>
              <p className="text-amber-700">{destination.bestTime}</p>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppFloat />
      <Footer />
    </div>
  );
}
