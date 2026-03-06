import { useState } from "react";
import { TOUR_DAYS, TOUR_PLAN_SUBTITLE } from "../data/bangkokPackage";
import type { ActivityType, ItineraryItem } from "../data/bangkokPackage";

// ── Activity icon map ─────────────────────────────────────────────────────────
const activityEmoji: Record<ActivityType, string> = {
  transfer: "🚌",
  flight:   "✈️",
  stay:     "🏨",
  activity: "📍",
  meal:     "🍽️",
};

// ── Build a compact subtitle string per activity type ─────────────────────────
function buildSubtitle(item: ItineraryItem): string {
  switch (item.type) {
    case "transfer":
      if (item.transferInfo) {
        const base = `${item.transferInfo.from} → ${item.transferInfo.to} · ${item.transferInfo.vehicle}`;
        return item.description ? `${item.description} · ${base}` : base;
      }
      return item.description ?? "";
    case "flight":
      if (item.flightInfo) {
        return `${item.flightInfo.fromCity} (${item.flightInfo.from}) → ${item.flightInfo.toCity} (${item.flightInfo.to}) · ${item.flightInfo.dep}–${item.flightInfo.arr} · ${item.flightInfo.airline}`;
      }
      return "";
    case "stay":
      if (item.hotelInfo) {
        const stars = "★".repeat(item.hotelInfo.rating);
        return `${item.hotelInfo.name} · ${stars} ${item.hotelInfo.room} · ${item.hotelInfo.nights}`;
      }
      return "";
    case "meal": {
      const mealParts: string[] = [];
      if (item.description) mealParts.push(item.description);
      if (item.mealInfo) {
        const included = (["Breakfast", "Lunch", "Dinner"] as const)
          .filter(m => item.mealInfo![m.toLowerCase() as "breakfast" | "lunch" | "dinner"] === "included")
          .join(", ");
        if (included) mealParts.push(`Incl. ${included}`);
      }
      return mealParts.join(" · ");
    }
    case "activity":
    default:
      return item.description ?? "";
  }
}

// ── Time formatter ────────────────────────────────────────────────────────────
function formatTime(time: string): string {
  const match = time.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return time;
  let h = parseInt(match[1]);
  const m = match[2];
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12 || 12;
  return `${String(h).padStart(2, "0")}:${m}${ampm}`;
}

// ── Activity Card ─────────────────────────────────────────────────────────────
function ActivityCard({ item }: { item: ItineraryItem }) {
  const subtitle = buildSubtitle(item);

  return (
    <div
      className="bg-white rounded-xl overflow-hidden"
      style={{ border: "1px solid #E8E2D6" }}
    >
      {/* Mobile: stacked layout */}
      <div className="flex flex-col sm:hidden">
        {item.image ? (
          <div className="w-full h-[140px] overflow-hidden bg-gray-100">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-full h-[100px] flex flex-col items-center justify-center gap-1.5 border-b border-dashed border-gray-200 bg-gray-50">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
        )}
        <div className="px-4 py-3">
          {item.time && (
            <div className="flex items-center gap-1.5 mb-2">
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="#0A6A67" strokeWidth="2.2">
                <circle cx="12" cy="12" r="9" />
                <path strokeLinecap="round" d="M12 7v5l3 3" />
              </svg>
              <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#0A6A67" }}>
                {formatTime(item.time)}
                {({ "Morning": "08:00am", "Afternoon": "01:00pm", "Evening": "06:00pm", "Late Afternoon": "04:00pm" } as Record<string, string>)[item.time] && (
                  <span style={{ fontWeight: 400, color: "#0A6A67", opacity: 0.7, marginLeft: 6 }}>
                    · {({ "Morning": "08:00am", "Afternoon": "01:00pm", "Evening": "06:00pm", "Late Afternoon": "04:00pm" } as Record<string, string>)[item.time]}
                  </span>
                )}
              </span>
            </div>
          )}
          <p className="text-gray-900 leading-snug" style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, fontWeight: 600 }}>
            {item.title}
          </p>
          {subtitle && (
            <p className="mt-1 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, color: "#8C8478" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Desktop: side-by-side layout */}
      <div className="hidden sm:flex items-start gap-3 px-4 py-3">
        <div className="flex-shrink-0 w-[100px] h-[100px] rounded-xl mt-0.5 overflow-hidden bg-gray-100">
          {item.image ? (
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-gray-200 bg-gray-50 rounded-xl">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="text-[10px] text-gray-300 tracking-wide">No image</span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <p className="text-gray-900 leading-snug" style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 600 }}>
              {item.title}
            </p>
            {item.time && (
              <span
                className="flex-shrink-0 flex items-center gap-1 text-[11px] font-semibold tabular-nums mt-0.5"
                style={{ color: "#8C8478", letterSpacing: "0.02em" }}
              >
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="9" />
                  <path strokeLinecap="round" d="M12 7v5l3 3" />
                </svg>
                {formatTime(item.time)}
              </span>
            )}
          </div>
          {subtitle && (
            <p className="mt-1 leading-relaxed" style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#8C8478" }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function TourPlanSection({ activeDay, setActiveDay }: { activeDay: number; setActiveDay: (d: number) => void }) {
  const [openDay, setOpenDay] = useState<number>(0);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden" style={{ boxShadow: "0 1px 4px 0 rgba(0,0,0,0.06)" }}>
      {/* Section header */}
      <div className="px-4 sm:px-7 pt-5 sm:pt-7 pb-2">
        <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#0A6A67] mb-1">Day-by-Day</p>
        <h2 style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: "clamp(22px, 3.5vw, 34px)", color: "#0D1B2A", lineHeight: 1.2 }} className="mb-1 font-bold">
          Your Journey Unfolded
        </h2>
        <p className="text-[15px] text-gray-400 leading-relaxed">
          {TOUR_PLAN_SUBTITLE}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative px-4 sm:px-7 pt-6 sm:pt-8 pb-5 sm:pb-7">
        {TOUR_DAYS.map((day, idx) => {
          const isOpen = openDay === idx;
          return (
          <div
            key={day.day}
            className="mb-4 last:mb-0 rounded-2xl overflow-hidden transition-all"
            style={{
              border: isOpen ? "1.5px solid rgba(10,106,103,0.3)" : "1.5px solid #E8E2D6",
              animation: `tourFadeSlide 0.6s ease ${idx * 0.15}s both`,
            }}
          >
            {/* ── Accordion Header ── */}
            <button
              className="w-full flex gap-3 sm:gap-6 items-center px-4 sm:px-5 py-4 text-left transition-colors"
              style={{
                backgroundColor: isOpen ? "rgba(10,106,103,0.08)" : "#fff",
                borderBottom: isOpen ? "1.5px solid rgba(10,106,103,0.15)" : "none",
              }}
              onClick={() => setOpenDay(isOpen ? -1 : idx)}
            >
              {/* Day number circle */}
              <div className="flex-shrink-0 relative z-10 w-11 sm:w-[58px]">
                <div
                  className="w-11 h-11 sm:w-[58px] sm:h-[58px] rounded-full flex flex-col items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: isOpen ? "#0A6A67" : "#F5F0E8",
                    border: isOpen ? "2px solid rgba(255,255,255,0.25)" : "2px solid #E8E2D6",
                    boxShadow: isOpen
                      ? "0 0 0 4px rgba(10,106,103,0.18), 0 4px 12px rgba(10,106,103,0.35)"
                      : "none",
                    transition: "all 0.25s ease",
                  }}
                >
                  <span style={{ fontSize: 9, letterSpacing: "1.5px", textTransform: "uppercase", color: isOpen ? "rgba(255,255,255,0.7)" : "#8C8478" }}>Day</span>
                  <span style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: 22, lineHeight: 1, color: isOpen ? "#fff" : "#0D1B2A" }}>
                    {parseInt(day.day)}
                  </span>
                </div>
              </div>

              {/* Title + badges */}
              <div className="flex-1 min-w-0">
                <h3
                  style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: "clamp(15px, 2.5vw, 22px)", color: isOpen ? "#0A6A67" : "#0D1B2A" }}
                  className="leading-snug mb-1"
                >
                  {day.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[11px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "#E6F4F3", color: "#0A6A67" }}
                  >
                    {day.location}
                  </span>
                  <span className="text-[13px] text-gray-400">{day.label}</span>
                </div>
              </div>

              {/* Chevron */}
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: isOpen ? "#0A6A67" : "#9CA3AF" }}
                fill="none" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* ── Accordion Body ── */}
            {isOpen && (
              <div className="px-3 sm:px-5 pb-4 sm:pb-5 pt-2 border-t border-gray-100"
                style={{ background: "linear-gradient(to bottom, rgba(10,106,103,0.04), rgba(10,106,103,0.01))" }}
              >
                <div className="flex flex-col gap-3">
                  {day.items.map((item, i) => (
                    <ActivityCard key={i} item={item} />
                  ))}
                </div>

                {idx < TOUR_DAYS.length - 1 && (
                  <div
                    className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: "#E6F4F3", color: "#0A6A67" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    Return to hotel · Free evening
                  </div>
                )}
              </div>
            )}
          </div>
          );
        })}
      </div>

      <style>{`
        @keyframes tourFadeSlide {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}