import React, { useState } from "react";
import { LeftContent, PostTourSections } from "./LeftContent";
import { TransparentPricingCard } from "./TransparentPricingCard";
import { ActivitiesSlider } from "./ActivitiesSlider";
import {
  PACKAGE_META,
  IMAGES,
  BOOKING,
  DISCOUNT_BANNER,
} from "../data/bangkokPackage";

// ─── Icons ───────────────────────────────────────────────────────────────────

const IconStar = ({ filled = true }: { filled?: boolean }) => (
  <svg viewBox="0 0 16 15" className="w-3.5 h-3.5 fill-current">
    <path d="M8 0l1.8 5.4H16l-4.9 3.6 1.8 5.5L8 11l-4.9 3.5 1.8-5.5L0 5.4h6.2z" />
  </svg>
);

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const IconShare = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[13px] font-semibold tracking-[2.5px] uppercase text-[#0A6A67] mb-1">{children}</p>
);

// ─── Booking Form ────────────────────────────────────────────────────────────

function BookingForm() {
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState("");

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
      {/* Price header */}
      <div className="bg-gradient-to-br from-[#0A6A67] to-[#2D5D5C] p-6 text-white">
        <p className="text-[13px] text-teal-200 uppercase tracking-widest mb-1">Starting from</p>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black">₹{BOOKING.startingPrice.toLocaleString("en-IN")}</span>
          <span className="text-teal-200 text-[15px]">/ person</span>
        </div>
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: PACKAGE_META.ratingFilled }).map((_, i) => (
            <span key={`filled-${i}`} className="text-yellow-400"><IconStar /></span>
          ))}
          {Array.from({ length: 5 - PACKAGE_META.ratingFilled }).map((_, i) => (
            <span key={`empty-${i}`} className="text-yellow-400/30"><IconStar /></span>
          ))}
        </div>
        
      </div>

      <div className="flex flex-col gap-6 p-4 sm:p-5" style={{ fontFamily: "'Lato', sans-serif" }}>

        {/* ══ CARD 1 — Send an Enquiry ══ */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Product mini-header */}
          <div className="flex items-start gap-3 px-5 pt-5 pb-4 border-b border-gray-100">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex-shrink-0 overflow-hidden">
              <img
                src={IMAGES.bookingThumb}
                alt={BOOKING.packageName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 700, color: "#111827", lineHeight: 1.35 }} className="line-clamp-2">
                {BOOKING.packageName}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 17, color: "#111827" }}>₹{BOOKING.startingPrice.toLocaleString("en-IN")}</span>
                {BOOKING.originalPrice > 0 && (
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, color: "#9CA3AF", textDecoration: "line-through" }}>₹{BOOKING.originalPrice.toLocaleString("en-IN")}</span>
                )}
              </div>
            </div>
          </div>

          {/* Section label */}
          <div className="px-5 pt-4 pb-1 flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#0A6A67]" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", letterSpacing: "0.3px" }}>Send an Enquiry</span>
          </div>

          {/* Form fields */}
          <div className="px-5 pb-5 pt-3 space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A6A67]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A6A67]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />
            <div className="flex gap-2">
              <div
                className="border border-gray-200 rounded-xl px-3 flex items-center flex-shrink-0"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, fontWeight: 600, color: "#374151" }}
              >
                +91
              </div>
              <input
                type="tel"
                placeholder="Your Phone"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A6A67]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
            </div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-700 focus:outline-none focus:border-[#0A6A67]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />

            {/* Travel Count + Infants row */}
            <div className="flex gap-2">
              <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#9CA3AF" }}>Travel Count</span>
                <div className="flex flex-col items-center gap-0.5">
                  <button onClick={() => setAdults(adults + 1)} className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 6l5-6 5 6z" /></svg>
                  </button>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", minWidth: 16, textAlign: "center" as const }}>{adults}</span>
                  <button onClick={() => setAdults(Math.max(1, adults - 1))} className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 0l5 6 5-6z" /></svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#9CA3AF" }}>Infants</span>
                <div className="flex flex-col items-center gap-0.5">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 6l5-6 5 6z" /></svg>
                  </button>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", minWidth: 16, textAlign: "center" as const }}>0</span>
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 0l5 6 5-6z" /></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Child + Infants row */}
            <div className="flex gap-2">
              <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#9CA3AF" }}>Child</span>
                <div className="flex flex-col items-center gap-0.5">
                  <button onClick={() => setChildren(children + 1)} className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 6l5-6 5 6z" /></svg>
                  </button>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", minWidth: 16, textAlign: "center" as const }}>{children}</span>
                  <button onClick={() => setChildren(Math.max(0, children - 1))} className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 0l5 6 5-6z" /></svg>
                  </button>
                </div>
              </div>
              <div className="flex-1 border border-gray-200 rounded-xl px-3 py-2 flex items-center justify-between">
                <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 15, color: "#9CA3AF" }}>Infants</span>
                <div className="flex flex-col items-center gap-0.5">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 6l5-6 5 6z" /></svg>
                  </button>
                  <span style={{ fontFamily: "'Lato', sans-serif", fontSize: 14, fontWeight: 700, color: "#111827", minWidth: 16, textAlign: "center" as const }}>0</span>
                  <button className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg viewBox="0 0 10 6" className="w-3 h-2 fill-current"><path d="M0 0l5 6 5-6z" /></svg>
                  </button>
                </div>
              </div>
            </div>

            <textarea
              placeholder="Message"
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A6A67] resize-none"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />

            <button
              className="w-full py-3.5 rounded-xl text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#0A6A67", fontFamily: "'Lato', sans-serif", fontSize: 16, fontWeight: 700 }}
            >
              Send Enquiry
            </button>
          </div>
        </div>{/* end Card 1 */}

        {/* ══ CARD 2 — Transparent Pricing ══ */}
        {/* end Card 2 */}

      </div>
    </div>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function PackageDetailPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen bg-[#F8F9FA] overflow-x-hidden">
      {/* ── Navbar ── */}
      <nav className="bg-[#0A6A67] text-white sticky top-0 z-50 shadow-lg">
        <div className="nav-inner py-3 md:py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight">GTT</span>
            <span className="text-teal-300 text-[13px] font-medium">Explore</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            {["Home", "Destinations", "About Us", "Blog"].map((item) => (
              <a key={item} href="#" className="text-teal-100 hover:text-white transition-colors text-[15px]">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="border border-teal-400 text-white text-[15px] px-4 py-1.5 rounded-full hover:bg-teal-700 transition-colors">
              Log In
            </button>
          </div>
        </div>
      </nav>

      {/* ── Title card ── */}
      <div className="page-container pt-6 md:pt-8">
        <div className="relative rounded-2xl px-4 sm:px-6 py-4 sm:py-5 mb-4 border border-gray-100 bg-white" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="absolute top-4 right-4 sm:top-5 sm:right-6 flex items-center gap-2">
            <span className="bg-teal-50 text-[#0A6A67] text-[13px] font-semibold px-3 py-1 rounded-full border border-teal-100">{PACKAGE_META.badge1}</span>
            <span className="bg-orange-50 text-orange-600 text-[13px] font-semibold px-3 py-1 rounded-full border border-orange-100">{PACKAGE_META.badge2}</span>
          </div>
          <Eyebrow>{PACKAGE_META.eyebrow}</Eyebrow>
          <div className="flex items-center gap-2 mb-1.5 py-1.5">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span className="text-gray-700 text-[13px] font-semibold">{PACKAGE_META.duration}</span>
          </div>
          <h1 style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: "clamp(22px, 4vw, 48px)", fontWeight: 700, lineHeight: 1.2, color: "#0D1B2A" }} className="mb-2.5">
            {PACKAGE_META.titleMain} <em style={{ color: "#0A6A67", fontStyle: "italic" }}>{PACKAGE_META.titleItalic}</em>
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 text-[#0A6A67]">
              <IconMapPin />
              <span className="text-gray-600 text-[13px] sm:text-[14px]">{PACKAGE_META.location}</span>
            </div>
            <div className="flex items-center gap-1">
              {Array.from({ length: PACKAGE_META.ratingFilled }).map((_, i) => <span key={`filled-${i}`} className="text-yellow-400"><IconStar /></span>)}
              {Array.from({ length: 5 - PACKAGE_META.ratingFilled }).map((_, i) => <span key={`empty-${i}`} className="text-yellow-400/30"><IconStar /></span>)}
              {PACKAGE_META.reviewCount > 0 && (
                <span className="text-gray-500 ml-1 text-[13px] sm:text-[14px]">({PACKAGE_META.reviewCount} reviews)</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Gallery ── */}
      <div className="page-container relative mt-4">
        {/* Mobile: single hero image */}
        <div className="md:hidden h-[220px] rounded-2xl overflow-hidden relative">
          <img src={IMAGES.heroMain} alt="Bangkok Grand Royal Palace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <span className="absolute bottom-3 right-3 bg-black/50 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm">+8 Photos</span>
        </div>
        {/* Desktop: full mosaic grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-3 h-[440px] rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 relative group overflow-hidden">
            <img src={IMAGES.heroMain} alt="Grand Royal Palace Bangkok" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
          <div className="relative group overflow-hidden">
            <img src={IMAGES.heroTopRight} alt="Wat Arun Temple of Dawn" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative group overflow-hidden rounded-br-none">
              <img src={IMAGES.heroBottomLeft} alt="Chao Phraya River Boat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="relative group overflow-hidden">
              <img src={IMAGES.heroBottomRight} alt="Wat Pho Reclining Buddha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">+8 Photos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content + Sidebar ── */}
      <div className="page-container pb-16 lg:pb-2 mt-6 md:mt-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-start">
          {/* ── LEFT CONTENT ── */}
          <LeftContent activeDay={activeDay} setActiveDay={setActiveDay} />

          {/* ── RIGHT SIDEBAR (sticky on desktop, full-width on mobile) ── */}
          <div className="w-full lg:w-[340px] xl:w-[360px] flex-shrink-0">
            <div className="lg:sticky lg:top-20">
              <BookingForm />
              <TransparentPricingCard />
            </div>
          </div>
        </div>
      </div>

      {/* ── Post-Tour Sections (full-width) ── */}
      <div className="page-container pb-16 lg:pb-0 mt-6 md:mt-8">
        <div className="mb-6">
          <ActivitiesSlider />
        </div>
        <PostTourSections />
      </div>

      {/* ── Discount Banner ── */}
      <div className="relative h-[200px] overflow-hidden mt-4">
        <img
          src={DISCOUNT_BANNER.image}
          alt="Bangkok discount banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A6A67]/80 to-transparent flex items-center">
          <div className="page-container">
            <div>
              <p className="text-white font-black drop-shadow" style={{ fontSize: "clamp(20px, 4vw, 30px)" }}>{DISCOUNT_BANNER.headline}</p>
              <p className="text-teal-100 text-sm mt-1">{DISCOUNT_BANNER.subtext}</p>
              <button className="mt-3 bg-white text-[#0A6A67] text-sm font-bold px-6 py-2 rounded-full hover:bg-teal-50 transition-colors">
                {DISCOUNT_BANNER.cta}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer
        className="relative overflow-hidden"
        style={{ backgroundColor: "#0D0B1F", fontFamily: "'Lato', sans-serif" }}
      >
        {/* City skyline silhouette */}
        <div className="absolute bottom-10 left-0 right-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-32 fill-white">
            <path d="M0,160 L0,120 L20,120 L20,80 L40,80 L40,100 L60,100 L60,60 L80,60 L80,100 L90,100 L90,40 L100,40 L100,20 L110,20 L110,40 L120,40 L120,100 L130,100 L130,70 L145,70 L145,90 L160,90 L160,50 L170,50 L170,30 L180,30 L180,50 L190,50 L190,90 L200,90 L200,110 L220,110 L220,70 L235,70 L235,50 L245,50 L245,70 L260,70 L260,110 L280,110 L280,80 L290,80 L290,55 L300,55 L300,40 L310,40 L310,55 L320,55 L320,80 L340,80 L340,100 L360,100 L360,65 L370,65 L370,45 L380,45 L380,65 L395,65 L395,85 L410,85 L410,60 L425,60 L425,35 L435,35 L435,20 L445,20 L445,35 L455,35 L455,60 L470,60 L470,90 L490,90 L490,110 L510,110 L510,75 L525,75 L525,55 L535,55 L535,75 L550,75 L550,100 L570,100 L570,70 L585,70 L585,45 L595,45 L595,70 L615,70 L615,100 L635,100 L635,80 L650,80 L650,55 L665,55 L665,35 L675,35 L675,55 L690,55 L690,80 L710,80 L710,105 L730,105 L730,75 L745,75 L745,50 L760,50 L760,75 L775,75 L775,100 L800,100 L800,70 L815,70 L815,50 L828,50 L828,30 L838,30 L838,50 L850,50 L850,70 L870,70 L870,95 L890,95 L890,65 L905,65 L905,40 L918,40 L918,65 L935,65 L935,90 L955,90 L955,110 L975,110 L975,80 L990,80 L990,55 L1000,55 L1000,35 L1012,35 L1012,55 L1025,55 L1025,80 L1045,80 L1045,100 L1065,100 L1065,70 L1080,70 L1080,45 L1092,45 L1092,70 L1110,70 L1110,95 L1130,95 L1130,75 L1145,75 L1145,50 L1158,50 L1158,30 L1168,30 L1168,50 L1180,50 L1180,75 L1200,75 L1200,100 L1220,100 L1220,70 L1235,70 L1235,50 L1248,50 L1248,70 L1265,70 L1265,95 L1285,95 L1285,115 L1305,115 L1305,80 L1320,80 L1320,55 L1332,55 L1332,80 L1350,80 L1350,100 L1370,100 L1370,75 L1385,75 L1385,55 L1395,55 L1395,75 L1415,75 L1415,100 L1440,100 L1440,160 Z" />
          </svg>
        </div>

        {/* Main grid */}
        <div className="page-container pt-10 sm:pt-14 pb-4 relative z-10">
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-[220px_1fr_1fr_1fr_1.4fr]">

            {/* ── Brand column ── */}
            <div>
              <div className="mb-6">
                <svg viewBox="0 0 60 64" className="w-16 h-16">
                  <text x="4" y="18" style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700, fill: "white" }}>grab</text>
                  <text x="4" y="36" style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700, fill: "white" }}>that</text>
                  <text x="4" y="54" style={{ fontFamily: "'Lato', sans-serif", fontSize: 13, fontWeight: 700, fill: "#0A9E8A" }}>trip</text>
                  <path d="M 3 58 Q -10 32 3 6" stroke="#0A9E8A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M 3 58 Q 52 65 56 58" stroke="#0A9E8A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>

              <div
                className="flex items-center gap-2 rounded-full px-4 py-2 mb-6"
                style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <input
                  type="email"
                  placeholder="Enter your mail"
                  className="flex-1 bg-transparent text-sm outline-none placeholder-white/40"
                  style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'Lato', sans-serif" }}
                />
                <button
                  className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0A6A67" }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </button>
              </div>

              <div className="flex gap-2.5">
                {[
                  "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 6.5h11a2 2 0 012 2v11a2 2 0 01-2 2h-11a2 2 0 01-2-2v-11a2 2 0 012-2z",
                  "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  "M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z",
                ].map((path, i) => (
                  <button
                    key={i}
                    className="w-8 h-8 rounded-md flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.13)" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d={path} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <p className="mb-5 text-sm font-bold text-white">Quick Links</p>
              {["About Us", "Terms & Conditions", "Copyright Policies", "Support", "Beware Of Frauds", "Blogs"].map((l) => (
                <p key={l} className="mb-2.5 text-sm cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
                  {l}
                </p>
              ))}
            </div>

            {/* ── Package ── */}
            <div>
              <p className="mb-5 text-sm font-bold text-white">Package</p>
              {["Family", "Vacation", "Honeymoon", "Adventure"].map((l) => (
                <p key={l} className="mb-2.5 text-sm cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
                  {l}
                </p>
              ))}
            </div>

            {/* ── Destination ── */}
            <div>
              <p className="mb-5 text-sm font-bold text-white">Destination</p>
              {["Bali", "Dubai", "Singapore", "Thailand", "Kenya"].map((l) => (
                <p key={l} className="mb-2.5 text-sm cursor-pointer hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
                  {l}
                </p>
              ))}
            </div>

            {/* ── Contact ── */}
            <div>
              <p className="mb-5 text-sm font-bold text-white">Contact</p>
              <div className="space-y-3.5">
                <div className="flex items-start gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
                    B-85, 3rd Floor, Defence Colony,<br />New Delhi 110024
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.45-.45a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>+91 89299 19292</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
                    Mon – Sat: 9 am – 6 pm,<br />Sunday: <span className="text-white font-semibold">CLOSED</span>
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>info@grabthattrip.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-12 pt-4 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'Lato', sans-serif" }}>
              Copyright ©Grab That Trip | All Right Reserved
            </p>
          </div>
        </div>

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center z-50 hover:opacity-90 transition-opacity shadow-lg"
          style={{ backgroundColor: "#0A6A67" }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      </footer>

      {/* ── Mobile sticky bottom bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 px-4 py-3 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div>
          <p className="text-[11px] text-gray-400 uppercase tracking-wide">Starting from</p>
          <p className="font-black" style={{ fontFamily: "'Lato', sans-serif", fontSize: 22, color: "#0D1B2A" }}>₹{BOOKING.startingPrice.toLocaleString("en-IN")} <span style={{ fontSize: 14, color: "#9CA3AF", fontWeight: 400 }}>/ person</span></p>
        </div>
        <button
          className="flex-1 max-w-[180px] py-3 rounded-xl text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#0A6A67", fontFamily: "'Lato', sans-serif", fontSize: 15, fontWeight: 700 }}
          onClick={() => document.querySelector(".lg\\:sticky")?.scrollIntoView({ behavior: "smooth" })}
        >
          Send Enquiry
        </button>
      </div>
    </div>
  );
}