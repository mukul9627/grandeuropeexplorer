import { useState } from "react";

// ── Reusable helpers (keep these at the top) ──────────────────────────────────

/** Small teal uppercase eyebrow label above the section title */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-1"
      style={{ color: "#0A6A67" }}
    >
      {children}
    </p>
  );
}

/** Section heading — swap font family / size to match your design system */
function SerifH({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'ITC Avant Garde Gothic Pro', 'Century Gothic', sans-serif",
        fontSize: "clamp(20px, 3vw, 28px)",
        color: "#0D1B2A",
        lineHeight: 1.2,
      }}
    >
      {children}
    </h2>
  );
}

// ── Dropdown shell ─────────────────────────────────────────────────────────────
// Duplicate this block for each section (Travel Checklist, Payment Policy, etc.)

function DropdownSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

      {/* ── Clickable header ── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-7 text-left"
      >
        {/* Left: eyebrow + title */}
        <div>
          <Eyebrow>Sub-label here</Eyebrow>
          <SerifH>Section Title Here</SerifH>
        </div>

        {/* Right: animated chevron in a circle */}
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#0A6A67] ml-4"
          style={{
            transition: "transform 0.3s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </span>
      </button>

      {/* ── Collapsible body — CSS grid animation (no JS height calc needed) ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          transition: "grid-template-rows 0.3s ease",
        }}
      >
        {/* overflow-hidden on inner div is what makes the grid trick work */}
        <div className="overflow-hidden">
          <div className="px-4 sm:px-7 pb-4 sm:pb-7">

            {/* ── TRAVEL CHECKLIST body shape ──────────────────────────────── */}
            {/* Each row: icon bubble  |  title + description  |  check circle */}
            <div className="divide-y divide-gray-100">
              {[/* ...your checklist items array... */].map((item, i) => (
                <div key={i} className="flex items-center gap-4 py-3.5">
                  {/* Teal icon bubble */}
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EAF4F4" }}
                  >
                    {/* <SVGIcon /> — swap per row */}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-gray-800">{/* item.title */}</p>
                    <p className="text-[12px] text-gray-400 mt-0.5 leading-snug">{/* item.desc */}</p>
                  </div>

                  {/* Teal check circle */}
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "#0A6A67" }}
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* ── PAYMENT POLICY body shape ─────────────────────────────────── */}
            {/* Intro line + scrollable table with dark header */}
            <p className="text-[14px] sm:text-[15px] text-gray-500 mb-4 sm:mb-5 leading-relaxed">
              {/* Intro sentence */}
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 -mx-1 sm:mx-0">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ backgroundColor: "#0D1B2A" }}>
                    {[/* ...column headers... */].map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-3.5 text-left whitespace-pre-line"
                        style={{
                          color: i === 0 ? "rgba(255,255,255,0.5)" : "#fff",
                          fontSize: 13,
                          fontWeight: 600,
                          letterSpacing: "0.5px",
                          borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[/* ...your table rows array... */].map((row, ri) => (
                    <tr
                      key={ri}
                      style={{ backgroundColor: ri % 2 === 0 ? "#fff" : "#F9F8F6" }}
                    >
                      {[/* ...row cells... */].map((cell, ci) => (
                        <td
                          key={ci}
                          className="px-4 py-3 text-gray-700"
                          style={{
                            fontSize: 13,
                            borderBottom: "1px solid #F0EDE8",
                            borderRight: ci < 3 ? "1px solid #F0EDE8" : "none",
                            fontWeight: ci === 0 ? 600 : 400,
                          }}
                        >
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
  );
}
Key design decisions explained for the other chat:

Animation — uses gridTemplateRows: "0fr" → "1fr" with a CSS transition. No max-height hacks, no JS measurements needed.
Chevron — sits in a w-8 h-8 rounded-full border circle; rotates 180deg via inline transform transition.
Checklist row layout — 3-column flex: teal icon bubble → title/desc → teal check circle.
Payment table — dark (#0D1B2A) <thead>, zebra-striped <tbody> (#fff / #F9F8F6), overflow-x-auto wrapper for mobile scroll, rounded-xl border container.
Brand tokens — teal #0A6A67, dark navy #0D1B2A, warm off-white #F9F8F6, divider #F0EDE8.