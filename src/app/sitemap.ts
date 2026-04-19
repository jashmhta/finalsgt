import { MetadataRoute } from "next";

const BASE_URL = "https://www.shriganeshtravel.com";

const destinations = [
  "singapore", "dubai", "thailand", "bali", "sri-lanka", "maldives",
  "vietnam", "switzerland", "paris", "azerbaijan", "seychelles", "bhutan",
  "kashmir", "kerala", "goa", "rajasthan", "andaman", "himachal",
  "varanasi", "char-dham",
];

const blogPosts = [
  "best-tour-packages-from-mumbai",
  "dubai-tour-guide-from-mumbai",
  "kerala-tour-packages-mumbai",
  "singapore-family-tour-from-mumbai",
  "rajasthan-group-tour-packages",
  "kashmir-tour-package-from-mumbai",
  "bali-honeymoon-packages-from-mumbai",
  "thailand-tour-from-mumbai-cost",
  "group-tours-for-senior-citizens-mumbai",
  "char-dham-yatra-package-from-mumbai",
  "maldives-tour-package-from-mumbai",
  "switzerland-tour-from-mumbai",
  "goa-tour-packages-from-mumbai",
  "andaman-tour-package-from-mumbai",
  "best-honeymoon-destinations-from-mumbai",
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
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
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

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  return [...mainPages, ...destinationPages, ...blogPages];
}
