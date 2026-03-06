/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  PACKAGE DATA — Grand Europe Explorer (GTT-INT-)
 *  17 Days / 16 Nights
 *  Rome · Venice · Switzerland (Lugano, Interlaken, Zurich) · Paris · Amsterdam
 *
 *  HOW TO SWAP PACKAGES:
 *  Update the values in this file only. The design and layout in all
 *  component files will automatically reflect your new content.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ReactNode } from "react";

// ─── Itinerary Types (shared with TourPlanSection) ───────────────────────────
export type ActivityType = "transfer" | "flight" | "stay" | "activity" | "meal";

export interface ItineraryItem {
  type: ActivityType;
  time: string;
  title: string;
  description?: string;
  image?: string;
  flightInfo?: { from: string; fromCity: string; to: string; toCity: string; dep: string; arr: string; airline: string; duration: string; refund: string };
  hotelInfo?: { name: string; checkIn: string; checkOut: string; nights: string; room: string; rating: number };
  mealInfo?: { breakfast: "included" | "excluded"; lunch: "included" | "excluded"; dinner: "included" | "excluded" };
  transferInfo?: { from: string; to: string; vehicle: string };
}

export interface DayPlan {
  day: string;
  label: string;
  location: string;
  title: string;
  summary: string;
  highlights: string[];
  items: ItineraryItem[];
}

// ─── Package Identity ─────────────────────────────────────────────────────────
export const PACKAGE_META = {
  id:           "GTT-INT-",
  operator:     "Grab That Trip",
  eyebrow:      "Grab That Trip · GTT-INT-",
  badge1:       "Multi-Country Europe",
  badge2:       "Romantic",
  duration:     "17 Days / 16 Nights",
  titleMain:    "Grand Europe",
  titleItalic:  "Explorer",
  location:     "Rome · Venice · Switzerland · Paris · Amsterdam",
  reviewCount:  0,
  ratingFilled: 5,
};

// ─── All Images ───────────────────────────────────────────────────────────────
export const IMAGES = {
  // Hero gallery
  heroMain:        "https://images.unsplash.com/photo-1724616373525-ebbcfe37fba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  heroTopRight:    "https://images.unsplash.com/photo-1745512610481-3780506ed96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  heroBottomLeft:  "https://images.unsplash.com/photo-1607286665766-40c6ea26a913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  heroBottomRight: "https://images.unsplash.com/photo-1571657370423-23ee8d7fd497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",

  // Booking form thumbnail
  bookingThumb:    "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",

  // Connectivity section
  connectivity:    "https://images.unsplash.com/photo-1621945909946-ecac9ed9dcf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",

  // Discount banner
  discountBanner:  "https://images.unsplash.com/photo-1760365569073-e523e5546f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

// ─── Booking / Pricing ────────────────────────────────────────────────────────
export const BOOKING = {
  packageName:   "Grand Europe Explorer",
  startingPrice: 404355,  // INR 4,04,355 per adult, twin sharing (EUR 3808)
  originalPrice: 0,       // No strikethrough price in source document
};

/** Cost per person (twin sharing). EUR 3808 = INR 4,04,355 */
export const PRICING: Record<number, number> = {
  1:  404355,
  2:  404355,
  3:  404355,
  4:  404355,
  5:  404355,
  6:  404355,
  7:  404355,
  8:  404355,
  9:  404355,
  10: 404355,
  11: 404355,
  12: 404355,
  13: 404355,
  14: 404355,
  15: 404355,
  16: 404355,
};
export const SINGLE_SUPPLEMENT = 0; // Not specified in document

export const GROUP_PRESETS = [
  { label: "2 Pax",  value: 2  },
  { label: "4 Pax",  value: 4  },
  { label: "6 Pax",  value: 6  },
  { label: "8 Pax",  value: 8  },
  { label: "10 Pax", value: 10 },
  { label: "12 Pax", value: 12 },
  { label: "14 Pax", value: 14 },
  { label: "16 Pax", value: 16 },
];

export const PRICING_NOTES = {
  hotelLabel:    "Mix of 3★ & 4★ Hotels",
  hotelSub:      "Rome · Venice · Interlaken · Zurich · Paris · Amsterdam",
  packageLabel:  "Grand Europe Explorer · 3★ & 4★ · 17D/16N",
  highSeasonNote:"Optional Train Tickets (not included in package): 2nd Class @ EUR 232 (approx. ₹24,658) per adult — tentative rates, actuals not yet published. Routes: 09 May Rome→Venice, 11 May Venice→Lugano, 16 May Basel→Paris, 20 May Paris→Amsterdam.",
  footerNote:    "* Total Package cost @ EUR 3808 (INR 4,04,355) per Adult, based on Twin sharing. 5% GST + 5% TCS applicable if payment in INR. ROE considered on the day payment is processed and is subject to change. City taxes to be paid locally at hotels. Passport copy and PAN card copy (linked with Aadhaar) required to proceed with booking.",
};

// ─── Stats Bar (4 quick-facts) ────────────────────────────────────────────────
export const STATS_BAR: { svg: ReactNode; label: string; value: string }[] = [
  {
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0A6A67" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    label: "Meals",
    value: "Own Expense",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0A6A67" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    label: "Trip Mood",
    value: "Romantic",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0A6A67" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    label: "Accommodation",
    value: "3★ & 4★ Hotels",
  },
  {
    svg: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#0A6A67" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253M3.284 14.253A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
    label: "Countries",
    value: "5 Countries · 6 Cities",
  },
];

// ─── Destination Overview ─────────────────────────────────────────────────────
// Exact text from source document
export const DESTINATION = {
  eyebrow:    "Destination",
  title:      "Rome to Amsterdam — Europe's Finest",
  paragraphs: [
    <>Experience the magic of Europe with Grab That Trip's Grand Europe Highlights, a journey covering the iconic cities of Rome, Venice, Switzerland, Paris, and Amsterdam. Begin in Rome, exploring world-famous landmarks such as the Colosseum, Roman Forum, and Vatican Museums, before heading to the romantic canals of Venice with a gondola ride and visits to Murano, Burano, and Torcello.</>,
    <>Continue your adventure through the scenic landscapes of Switzerland using the Swiss Pass, discovering Lugano, Interlaken, Mt. Jungfrau – Top of Europe, Zurich, Rhine Falls, and Liechtenstein. The journey then takes you to Paris to enjoy highlights like the Eiffel Tower, Seine River Cruise, Disneyland Paris, and La Vallée Village shopping.</>,
    <>Your trip concludes in Amsterdam, where you'll experience a canal cruise, the Heineken Experience, and a countryside tour to Zaanse Schans, Edam, Volendam, and Marken—making Grab That Trip's Grand Europe Highlights the perfect blend of culture, scenic beauty, and unforgettable European experiences.</>,
  ] as ReactNode[],
  bullets: [
    "5 iconic European destinations – Rome, Venice, Switzerland, Paris & Amsterdam",
    "Swiss Pass (2nd Class) included for scenic rail travel within Switzerland",
    "Mix of 3★ & 4★ hotels across all 6 cities",
  ],
};

// ─── Package Highlights (exactly as per source document — 8 items) ─────────────
export const HIGHLIGHTS: string[] = [
  "Visit 5 iconic European destinations – Rome, Venice, Switzerland, Paris & Amsterdam",
  "Explore the Colosseum, Vatican Museums & Roman Forum",
  "Experience a classic Venice gondola ride",
  "Journey through Swiss Alps with the Swiss Pass & Mt. Jungfrau excursion",
  "See the spectacular Rhine Falls in Switzerland",
  "Visit the Eiffel Tower & enjoy a Seine River Cruise in Paris",
  "Experience the magic of Disneyland Paris",
  "Enjoy a canal cruise and Dutch countryside tour from Amsterdam",
];

// ─── Hotels (exactly as per source document) ──────────────────────────────────
export const HOTELS = [
  {
    night:     "Night 1–2",
    name:      "Hotel Regio or Similar",
    location:  "Rome, Italy",
    stars:     3,
    tag:       "Standard Room",
    amenities: ["2 Nights", "3★ Hotel", "City Centre", "Walking Distance to Attractions"],
    img:       "https://images.unsplash.com/photo-1687946991985-68d1f5af252b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    night:     "Night 3–4",
    name:      "Hotel Carlton Capri or Similar",
    location:  "Venice, Italy",
    stars:     3,
    tag:       "Standard Room",
    amenities: ["2 Nights", "3★ Hotel", "Walking Distance to Station", "Canal City"],
    img:       "https://images.unsplash.com/photo-1696081616094-2177e8395c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    night:     "Night 5–6",
    name:      "Hotel Metropole or Similar",
    location:  "Interlaken, Switzerland",
    stars:     3,
    tag:       "Standard Room",
    amenities: ["2 Nights", "3★ Hotel", "Mountain Views", "Near Train Station"],
    img:       "https://images.unsplash.com/photo-1760900090912-5c2764433e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    night:     "Night 7–9",
    name:      "Placid Hotel Zurich or Similar",
    location:  "Zurich, Switzerland",
    stars:     4,
    tag:       "Standard Room",
    amenities: ["3 Nights", "4★ Hotel", "City Centre", "Near Lake"],
    img:       "https://images.unsplash.com/photo-1651437780786-5bb2d5ed318b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    night:     "Night 10–13",
    name:      "Hotel Pax Opera or Similar",
    location:  "Paris, France",
    stars:     3,
    tag:       "Standard Room",
    amenities: ["4 Nights", "3★ Hotel", "Near Opera", "Metro Access"],
    img:       "https://images.unsplash.com/photo-1716831309985-48246936fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    night:     "Night 14–16",
    name:      "Inntel Hotels Amsterdam Landmark or Similar",
    location:  "Amsterdam, Netherlands",
    stars:     4,
    tag:       "Standard Room",
    amenities: ["3 Nights", "4★ Hotel", "Canal District", "Near Central Station"],
    img:       "https://images.unsplash.com/photo-1761145060932-368fd7dc56d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

// ─── Tour Plan Subtitle ───────────────────────────────────────────────────────
export const TOUR_PLAN_SUBTITLE = "A 17-day journey across 5 iconic European destinations — Rome, Venice, Switzerland, Paris & Amsterdam.";

// ─── 17-Day Itinerary (strictly as per source document) ───────────────────────
export const TOUR_DAYS: DayPlan[] = [
  // ── DAY 01 ──────────────────────────────────────────────────────────────────
  {
    day: "01",
    label: "Arrival Day",
    location: "Rome",
    title: "Arrival in Rome",
    summary: "Private transfer from Rome (FCO) Airport to Hotel.",
    highlights: ["Private transfer from Rome (FCO) Airport to Hotel"],
    items: [
      {
        type: "transfer",
        time: "On Arrival",
        title: "Private Transfer — Rome Airport (FCO) to Hotel",
        description: "Private transfer from Rome (FCO) Airport to Hotel.",
        image: "https://images.unsplash.com/photo-1568636578737-e8c08fff25ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Rome Fiumicino Airport (FCO)", to: "Hotel Regio or Similar", vehicle: "01 Sedan Car" },
      },
      {
        type: "stay",
        time: "Check-in",
        title: "Check-in — Hotel Regio, Rome",
        image: "https://images.unsplash.com/photo-1687946991985-68d1f5af252b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Regio or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "2 Nights", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 02 ──────────────────────────────────────────────────────────────────
  {
    day: "02",
    label: "Rome Sightseeing",
    location: "Rome",
    title: "Rome — Hop-on Hop-off, Colosseum, Roman Forum & Vatican",
    summary: "01 Day Rome Hop-on Hop-off bus ticket. Colosseum, Roman Forum & Palatine Hill entry ticket. Vatican Museums & Sistine Chapel entry ticket.",
    highlights: ["01 Day Rome Hop-on Hop-off bus ticket", "Colosseum, Roman Forum & Palatine Hill entry ticket", "Vatican Museums & Sistine Chapel entry ticket"],
    items: [
      {
        type: "activity",
        time: "Morning",
        title: "Rome Hop-on Hop-off Bus — 1 Day Ticket",
        description: "01 Day Rome Hop-on Hop-off bus ticket.",
        image: "https://images.unsplash.com/photo-1568636578737-e8c08fff25ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "10:00",
        title: "Colosseum, Roman Forum & Palatine Hill — Entry Ticket",
        description: "Colosseum, Roman Forum & Palatine Hill entry ticket.",
        image: "https://images.unsplash.com/photo-1709123351160-97f571f51c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Afternoon",
        title: "Vatican Museums & Sistine Chapel — Entry Ticket",
        description: "Vatican Museums & Sistine Chapel entry ticket.",
        image: "https://images.unsplash.com/photo-1681671416148-4a6d342896bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Hotel Regio, Rome",
        image: "https://images.unsplash.com/photo-1687946991985-68d1f5af252b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Regio or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 2", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 03 ──────────────────────────────────────────────────────────────────
  {
    day: "03",
    label: "Travel Day",
    location: "Rome → Venice",
    title: "Rome to Venice — Travel Day",
    summary: "No private transfer — Rome hotel is 400m walking distance from train station. No private transfer — Venice hotel is walking distance from train station. Note: Train ticket Rome → Venice S. Lucia is optional at extra cost (EUR 232 per adult).",
    highlights: [
      "No private transfer — Rome hotel is 400m walking distance from train station",
      "No private transfer — Venice hotel is walking distance from train station",
      "Train ticket (Rome → Venice S. Lucia, 09 May) at optional extra cost",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Travel: Rome → Venice S. Lucia (Optional Train — Extra Cost)",
        description: "No private transfer. Rome hotel is 400m walking distance from train station. Venice hotel is walking distance from Venice train station. Train ticket: Optional @ EUR 232 per adult (09 May: Rome – Venice S. Lucia).",
        image: "https://images.unsplash.com/photo-1659896974806-c6946541b30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Rome (walking to station)", to: "Venice (walking from station)", vehicle: "Optional Train — Extra Cost" },
      },
      {
        type: "stay",
        time: "Afternoon",
        title: "Check-in — Hotel Carlton Capri, Venice",
        image: "https://images.unsplash.com/photo-1696081616094-2177e8395c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Carlton Capri or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "2 Nights", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 04 ──────────────────────────────────────────────────────────────────
  {
    day: "04",
    label: "Venice Exploration",
    location: "Venice",
    title: "Venice — Murano, Burano, Torcello & Gondola Ride",
    summary: "Half-day guided tour of Murano, Burano & Torcello from Venice island on shared basis. Gondola ride on shared basis.",
    highlights: [
      "Half-day guided tour of Murano, Burano & Torcello from Venice island on shared basis",
      "Gondola ride on shared basis",
    ],
    items: [
      {
        type: "activity",
        time: "Morning",
        title: "Gondola Ride (Shared Basis)",
        description: "Gondola ride on shared basis.",
        image: "https://images.unsplash.com/photo-1745512610481-3780506ed96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Afternoon",
        title: "Half-Day Guided Tour — Murano, Burano & Torcello (Shared Basis)",
        description: "Half-day guided tour of Murano, Burano & Torcello from Venice island on shared basis.",
        image: "https://images.unsplash.com/photo-1708766500325-641b06384323?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Hotel Carlton Capri, Venice",
        image: "https://images.unsplash.com/photo-1696081616094-2177e8395c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Carlton Capri or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 4", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 05 ──────────────────────────────────────────────────────────────────
  {
    day: "05",
    label: "Travel Day",
    location: "Venice → Switzerland",
    title: "Venice to Switzerland — Travel Day",
    summary: "No private transfer — Venice hotel is walking distance from train station. Note: Train ticket Venice S. Lucia → Lugano (01 interchange) is optional at extra cost (EUR 232 per adult).",
    highlights: [
      "No private transfer — Venice hotel is walking distance from train station",
      "Train ticket (Venice S. Lucia → Lugano, 11 May, 01 interchange) at optional extra cost",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Travel: Venice S. Lucia → Lugano, Switzerland (Optional Train — Extra Cost)",
        description: "No private transfer. Venice hotel is walking distance from train station. Train ticket: Optional @ EUR 232 per adult (11 May: Venice S. Lucia – Lugano, 01 interchange).",
        image: "https://images.unsplash.com/photo-1659896974806-c6946541b30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Venice S. Lucia (walking from hotel)", to: "Lugano, Switzerland (01 interchange)", vehicle: "Optional Train — Extra Cost" },
      },
    ],
  },
  // ── DAY 06 ──────────────────────────────────────────────────────────────────
  {
    day: "06",
    label: "Swiss Pass Begins",
    location: "Lugano → Interlaken",
    title: "Swiss Pass — Lugano to Interlaken",
    summary: "Consecutive 2nd Class Swiss Pass begins. Lugano to Interlaken by using Swiss Pass.",
    highlights: [
      "Consecutive 02nd Class Swiss Pass begins",
      "Lugano to Interlaken by using Swiss Pass",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Swiss Pass (2nd Class) — Lugano to Interlaken",
        description: "Consecutive 02nd Class Swiss Pass. Lugano to Interlaken by using Swiss Pass.",
        image: "https://images.unsplash.com/photo-1760365569073-e523e5546f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Lugano", to: "Interlaken", vehicle: "Swiss Pass — 2nd Class (Included)" },
      },
      {
        type: "stay",
        time: "Afternoon",
        title: "Check-in — Hotel Metropole, Interlaken",
        image: "https://images.unsplash.com/photo-1760900090912-5c2764433e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Metropole or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "2 Nights", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 07 ──────────────────────────────────────────────────────────────────
  {
    day: "07",
    label: "Top of Europe",
    location: "Interlaken",
    title: "Excursion to Mt. Jungfrau — Top of Europe",
    summary: "Excursion to Mt. Jungfrau with Swiss Pass.",
    highlights: ["Excursion to Mt. Jungfrau with Swiss Pass"],
    items: [
      {
        type: "activity",
        time: "Full Day",
        title: "Excursion to Mt. Jungfrau — Top of Europe (Swiss Pass)",
        description: "Excursion to Mt. Jungfrau with Swiss Pass.",
        image: "https://images.unsplash.com/photo-1607286665766-40c6ea26a913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Hotel Metropole, Interlaken",
        image: "https://images.unsplash.com/photo-1760900090912-5c2764433e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Metropole or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 7", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 08 ──────────────────────────────────────────────────────────────────
  {
    day: "08",
    label: "Rhine Falls & Lindt",
    location: "Interlaken → Zurich",
    title: "Interlaken to Zurich — Rhine Falls & Lindt Chocolate",
    summary: "Interlaken to Zurich by using Swiss Pass. Visit Rhine Falls with Swiss Pass (Boat ride included). Lindt Home of Chocolate entry ticket.",
    highlights: [
      "Interlaken to Zurich by using Swiss Pass",
      "Visit Rhine Falls with Swiss Pass (Boat ride included)",
      "Lindt Home of Chocolate entry ticket",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Swiss Pass — Interlaken to Zurich",
        description: "Interlaken to Zurich by using Swiss Pass.",
        image: "https://images.unsplash.com/photo-1659896974806-c6946541b30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Interlaken", to: "Zurich (via Rhine Falls)", vehicle: "Swiss Pass — 2nd Class (Included)" },
      },
      {
        type: "activity",
        time: "Midday",
        title: "Rhine Falls — Boat Ride Included (Swiss Pass)",
        description: "Visit Rhine Falls with Swiss Pass (Boat ride included).",
        image: "https://images.unsplash.com/photo-1673018646702-cde8451672f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Afternoon",
        title: "Lindt Home of Chocolate — Entry Ticket",
        description: "Lindt Home of Chocolate entry ticket.",
        image: "https://images.unsplash.com/photo-1651437780786-5bb2d5ed318b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Check-in — Placid Hotel Zurich (4★)",
        image: "https://images.unsplash.com/photo-1651437780786-5bb2d5ed318b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Placid Hotel Zurich or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "3 Nights", room: "Standard Room", rating: 4 },
      },
    ],
  },
  // ── DAY 09 ──────────────────────────────────────────────────────────────────
  {
    day: "09",
    label: "Liechtenstein",
    location: "Zurich",
    title: "Explore Liechtenstein — Swiss Pass",
    summary: "Explore Liechtenstein with Swiss Pass.",
    highlights: ["Explore Liechtenstein with Swiss Pass"],
    items: [
      {
        type: "activity",
        time: "Full Day",
        title: "Explore Liechtenstein (Swiss Pass)",
        description: "Explore Liechtenstein with Swiss Pass.",
        image: "https://images.unsplash.com/photo-1673018646581-458b777bfb88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Placid Hotel Zurich",
        image: "https://images.unsplash.com/photo-1651437780786-5bb2d5ed318b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Placid Hotel Zurich or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 9", room: "Standard Room", rating: 4 },
      },
    ],
  },
  // ── DAY 10 ──────────────────────────────────────────────────────────────────
  {
    day: "10",
    label: "Travel Day",
    location: "Zurich → Paris",
    title: "Zurich to Basel to Paris",
    summary: "Zurich to Basel by using Swiss Pass. Private transfer from Paris train station to hotel. Note: Train ticket Basel → Paris is optional at extra cost (EUR 232 per adult, 16 May).",
    highlights: [
      "Zurich to Basel by using Swiss Pass",
      "Train ticket (Basel → Paris, 16 May) at optional extra cost",
      "Private transfer from Paris train station to hotel",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Swiss Pass — Zurich to Basel",
        description: "Zurich to Basel by using Swiss Pass.",
        image: "https://images.unsplash.com/photo-1659896974806-c6946541b30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Zurich", to: "Basel", vehicle: "Swiss Pass — 2nd Class (Included)" },
      },
      {
        type: "transfer",
        time: "Midday",
        title: "Travel: Basel → Paris (Optional Train — Extra Cost)",
        description: "Train ticket: Optional @ EUR 232 per adult (16 May: Basel – Paris).",
        image: "https://images.unsplash.com/photo-1760281853029-6c15842957f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Basel", to: "Paris", vehicle: "Optional Train — Extra Cost" },
      },
      {
        type: "transfer",
        time: "Afternoon",
        title: "Private Transfer — Paris Train Station to Hotel",
        description: "Private transfer from Paris train station to hotel.",
        image: "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Paris Train Station", to: "Hotel Pax Opera or Similar", vehicle: "Private Transfer (Included)" },
      },
      {
        type: "stay",
        time: "Evening",
        title: "Check-in — Hotel Pax Opera, Paris",
        image: "https://images.unsplash.com/photo-1716831309985-48246936fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Pax Opera or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "4 Nights", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 11 ──────────────────────────────────────────────────────────────────
  {
    day: "11",
    label: "Paris Highlights",
    location: "Paris",
    title: "Paris — Hop-on Hop-off, Eiffel Tower & Seine River Cruise",
    summary: "01 Day Paris Hop-on Hop-off bus ticket. Eiffel Tower 2nd level entry ticket (Subject to availability). Seine River Cruise on shared basis.",
    highlights: [
      "01 Day Paris Hop-on Hop-off bus ticket",
      "Eiffel Tower 2nd level entry ticket (Subject to availability)",
      "Seine River Cruise on shared basis",
    ],
    items: [
      {
        type: "activity",
        time: "Morning",
        title: "Paris Hop-on Hop-off Bus — 1 Day Ticket",
        description: "01 Day Paris Hop-on Hop-off bus ticket.",
        image: "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Afternoon",
        title: "Eiffel Tower — 2nd Level Entry Ticket (Subject to Availability)",
        description: "Eiffel Tower 2nd level entry ticket (Subject to availability).",
        image: "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Evening",
        title: "Seine River Cruise (Shared Basis)",
        description: "Seine River Cruise on shared basis.",
        image: "https://images.unsplash.com/photo-1760281853029-6c15842957f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Night",
        title: "Overnight — Hotel Pax Opera, Paris",
        image: "https://images.unsplash.com/photo-1716831309985-48246936fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Pax Opera or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 11", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 12 ──────────────────────────────────────────────────────────────────
  {
    day: "12",
    label: "Disneyland Paris",
    location: "Paris",
    title: "Disneyland Paris — 1 Day / 1 Park",
    summary: "Disneyland 1 Day / 1 Park entry ticket with return transfer on SIC basis.",
    highlights: ["Disneyland 01 Day / 01 Park entry ticket with return transfer on SIC basis"],
    items: [
      {
        type: "activity",
        time: "Full Day",
        title: "Disneyland Paris — 1 Day / 1 Park Entry Ticket with Return Transfer (SIC)",
        description: "Disneyland 01 Day / 01 Park entry ticket with return transfer on SIC basis. Kindly note: for SIC/Shared basis tours, clients need to reach at the pickup point.",
        image: "https://images.unsplash.com/photo-1715793625407-ab5800e89223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Hotel Pax Opera, Paris",
        image: "https://images.unsplash.com/photo-1716831309985-48246936fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Pax Opera or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 12", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 13 ──────────────────────────────────────────────────────────────────
  {
    day: "13",
    label: "Shopping Day",
    location: "Paris",
    title: "La Vallée Village Outlet Shopping",
    summary: "La Vallée Village Outlet Shopping day with return transfers on SIC basis.",
    highlights: ["La Vallée Village Outlet Shopping day with return transfers on SIC basis"],
    items: [
      {
        type: "activity",
        time: "Full Day",
        title: "La Vallée Village Outlet Shopping — Return Transfers Included (SIC)",
        description: "La Vallée Village Outlet Shopping day with return transfers on SIC basis. Kindly note: for SIC/Shared basis tours, clients need to reach at the pickup point.",
        image: "https://images.unsplash.com/photo-1762597803410-87e198924f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Hotel Pax Opera, Paris",
        image: "https://images.unsplash.com/photo-1716831309985-48246936fe42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Hotel Pax Opera or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 13", room: "Standard Room", rating: 3 },
      },
    ],
  },
  // ── DAY 14 ──────────────────────────────────────────────────────────────────
  {
    day: "14",
    label: "Travel Day",
    location: "Paris → Amsterdam",
    title: "Paris to Amsterdam — Travel Day",
    summary: "Private transfer from Paris hotel to train station. Private transfer from Amsterdam train station to hotel. Note: Train ticket Paris → Amsterdam is optional at extra cost (EUR 232 per adult, 20 May).",
    highlights: [
      "Private transfer from Paris hotel to train station",
      "Train ticket (Paris → Amsterdam, 20 May) at optional extra cost",
      "Private transfer from Amsterdam train station to hotel",
    ],
    items: [
      {
        type: "transfer",
        time: "Morning",
        title: "Private Transfer — Paris Hotel to Train Station",
        description: "Private transfer from Paris hotel to train station.",
        image: "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Hotel Pax Opera or Similar, Paris", to: "Paris Train Station", vehicle: "Private Transfer (Included)" },
      },
      {
        type: "transfer",
        time: "Midday",
        title: "Travel: Paris → Amsterdam (Optional Train — Extra Cost)",
        description: "Train ticket: Optional @ EUR 232 per adult (20 May: Paris – Amsterdam).",
        image: "https://images.unsplash.com/photo-1659896974806-c6946541b30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Paris", to: "Amsterdam", vehicle: "Optional Train — Extra Cost" },
      },
      {
        type: "transfer",
        time: "Afternoon",
        title: "Private Transfer — Amsterdam Train Station to Hotel",
        description: "Private transfer from Amsterdam train station to hotel.",
        image: "https://images.unsplash.com/photo-1571657370423-23ee8d7fd497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Amsterdam Train Station", to: "Inntel Hotels Amsterdam Landmark or Similar", vehicle: "Private Transfer (Included)" },
      },
      {
        type: "stay",
        time: "Evening",
        title: "Check-in — Inntel Hotels Amsterdam Landmark (4★)",
        image: "https://images.unsplash.com/photo-1761145060932-368fd7dc56d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Inntel Hotels Amsterdam Landmark or Similar", checkIn: "As per hotel", checkOut: "As per hotel", nights: "3 Nights", room: "Standard Room", rating: 4 },
      },
    ],
  },
  // ── DAY 15 ──────────────────────────────────────────────────────────────────
  {
    day: "15",
    label: "Amsterdam Sightseeing",
    location: "Amsterdam",
    title: "Amsterdam — Hop-on Hop-off, Heineken Experience & Canal Cruise",
    summary: "01 Day Amsterdam Hop-on Hop-off bus ticket. Heineken Experience entrance ticket. Canal Cruise on shared basis.",
    highlights: [
      "01 Day Amsterdam Hop-on Hop-off bus ticket",
      "Heineken Experience entrance ticket",
      "Canal Cruise on shared basis",
    ],
    items: [
      {
        type: "activity",
        time: "Morning",
        title: "Amsterdam Hop-on Hop-off Bus — 1 Day Ticket",
        description: "01 Day Amsterdam Hop-on Hop-off bus ticket.",
        image: "https://images.unsplash.com/photo-1571657370423-23ee8d7fd497?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Afternoon",
        title: "Heineken Experience — Entrance Ticket",
        description: "Heineken Experience entrance ticket.",
        image: "https://images.unsplash.com/photo-1755530815831-b89f0ee55637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "activity",
        time: "Evening",
        title: "Amsterdam Canal Cruise (Shared Basis)",
        description: "Canal Cruise on shared basis.",
        image: "https://images.unsplash.com/photo-1755530815831-b89f0ee55637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Night",
        title: "Overnight — Inntel Hotels Amsterdam Landmark",
        image: "https://images.unsplash.com/photo-1761145060932-368fd7dc56d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Inntel Hotels Amsterdam Landmark or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 15", room: "Standard Room", rating: 4 },
      },
    ],
  },
  // ── DAY 16 ──────────────────────────────────────────────────────────────────
  {
    day: "16",
    label: "Dutch Countryside",
    location: "Netherlands",
    title: "Zaanse Schans, Edam, Volendam & Marken",
    summary: "Day trip to Zaanse Schans, Edam, Volendam & Marken from Amsterdam on SIC basis.",
    highlights: ["Day trip to Zaanse Schans, Edam, Volendam & Marken from Amsterdam on SIC basis"],
    items: [
      {
        type: "activity",
        time: "Full Day",
        title: "Day Trip — Zaanse Schans, Edam, Volendam & Marken (SIC Basis)",
        description: "Day trip to Zaanse Schans, Edam, Volendam & Marken from Amsterdam on SIC basis. Kindly note: for SIC/Shared basis tours, clients need to reach at the pickup point.",
        image: "https://images.unsplash.com/photo-1720112705997-6ddb9b21d0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      },
      {
        type: "stay",
        time: "Evening",
        title: "Overnight — Inntel Hotels Amsterdam Landmark",
        image: "https://images.unsplash.com/photo-1761145060932-368fd7dc56d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        hotelInfo: { name: "Inntel Hotels Amsterdam Landmark or Similar", checkIn: "Evening", checkOut: "As per hotel", nights: "Night 16", room: "Standard Room", rating: 4 },
      },
    ],
  },
  // ── DAY 17 ──────────────────────────────────────────────────────────────────
  {
    day: "17",
    label: "Departure Day",
    location: "Amsterdam",
    title: "Departure from Amsterdam — Amsterdam Hotel to Airport",
    summary: "Private transfer from Amsterdam hotel to (AMS) Airport. Kindly note that the tours which are on SIC/Shared basis — clients need to reach at the pickup point.",
    highlights: [
      "Private transfer from Amsterdam hotel to Amsterdam Schiphol Airport (AMS)",
      "End of Grab That Trip services",
    ],
    items: [
      {
        type: "transfer",
        time: "As Per Flight",
        title: "Private Transfer — Amsterdam Hotel to Schiphol Airport (AMS)",
        description: "Private transfer from Amsterdam hotel to (AMS) Airport. Kindly note that the tours which are on SIC/Shared basis for them client need to reach at the pickup point.",
        image: "https://images.unsplash.com/photo-1621945909946-ecac9ed9dcf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        transferInfo: { from: "Inntel Hotels Amsterdam Landmark or Similar", to: "Amsterdam Schiphol Airport (AMS)", vehicle: "Private Transfer (Included)" },
      },
    ],
  },
];

// ─── Activities Slider (from document's Activities & Experiences section) ─────
export const ACTIVITIES = [
  { image: "https://images.unsplash.com/photo-1709123351160-97f571f51c26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Colosseum, Roman Forum & Vatican Museums", subtitle: "Rome",              tag: "Guided Tour" },
  { image: "https://images.unsplash.com/photo-1745512610481-3780506ed96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Gondola Ride & Island Tour",              subtitle: "Venice",            tag: "Excursion"   },
  { image: "https://images.unsplash.com/photo-1607286665766-40c6ea26a913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Swiss Scenic Trains & Mt. Jungfrau",     subtitle: "Switzerland",       tag: "Heritage"    },
  { image: "https://images.unsplash.com/photo-1673018646702-cde8451672f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Rhine Falls & Lindt Home of Chocolate",  subtitle: "Zurich",            tag: "Excursion"   },
  { image: "https://images.unsplash.com/photo-1603056754687-bf40adff59b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Eiffel Tower & Seine River Cruise",       subtitle: "Paris",             tag: "Guided Tour" },
  { image: "https://images.unsplash.com/photo-1715793625407-ab5800e89223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Disneyland Visit & La Vallée Shopping",   subtitle: "Paris",             tag: "Leisure"     },
  { image: "https://images.unsplash.com/photo-1755530815831-b89f0ee55637?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Canal Cruise & Heineken Experience",      subtitle: "Amsterdam",         tag: "Excursion"   },
  { image: "https://images.unsplash.com/photo-1720112705997-6ddb9b21d0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", title: "Zaanse Schans, Edam, Volendam & Marken", subtitle: "Netherlands",        tag: "Heritage"    },
];

// ─── Inclusions (exactly as per source document — 20 items) ───────────────────
export const INCLUSIONS = {
  visible: [
    "Private Rome airport transfer",
    "Rome Hop-on Hop-off Bus (1 Day)",
    "Colosseum, Roman Forum & Palatine Hill entry",
    "Vatican Museums & Sistine Chapel entry",
  ],
  hidden: [
    "Murano, Burano & Torcello island tour",
    "Venice Gondola Ride (shared)",
    "Swiss Pass – 2nd Class",
    "Mt. Jungfrau Excursion",
    "Rhine Falls Boat Ride",
    "Lindt Home of Chocolate entry",
    "Paris Hop-on Hop-off Bus (1 Day)",
    "Eiffel Tower 2nd Level entry",
    "Seine River Cruise",
    "Disneyland Paris (1 Day / 1 Park) with transfers",
    "La Vallée Village Shopping Tour with transfers",
    "Paris & Amsterdam train station transfers",
    "Amsterdam Hop-on Hop-off Bus (1 Day)",
    "Heineken Experience ticket",
    "Amsterdam Canal Cruise",
    "Zaanse Schans countryside tour",
    "Amsterdam hotel to airport transfer",
  ],
};

// ─── Exclusions (exactly as per source document — 10 items) ──────────────────
export const EXCLUSIONS = {
  visible: [
    "International & domestic airfare",
    "Schengen visa fees",
    "Travel insurance",
    "City taxes payable at hotels (if applicable)",
  ],
  hidden: [
    "Meals not mentioned in the itinerary",
    "Personal expenses such as tips, laundry, phone calls, etc.",
    "Transfers not mentioned in the itinerary",
    "Optional tours or activities not specified in inclusions",
    "Early check-in or late check-out at hotels",
    "Porterage and hotel incidentals",
  ],
};

// ─── When to Visit (from document's Best Time to Visit section) ───────────────
export const WHEN_TO_VISIT: {
  svg: ReactNode; label: string; months: string; desc: string; best: boolean;
}[] = [
  {
    svg: <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" /></svg>,
    label:  "Best Season ✦",
    months: "Apr – Jun & Sep – Oct",
    desc:   "Pleasant weather, fewer crowds, and ideal conditions for sightseeing across Italy, Switzerland, France, and the Netherlands.",
    best:   true,
  },
  {
    svg: <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
    label:  "Summer",
    months: "Jul – Aug",
    desc:   "Popular with long daylight hours, though it can be busy and slightly warmer in major cities.",
    best:   false,
  },
  {
    svg: <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>,
    label:  "Winter",
    months: "Nov – Mar",
    desc:   "Perfect for festive Christmas markets and snowy Swiss landscapes, but temperatures can be quite cold.",
    best:   false,
  },
];

// ─── Connectivity (exactly as per source document) ────────────────────────────
export const CONNECTIVITY = {
  intro: "Travelers can begin Grab That Trip's Grand Europe Highlights from major Indian cities such as Delhi, Mumbai, Bangalore, Chennai, and Hyderabad. Direct and one-stop flights are available to key European gateways like Rome, Zurich, Paris, and Amsterdam. Major airlines operating these routes include Air India, Air France, KLM, Lufthansa, Swiss International Air Lines, and British Airways. The itinerary generally starts in Rome and ends in Amsterdam, both well connected to India with frequent international flights.",
  directFlights: [
    { from: "Delhi",     code: "DEL", duration: "To Rome / Amsterdam" },
    { from: "Mumbai",    code: "BOM", duration: "To Rome / Amsterdam" },
    { from: "Bangalore", code: "BLR", duration: "To Rome / Amsterdam" },
    { from: "Chennai",   code: "MAA", duration: "To Rome / Amsterdam" },
    { from: "Hyderabad", code: "HYD", duration: "To Rome / Amsterdam" },
  ],
  directFlightsBadge: "Delhi · Mumbai · Bangalore · Chennai · Hyderabad",
  travelRequirements: [
    "Valid Passport — issued within the last 10 years, at least 3 months validity beyond the return date, with two blank pages",
    "Schengen Tourist Visa — Indian citizens must obtain a Schengen Tourist Visa (covers Italy, Switzerland, France, and the Netherlands)",
    "Visa Validity — the Schengen visa allows travel to 29 European countries for up to 90 days within a 180-day period",
    "Required Documents — completed visa application form, passport-size photos, confirmed flight tickets, hotel bookings, travel itinerary, travel insurance, and proof of financial funds",
    "Travel Insurance — mandatory Schengen travel insurance covering medical emergencies during the entire stay",
  ],
};

// ─── Payment Terms (section is blank in source document) ─────────────────────
export const PAYMENT_TERMS = {
  show: false, // Payment Terms section was blank in source document
  intro: "",
  mobileRows: [] as { stage: string; pct: string; note: string }[],
  desktopHeaders: ["Stage", "South East Asia", "Europe / Far East / Africa", "US / Australia / NZ"],
  desktopRows: [] as { stage: string; sea: string; eur: string; us: string }[],
};

// ─── Travel Checklist (from Travel Requirements for Indian Travellers) ─────────
export const TRAVEL_CHECKLIST: { iconPath: string; label: string }[] = [
  { iconPath: "M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z", label: "Valid Passport — issued within last 10 years, 3 months validity beyond return date, 2 blank pages" },
  { iconPath: "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z", label: "Schengen Tourist Visa covering Italy, Switzerland, France & Netherlands" },
  { iconPath: "M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5", label: "Confirmed international flight tickets (return / onward)" },
  { iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21", label: "Hotel bookings confirmation for all cities" },
  { iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", label: "Mandatory Schengen travel insurance covering medical emergencies for entire stay" },
  { iconPath: "M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75", label: "Proof of sufficient financial funds" },
  { iconPath: "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z", label: "Completed Schengen visa application form with passport-size photos" },
  { iconPath: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3", label: "Passport copy & PAN card copy (PAN must be linked with Aadhaar) for booking" },
];

// ─── Guest Reviews (none in source document — section will be hidden) ──────────
export const REVIEWS: {
  name: string; date: string; avatar: string; color: string; text: string;
}[] = [];

// ─── Additional Information ───────────────────────────────────────────────────

export const CHILDREN_POLICY = {
  show: false, // Not mentioned in source document
  eyebrow: "",
  title: "",
  subtitle: "",
  ageGroups: [] as { age: string; label: string; note: string }[],
  notes: [] as string[],
};

// Important Notes — exact content from document's "Note:" section
export const IMPORTANT_NOTES = {
  show:    true,
  eyebrow: "Please Read",
  title:   "Important Notes",
  items: [
    { icon: "📋", text: "The offered rates are net and non-commissionable for group, based on contract rates which are not applicable on events date and trade fair period." },
    { icon: "🛫", text: "Airport Assistance is not included unless specified." },
    { icon: "🏨", text: "Hotel City Taxes to be paid locally at the hotel unless specified." },
    { icon: "⚠️", text: "Rates and availability of the services are subject to change before any confirmation." },
    { icon: "📝", text: "No bookings are made at the time of quotation." },
    { icon: "💳", text: "Any extra services to be paid directly. Driver tips to be paid directly by client unless specified." },
    { icon: "🔍", text: "Anything which is not mentioned in the inclusions list is always not included." },
    { icon: "💱", text: "05% GST + 05% TCS required if payment will be in INR. ROE will be considered of the day when the payment will be processed, ROE is subject to change." },
    { icon: "🪪", text: "To proceed with bookings, we would require passport copy & PAN card copy of passengers, which should be linked with Aadhaar." },
  ],
};

export const CANCELLATION_POLICY = {
  show: false, // Not mentioned in source document
  eyebrow: "",
  title: "",
  intro: "",
  mobileRows: [] as { days: string; charge: string; note: string }[],
  desktopRows: [] as { days: string; charge: string }[],
  peakNote: "",
};

// ─── FAQs (exactly as per source document — 8 items) ─────────────────────────
export const FAQS: { q: string; a: string }[] = [
  { q: "Do Indian travellers need a visa for this trip?",   a: "Yes, Indian citizens must obtain a Schengen Visa to travel to Italy, Switzerland, France, and the Netherlands." },
  { q: "What is the best time to take this trip?",          a: "The best time is April to June and September to October when the weather is pleasant for sightseeing." },
  { q: "Are airport transfers included?",                   a: "Yes, selected airport and train station transfers are included as mentioned in the itinerary." },
  { q: "Is the Swiss Pass included in the package?",       a: "Yes, a 2nd Class Swiss Pass is included for travel within Switzerland." },
  { q: "Are tours private or shared?",                     a: "Most sightseeing tours such as island tours, cruises, and excursions are on a shared (SIC) basis." },
  { q: "Is Disneyland Paris included?",                    a: "Yes, the itinerary includes a 1 Day / 1 Park ticket to Disneyland Paris with return transfers." },
  { q: "What type of accommodation is included?",          a: "Accommodation is generally in well-rated 3★ or 4★ hotels, depending on the package selection." },
  { q: "Are meals included in the package?",               a: "Only meals mentioned in the itinerary are included; others will be at your own expense." },
];

// ─── Discount Banner ──────────────────────────────────────────────────────────
export const DISCOUNT_BANNER = {
  image:    "https://images.unsplash.com/photo-1760365569073-e523e5546f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  headline: "Grand Europe Explorer",
  subtext:  "Rome · Venice · Switzerland · Paris · Amsterdam — 17 Days / 16 Nights",
  cta:      "Send Enquiry",
};
