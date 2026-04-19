import { MetadataRoute } from "next";

const BASE_URL = "https://www.shriganeshtravel.com";

const destinations = [
  "singapore", "dubai", "thailand", "bali", "sri-lanka", "maldives",
  "vietnam", "switzerland", "paris", "azerbaijan", "seychelles", "bhutan",
  "kashmir", "kerala", "goa", "rajasthan", "andaman", "himachal",
  "varanasi", "char-dham",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const mainPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/packages`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/domestic`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/international`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/group-tours`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/customized-tours`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/destinations`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const destinationPages: MetadataRoute.Sitemap = destinations.map((slug) => ({
    url: `${BASE_URL}/destination/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...mainPages, ...destinationPages];
}
