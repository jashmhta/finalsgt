/*
 * SHARED PACKAGE DATA — Shri Ganesh Travels
 * Organized: Domestic / International → Group / Customized → Sub-categories
 * Parent company: Mangirish Hospitality | Est. 1987 | Mumbai
 * Updated: All destinations with real pricing, correct images, both group+customized variants
 */

export interface Package {
  id: number;
  name: string;
  slug: string;
  region: string;
  duration: string;
  price: string;          // starting price display
  priceRange?: string;    // e.g. "₹35,000 – ₹75,000"
  perPerson: boolean;
  tag: string;
  category: "domestic" | "international";
  tourType: "group" | "customized";
  subCategory: string;
  highlights: string[];
  image: string;
  country?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// DOMESTIC — GROUP TOURS
// ─────────────────────────────────────────────────────────────────────────────
const DOMESTIC_GROUP: Package[] = [
  {
    id: 1, name: "Kerala Backwaters", slug: "kerala",
    region: "Kerala, India", duration: "5N / 6D",
    price: "₹18,000", priceRange: "₹18,000 – ₹45,000", perPerson: true, tag: "Nature",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Alleppey Houseboat", "Munnar Tea Gardens", "Kochi Fort", "All Meals"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg',
  },
  {
    id: 2, name: "Rajasthan Heritage Grand", slug: "rajasthan",
    region: "Rajasthan, India", duration: "10N / 11D",
    price: "₹25,000", priceRange: "₹25,000 – ₹60,000", perPerson: true, tag: "Heritage",
    category: "domestic", tourType: "group", subCategory: "cultural",
    highlights: ["Jaipur · Jodhpur · Udaipur", "Jaisalmer Desert Safari", "Heritage Hotel Stays", "Camel Ride"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg',
  },
  {
    id: 3, name: "Himachal – Shimla & Manali", slug: "himachal",
    region: "Himachal Pradesh, India", duration: "5N / 6D",
    price: "₹15,000", priceRange: "₹15,000 – ₹35,000", perPerson: true, tag: "Mountains",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Shimla Mall Road", "Kufri Snow", "Manali Hadimba Temple", "Solang Valley"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg',
  },
  {
    id: 4, name: "Kashmir Valley", slug: "kashmir",
    region: "Jammu & Kashmir, India", duration: "5N / 6D",
    price: "₹18,000", priceRange: "₹18,000 – ₹45,000", perPerson: true, tag: "Mountains",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Houseboat Stay"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kashmir_1b72022f.jpg',
  },
  {
    id: 5, name: "Ladakh High Altitude", slug: "ladakh",
    region: "Ladakh, India", duration: "6N / 7D",
    price: "₹25,000", priceRange: "₹25,000 – ₹60,000", perPerson: true, tag: "Cultural",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Pangong Lake", "Nubra Valley", "Monasteries", "Magnetic Hill"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-ladakh_a9f2651c.jpg',
  },
  {
    id: 6, name: "Uttarakhand Char Dham", slug: "uttarakhand",
    region: "Uttarakhand, India", duration: "7N / 8D",
    price: "₹12,000", priceRange: "₹12,000 – ₹30,000", perPerson: true, tag: "Pilgrimage",
    category: "domestic", tourType: "group", subCategory: "pilgrimage",
    highlights: ["Kedarnath", "Badrinath", "Rishikesh Rafting", "Haridwar Ganga Aarti"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-uttarakhand_1e1ea769.jpg',
  },
  {
    id: 7, name: "Varanasi & Ayodhya", slug: "varanasi",
    region: "Uttar Pradesh, India", duration: "4N / 5D",
    price: "₹12,000", priceRange: "₹12,000 – ₹30,000", perPerson: true, tag: "Pilgrimage",
    category: "domestic", tourType: "group", subCategory: "pilgrimage",
    highlights: ["Ganga Aarti", "Ram Mandir Darshan", "Sarnath", "Boat Ride"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-varanasi_61db5602.jpg',
  },
  {
    id: 8, name: "Goa Beach Holiday", slug: "goa",
    region: "Goa, India", duration: "3N / 4D",
    price: "₹10,000", priceRange: "₹10,000 – ₹30,000", perPerson: true, tag: "Beach",
    category: "domestic", tourType: "group", subCategory: "beach",
    highlights: ["North & South Goa", "Water Sports", "Sunset Cruise", "Beach Shacks"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-goa_9ba89b00.jpg',
  },
  {
    id: 9, name: "Andaman Islands", slug: "andaman",
    region: "Andaman Islands, India", duration: "5N / 6D",
    price: "₹25,000", priceRange: "₹25,000 – ₹60,000", perPerson: true, tag: "Beach",
    category: "domestic", tourType: "group", subCategory: "beach",
    highlights: ["Radhanagar Beach", "Havelock Island", "Scuba Diving", "Neil Island"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-andaman_cf26b1f5.jpg',
  },
  {
    id: 10, name: "Rajasthan – Jaipur & Udaipur", slug: "rajasthan",
    region: "Rajasthan, India", duration: "5N / 6D",
    price: "₹25,000", priceRange: "₹25,000 – ₹50,000", perPerson: true, tag: "Heritage",
    category: "domestic", tourType: "group", subCategory: "cultural",
    highlights: ["Amber Fort", "City Palace", "Lake Pichola", "Mehrangarh Fort"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg',
  },
  {
    id: 11, name: "Gujarat Cultural Tour", slug: "gujarat",
    region: "Gujarat, India", duration: "4N / 5D",
    price: "₹12,000", priceRange: "₹12,000 – ₹28,000", perPerson: true, tag: "Cultural",
    category: "domestic", tourType: "group", subCategory: "cultural",
    highlights: ["Statue of Unity", "Dwarka Temple", "Somnath", "Rann of Kutch"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-gujarat_ced67396.jpg',
  },
  {
    id: 12, name: "Sikkim & Darjeeling", slug: "sikkim",
    region: "Sikkim & West Bengal, India", duration: "6N / 7D",
    price: "₹18,000", priceRange: "₹18,000 – ₹40,000", perPerson: true, tag: "Mountains",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Nathula Pass", "Tiger Hill Sunrise", "Toy Train Ride", "Tea Estate"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-sikkim_bfce32f3.jpg',
  },
  {
    id: 13, name: "Meghalaya & Assam", slug: "northeast",
    region: "North East India", duration: "6N / 7D",
    price: "₹20,000", priceRange: "₹20,000 – ₹45,000", perPerson: true, tag: "Nature",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Cherrapunji Waterfalls", "Dawki River", "Kaziranga Safari", "Living Root Bridges"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-northeast_a9679430.jpg',
  },
  {
    id: 14, name: "Lakshadweep Paradise", slug: "lakshadweep",
    region: "Lakshadweep, India", duration: "4N / 5D",
    price: "₹30,000", priceRange: "₹30,000 – ₹70,000", perPerson: true, tag: "Beach",
    category: "domestic", tourType: "group", subCategory: "beach",
    highlights: ["Coral Reefs", "Snorkeling", "Kayaking", "Island Exploration"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-lakshadweep_10cf0f6e.jpg',
  },
  {
    id: 15, name: "Spiti Valley Expedition", slug: "spiti",
    region: "Himachal Pradesh, India", duration: "6N / 7D",
    price: "₹25,000", priceRange: "₹25,000 – ₹65,000", perPerson: true, tag: "Offbeat",
    category: "domestic", tourType: "group", subCategory: "family",
    highlights: ["Key Monastery", "Chandratal Lake", "Kaza Village", "High Altitude Desert"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg',
  },
  {
    id: 16, name: "Tirupati Pilgrimage", slug: "tirupati",
    region: "Andhra Pradesh, India", duration: "2N / 3D",
    price: "₹10,000", priceRange: "₹10,000 – ₹25,000", perPerson: true, tag: "Pilgrimage",
    category: "domestic", tourType: "group", subCategory: "pilgrimage",
    highlights: ["Tirumala Darshan", "Padmavathi Temple", "Kalahasti Temple", "Special Entry"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-tirupati_68b48719.jpg',
  },
  {
    id: 17, name: "Vaishno Devi Yatra", slug: "vaishno-devi",
    region: "Jammu & Kashmir, India", duration: "3N / 4D",
    price: "₹12,000", priceRange: "₹12,000 – ₹30,000", perPerson: true, tag: "Pilgrimage",
    category: "domestic", tourType: "group", subCategory: "pilgrimage",
    highlights: ["Mata Vaishno Devi Darshan", "Katra Base Camp", "Bhairavnath Temple", "Helicopter Option"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kashmir_1b72022f.jpg',
  },
  {
    id: 18, name: "South India Temple Tour", slug: "south-india",
    region: "Tamil Nadu & Karnataka, India", duration: "7N / 8D",
    price: "₹12,000", priceRange: "₹12,000 – ₹28,000", perPerson: true, tag: "Cultural",
    category: "domestic", tourType: "group", subCategory: "cultural",
    highlights: ["Madurai Meenakshi", "Rameshwaram", "Mysore Palace", "Coorg Coffee"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-south-india_a075b480.jpg',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// DOMESTIC — CUSTOMIZED TOURS
// ─────────────────────────────────────────────────────────────────────────────
const DOMESTIC_CUSTOMIZED: Package[] = [
  {
    id: 101, name: "Goa Honeymoon Special", slug: "goa",
    region: "Goa, India", duration: "4N / 5D",
    price: "₹22,000", priceRange: "₹22,000 – ₹45,000", perPerson: false, tag: "Honeymoon",
    category: "domestic", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Private Beach Dinner", "Couple Spa", "Sunset Cruise", "Candlelight Setup"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-goa_9ba89b00.jpg',
  },
  {
    id: 102, name: "Kashmir Honeymoon Escape", slug: "kashmir",
    region: "Jammu & Kashmir, India", duration: "5N / 6D",
    price: "₹28,000", priceRange: "₹28,000 – ₹55,000", perPerson: false, tag: "Honeymoon",
    category: "domestic", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley", "Houseboat Stay"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kashmir_1b72022f.jpg',
  },
  {
    id: 103, name: "Kerala Luxury Retreat", slug: "kerala",
    region: "Kerala, India", duration: "5N / 6D",
    price: "₹35,000", priceRange: "₹35,000 – ₹70,000", perPerson: true, tag: "Luxury",
    category: "domestic", tourType: "customized", subCategory: "luxury",
    highlights: ["5-Star Resorts", "Private Houseboat", "Ayurveda Spa", "Fine Dining"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-kerala_a5f1b8fd.jpg',
  },
  {
    id: 104, name: "Rajasthan Corporate Retreat", slug: "rajasthan",
    region: "Rajasthan, India", duration: "3N / 4D",
    price: "₹25,000", priceRange: "₹25,000 – ₹60,000", perPerson: true, tag: "Corporate",
    category: "domestic", tourType: "customized", subCategory: "corporate",
    highlights: ["Conference Hall", "Team Building", "Heritage Dinner", "Desert Camp"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-rajasthan_8c9f64a8.jpg',
  },
  {
    id: 105, name: "Goa Corporate Offsite", slug: "goa",
    region: "Goa, India", duration: "3N / 4D",
    price: "₹25,000", priceRange: "₹25,000 – ₹50,000", perPerson: true, tag: "Corporate",
    category: "domestic", tourType: "customized", subCategory: "corporate",
    highlights: ["Beach Resort", "Team Activities", "Gala Dinner", "Water Sports"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-goa_9ba89b00.jpg',
  },
  {
    id: 106, name: "Andaman Honeymoon", slug: "andaman",
    region: "Andaman Islands, India", duration: "5N / 6D",
    price: "₹35,000", priceRange: "₹35,000 – ₹65,000", perPerson: false, tag: "Honeymoon",
    category: "domestic", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Private Beach", "Scuba Diving", "Sunset Cruise", "Luxury Resort"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-andaman_cf26b1f5.jpg',
  },
  {
    id: 107, name: "Char Dham Yatra Premium", slug: "uttarakhand",
    region: "Uttarakhand, India", duration: "10N / 11D",
    price: "₹35,000", priceRange: "₹35,000 – ₹70,000", perPerson: true, tag: "Pilgrimage",
    category: "domestic", tourType: "customized", subCategory: "pilgrimage",
    highlights: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-uttarakhand_1e1ea769.jpg',
  },
  {
    id: 108, name: "Himachal Family Holiday", slug: "himachal",
    region: "Himachal Pradesh, India", duration: "6N / 7D",
    price: "₹20,000", priceRange: "₹20,000 – ₹40,000", perPerson: true, tag: "Family",
    category: "domestic", tourType: "customized", subCategory: "family",
    highlights: ["Shimla · Manali · Kasol", "Snow Activities", "River Rafting", "Camping"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-shimla-manali_c9bef4e3.jpg',
  },
  {
    id: 109, name: "Pondicherry & Coorg Escape", slug: "pondicherry",
    region: "South India", duration: "5N / 6D",
    price: "₹15,000", priceRange: "₹15,000 – ₹35,000", perPerson: true, tag: "Offbeat",
    category: "domestic", tourType: "customized", subCategory: "family",
    highlights: ["French Colony", "Auroville", "Coffee Plantation", "Abbey Falls"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-south-india_a075b480.jpg',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INTERNATIONAL — GROUP TOURS
// ─────────────────────────────────────────────────────────────────────────────
const INTERNATIONAL_GROUP: Package[] = [
  {
    id: 201, name: "Singapore Family", slug: "singapore",
    region: "Singapore", duration: "4N / 5D",
    price: "₹49,999", priceRange: "₹49,999 – ₹75,000", perPerson: true, tag: "City",
    category: "international", tourType: "group", subCategory: "family",
    highlights: ["Universal Studios", "Gardens by the Bay", "Sentosa Island", "Night Safari"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-singapore_624447c8.jpg',
    country: "Singapore",
  },
  {
    id: 202, name: "Dubai & Abu Dhabi", slug: "dubai",
    region: "UAE", duration: "5N / 6D",
    price: "₹45,000", priceRange: "₹45,000 – ₹90,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "group", subCategory: "family",
    highlights: ["Burj Khalifa", "Desert Safari", "Dhow Cruise", "Ferrari World"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg',
    country: "UAE",
  },
  {
    id: 203, name: "Bali, Indonesia", slug: "bali",
    region: "Bali, Indonesia", duration: "5N / 6D",
    price: "₹45,000", priceRange: "₹45,000 – ₹90,000", perPerson: true, tag: "Tropical",
    category: "international", tourType: "group", subCategory: "beach",
    highlights: ["Ubud Rice Terraces", "Tanah Lot Temple", "Kuta Beach", "Spa & Wellness"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-bali_56ea95d1.jpg',
    country: "Indonesia",
  },
  {
    id: 204, name: "Thailand – Phuket & Krabi", slug: "thailand",
    region: "Thailand", duration: "4N / 5D",
    price: "₹35,000", priceRange: "₹35,000 – ₹75,000", perPerson: true, tag: "Beach",
    category: "international", tourType: "group", subCategory: "beach",
    highlights: ["Phi Phi Islands", "4 Island Tour", "Patong Beach", "Thai Massage"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-thailand_1df987a8.jpg',
    country: "Thailand",
  },
  {
    id: 205, name: "Vietnam Discovery", slug: "vietnam",
    region: "Vietnam", duration: "5N / 6D",
    price: "₹55,000", priceRange: "₹55,000 – ₹95,000", perPerson: true, tag: "Cultural",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Halong Bay Cruise", "Hoi An Ancient Town", "Ba Na Hills", "Golden Bridge"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-vietnam_5b7df41f.jpg',
    country: "Vietnam",
  },
  {
    id: 206, name: "Sri Lanka Splendour", slug: "sri-lanka",
    region: "Sri Lanka", duration: "6N / 7D",
    price: "₹47,525", priceRange: "₹47,525 – ₹80,000", perPerson: true, tag: "Cultural",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Kandy Temple", "Nuwara Eliya Tea", "Galle Fort", "Sigiriya Rock"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-sri-lanka_147875fb.jpg',
    country: "Sri Lanka",
  },
  {
    id: 207, name: "Malaysia – KL & Genting", slug: "malaysia",
    region: "Malaysia", duration: "4N / 5D",
    price: "₹45,000", priceRange: "₹45,000 – ₹85,000", perPerson: true, tag: "City",
    category: "international", tourType: "group", subCategory: "family",
    highlights: ["Petronas Towers", "Genting Highlands", "Batu Caves", "Bukit Bintang"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-malaysia_f5eaaf22.jpg',
    country: "Malaysia",
  },
  {
    id: 208, name: "Hong Kong & Macau", slug: "hong-kong",
    region: "Hong Kong & Macau", duration: "5N / 6D",
    price: "₹90,000", priceRange: "₹90,000 – ₹1,80,000", perPerson: true, tag: "City",
    category: "international", tourType: "group", subCategory: "family",
    highlights: ["Victoria Peak", "Disneyland", "Macau Casino Strip", "Harbour Cruise"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-hong-kong_148974c3.jpg',
    country: "Hong Kong",
  },
  {
    id: 209, name: "Switzerland Alps", slug: "switzerland",
    region: "Switzerland", duration: "6N / 7D",
    price: "₹1,80,000", priceRange: "₹1,80,000 – ₹3,50,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "group", subCategory: "luxury",
    highlights: ["Jungfraujoch", "Interlaken", "Lucerne", "Mt. Titlis"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-switzerland_d5407be3.jpg',
    country: "Switzerland",
  },
  {
    id: 210, name: "Japan – Tokyo & Kyoto", slug: "japan",
    region: "Japan", duration: "6N / 7D",
    price: "₹1,20,000", priceRange: "₹1,20,000 – ₹2,50,000", perPerson: true, tag: "Cultural",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Mt. Fuji", "Shibuya Crossing", "Kyoto Temples", "Bullet Train"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-japan_f1795542.jpg',
    country: "Japan",
  },
  {
    id: 211, name: "Australia – Sydney & Melbourne", slug: "australia",
    region: "Australia", duration: "6N / 7D",
    price: "₹2,20,000", priceRange: "₹2,20,000 – ₹4,20,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "group", subCategory: "luxury",
    highlights: ["Sydney Opera House", "Harbour Bridge", "Great Ocean Road", "Blue Mountains"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-australia_90a3daaf.jpg',
    country: "Australia",
  },
  {
    id: 212, name: "USA – New York & Las Vegas", slug: "usa",
    region: "USA", duration: "7N / 8D",
    price: "₹2,20,000", priceRange: "₹2,20,000 – ₹4,50,000", perPerson: true, tag: "City",
    category: "international", tourType: "group", subCategory: "family",
    highlights: ["Statue of Liberty", "Times Square", "Grand Canyon", "Vegas Strip"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-usa_773c7149.jpg',
    country: "USA",
  },
  {
    id: 213, name: "Azerbaijan – Baku", slug: "azerbaijan",
    region: "Azerbaijan", duration: "5N / 6D",
    price: "₹70,000", priceRange: "₹70,000 – ₹1,20,000", perPerson: true, tag: "Offbeat",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Flame Towers", "Old City Baku", "Mud Volcanoes", "Gobustan Petroglyphs"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-azerbaijan_4769e260.jpg',
    country: "Azerbaijan",
  },
  {
    id: 214, name: "Qatar – Doha", slug: "qatar",
    region: "Qatar", duration: "4N / 5D",
    price: "₹80,000", priceRange: "₹80,000 – ₹1,50,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "group", subCategory: "luxury",
    highlights: ["Souq Waqif", "Museum of Islamic Art", "Lusail City", "Desert Safari"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-qatar_535b0b8b.jpg',
    country: "Qatar",
  },
  {
    id: 215, name: "Oman – Muscat", slug: "oman",
    region: "Oman", duration: "5N / 6D",
    price: "₹80,000", priceRange: "₹80,000 – ₹1,40,000", perPerson: true, tag: "Cultural",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Sultan Qaboos Mosque", "Wahiba Sands", "Wadi Shab", "Nizwa Fort"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-oman_1f4945aa.jpg',
    country: "Oman",
  },
  {
    id: 216, name: "Cambodia – Siem Reap", slug: "cambodia",
    region: "Cambodia", duration: "4N / 5D",
    price: "₹60,000", priceRange: "₹60,000 – ₹1,00,000", perPerson: true, tag: "Cultural",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Angkor Wat", "Bayon Temple", "Tonle Sap Lake", "Floating Village"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-cambodia_a3e125fc.jpg',
    country: "Cambodia",
  },
  {
    id: 217, name: "South Korea – Seoul", slug: "south-korea",
    region: "South Korea", duration: "5N / 6D",
    price: "₹1,10,000", priceRange: "₹1,10,000 – ₹2,20,000", perPerson: true, tag: "City",
    category: "international", tourType: "group", subCategory: "cultural",
    highlights: ["Gyeongbokgung Palace", "N Seoul Tower", "DMZ Tour", "K-Pop Experience"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-south-korea_4c91129b.jpg',
    country: "South Korea",
  },
  {
    id: 218, name: "Mauritius Island", slug: "mauritius",
    region: "Mauritius", duration: "5N / 6D",
    price: "₹90,000", priceRange: "₹90,000 – ₹1,80,000", perPerson: true, tag: "Beach",
    category: "international", tourType: "group", subCategory: "beach",
    highlights: ["Ile Aux Cerfs", "Black River Gorges", "Underwater Waterfall", "Creole Cuisine"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-mauritius_402c91f6.jpg',
    country: "Mauritius",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// INTERNATIONAL — CUSTOMIZED TOURS
// ─────────────────────────────────────────────────────────────────────────────
const INTERNATIONAL_CUSTOMIZED: Package[] = [
  {
    id: 301, name: "Maldives Luxury Escape", slug: "maldives",
    region: "Maldives", duration: "5N / 6D",
    price: "₹70,000", priceRange: "₹70,000 – ₹2,00,000+", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Water Villa Stay", "Snorkelling & Diving", "Sunset Cruises", "Overwater Dining"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-maldives_02c84184.jpg',
    country: "Maldives",
  },
  {
    id: 302, name: "Seychelles – Mahé & Praslin", slug: "seychelles",
    region: "Seychelles", duration: "6N / 7D",
    price: "₹1,20,000", priceRange: "₹1,20,000 – ₹2,50,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Anse Lazio Beach", "Vallée de Mai", "Giant Tortoises", "Creole Cuisine"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-seychelles_b463753f.jpg',
    country: "Seychelles",
  },
  {
    id: 303, name: "Bali Honeymoon Bliss", slug: "bali",
    region: "Bali, Indonesia", duration: "5N / 6D",
    price: "₹80,000", priceRange: "₹80,000 – ₹1,50,000", perPerson: false, tag: "Honeymoon",
    category: "international", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Private Pool Villa", "Ubud Spa", "Sunset Dinner", "Temple Blessing"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-bali_56ea95d1.jpg',
    country: "Indonesia",
  },
  {
    id: 304, name: "Thailand Honeymoon", slug: "thailand",
    region: "Thailand", duration: "6N / 7D",
    price: "₹55,000", priceRange: "₹55,000 – ₹1,00,000", perPerson: false, tag: "Honeymoon",
    category: "international", tourType: "customized", subCategory: "honeymoon",
    highlights: ["Private Island Tour", "Couple Spa", "Candlelight Beach Dinner", "Phi Phi Islands"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-thailand_1df987a8.jpg',
    country: "Thailand",
  },
  {
    id: 305, name: "Dubai Corporate Summit", slug: "dubai",
    region: "UAE", duration: "4N / 5D",
    price: "₹65,000", priceRange: "₹65,000 – ₹1,20,000", perPerson: true, tag: "Corporate",
    category: "international", tourType: "customized", subCategory: "corporate",
    highlights: ["Conference Venue", "Team Building", "Desert Safari", "Gala Dinner"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-dubai_187915d7.jpg',
    country: "UAE",
  },
  {
    id: 306, name: "Singapore Corporate MICE", slug: "singapore",
    region: "Singapore", duration: "4N / 5D",
    price: "₹72,000", priceRange: "₹72,000 – ₹1,40,000", perPerson: true, tag: "Corporate",
    category: "international", tourType: "customized", subCategory: "corporate",
    highlights: ["Marina Bay Sands", "Conference Setup", "Team Dinner", "City Tour"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-singapore_624447c8.jpg',
    country: "Singapore",
  },
  {
    id: 307, name: "Europe Grand Tour", slug: "europe",
    region: "Europe", duration: "10N / 11D",
    price: "₹1,80,000", priceRange: "₹1,80,000 – ₹3,50,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "luxury",
    highlights: ["Paris Eiffel Tower", "Swiss Alps", "Rome Colosseum", "Venice Gondola"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-europe_e3bb839f.jpg',
    country: "Europe",
  },
  {
    id: 308, name: "Japan Luxury FIT", slug: "japan",
    region: "Japan", duration: "7N / 8D",
    price: "₹1,80,000", priceRange: "₹1,80,000 – ₹3,00,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "luxury",
    highlights: ["Ryokan Stay", "Mt. Fuji Private Tour", "Kyoto Geisha District", "Bullet Train"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-japan_f1795542.jpg',
    country: "Japan",
  },
  {
    id: 309, name: "New Zealand Explorer", slug: "new-zealand",
    region: "New Zealand", duration: "8N / 9D",
    price: "₹2,50,000", priceRange: "₹2,50,000 – ₹4,50,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "luxury",
    highlights: ["Fiordland National Park", "Milford Sound", "Hobbiton", "Bungee Jumping"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-new-zealand_d12584ad.jpg',
    country: "New Zealand",
  },
  {
    id: 310, name: "Canada Rockies Tour", slug: "canada",
    region: "Canada", duration: "8N / 9D",
    price: "₹2,00,000", priceRange: "₹2,00,000 – ₹4,00,000", perPerson: true, tag: "Luxury",
    category: "international", tourType: "customized", subCategory: "luxury",
    highlights: ["Banff National Park", "Niagara Falls", "Vancouver", "Rocky Mountaineer"],
    image: 'https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/dest-canada_93d379e6.jpg',
    country: "Canada",
  },
];
// ─────────────────────────────────────────────────────────────────────────────
// COMBINED EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export const ALL_PACKAGES: Package[] = [
  ...DOMESTIC_GROUP,
  ...DOMESTIC_CUSTOMIZED,
  ...INTERNATIONAL_GROUP,
  ...INTERNATIONAL_CUSTOMIZED,
];
export const SUB_CATEGORIES = [
  { id: "all",        label: "All Tours",      icon: "🌍" },
  { id: "family",     label: "Family Tours",   icon: "👨‍👩‍👧‍👦" },
  { id: "honeymoon",  label: "Honeymoon",      icon: "💑" },
  { id: "corporate",  label: "Corporate/MICE", icon: "🏢" },
  { id: "pilgrimage", label: "Pilgrimage",     icon: "🙏" },
  { id: "luxury",     label: "Luxury",         icon: "✨" },
  { id: "beach",      label: "Beach",          icon: "🏖️" },
  { id: "cultural",   label: "Cultural",       icon: "🏛️" },
];
export const COUNTRIES = [
  "Singapore", "UAE", "Indonesia", "Sri Lanka", "Thailand",
  "Vietnam", "Malaysia", "Hong Kong", "Switzerland", "Japan",
  "Australia", "USA", "Azerbaijan", "Qatar", "Oman", "Cambodia",
  "South Korea", "Mauritius", "Maldives", "Seychelles", "Europe",
  "New Zealand", "Canada",
];
export function getPackages(
  category: "domestic" | "international",
  tourType?: "group" | "customized",
  subCategory?: string,
  country?: string,
) {
  let filtered = ALL_PACKAGES.filter((p) => p.category === category);
  if (tourType) filtered = filtered.filter((p) => p.tourType === tourType);
  if (subCategory && subCategory !== "all")
    filtered = filtered.filter((p) => p.subCategory === subCategory);
  if (country)
    filtered = filtered.filter(
      (p) => p.country?.toLowerCase() === country.toLowerCase(),
    );
  return filtered;
}
