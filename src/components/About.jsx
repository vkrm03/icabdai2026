// ── About.jsx — Lace Theme + Bento Grid ──────────────────────────────────────
// Modern asymmetric editorial grid with lace palette

const stats = [
  { value: "A++",     label: "NAAC Accreditation",      icon: "◈" },
  { value: "#51",     label: "NIRF Ranking, India",      icon: "◈" },
  { value: "Top 5",   label: "Innovation, ATAL Ranking", icon: "◈" },
  { value: "Diamond", label: "QS I-Gauge Rating",        icon: "◈" },
];

// Shared inline-style helpers for the lace palette
const LACE = {
  gold:   "#C9A96E",
  cream:  "#F0DFB8",
  copper: "#B87D5A",
  navy:   "#060d22",
  card:   "#0f2040",
  border: "rgba(201,169,110,0.20)",
  muted:  "#A89880",
  text:   "#F4EEE4",
  dim:    "rgba(201,169,110,0.10)",
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      {/* Subtle dot-grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(201,169,110,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Oversized section label */}
      <span
        className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-[120px] font-bold select-none pointer-events-none leading-none hidden xl:block"
        style={{ fontFamily: "'Cormorant Garamond', serif", color: "rgba(201,169,110,0.04)", whiteSpace: "nowrap" }}
        aria-hidden="true"
      >
        ABOUT
      </span>

      <div className="relative mx-auto max-w-7xl">

        {/* ── Eyebrow ──────────────────────────────────────── */}
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: LACE.gold, fontFamily: "'Inter', sans-serif" }}
          >
            <span className="h-px w-8" style={{ background: LACE.gold }} />
            About the Conference
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3.4rem)",
              color: LACE.text,
            }}
          >
            Where biosciences,{" "}
            <em
              style={{
                fontStyle: "italic",
                background: `linear-gradient(135deg, ${LACE.gold}, ${LACE.cream})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              data
            </em>{" "}
            and intelligent systems meet
          </h2>
          <div
            className="mt-4 h-0.5 w-16 rounded-full"
            style={{ background: `linear-gradient(90deg, ${LACE.gold}, transparent)` }}
          />
        </div>

        {/* ── Modern bento grid ────────────────────────────── */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* Long description card — spans 7 cols */}
          <div
            className="lg:col-span-7 rounded-2xl p-8 border relative overflow-hidden"
            style={{ background: LACE.card, borderColor: LACE.border }}
          >
            {/* Corner accent */}
            <div
              className="absolute top-0 left-0 w-32 h-32 pointer-events-none"
              style={{ background: `radial-gradient(circle at 0 0, rgba(201,169,110,0.10), transparent 70%)` }}
            />
            <p
              className="relative text-[15px] leading-[1.9] mb-6"
              style={{ color: LACE.muted, fontFamily: "'Inter', sans-serif" }}
            >
              ICABDAI 2026 is a premier international forum that brings together
              researchers, academicians, scientists, industry experts, and students
              to share innovative research and emerging technologies across
              biosciences, data science, and artificial intelligence.
            </p>
            <p
              className="relative text-[15px] leading-[1.9]"
              style={{ color: LACE.muted, fontFamily: "'Inter', sans-serif" }}
            >
              The conference fosters interdisciplinary collaboration and provides
              a platform to discuss novel solutions to contemporary challenges in
              healthcare, biotechnology, computational sciences, intelligent
              systems, and sustainable development.
            </p>
            {/* Bottom gradient line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-px"
              style={{ background: `linear-gradient(90deg, transparent, ${LACE.gold}, transparent)` }}
            />
          </div>

          {/* Sathyabama card — spans 5 cols */}
          <div
            className="lg:col-span-5 rounded-2xl p-8 border relative overflow-hidden"
            style={{
              background: `linear-gradient(145deg, #0f2040 0%, #091829 100%)`,
              borderColor: LACE.border,
            }}
          >
            <h3
              className="mb-4 text-xl font-semibold"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: LACE.cream, fontSize: "1.5rem" }}
            >
              About Sathyabama
            </h3>
            <p
              className="text-[14px] leading-[1.85]"
              style={{ color: LACE.muted, fontFamily: "'Inter', sans-serif" }}
            >
              A deemed-to-be university offering multidisciplinary programs.
              Accredited{" "}
              <strong style={{ color: LACE.cream }}>A++</strong> by NAAC,
              home to research-intensive culture, distinguished faculty,
              world-class laboratories, and strong industry collaborations.
            </p>
            {/* Decorative lace-knot motif */}
            <div
              className="absolute bottom-6 right-6 w-20 h-20 rounded-full border pointer-events-none opacity-20"
              style={{ borderColor: LACE.gold }}
            />
            <div
              className="absolute bottom-9 right-9 w-14 h-14 rounded-full border pointer-events-none opacity-15"
              style={{ borderColor: LACE.copper }}
            />
          </div>

          {/* ── 4 stat tiles in a row ────────────────────────── */}
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="lg:col-span-3 rounded-2xl p-6 border flex flex-col gap-2 transition-all duration-300 cursor-default group"
              style={{
                background: i % 2 === 0 ? LACE.card : "#091829",
                borderColor: LACE.border,
              }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  background: `linear-gradient(135deg, ${LACE.gold}, ${LACE.cream})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </p>
              <p
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: LACE.muted, fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </p>
              {/* Bottom accent line — grows on hover via CSS */}
              <div
                className="mt-auto h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, ${LACE.gold}, ${LACE.copper})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}