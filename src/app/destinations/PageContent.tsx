"use client";
/*
 * GALLERY PAGE — Real tour photos & videos from Shri Ganesh Travels
 * Design: Light/Day theme — white background, navy + amber accents
 * All captions/locations verified against actual photo content
 * Every item links to Instagram: @shri_ganesh_tours_n_travels
 */
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ExternalLink, Camera, ChevronLeft, ChevronRight } from "lucide-react";
const Instagram = ({ size = 24, color = "currentColor", ...props }: any) => (<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const INSTAGRAM_URL = "https://www.instagram.com/shri_ganesh_tours_n_travels?igsh=NDM1dGNvNDdpYno2";

type MediaItem = {
  id: number;
  type: "photo" | "video";
  src: string;
  thumb?: string;
  caption: string;
  location: string;
  tag: string;
};

/*
 * MEDIA array — captions and locations verified against actual photo content:
 * 1000435007 → Large group at hotel/resort, India → Group Tour
 * 1000437316 → Woman feeding spotted deer at Ross Island, Andaman → Domestic
 * 1000658191 → Group at Ananda Resort, Bhutan → Group Tour (International)
 * 1000662155 → Group at Buddha Dordenma statue, Thimphu, Bhutan → Group Tour (International)
 * 1000904779 → Group at Rameshwaram temple gopuram → Group Tour
 * 1000905243 → Group at Kanyakumari, Lion Capital pillar → Group Tour
 * 1000966633 → Group with Shri Ganesh Travels welcome sign, Port Blair → Group Tour
 * 1000968379 → Group at Cellular Jail, Port Blair, Andaman → Domestic
 * 1001051194 → Group in Shri Ganesh Travels caps at restaurant → Group Tour
 * 1001071399 → Group at Athirappilly Waterfalls, Kerala → Domestic
 * 1001073386 → Elephant at sanctuary, India → Domestic
 * 1001121192 → Group at Taj Mahal, Agra → Group Tour
 * 1001178040 → Group at Dubai Miracle Garden sign → International
 * 1001178182 → Dubai Miracle Garden landscape → International
 * 1001178382 → Group at Global Village, Dubai → International
 * 1001213243 → Group of women at hotel entrance, India → Group Tour
 * 1001219353 → Senior group with Shri Ganesh Travels sign, India → Group Tour
 * 1001336949 → Giant teapot floral display, Dubai Miracle Garden → International
 * 1001336961 → Group inside Ramanathaswamy Temple corridor, Rameswaram → Group Tour
 * Videos:
 * 1000974722 → Dubai tour video → International
 * 1001178396 → Kerala backwaters video → Domestic
 * 1001219354 → Group tour video → Group Tour
 */
const MEDIA: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000435007_2a43e227.jpg",
    caption: "Group Arrival at Resort",
    location: "India",
    tag: "Group Tour",
  },
  {
    id: 2,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000437316_e644454f.jpg",
    caption: "Feeding Spotted Deer at Ross Island",
    location: "Andaman & Nicobar Islands",
    tag: "Domestic",
  },
  {
    id: 3,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000658191_a724a789.jpg",
    caption: "Group at Ananda Resort",
    location: "Paro, Bhutan",
    tag: "International",
  },
  {
    id: 4,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000662155_7cae3971.jpg",
    caption: "Buddha Dordenma Statue",
    location: "Thimphu, Bhutan",
    tag: "International",
  },
  {
    id: 5,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000904779_a7e521e0.jpg",
    caption: "Ramanathaswamy Temple Gopuram",
    location: "Rameshwaram, India",
    tag: "Group Tour",
  },
  {
    id: 6,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000905243_1dd94c56.jpg",
    caption: "At the Southernmost Tip of India",
    location: "Kanyakumari, India",
    tag: "Group Tour",
  },
  {
    id: 7,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000966633_cf115623.jpg",
    caption: "Shri Ganesh Travels Group Departure",
    location: "Port Blair, Andaman",
    tag: "Group Tour",
  },
  {
    id: 8,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1000968379_05e63444.jpg",
    caption: "Cellular Jail — A Historic Visit",
    location: "Port Blair, Andaman",
    tag: "Domestic",
  },
  {
    id: 9,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001051194_2ed579cd.jpg",
    caption: "Our Tour Group Ready to Explore",
    location: "India",
    tag: "Group Tour",
  },
  {
    id: 10,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001071399_c84bc5e4.jpg",
    caption: "Athirappilly Waterfalls",
    location: "Kerala, India",
    tag: "Domestic",
  },
  {
    id: 11,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001073386_91a0580f.jpg",
    caption: "Elephant Sanctuary Visit",
    location: "Kerala, India",
    tag: "Domestic",
  },
  {
    id: 12,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001121192_0e7cd1da.jpg",
    caption: "At the Taj Mahal",
    location: "Agra, India",
    tag: "Group Tour",
  },
  {
    id: 13,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001178040_b6237dfd.jpg",
    caption: "Dubai Miracle Garden",
    location: "Dubai, UAE",
    tag: "International",
  },
  {
    id: 14,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001178182_877887f8.jpg",
    caption: "Floral Waterfall at Miracle Garden",
    location: "Dubai, UAE",
    tag: "International",
  },
  {
    id: 15,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001178382_88f0b085.jpg",
    caption: "Global Village Dubai",
    location: "Dubai, UAE",
    tag: "International",
  },
  {
    id: 16,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001213243_9d0148fb.jpg",
    caption: "Ladies Group Tour",
    location: "India",
    tag: "Group Tour",
  },
  {
    id: 17,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001219353_205fbba6.jpg",
    caption: "Pre-Tour Briefing",
    location: "Mumbai, India",
    tag: "Group Tour",
  },
  {
    id: 18,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001336949_41976650.jpg",
    caption: "Giant Teapot Floral Display",
    location: "Dubai Miracle Garden, UAE",
    tag: "International",
  },
  {
    id: 19,
    type: "photo",
    src: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001336961_31fa9598.jpg",
    caption: "Inside Ramanathaswamy Temple",
    location: "Rameswaram, India",
    tag: "Group Tour",
  },
  {
    id: 20,
    type: "video",
    src: "https://github.com/jashmhta/sgt-assets/releases/download/v1.0/1000974722-1_b0421bb5.mp4",
    thumb: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001178040_b6237dfd.jpg",
    caption: "Dubai Group Tour Highlights",
    location: "Dubai, UAE",
    tag: "International",
  },
  {
    id: 21,
    type: "video",
    src: "https://github.com/jashmhta/sgt-assets/releases/download/v1.0/1001178396-1_compressed.mp4",
    thumb: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001071399_c84bc5e4.jpg",
    caption: "Kerala Tour Reel",
    location: "Kerala, India",
    tag: "Domestic",
  },
  {
    id: 22,
    type: "video",
    src: "https://github.com/jashmhta/sgt-assets/releases/download/v1.0/1001219354_afa3c96b.mp4",
    thumb: "https://cdn.jsdelivr.net/gh/jashmhta/sgt-assets@main/1001219353_205fbba6.jpg",
    caption: "Group Tour Moments",
    location: "India",
    tag: "Group Tour",
  },
];

const TAGS = ["All", "Domestic", "International", "Group Tour", "Honeymoon"];

export default function Gallery() {
  const [activeTag, setActiveTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filtered = activeTag === "All" ? MEDIA : MEDIA.filter((m) => m.tag === activeTag);

  const openLightbox = (item: MediaItem) => {
    const idx = filtered.findIndex((m) => m.id === item.id);
    setLightboxIndex(idx);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevItem = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  }, [filtered.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));
  }, [filtered.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, closeLightbox, prevItem, nextItem]);

  const currentItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <SEOHead
        title="Gallery — Tour Photos & Videos | Shri Ganesh Travels"
        description="Browse real photos and videos from Shri Ganesh Travels tours — Andaman, Kerala, Bhutan, Dubai, Rameswaram, Kanyakumari & more. Follow us on Instagram @shri_ganesh_tours_n_travels."
        canonical="/gallery"
      />
      <div style={{ minHeight: "100vh", background: "#f8fafc", display: "flex", flexDirection: "column" }}>
        <Navbar />

        {/* Hero — light day theme */}
        <section
          style={{
            position: "relative",
            paddingTop: "clamp(6rem, 12vw, 8rem)",
            paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
            overflow: "hidden",
            background: "linear-gradient(135deg, #f0f7ff 0%, #e8f4fd 50%, #fef9f0 100%)",
            borderBottom: "1px solid #e2eaf4",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "-40px",
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(30,58,95,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#d97706",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  padding: "6px 16px",
                  background: "rgba(245,158,11,0.1)",
                  borderRadius: "999px",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}
              >
                <Camera size={14} /> Our Tours in Pictures
              </span>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#0f172a",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                Tours in{" "}
                <em style={{ fontStyle: "italic", color: "#d97706" }}>Pictures &amp; Videos</em>
              </h1>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#475569",
                  maxWidth: "560px",
                  margin: "0 auto 1.75rem",
                  lineHeight: 1.7,
                }}
              >
                Photos and videos from our actual tours — Andaman, Kerala, Bhutan, Dubai, Rameswaram, Kanyakumari and
                more. Follow us on Instagram for regular updates.
              </p>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.7rem 1.75rem",
                  borderRadius: "999px",
                  color: "white",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(131,58,180,0.3)",
                }}
              >
                <Instagram size={18} />
                Follow @shri_ganesh_tours_n_travels
              </a>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            background: "rgba(248,250,252,0.97)",
            backdropFilter: "blur(8px)",
            borderBottom: "1px solid #e2eaf4",
            padding: "0.75rem 0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              gap: "0.6rem",
              overflowX: "auto",
              scrollbarWidth: "none",
              paddingBottom: "2px",
            }}
          >
            {TAGS.map((tag) => {
              const count = tag === "All" ? MEDIA.length : MEDIA.filter((m) => m.tag === tag).length;
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  aria-label={`Filter by ${tag}`}
                  aria-pressed={activeTag === tag}
                  style={{
                    flexShrink: 0,
                    padding: "0.45rem 1.1rem",
                    borderRadius: "999px",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    background: activeTag === tag ? "#1e3a5f" : "#e8f0f8",
                    color: activeTag === tag ? "#fff" : "#475569",
                    boxShadow: activeTag === tag ? "0 2px 12px rgba(30,58,95,0.25)" : "none",
                  }}
                >
                  {tag}{" "}
                  <span style={{ opacity: 0.6, fontSize: "0.7rem" }}>({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Grid */}
        <section style={{ flex: 1, padding: "2rem 0 4rem" }}>
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTag}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                  gap: "12px",
                  alignItems: "start",
                }}
              >
                {filtered.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.5) }}
                    style={{
                      breakInside: "avoid",
                      marginBottom: "0",
                      borderRadius: "12px",
                      overflow: "hidden",
                      cursor: "pointer",
                      position: "relative",
                      background: "#e2eaf4",
                      boxShadow:
                        hoveredId === item.id
                          ? "0 12px 32px rgba(0,0,0,0.14)"
                          : "0 2px 8px rgba(0,0,0,0.06)",
                      transform: hoveredId === item.id ? "translateY(-3px)" : "translateY(0)",
                      transition: "transform 0.25s, box-shadow 0.25s",
                    }}
                    onClick={() => openLightbox(item)}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={item.type === "video" ? item.thumb! : item.src}
                      alt={item.caption}
                      loading="lazy"
                      style={{
                        width: "100%",
                        display: "block",
                        objectFit: "cover",
                        transition: "transform 0.4s",
                        transform: hoveredId === item.id ? "scale(1.04)" : "scale(1)",
                      }}
                    />

                    {item.type === "video" && (
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "rgba(0,0,0,0.25)",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: "50%",
                            background: "rgba(255,255,255,0.92)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
                          }}
                        >
                          <Play size={20} style={{ color: "#1e3a5f", marginLeft: 3 }} />
                        </div>
                      </div>
                    )}

                    {/* Hover overlay — only visible on hover */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(15,23,42,0.75) 0%, transparent 55%)",
                        opacity: hoveredId === item.id ? 1 : 0,
                        transition: "opacity 0.25s",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        padding: "0.75rem",
                        pointerEvents: "none",
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          lineHeight: 1.3,
                          margin: 0,
                        }}
                      >
                        {item.caption}
                      </p>
                      <p
                        style={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: "0.7rem",
                          margin: "2px 0 6px",
                        }}
                      >
                        {item.location}
                      </p>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.68rem",
                          color: "#fcd34d",
                        }}
                      >
                        <Instagram size={10} /> View on Instagram
                      </span>
                    </div>

                    {/* Tag badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        padding: "3px 8px",
                        borderRadius: "999px",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "#fff",
                        background: "rgba(15,23,42,0.55)",
                        backdropFilter: "blur(4px)",
                        letterSpacing: "0.05em",
                        pointerEvents: "none",
                      }}
                    >
                      {item.tag}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "5rem 0", color: "#94a3b8" }}>
                No items found for this filter.
              </div>
            )}
          </div>
        </section>

        {/* Instagram CTA — light theme */}
        <section
          style={{
            padding: "4rem 0",
            background: "linear-gradient(135deg, #f0f7ff 0%, #fef9f0 100%)",
            borderTop: "1px solid #e2eaf4",
            textAlign: "center",
          }}
        >
          <div className="container">
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.25rem",
              }}
            >
              <Instagram size={26} color="white" />
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#0f172a",
                marginBottom: "0.75rem",
              }}
            >
              More on Instagram
            </h2>
            <p
              style={{
                color: "#64748b",
                maxWidth: "400px",
                margin: "0 auto 2rem",
                lineHeight: 1.6,
              }}
            >
              Follow us for tour updates, new packages, and photos from our group departures.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 2rem",
                borderRadius: "999px",
                color: "white",
                fontWeight: 600,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(131,58,180,0.3)",
              }}
            >
              <Instagram size={20} />
              @shri_ganesh_tours_n_travels
              <ExternalLink size={15} style={{ opacity: 0.7 }} />
            </a>
          </div>
        </section>

        <Footer />
        <WhatsAppFloat />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            key="lightbox-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(0,0,0,0.92)",
              padding: "1rem",
            }}
            onClick={closeLightbox}
          >
            <motion.div
              key={currentItem.id}
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{
                position: "relative",
                maxWidth: "900px",
                width: "100%",
                maxHeight: "90vh",
                display: "flex",
                flexDirection: "column",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                aria-label="Close lightbox"
                style={{
                  position: "absolute",
                  top: -44,
                  right: 0,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.7)",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.82rem",
                }}
              >
                <X size={22} /> Close
              </button>

              {/* Media */}
              {currentItem.type === "video" ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  style={{
                    width: "100%",
                    maxHeight: "72vh",
                    borderRadius: "12px",
                    objectFit: "contain",
                    background: "#000",
                  }}
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.caption}
                  style={{
                    width: "100%",
                    maxHeight: "72vh",
                    borderRadius: "12px",
                    objectFit: "contain",
                  }}
                />
              )}

              {/* Caption + nav */}
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, margin: 0 }}>{currentItem.caption}</p>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", margin: "2px 0 0" }}>
                    {currentItem.location}
                  </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <button
                    onClick={prevItem}
                    aria-label="Previous image"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.4)",
                      fontSize: "0.78rem",
                      minWidth: "3rem",
                      textAlign: "center",
                    }}
                  >
                    {(lightboxIndex ?? 0) + 1} / {filtered.length}
                  </span>
                  <button
                    onClick={nextItem}
                    aria-label="Next image"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "999px",
                      color: "#fff",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Instagram size={14} /> Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
