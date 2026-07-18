import { useRef } from "react";
import {
  FileText, Bell, Award, Clock,
  Presentation, CheckCircle2, CalendarDays, Timer,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const MILESTONES = [
  {
    date: new Date("2026-07-30"), display: "30 Jul 2026",
    title: "Abstract Submission", subtitle: "Submit your research abstract",
    icon: FileText,
  },
  {
    date: new Date("2026-08-15"), display: "15 Aug 2026",
    title: "Acceptance Notification", subtitle: "Authors notified of review decisions",
    icon: Bell,
  },
  {
    date: new Date("2026-09-15"), display: "15 Sep 2026",
    title: "Early Bird Registration", subtitle: "Discounted registration window closes",
    icon: Award,
  },
  {
    date: new Date("2026-09-30"), display: "30 Sep 2026",
    title: "Registration Deadline", subtitle: "Final date for all registrations",
    icon: Clock,
  },
  {
    date: new Date("2026-11-16"), display: "16–18 Nov 2026",
    title: "Conference", subtitle: "ICABDAI 2026 · Chennai, India",
    icon: Presentation,
  },
];

// ─── Layout ───────────────────────────────────────────────────────────────────
const ROAD_H      = 14; // Normalized straight horizontal progress bar height
const CONNECTOR_H = 60;
const CARD_H       = 250;
const ALT_LIFT     = 52; // Alternating grid layer gap to avoid overlapping card cutoffs
const TOTAL_H      = CARD_H + ALT_LIFT + CONNECTOR_H + ROAD_H + 80;

// ─── Lace palette for statuses ────────────────────────────────────────────────
const S = {
  completed: {
    cardBg:    "rgba(15,40,56,0.75)",
    border:    "rgba(107,170,160,0.35)",
    shadow:    "rgba(107,170,160,0.15)",
    iconBg:    "rgba(107,170,160,0.12)",
    accent:    "#6BAAA0",
    dot:       "#6BAAA0",
    badge:     "Completed",
    line:      "rgba(107,170,160,0.45)",
    labelTxt:  "#6BAAA0",
  },
  current: {
    cardBg:    "rgba(20,28,55,0.82)",
    border:    "rgba(201,169,110,0.50)",
    shadow:    "rgba(201,169,110,0.22)",
    iconBg:    "rgba(201,169,110,0.12)",
    accent:    "#C9A96E",
    dot:       "#C9A96E",
    badge:     "Active Now",
    line:      "rgba(201,169,110,0.55)",
    labelTxt:  "#C9A96E",
  },
  upcoming: {
    cardBg:    "rgba(9,24,41,0.60)",
    border:    "rgba(201,169,110,0.12)",
    shadow:    "rgba(0,0,0,0.10)",
    iconBg:    "rgba(201,169,110,0.06)",
    accent:    "#5C6780",
    dot:       "#4A5568",
    badge:     "Upcoming",
    line:      "rgba(201,169,110,0.15)",
    labelTxt:  "#5C6780",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function buildStatuses() {
  const today  = new Date();
  const ci     = MILESTONES.findIndex((m) => today < m.date);
  const cur    = ci === -1 ? MILESTONES.length : ci;
  return MILESTONES.map((m, i) => ({
    ...m,
    status: i < cur ? "completed" : i === cur ? "current" : "upcoming",
  }));
}
function calcProgress(ss) {
  const i = ss.findIndex((s) => s.status === "current");
  if (i === -1) return 100;
  if (i === 0)  return 0;
  return (i / (MILESTONES.length - 1)) * 100;
}
const daysUntil = (d) => Math.max(0, Math.ceil((d - new Date()) / 86_400_000));
const START = 8;
const END = 92;
const xPct = (i) => START + ((END - START) * i) / (MILESTONES.length - 1);

// ─── MilestoneCard ────────────────────────────────────────────────────────────
function MilestoneCard({ m }) {
  const cfg  = S[m.status];
  const Icon = m.icon;
  const days = daysUntil(m.date);

  return (
    <div
      className="relative w-[240px] rounded-xl p-3 border backdrop-blur-md cursor-default flex flex-col justify-between transition-all duration-300 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl"
      style={{
        height: `${CARD_H}px`,
        background: cfg.cardBg,
        borderColor: cfg.border,
        boxShadow: `0 10px 28px ${cfg.shadow}, 0 0 0 1px ${cfg.border}`,
        transform: m.status === "current" ? "scale(1.05)" : "scale(1)",
      }}
    >
      {/* Background overlay on active status */}
      {m.status === "current" && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.09) 0%, transparent 60%)" }}
        />
      )}

      <div>
        {/* Check badge */}
        {m.status === "completed" && (
          <CheckCircle2 size={16} className="absolute top-3 right-3" style={{ color: "#6BAAA0" }} />
        )}

        {/* Icon chip */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
          style={{ background: cfg.iconBg }}
        >
          <Icon size={22} style={{ color: cfg.accent }} />
        </div>

        {/* Date */}
        <p
          className="text-[11px] font-bold tracking-widest uppercase mb-2 whitespace-nowrap"
          style={{ color: cfg.labelTxt, fontFamily: "'DM Mono', monospace" }}
        >
          {m.display}
        </p>

        {/* Title */}
        <h3
          className="font-bold mb-2"
          style={{
            color: "#F4EEE4",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.3rem",
            lineHeight: 1.25,
            minHeight: "2.5rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {m.title}
        </h3>

        {/* Subtitle */}
        <p
          className="text-[13px]"
          style={{
            color: "#7A8399",
            lineHeight: 1.4,
            minHeight: "2.3em",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {m.subtitle}
        </p>
      </div>

      <div>
        {/* Status dot + label */}
        <div className="mt-2 flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: cfg.dot,
            }}
          />
          <span className="text-[11px] font-semibold" style={{ color: cfg.labelTxt }}>
            {cfg.badge}
          </span>
        </div>

        {/* Countdown — current only */}
        {m.status === "current" && days > 0 && (
          <div
            className="mt-2 flex items-center gap-1.5 px-2.5 py-1.5 rounded-md w-full"
            style={{ background: "rgba(201,169,110,0.10)", border: "1px solid rgba(201,169,110,0.22)" }}
          >
            <Timer size={12} style={{ color: "#C9A96E", flexShrink: 0 }} />
            <p className="text-[11px] font-bold" style={{ color: "#C9A96E" }}>
              {days} day{days !== 1 ? "s" : ""} left
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── MobileMilestoneRow (stacked vertical layout for small screens) ──────────
function MobileMilestoneRow({ m, isLast }) {
  const cfg  = S[m.status];
  const Icon = m.icon;
  const days = daysUntil(m.date);

  return (
    <div className="relative flex gap-4">
      {/* Node + connecting line */}
      <div className="flex flex-col items-center shrink-0">
        {m.status === "completed" && (
          <span
            className="absolute w-[46px] h-[46px] rounded-full blur-sm"
            style={{ background: "rgba(107,170,160,0.18)" }}
          />
        )}
        <div
          className="relative z-10 w-11 h-11 rounded-full border-2 flex items-center justify-center backdrop-blur-sm bg-[#0b1730] shrink-0"
          style={{ borderColor: cfg.border, boxShadow: `0 0 14px ${cfg.shadow}` }}
        >
          {m.status === "completed"
            ? <CheckCircle2 size={18} style={{ color: "#6BAAA0" }} />
            : <Icon size={18} style={{ color: cfg.accent }} />
          }
        </div>
        {!isLast && (
          <div className="w-px flex-1 mt-1" style={{ background: cfg.line, minHeight: "20px" }} />
        )}
      </div>

      {/* Card content */}
      <div className="flex-1 pb-6 min-w-0">
        <div
          className="relative rounded-xl p-4 border backdrop-blur-md"
          style={{
            background: cfg.cardBg,
            borderColor: cfg.border,
            boxShadow: `0 10px 24px ${cfg.shadow}, 0 0 0 1px ${cfg.border}`,
          }}
        >
          {m.status === "current" && (
            <div
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(201,169,110,0.09) 0%, transparent 60%)" }}
            />
          )}

          <p
            className="text-[11px] font-bold tracking-widest uppercase mb-1.5"
            style={{ color: cfg.labelTxt, fontFamily: "'DM Mono', monospace" }}
          >
            {m.display}
          </p>

          <h3
            className="font-bold leading-snug mb-1.5"
            style={{ color: "#F4EEE4", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}
          >
            {m.title}
          </h3>

          <p className="text-[13px] leading-snug mb-2.5" style={{ color: "#7A8399" }}>
            {m.subtitle}
          </p>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="w-2 h-2 rounded-full" style={{ background: cfg.dot }} />
            <span className="text-[11px] font-semibold" style={{ color: cfg.labelTxt }}>
              {cfg.badge}
            </span>
            {m.status === "current" && days > 0 && (
              <span
                className="ml-1 flex items-center gap-1 px-2 py-1 rounded-md"
                style={{ background: "rgba(201,169,110,0.10)", border: "1px solid rgba(201,169,110,0.22)" }}
              >
                <Timer size={11} style={{ color: "#C9A96E" }} />
                <span className="text-[11px] font-bold" style={{ color: "#C9A96E" }}>
                  {days} day{days !== 1 ? "s" : ""} left
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── MilestoneNode ────────────────────────────────────────────────────────────
function MilestoneNode({ m }) {
  const cfg  = S[m.status];
  const Icon = m.icon;
  return (
    <div className="relative flex items-center justify-center">
      {m.status === "completed" && (
        <span
          className="absolute w-[54px] h-[54px] rounded-full blur-sm"
          style={{ background: "rgba(107,170,160,0.18)" }}
        />
      )}
      <div
        className="relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center backdrop-blur-sm bg-[#0b1730]"
        style={{
          borderColor: cfg.border,
          boxShadow: `0 0 16px ${cfg.shadow}`,
        }}
      >
        {m.status === "completed"
          ? <CheckCircle2 size={20} style={{ color: "#6BAAA0" }} />
          : <Icon size={20} style={{ color: cfg.accent }} />
        }
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ImportantDates() {
  const statuses = buildStatuses();
  const progress = calcProgress(statuses);
  const ref      = useRef(null);

  return (
    <section
      id="dates"
      ref={ref}
      className="relative py-16 px-0 overflow-hidden"
      style={{ background: "#0b1730" }}
    >
      {/* Lace grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: "rgba(201,169,110,0.05)" }}
        />
        <div
          className="absolute top-1/2 right-1/5 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[90px]"
          style={{ background: "rgba(107,170,160,0.04)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p
            className="inline-flex items-center gap-2 mb-2.5 text-xs font-bold uppercase tracking-[0.20em]"
            style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
          >
            <CalendarDays size={13} /> Conference Timeline
          </p>
          <h2
            className="font-bold text-3xl md:text-4xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F4EEE4",
            }}
          >
            Important{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #C9A96E, #F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Dates
            </span>
          </h2>
          <div
            className="mt-3 mx-auto h-px w-20"
            style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
          />
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: "#7A8399" }}>
            Progress is calculated automatically based on the current date.
          </p>
        </div>

        {/* Mobile: stacked vertical timeline */}
        <div className="md:hidden">
          {statuses.map((m, i) => (
            <MobileMilestoneRow key={m.title} m={m} isLast={i === statuses.length - 1} />
          ))}
        </div>

        {/* Desktop/tablet: horizontal roadmap — fits entirely within the container, no scrolling */}
        <div className="hidden md:block pb-2 pt-4 px-2 lg:px-6">
          <div className="relative w-full mx-auto" style={{ height: `${TOTAL_H}px` }}>

            {/* Cards */}
            {statuses.map((m, i) => {
              const altLift = i % 2 === 1 ? ALT_LIFT : 0;
              return (
                <div
                  key={m.title}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${xPct(i)}%`,
                    bottom: `${ROAD_H + CONNECTOR_H + altLift + 30}px`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <MilestoneCard m={m} />
                </div>
              );
            })}

            {/* Connector lines */}
            {statuses.map((m, i) => {
              const cfg   = S[m.status];
              const lineH = CONNECTOR_H + (i % 2 === 1 ? ALT_LIFT : 0);
              return (
                <div
                  key={`conn-${m.title}`}
                  className="absolute flex items-end justify-center"
                  style={{
                    left: `${xPct(i)}%`,
                    bottom: `${ROAD_H}px`,
                    height: `${lineH}px`,
                    transform: "translateX(-50%)",
                    width: "2px",
                  }}
                >
                  <div className="w-px rounded-full" style={{ height: "100%", background: cfg.line }} />
                </div>
              );
            })}

            {/* Clean Static Progress Track */}
            <div
              className="absolute left-0 right-0"
              style={{ bottom: 0, height: `${ROAD_H}px` }}
            >
              {/* Base Progress Track bar background */}
              <div
                className="relative h-full rounded-full overflow-visible"
                style={{
                  background: "#081525",
                  border: "1px solid rgba(201,169,110,0.14)",
                  boxShadow: "inset 0 2px 8px rgba(0,0,0,0.6)",
                }}
              >
                {/* Fixed filled track level */}
                <div
                  className="absolute left-0 top-0 bottom-0 rounded-l-full"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(90deg, #3D7A72 0%, #6BAAA0 100%)",
                  }}
                />
              </div>

              {/* Milestone nodes center-aligned exactly over the bar track line */}
              {statuses.map((m, i) => (
                <div
                  key={`node-${m.title}`}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10"
                  style={{ left: `${xPct(i)}%` }}
                >
                  <MilestoneNode m={m} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          {[
            { color: "#6BAAA0", label: "Completed" },
            { color: "#C9A96E", label: "Active Now" },
            { color: "#4A5568", label: "Upcoming" },
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm" style={{ color: "#7A8399" }}>
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: color,
                }}
              />
              {label}
            </div>
          ))}
          <div className="w-px h-4" style={{ background: "rgba(201,169,110,0.2)" }} />
          <p className="text-sm" style={{ color: "#7A8399" }}>
            <span style={{ color: "#F4EEE4", fontWeight: 600 }}>
              {statuses.filter((s) => s.status === "completed").length}
            </span>
            {" / "}
            <span style={{ color: "#F4EEE4", fontWeight: 600 }}>{MILESTONES.length}</span>
            {" milestones completed"}
          </p>
        </div>
      </div>
    </section>
  );
}