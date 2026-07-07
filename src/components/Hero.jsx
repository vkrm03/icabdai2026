// ── Hero.jsx — Lace Theme ─────────────────────────────────────────────────────
// Palette: #060d22 bg · #C9A96E lace gold · #F0DFB8 cream · #B87D5A copper

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-36 pb-24"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 0%, #0f1f3d 0%, #060d22 65%)",
      }}
    >
      {/* ── Lace-pattern background grid ─────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Decorative radial glows ───────────────────────────────────────── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(184,125,90,0.06) 0%, transparent 70%)",
        }}
      />

      {/* ── Oversized decorative letters (background) ────────────────────── */}
      <span
        className="absolute right-0 top-1/4 text-[18vw] font-bold select-none pointer-events-none leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(201,169,110,0.04)",
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        2026
      </span>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <p
          className="mb-6 uppercase tracking-[0.22em] text-xs font-semibold"
          style={{ color: "#A89880", fontFamily: "'Inter', sans-serif" }}
        >
          Sathyabama Institute of Science and Technology
        </p>

        {/* Main title — Cormorant Garamond for elegance */}
        <h1
          className="font-bold leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            color: "#F4EEE4",
            fontWeight: 700,
          }}
        >
          International Conference on Advances in
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #C9A96E 0%, #F0DFB8 50%, #B87D5A 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Biosciences, Data Science and AI
          </span>
        </h1>

        {/* Acronym */}
        <p
          className="mt-5 text-lg font-semibold tracking-[0.35em]"
          style={{ color: "#C9A96E", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
        >
          ICABDAI 2026
        </p>

        {/* Sub-text */}
        <p
          className="mx-auto mt-8 max-w-2xl text-base leading-8"
          style={{ color: "#A89880", fontFamily: "'Inter', sans-serif" }}
        >
          School of Computing · Department of Information Technology,
          in association with the Centre for Molecular and Nanomedical Sciences, IRC
        </p>

        {/* ── Info bar ──────────────────────────────────────────────────── */}
        <div
          className="mt-12 grid grid-cols-1 gap-0 rounded-2xl overflow-hidden border sm:grid-cols-3"
          style={{
            background: "rgba(15,32,64,0.5)",
            backdropFilter: "blur(12px)",
            borderColor: "rgba(201,169,110,0.20)",
          }}
        >
          {[
            { label: "Conference Dates", value: "16 – 18 November 2026" },
            { label: "Venue",            value: "Chennai, Tamil Nadu, India" },
            { label: "Abstract Deadline", value: "30 July 2026" },
          ].map((item, i) => (
            <div
              key={item.label}
              className="relative text-left px-8 py-6"
              style={{
                borderRight: i < 2 ? "1px solid rgba(201,169,110,0.15)" : "none",
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-2"
                style={{ color: "#6B7280", fontFamily: "'Inter', sans-serif" }}
              >
                {item.label}
              </p>
              <p
                className="font-semibold text-base"
                style={{ color: "#F4EEE4", fontFamily: "'Inter', sans-serif" }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA Buttons ───────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#registration"
            className="rounded-xl px-8 py-4 font-semibold text-sm transition-all duration-200 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, #C9A96E 0%, #B87D5A 100%)",
              color: "#060d22",
              boxShadow: "0 8px 28px rgba(201,169,110,0.30)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Submit Abstract
          </a>
          <a
            href="#dates"
            className="rounded-xl border px-8 py-4 font-semibold text-sm transition-all duration-200 hover:-translate-y-1"
            style={{
              borderColor: "rgba(201,169,110,0.35)",
              color: "#F0DFB8",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            View Important Dates
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 flex h-10 w-6 -translate-x-1/2 justify-center rounded-full border"
        style={{ borderColor: "rgba(201,169,110,0.30)" }}
      >
        <span
          className="mt-2 h-2 w-1 rounded-full animate-bounce"
          style={{ background: "#C9A96E" }}
        />
      </div>
    </section>
  );
}