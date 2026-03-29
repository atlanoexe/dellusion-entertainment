import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, Check, Loader, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GridOverlay, SectionLabel, CornerBrackets } from "../components/CyberElements";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState, useRef, useEffect, useCallback } from "react";

// Event photo placeholder
const eventPhoto = "https://images.unsplash.com/photo-1736058110466-34d523902710?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbmNlcnQlMjBjcm93ZCUyMGZlc3RpdmFsJTIwbmlnaHQlMjBsaWdodHN8ZW58MXx8fHwxNzc0NzcxNTY1fDA&ixlib=rb-4.1.0&q=80&w=1080";

interface EventData {
  id: string;
  year: string;
  title: string;
  description: string;
  cities?: string;
  location?: string;
  status: "completed" | "upcoming";
  accent: string;
  images: string[];
}

const events: EventData[] = [
  {
    id: "bb-2024",
    year: "2024",
    title: "BANKAI BEATS CLUB TOUR 2024",
    description:
      "India's first anime DJ event format, taken across 9 cities in a club setting. Featuring anime DJ sets, cosplay activations, merchandise, and community experiences. This was the first time a dedicated live space was created for India's anime community outside of conventions. We proved the audience existed, we found our people, and we built the foundation for everything that followed.",
    cities: "9 Cities",
    status: "completed",
    accent: "#ff2d9b",
    images: [
      "https://images.unsplash.com/photo-1532498295735-1a94911c162c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbmNlcnQlMjBuZW9uJTIwY3Jvd2R8ZW58MXx8fHwxNzc0Mjk3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1768885510237-9238a40a4f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHN0YWdlJTIwbmVvbiUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc3NDI5Nzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764510377138-439d8694e4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMGRhbmNpbmclMjBuaWdodGNsdWIlMjBlbmVyZ3l8ZW58MXx8fHwxNzc0Mjk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "bb-2025",
    year: "2025",
    title: "BANKAI BEATS CLUB TOUR 2025",
    description:
      "Season 2 took the format deeper into 6 cities with stronger production, better curation, and a tighter community experience. Each city brought a more engaged crowd and a clearer sense of what the BANKAI BEATS identity stood for.",
    cities: "6 Cities",
    status: "completed",
    accent: "#00e5ff",
    images: [
      "https://images.unsplash.com/photo-1732682940642-4f14719d20ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2x1YiUyMHBhcnR5JTIwcHVycGxlJTIwbGlnaHRzfGVufDF8fHx8MTc3NDI5Nzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1772535655257-641cc576295e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5JTIwZXZlbnQlMjBmZXN0aXZhbHxlbnwxfHx8fDE3NzQyMzgwMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1532498295735-1a94911c162c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbmNlcnQlMjBuZW9uJTIwY3Jvd2R8ZW58MXx8fHwxNzc0Mjk3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
  {
    id: "obsidian-2025",
    year: "2025",
    title: "OBSIDIAN 2025",
    description:
      "A pilot dark culture gathering held in antiSOCIAL, Pune under the DARKCORE IP. Featuring dark music performances, alternative fashion displays, live art, and community activations. Obsidian was the first time India's dark culture community had a dedicated live space built entirely for them.",
    location: "Pune",
    status: "completed",
    accent: "#a855f7",
    images: [
      "https://images.unsplash.com/photo-1706913805791-2b470c49795e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ290aGljJTIwdmVudUUlMjBhdG1vc3BoZXJlfGVufDF8fHx8MTc3NDI5Nzk5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1732682940642-4f14719d20ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2x1YiUyMHBhcnR5JTIwcHVycGxlJTIwbGlnaHRzfGVufDF8fHx8MTc3NDI5Nzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1764510377138-439d8694e4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm93ZCUyMGRhbmNpbmclMjBuaWdodGNsdWIlMjBlbmVyZ3l8ZW58MXx8fHwxNzc0Mjk3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    ],
  },
];

/* ── Image Gallery Carousel ── */
function ImageCarousel({ images, accent }: { images: string[]; accent: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Combine real images with placeholders to fill 6 slots
  const allSlots = [...images];
  while (allSlots.length < 6) allSlots.push("");

  return (
    <div className="relative group/carousel">
      {/* Left fade + button */}
      <AnimatePresence>
        {canScrollLeft && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-[#0a0812] to-transparent flex items-center justify-start pl-1"
          >
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-white/10 bg-[#08060f]/80 backdrop-blur-sm hover:border-white/25 transition-colors"
              style={{ color: accent }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right fade + button */}
      <AnimatePresence>
        {canScrollRight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-[#0a0812] to-transparent flex items-center justify-end pr-1"
          >
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-white/10 bg-[#08060f]/80 backdrop-blur-sm hover:border-white/25 transition-colors"
              style={{ color: accent }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allSlots.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.07, type: "spring", stiffness: 300, damping: 25 }}
            className="flex-shrink-0 snap-start"
          >
            <div
              className="w-[200px] h-[140px] sm:w-[260px] sm:h-[180px] rounded-[4px] overflow-hidden border relative"
              style={{ borderColor: img ? `${accent}25` : "rgba(255,255,255,0.06)" }}
            >
              {img ? (
                <ImageWithFallback
                  src={img}
                  alt={`Event photo ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[rgba(15,11,26,0.7)] flex flex-col items-center justify-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-dashed flex items-center justify-center animate-pulse"
                    style={{ borderColor: `${accent}40` }}
                  >
                    <Loader className="w-4 h-4 animate-spin" style={{ color: `${accent}60` }} />
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-widest font-mono" style={{ color: `${accent}50` }}>
                    More soon
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Event Detail Modal ── */
function EventModal({ event, onClose }: { event: EventData; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Backdrop - click to close */}
      <div className="absolute inset-0 bg-[#08060f]/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal content */}
      <motion.div
        className="relative z-10 w-full max-w-[700px] max-h-[85vh] overflow-y-auto rounded-[4px] border bg-[rgba(12,9,22,0.95)] backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        style={{ borderColor: `${event.accent}30` }}
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
      >
        <CornerBrackets color={`${event.accent}60`} />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 rounded-[4px] border border-white/10 bg-[#08060f]/60 backdrop-blur-sm hover:border-white/25 transition-colors text-[#6b5a8a] hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <span
              className="px-3 py-1.5 rounded-[4px] border text-[0.8rem] font-mono tracking-wider"
              style={{
                borderColor: `${event.accent}40`,
                backgroundColor: `${event.accent}12`,
                color: event.accent,
              }}
            >
              {event.year}
            </span>
            {event.status === "completed" && (
              <span className="flex items-center gap-1.5 text-[0.75rem] uppercase tracking-widest font-mono text-[#00e5ff]/70">
                <Check className="w-3.5 h-3.5" /> Completed
              </span>
            )}
          </div>

          <h2
            className="text-[clamp(1.3rem,3vw,2rem)] font-black tracking-tight mb-2 font-['Orbitron',sans-serif]"
            style={{ color: event.accent }}
          >
            {event.title}
          </h2>

          {(event.cities || event.location) && (
            <div className="flex items-center gap-2 mb-5 text-[0.85rem] text-[#6b5a8a]">
              <MapPin className="w-4 h-4" style={{ color: event.accent }} />
              <span>{event.cities || event.location}</span>
            </div>
          )}

          <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] text-[#8a7aaa] leading-relaxed mb-6 sm:mb-8">
            {event.description}
          </p>

          {/* Image Gallery */}
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[0.7rem] uppercase tracking-[0.25em] font-mono" style={{ color: `${event.accent}80` }}>
                {"//>> Gallery"}
              </span>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${event.accent}20, transparent)` }} />
            </div>
            <ImageCarousel images={event.images} accent={event.accent} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Timeline Node ── */
function TimelineNode({
  event,
  index,
  isLast,
  onClick,
}: {
  event: EventData;
  index: number;
  isLast: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      className="relative flex gap-4 sm:gap-6 lg:gap-8 group cursor-pointer"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, type: "spring", stiffness: 250, damping: 25 }}
      onClick={onClick}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-8 sm:w-10">
        {/* Dot */}
        <motion.div
          className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center z-10"
          style={{
            borderColor: event.accent,
            backgroundColor: `${event.accent}15`,
            boxShadow: `0 0 20px ${event.accent}30`,
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: `0 0 30px ${event.accent}50, 0 0 60px ${event.accent}20`,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Check className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: event.accent }} />
          {/* Pulse ring */}
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ borderColor: event.accent, border: `1px solid ${event.accent}` }}
          />
        </motion.div>
        {/* Connecting line */}
        {!isLast && (
          <div
            className="w-[2px] flex-1 min-h-[40px]"
            style={{
              background: `linear-gradient(to bottom, ${event.accent}60, ${event.accent}15)`,
            }}
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        className="flex-1 pb-8 sm:pb-10"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div
          className="relative p-4 sm:p-6 rounded-[4px] border bg-[rgba(15,11,26,0.55)] backdrop-blur-[14px] transition-all duration-300 hover:bg-[rgba(15,11,26,0.72)]"
          style={{
            borderColor: `${event.accent}18`,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${event.accent}45`;
            (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 30px ${event.accent}12, 0 0 60px ${event.accent}06`;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = `${event.accent}18`;
            (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          }}
        >
          <CornerBrackets color={`${event.accent}35`} />

          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <span
              className="px-3 py-1 rounded-[4px] border text-[0.75rem] sm:text-[0.8rem] font-mono tracking-wider"
              style={{
                borderColor: `${event.accent}35`,
                backgroundColor: `${event.accent}10`,
                color: event.accent,
              }}
            >
              {event.year}
            </span>
            {(event.cities || event.location) && (
              <span className="flex items-center gap-1.5 text-[0.7rem] sm:text-[0.75rem] text-[#6b5a8a] font-mono">
                <MapPin className="w-3.5 h-3.5" style={{ color: event.accent }} />
                {event.cities || event.location}
              </span>
            )}
          </div>

          <h3
            className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-black tracking-tight mb-2 font-['Orbitron',sans-serif] transition-colors duration-200"
            style={{ color: "#f0e6ff" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = event.accent)}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#f0e6ff")}
          >
            {event.title}
          </h3>

          <p className="text-[clamp(0.8rem,1.2vw,0.95rem)] text-[#6b5a8a] leading-relaxed line-clamp-2">
            {event.description}
          </p>

          <div className="mt-3 flex items-center gap-2 text-[0.7rem] uppercase tracking-widest font-mono" style={{ color: `${event.accent}80` }}>
            <span>Click to explore</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              &rarr;
            </motion.span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Page ── */
export function PastEventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  return (
    <div className="bg-[#08060f] text-[#d4c0f0] min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={eventPhoto}
            alt="Past Events"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08060f]/85 via-[#08060f]/75 to-[#08060f]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,45,155,0.08),transparent_60%)]" />
        </div>
        <GridOverlay />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-4 sm:mb-8"
          >
            <Calendar className="w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20 text-[#ff2d9b]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-black tracking-tighter mb-4 sm:mb-6 font-['Orbitron',sans-serif]"
          >
            <span className="bg-gradient-to-r from-[#ff2d9b] to-[#00e5ff] bg-clip-text text-transparent">
              PAST EVENTS
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-[clamp(0.9rem,2vw,1.5rem)] text-[#6b5a8a] max-w-3xl mx-auto"
          >
            Building the scene, one city at a time.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative">
        <GridOverlay />
        <div className="max-w-4xl mx-auto relative">
          <SectionLabel>Event Log</SectionLabel>

          <div className="mt-8 sm:mt-10">
            {/* Completed events */}
            {events.map((event, index) => (
              <TimelineNode
                key={event.id}
                event={event}
                index={index}
                isLast={index === events.length - 1}
                onClick={() => setSelectedEvent(event)}
              />
            ))}

            {/* Terminal dot */}
            <motion.div
              className="flex gap-4 sm:gap-6 lg:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex flex-col items-center flex-shrink-0 w-8 sm:w-10">
                <motion.div
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#ff2d9b] to-[#00e5ff]"
                  animate={{
                    boxShadow: [
                      "0 0 10px rgba(255,45,155,0.3)",
                      "0 0 25px rgba(0,229,255,0.4)",
                      "0 0 10px rgba(255,45,155,0.3)",
                    ],
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
                />
              </div>
              <div className="flex-1 pb-4">
                <p className="text-[0.75rem] uppercase tracking-[0.3em] font-mono text-white/20">
                  More to come...
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}