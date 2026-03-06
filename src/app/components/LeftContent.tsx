import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { TourPlanSection } from "./TourPlanSection";
import {
  STATS_BAR,
  DESTINATION,
  HIGHLIGHTS,
  HOTELS,
  INCLUSIONS,
  EXCLUSIONS,
  WHEN_TO_VISIT,
  CONNECTIVITY,
  PAYMENT_TERMS,
  TRAVEL_CHECKLIST,
  REVIEWS,
  CHILDREN_POLICY,
  IMPORTANT_NOTES,
  CANCELLATION_POLICY,
  FAQS,
  IMAGES,
} from "../data/bangkokPackage";

// ── Helpers ──────────────────────────────────────────────────────────────────
const IconStar = () => (
  <svg viewBox="0 0 16 15" className="w-3.5 h-3.5 fill-current">
    <path d="M8 0l1.8 5.4H16l-4.9 3.6 1.8 5.5L8 11l-4.9 3.5 1.8-5.5L0 5.4h6.2z" />
  </svg>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-[12px] sm:text-[13px] font-semibold tracking-[2.5px] uppercase text-[#0A6A67] mb-1.5 sm:mb-1">{children}</p>
);

const SerifH = ({ children, size = 34 }: { children: ReactNode; size?: number }) => (
  <h2 style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: `clamp(${Math.round(size * 0.75)}px, ${(size / 16).toFixed(1)}vw, ${size}px)`, color: "#0D1B2A", lineHeight: 1.25 }} className="mb-3 sm:mb-6 font-bold">
    {children}
  </h2>
);

// ── Package Highlights ────────────────────────────────────────────────────────
const SHOW_DEFAULT = 8;

function PackageHighlights() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? HIGHLIGHTS : HIGHLIGHTS.slice(0, SHOW_DEFAULT);
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100">
      <div className="flex items-start justify-between mb-5 sm:mb-6">
        <div>
          <Eyebrow>What's Inside</Eyebrow>
          <SerifH size={26}>Package Highlights</SerifH>
        </div>
        <span className="flex-shrink-0 text-[11px] font-semibold tracking-widest uppercase bg-[#E3FFFE] text-[#0A6A67] border border-[#0A6A67] px-3 py-1.5 rounded-full mt-1">
          {HIGHLIGHTS.length} Highlights
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
        {visible.map((text, i) => (
          <div key={i} className="flex items-start gap-2.5 py-2.5 border-b border-gray-100 last:border-0 sm:[&:nth-last-child(-n+2)]:border-0">
            <div className="mt-0.5 w-4 h-4 rounded-full bg-[#E3FFFE] border border-[#0A6A67]/40 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="#0A6A67" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-[13px] sm:text-[13.5px] text-gray-600 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      {HIGHLIGHTS.length > SHOW_DEFAULT && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-4 flex items-center gap-1.5 text-[13px] font-semibold text-[#0A6A67] hover:text-[#085452] transition-colors"
        >
          <span>{expanded ? "Show less" : `Show all ${HIGHLIGHTS.length} highlights`}</span>
          <svg
            viewBox="0 0 24 24"
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            fill="none" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ── Hotel Slider ──────────────────────────────────────────────────────────────
const CARD_W = 236;
const CARD_GAP = 16;

function HotelSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(idx, HOTELS.length - 1));
    el.scrollTo({ left: clamped * (CARD_W + CARD_GAP), behavior: "smooth" });
    setActiveIdx(clamped);
  };

  const onScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const idx = Math.round(el.scrollLeft / (CARD_W + CARD_GAP));
    setActiveIdx(idx);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {HOTELS.map((hotel, i) => (
          <div
            key={hotel.name}
            className="flex-shrink-0 rounded-2xl border border-gray-100 overflow-hidden hover:border-[#0A6A67]/30 hover:shadow-md transition-all bg-white"
            style={{ width: 320, scrollSnapAlign: "start" }}
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover" />
              <span className="absolute bottom-3 left-3 bg-[#0D1B2A]/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">
                {hotel.night}
              </span>
              <span className="absolute top-3 right-3 text-[10px] font-semibold bg-teal-50/90 text-[#0A6A67] border border-[#0A6A67]/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                {hotel.tag}
              </span>
            </div>
            <div className="p-3.5">
              <p className="leading-snug mb-0.5" style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: 15, color: "#0D1B2A", fontWeight: 600 }}>
                {hotel.name}
              </p>
              <div className="flex items-center gap-1 mb-2">
                <svg viewBox="0 0 24 24" className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-[11px] text-gray-400 truncate">{hotel.location}</p>
              </div>
              <div className="flex items-center gap-0.5 mb-2.5">
                {Array.from({ length: hotel.stars }).map((_, si) => (
                  <svg key={si} viewBox="0 0 16 15" className="w-2.5 h-2.5 fill-yellow-400"><path d="M8 0l1.8 5.4H16l-4.9 3.6 1.8 5.5L8 11l-4.9 3.5 1.8-5.5L0 5.4h6.2z" /></svg>
                ))}
                {Array.from({ length: 5 - hotel.stars }).map((_, si) => (
                  <svg key={si} viewBox="0 0 16 15" className="w-2.5 h-2.5 fill-gray-200"><path d="M8 0l1.8 5.4H16l-4.9 3.6 1.8 5.5L8 11l-4.9 3.5 1.8-5.5L0 5.4h6.2z" /></svg>
                ))}
              </div>
              <div className="flex flex-col gap-1">
                {hotel.amenities.map((a) => (
                  <span key={a} className="flex items-center gap-1 text-[11px] text-gray-500">
                    <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Left Column export ───────────────────────────────────────────────────
export function LeftContent({ activeDay, setActiveDay }: { activeDay: number; setActiveDay: (d: number) => void }) {
  return (
    <div className="flex-1 min-w-0 max-w-full overflow-x-hidden space-y-8">

      {/* ── Stats bar ── */}
      <div className="rounded-2xl bg-white shadow-sm border border-gray-100">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {STATS_BAR.map((item, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-5 px-3 sm:py-5 sm:px-5 text-center border-gray-100 ${i < 2 ? "border-b sm:border-b-0" : ""} ${i % 2 === 0 ? "border-r" : ""} ${i < 3 ? "sm:border-r" : "sm:border-r-0"}`}>
              <div className="mb-1.5 sm:mb-2">{item.svg}</div>
              <p className="text-[10px] sm:text-[10px] tracking-[1.2px] sm:tracking-[1.6px] uppercase text-gray-400 mb-1 sm:mb-1">{item.label}</p>
              <p className="text-[12px] sm:text-[13px] font-semibold text-[#0D1B2A] leading-snug break-words w-full">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Destination Overview ── */}
      <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100" id="overview">
        <Eyebrow>{DESTINATION.eyebrow}</Eyebrow>
        <SerifH>{DESTINATION.title}</SerifH>
        {DESTINATION.paragraphs.map((p, i) => (
          <p key={i} className="text-gray-500 text-[14px] sm:text-[15px] leading-relaxed mb-4">
            {p}
          </p>
        ))}
        <div className="space-y-2.5">
          {DESTINATION.bullets.map(h => (
            <div key={h} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#0A6A67] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
              </div>
              <p className="text-[15px] text-gray-700">{h}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Package Highlights ── */}
      <PackageHighlights />

      {/* ── Tour Plan ── */}
      <TourPlanSection activeDay={activeDay} setActiveDay={setActiveDay} />

    </div>
  );
}

// ── Post-Tour Sections ────────────────────────────────────────────────────────
export function PostTourSections() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [checklistOpen, setChecklistOpen] = useState(false);
  const [connectivityOpen, setConnectivityOpen] = useState(false);
  const [openAdditional, setOpenAdditional] = useState<number | null>(null);

  // Build additionalNotesItems from data
  const additionalNotesItems = [
    CHILDREN_POLICY.show && {
      eyebrow: CHILDREN_POLICY.eyebrow,
      title:   CHILDREN_POLICY.title,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      ),
      content: (
        <div className="space-y-3 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
          <p className="text-[13px] text-gray-400">{CHILDREN_POLICY.subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CHILDREN_POLICY.ageGroups.map((g) => (
              <div key={g.age} className="rounded-xl p-3.5"
                style={{ backgroundColor: "#EAF4F4", border: "1px solid rgba(10,106,103,0.15)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#0A6A67] mb-0.5">{g.label}</p>
                <p className="text-[15px] font-bold text-gray-800">{g.age}</p>
                <p className="text-[12px] text-gray-500 mt-1 leading-snug">{g.note}</p>
              </div>
            ))}
          </div>
          <ul className="space-y-2">
            {CHILDREN_POLICY.notes.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5 text-[#0A6A67]" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    IMPORTANT_NOTES.show && {
      eyebrow: IMPORTANT_NOTES.eyebrow,
      title:   IMPORTANT_NOTES.title,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      ),
      content: (
        <div className="space-y-2.5 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
          {IMPORTANT_NOTES.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
              <span className="text-[16px] flex-shrink-0 mt-0.5">{item.icon}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      ),
    },
    CANCELLATION_POLICY.show && {
      eyebrow: CANCELLATION_POLICY.eyebrow,
      title:   CANCELLATION_POLICY.title,
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      content: (
        <div className="space-y-4 text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
          <p>
            {CANCELLATION_POLICY.intro.split("total package cost").map((part, i, arr) =>
              i < arr.length - 1
                ? <span key={i}>{part}<strong>total package cost</strong></span>
                : <span key={i}>{part}</span>
            )}
          </p>
          {/* Mobile: stacked policy cards */}
          <div className="sm:hidden space-y-2">
            {CANCELLATION_POLICY.mobileRows.map((row, i) => (
              <div key={i} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                <div>
                  <p className="text-[13px] font-semibold text-gray-800">{row.days}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{row.note}</p>
                </div>
                <span className="text-[18px] font-black text-[#0A6A67] ml-4 flex-shrink-0">{row.charge}</span>
              </div>
            ))}
          </div>
          {/* Desktop: full table */}
          <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ backgroundColor: "#0D1B2A" }}>
                  {["Days Before Departure", "Refund / Cancellation Charge"].map((h, i) => (
                    <th key={i} className="px-4 py-3.5 text-left"
                      style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CANCELLATION_POLICY.desktopRows.map((row, i) => (
                  <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "#F9FAFB" : "#fff", borderBottom: "1px solid #E5E7EB" }}>
                    <td className="px-4 py-3.5" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600, color: "#374151" }}>{row.days}</td>
                    <td className="px-4 py-3.5" style={{ fontFamily: "'Lato', sans-serif", color: "#6B7280" }}>{row.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3.5 flex items-start gap-2.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="#D97706" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-amber-800 text-[13px]">{CANCELLATION_POLICY.peakNote}</p>
          </div>
        </div>
      ),
    },
  ].filter(Boolean) as { eyebrow: string; title: string; icon: ReactNode; content: ReactNode }[];

  return (
    <div className="space-y-8 max-w-full overflow-x-hidden">

      {/* ── Best Time to Visit ── */}
      <div className="rounded-2xl p-4 sm:p-7 shadow-sm" style={{ border: "1.5px solid rgba(10,106,103,0.5)", backgroundColor: "rgba(10,106,103,0.08)" }}>
        <Eyebrow>Plan Ahead</Eyebrow>
        <SerifH>When to Visit</SerifH>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {WHEN_TO_VISIT.map(s => (
            <div key={s.label} className={`rounded-xl p-3 sm:p-5 text-center ${s.best ? "" : "border border-gray-100"}`}
              style={s.best ? { backgroundColor: "#0D1B2A" } : { backgroundColor: "#fff" }}>
              <div className={s.best ? "text-[#0A6A67]" : "text-gray-400"}>{s.svg}</div>
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase mt-2 sm:mt-3 mb-1" style={{ color: "#0A6A67" }}>{s.label}</p>
              <p style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: "clamp(13px, 2vw, 18px)", color: s.best ? "#fff" : "#0D1B2A" }} className="mb-1 sm:mb-2">{s.months}</p>
              <p className={`text-[11px] sm:text-[13px] leading-snug sm:leading-relaxed ${s.best ? "text-white/60" : "text-gray-400"} hidden sm:block`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Accommodation ── */}
      <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100">
        <Eyebrow>Accommodation</Eyebrow>
        <SerifH>Where You'll Stay</SerifH>
        <HotelSlider />
        {/* Vehicle / Luggage note — from Accommodation section of source document */}
        <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#EAF4F4] border border-[#0A6A67]/20 px-4 py-3.5">
          <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 text-[#0A6A67] mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
          </svg>
          <p className="text-[13px] text-[#0A6A67] font-medium leading-snug addicon">Vehicle Type: 01 Sedan Car - 02 Check in Luggage (23 KG Each) + 02 Hand Baggage (07 KG Each)</p>
        </div>
        <p className="text-[13px] text-gray-400 mt-4 flex items-center gap-1.5">
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
          Hotels may be substituted with a property of equal or higher standard. Peak season surcharge may apply.
        </p>
      </div>

      {/* ── Inclusions & Exclusions ── */}
      <div className="rounded-2xl p-4 sm:p-7 shadow-sm" style={{ border: "1.5px solid rgba(10,106,103,0.5)", backgroundColor: "rgba(10,106,103,0.08)" }}>
        <Eyebrow>What's Covered</Eyebrow>
        <SerifH>Inclusions &amp; Exclusions</SerifH>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

          {/* Included */}
          <div className="rounded-xl border border-gray-100 p-4 sm:p-5">
            <h3 className="flex items-center gap-2 mb-4" style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: 20, color: "#0A6A67" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Included
            </h3>
            {INCLUSIONS.visible.map(item => (
              <div key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600 py-2 border-b border-gray-50 last:border-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                {item}
              </div>
            ))}
            <details className="group">
              <summary className="list-none cursor-pointer mt-3 flex items-center gap-1.5 select-none w-fit">
                <span className="text-[12.5px] font-semibold text-[#0A6A67] group-open:hidden">Show more inclusions</span>
                <span className="text-[12.5px] font-semibold text-[#0A6A67] hidden group-open:inline">Show less</span>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#0A6A67] group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <div className="mt-1">
                {INCLUSIONS.hidden.map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600 py-2 border-b border-gray-50 last:border-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </details>
          </div>

          {/* Excluded */}
          <div className="rounded-xl border border-gray-100 p-4 sm:p-5">
            <h3 className="flex items-center gap-2 mb-4" style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: 20, color: "#c0392b" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Excluded
            </h3>
            {EXCLUSIONS.visible.map(item => (
              <div key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600 py-2 border-b border-gray-50 last:border-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                {item}
              </div>
            ))}
            <details className="group">
              <summary className="list-none cursor-pointer mt-3 flex items-center gap-1.5 select-none w-fit">
                <span className="text-[12.5px] font-semibold text-red-400 group-open:hidden">Show more exclusions</span>
                <span className="text-[12.5px] font-semibold text-red-400 hidden group-open:inline">Show less</span>
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-red-400 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </summary>
              <div className="mt-1">
                {EXCLUSIONS.hidden.map(item => (
                  <div key={item} className="flex items-start gap-2.5 text-[15px] text-gray-600 py-2 border-b border-gray-50 last:border-0">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    {item}
                  </div>
                ))}
              </div>
            </details>
          </div>

        </div>
      </div>

      {/* ── Connectivity from India ── */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
        <button
          onClick={() => setConnectivityOpen(!connectivityOpen)}
          className="w-full text-left relative overflow-hidden block p-4 sm:p-7"
        >
          <img
            src={IMAGES.connectivity}
            alt="Flight"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/85 via-[#0D1B2A]/55 to-transparent" />
          <div className="relative flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[2.5px] uppercase mb-1 text-white">Getting There</p>
            <h2 className="font-bold" style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: "clamp(20px, 4vw, 34px)", color: "#fff", lineHeight: 1.2 }}>
              Connectivity from India
            </h2>
          </div>
          <span
            className="absolute top-1/2 right-4 sm:right-7 w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white"
            style={{ transition: "transform 0.3s ease", transform: connectivityOpen ? "translateY(-20%) rotate(180deg)" : "translateY(-20%) rotate(0deg)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" /></svg>
          </span>
        </button>
        <div style={{ display: "grid", gridTemplateRows: connectivityOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
          <div className="overflow-hidden">
            <div className="p-4 sm:p-7">
              <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed mb-4">
                {CONNECTIVITY.intro}
              </p>

              {/* Direct Flights */}
              <details className="group mb-2.5 border border-gray-100 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer select-none list-none px-4 py-3 bg-gray-50 hover:bg-[#f0fffe] transition-colors group-open:border-b group-open:border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#0A6A67] flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="white"><path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5L21 16z" /></svg>
                    </div>
                    <span className="text-[13.5px] font-semibold text-gray-800">Direct Flights</span>
                    <span className="hidden sm:inline text-[11px] bg-[#E3FFFE] text-[#0A6A67] border border-[#0A6A67]/20 px-2 py-0.5 rounded-full font-medium">{CONNECTIVITY.directFlightsBadge}</span>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
                </summary>
                <div className="px-4 pt-3 pb-4 bg-white">
                  <p className="text-[13px] text-gray-400 mb-3">Direct flights to Bangkok Suvarnabhumi Airport (BKK) from major Indian metros.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CONNECTIVITY.directFlights.map((r) => (
                      <div key={r.from} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100">
                        <div>
                          <p className="text-[13px] font-semibold text-gray-700">{r.from} <span className="text-gray-400 font-normal">({r.code})</span></p>
                          <p className="text-[11px] text-gray-400">→ Bangkok (BKK)</p>
                        </div>
                        <span className="text-[12px] text-[#0A6A67] font-bold">{r.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* Flight Duration */}
              <div className="grid grid-cols-2 gap-2.5 mb-5">
                <div className="flex items-center gap-3 bg-[#E3FFFE] border border-[#0A6A67]/20 rounded-xl px-4 py-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 text-[#0A6A67]" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="text-[10px] text-[#0A6A67] uppercase tracking-wider font-semibold">Direct</p>
                    <p className="text-[15px] font-bold text-[#0D1B2A]">3.5–5 hrs</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">With Stopover</p>
                    <p className="text-[15px] font-bold text-[#0D1B2A]">6–10+ hrs</p>
                  </div>
                </div>
              </div>

              {/* Travel Requirements */}
              <div className="rounded-xl border border-amber-100 bg-amber-50 px-4 py-3.5">
                <p className="text-[13px] font-semibold text-amber-800 mb-2">Travel Requirements for Indian Travellers</p>
                <ul className="space-y-1.5">
                  {CONNECTIVITY.travelRequirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-[12.5px] text-amber-800">
                      <span className="w-1 h-1 rounded-full bg-amber-600 flex-shrink-0 mt-1.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Payment Terms ── */}
      {PAYMENT_TERMS.show !== false && (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <button
          onClick={() => setPaymentOpen(!paymentOpen)}
          className="w-full flex items-center justify-between p-4 sm:p-7 text-left"
        >
          <div>
            <Eyebrow>Booking</Eyebrow>
            <SerifH>Payment Terms</SerifH>
          </div>
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#0A6A67] ml-4"
            style={{ transition: "transform 0.3s ease", transform: paymentOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </span>
        </button>
        <div style={{ display: "grid", gridTemplateRows: paymentOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
          <div className="overflow-hidden">
            <div className="px-4 sm:px-7 pb-4 sm:pb-7">
              <p className="text-[14px] sm:text-[15px] text-gray-500 mb-4 sm:mb-5 leading-relaxed">
                {PAYMENT_TERMS.intro}
              </p>
              {/* Mobile: stacked cards */}
              <div className="sm:hidden space-y-2">
                {PAYMENT_TERMS.mobileRows.map((row, ri) => (
                  <div key={ri} className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                    <div>
                      <p className="text-[13px] font-semibold text-gray-800">{row.stage}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{row.note}</p>
                    </div>
                    <span className="text-[18px] font-black text-[#0A6A67] ml-4 flex-shrink-0">{row.pct}</span>
                  </div>
                ))}
              </div>
              {/* Desktop: full table */}
              <div className="hidden sm:block overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr style={{ backgroundColor: "#0D1B2A" }}>
                      {PAYMENT_TERMS.desktopHeaders.map((h, i) => (
                        <th key={i} className="px-4 py-3.5 text-left whitespace-pre-line"
                          style={{ color: i === 0 ? "rgba(255,255,255,0.5)" : "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "0.5px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PAYMENT_TERMS.desktopRows.map((row, ri) => (
                      <tr key={ri} style={{ backgroundColor: ri % 2 === 0 ? "#fff" : "#F9F8F6" }}>
                        {[row.stage, row.sea, row.eur, row.us].map((cell, ci) => (
                          <td key={ci} className="px-4 py-3 text-gray-700"
                            style={{ fontSize: 13, borderBottom: "1px solid #F0EDE8", borderRight: ci < 3 ? "1px solid #F0EDE8" : "none", fontWeight: ci === 0 ? 600 : 400 }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* ── Travel Checklist ── */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <button
          onClick={() => setChecklistOpen(!checklistOpen)}
          className="w-full flex items-center justify-between p-4 sm:p-7 text-left"
        >
          <div>
            <Eyebrow>Be Prepared</Eyebrow>
            <SerifH>Travel Checklist</SerifH>
          </div>
          <span
            className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#0A6A67] ml-4"
            style={{ transition: "transform 0.3s ease", transform: checklistOpen ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </svg>
          </span>
        </button>
        <div style={{ display: "grid", gridTemplateRows: checklistOpen ? "1fr" : "0fr", transition: "grid-template-rows 0.3s ease" }}>
          <div className="overflow-hidden">
            <div className="px-4 sm:px-7 pb-4 sm:pb-7">
              <div className="divide-y divide-gray-100">
                {TRAVEL_CHECKLIST.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3.5">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#EAF4F4" }}>
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#0A6A67" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[14px] font-semibold text-gray-800">{item.label}</p>
                    </div>
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#0A6A67" }}>
                      <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Reviews ── */}
      {REVIEWS.length > 0 && (
      <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100">
        <Eyebrow>What Travellers Say</Eyebrow>
        <SerifH>Guest Reviews</SerifH>
        <div className="space-y-4">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-xl border border-gray-100 p-4 sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: r.color }}>
                  {r.avatar}
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-gray-800 leading-snug">{r.name}</p>
                  <p className="text-[12px] sm:text-[11px] text-gray-400 mt-0.5">{r.date}</p>
                </div>
                <div className="ml-auto flex items-center gap-0.5">
                  {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400"><IconStar /></span>)}
                </div>
              </div>
              <p className="text-[14px] text-gray-500 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
      )}

      {/* ── Additional Information ── */}
      {additionalNotesItems.length > 0 && (
        <div className="space-y-3">
          <div className="mb-2">
            <Eyebrow>Additional Information</Eyebrow>
            <SerifH size={26}>Important Details</SerifH>
          </div>
          {additionalNotesItems.map((note, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm">
              <button
                onClick={() => setOpenAdditional(openAdditional === i ? null : i)}
                className="w-full flex items-center gap-3 px-4 sm:px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#E3FFFE] border border-[#0A6A67]/20 flex items-center justify-center flex-shrink-0 text-[#0A6A67]">
                  {note.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold tracking-[2px] uppercase text-[#0A6A67] mb-0.5">{note.eyebrow}</p>
                  <p className="text-[15px] font-semibold text-gray-800">{note.title}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-300 text-gray-400"
                  style={{ transform: openAdditional === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openAdditional === i && (
                <div className="px-4 sm:px-6 pb-5 pt-2 border-t border-gray-100">
                  {note.content}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── FAQs ── */}
      <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100">
        <Eyebrow>Got Questions?</Eyebrow>
        <SerifH>Frequently Asked Questions</SerifH>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-4 sm:py-3.5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[14px] font-semibold text-gray-800 pr-3 leading-snug">{faq.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 flex-shrink-0 transition-transform duration-200 text-gray-400"
                  style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                  fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-4 pb-4 pt-2 text-[13px] sm:text-[14px] text-gray-500 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}