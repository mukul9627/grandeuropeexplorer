import { useState } from "react";
import {
  PRICING,
  SINGLE_SUPPLEMENT,
  GROUP_PRESETS,
  PRICING_NOTES,
} from "../data/bangkokPackage";

export function TransparentPricingCard() {
  const [travellers, setTravellers] = useState(2);

  // Find closest pax key
  const closestKey = Object.keys(PRICING)
    .map(Number)
    .reduce((prev, curr) =>
      Math.abs(curr - travellers) < Math.abs(prev - travellers) ? curr : prev
    );
  const perPerson = PRICING[closestKey] ?? PRICING[2];
  const totalCost = perPerson * travellers;

  const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

  return (
    <div
      className="mt-4 rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
      style={{ backgroundColor: "#ffffff", fontFamily: "'Lato', sans-serif" }}
    >
      {/* ── Header ── */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-100">
        <p className="text-[12px] font-semibold tracking-[2.5px] uppercase mb-1.5" style={{ color: "#0A6A67" }}>
          Transparent Pricing
        </p>
        <h3
          className="font-bold"
          style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontSize: 26, color: "#0D1B2A", lineHeight: 1.25 }}
        >
          Calculate Your Cost
        </h3>
        <p className="text-[13px] mt-1 text-gray-400">
          {PRICING_NOTES.packageLabel}
        </p>
      </div>

      <div className="px-5 py-5 space-y-5">

        {/* ── Hotel Grade Info ── */}
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{ backgroundColor: "rgba(10,106,103,0.06)", border: "1.5px solid rgba(10,106,103,0.2)" }}
        >
          <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#0A6A67" }}>
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <div>
            <p className="text-[13px] font-semibold" style={{ color: "#0A6A67" }}>{PRICING_NOTES.hotelLabel}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{PRICING_NOTES.hotelSub}</p>
          </div>
        </div>

        {/* ── Traveller Counter ── */}
        <div>
          <p className="text-[11px] tracking-[2px] uppercase font-semibold mb-2 text-gray-400">
            Number of Travellers
          </p>
          <div className="flex items-center justify-between rounded-xl px-4 py-3.5 bg-gray-50 border border-gray-200">
            {/* Minus */}
            <button
              onClick={() => setTravellers(Math.max(1, travellers - 1))}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-gray-200 flex-shrink-0 border border-gray-200 bg-white"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#374151" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
              </svg>
            </button>

            {/* Count display */}
            <div className="text-center flex-1 px-2">
              <p className="font-bold leading-none" style={{ color: "#0D1B2A", fontSize: 32 }}>
                {travellers}
              </p>
              <p className="text-[12px] mt-1 text-gray-500">
                traveller{travellers > 1 ? "s" : ""}
              </p>
              <p className="text-[11px] mt-0.5 text-gray-400">Twin/Double Room (shared)</p>
            </div>

            {/* Plus */}
            <button
              onClick={() => setTravellers(Math.min(16, travellers + 1))}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80 flex-shrink-0"
              style={{ backgroundColor: "#0A6A67" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#fff" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Quick Select Group Size ── */}
        <div>
          <p className="text-[11px] tracking-[2px] uppercase font-semibold mb-2 text-gray-400">
            Quick Select Group Size
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {GROUP_PRESETS.map((p) => {
              const active = travellers === p.value;
              return (
                <button
                  key={p.value}
                  onClick={() => setTravellers(p.value)}
                  className="py-2 rounded-lg text-[12px] font-semibold transition-all"
                  style={{
                    backgroundColor: active ? "#0A6A67" : "#F3F4F6",
                    color:           active ? "#fff" : "#6B7280",
                    border:          active ? "1px solid rgba(10,106,103,0.8)" : "1px solid #E5E7EB",
                  }}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="border-t border-gray-100" />

        {/* ── Cost Breakdown ── */}
        <div className={`grid gap-1.5 sm:gap-2 ${SINGLE_SUPPLEMENT > 0 ? "grid-cols-3" : "grid-cols-2"}`}>
          {[
            { label: "Per Person",        value: fmt(perPerson),       sub: "Twin/Double room",                                highlight: false },
            { label: "Total Group Cost",  value: fmt(totalCost),       sub: `for ${travellers} traveller${travellers > 1 ? "s" : ""}`, highlight: true  },
            ...(SINGLE_SUPPLEMENT > 0 ? [{ label: "Single Supplement", value: fmt(SINGLE_SUPPLEMENT), sub: "Solo / own room add-on", highlight: false }] : []),
          ].map((col, i) => (
            <div
              key={i}
              className="rounded-xl px-1.5 sm:px-2 py-2.5 sm:py-3 text-center"
              style={{
                backgroundColor: col.highlight ? "rgba(10,106,103,0.08)" : "#F9FAFB",
                border:          col.highlight ? "1px solid rgba(10,106,103,0.3)" : "1px solid #E5E7EB",
              }}
            >
              <p
                className="text-[9px] tracking-[0.8px] uppercase font-semibold mb-2 leading-snug"
                style={{ color: col.highlight ? "#0A6A67" : "#9CA3AF" }}
              >
                {col.label}
              </p>
              <p className="text-[14px] font-bold" style={{ color: col.highlight ? "#0A6A67" : "#0D1B2A" }}>
                {col.value}
              </p>
              <p className="text-[9px] mt-1 leading-snug text-gray-400">{col.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Season note ── */}
        <div className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-100 px-3 py-2.5">
          <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <p className="text-[11px] text-amber-800">
            <strong>{PRICING_NOTES.highSeasonNote}</strong>
          </p>
        </div>

        {/* ── Footer note ── */}
        <p className="text-[11px] leading-relaxed text-gray-400">
          {PRICING_NOTES.footerNote}
        </p>
      </div>
    </div>
  );
}