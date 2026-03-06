import React, { useRef, useState } from "react";
import { ACTIVITIES } from "../data/bangkokPackage";

export function ActivitiesSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const CARD_WIDTH = 220 + 16;

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? CARD_WIDTH * 3 : -CARD_WIDTH * 3, behavior: "smooth" });
    setTimeout(updateScrollState, 350);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-7 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <p
            className="text-[11px] tracking-[2.5px] uppercase mb-1"
            style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", color: "#0A6A67", fontWeight: 600 }}
          >
            Included in Your Package
          </p>
          <h2
            style={{ fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif", fontWeight: 700, color: "#0D1B2A", fontSize: "clamp(18px, 2.5vw, 24px)" }}
          >
            Activities &amp; Experiences
          </h2>
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: canScrollLeft ? "#0A6A67" : "#D1D5DB", color: canScrollLeft ? "#0A6A67" : "#9CA3AF", background: "white" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ borderColor: canScrollRight ? "#0A6A67" : "#D1D5DB", color: canScrollRight ? "#0A6A67" : "#9CA3AF", background: "white" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scrollable cards */}
      <div
        ref={scrollRef}
        onScroll={updateScrollState}
        className="flex gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ACTIVITIES.map((act, i) => (
          <div key={i} className="flex-shrink-0 group cursor-pointer" style={{ width: 220 }}>
            {/* Image */}
            <div className="rounded-2xl overflow-hidden mb-3" style={{ height: 200 }}>
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Tag */}
            <span
              className="inline-block text-[11px] px-2.5 py-0.5 rounded-full mb-1.5"
              style={{
                background: act.tag === "Leisure" ? "#F3F4F6" : act.tag === "Excursion" ? "#FFF7ED" : "#EAF4F4",
                color: act.tag === "Leisure" ? "#6B7280" : act.tag === "Excursion" ? "#B45309" : "#0A6A67",
                fontFamily: "'Lato', sans-serif", fontWeight: 600, letterSpacing: "0.3px",
              }}
            >
              {act.tag}
            </span>

            {/* Title */}
            <p
              className="leading-snug mb-0.5"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700, fontSize: 14, color: "#0D1B2A" }}
            >
              {act.title}
            </p>

            {/* Subtitle */}
            <p style={{ fontFamily: "'Lato', sans-serif", fontSize: 12, color: "#6B7280" }}>
              {act.subtitle}
            </p>
          </div>
        ))}
      </div>

      <style>{`.no-scrollbar::-webkit-scrollbar{display:none}`}</style>
    </div>
  );
}
