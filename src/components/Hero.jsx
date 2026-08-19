import sistLogo from "../assets/sist.jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-32 pb-20 sm:px-6 sm:pt-36"
      style={{
        background:
          "radial-gradient(ellipse 90% 60% at 50% 0%, #0f1f3d 0%, #060d22 65%)",
      }}
    >
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,169,110,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,110,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,169,110,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Copper Glow */}
      <div
        className="pointer-events-none absolute bottom-1/4 left-1/4 h-80 w-80"
        style={{
          background:
            "radial-gradient(circle, rgba(184,125,90,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative 2026 */}
      <span
        className="pointer-events-none absolute right-[-2vw] top-[18%] select-none text-[18vw] font-bold leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          color: "rgba(201,169,110,0.035)",
        }}
        aria-hidden="true"
      >
        2026
      </span>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

        {/* Institute Branding */}
        <div className="mb-8 flex flex-col items-center">

          {/* SIST Logo */}
          <div className="mb-5 flex items-center justify-center">
            <img
              src={sistLogo}
              alt="Sathyabama Institute of Science and Technology"
              className="h-auto w-[180px] object-contain sm:w-[220px]"
            />
          </div>

          {/* Institute Name */}
          <p
            className="max-w-4xl text-center text-xl font-medium uppercase tracking-[0.12em] sm:text-2xl md:text-3xl"
            style={{
              color: "#A89880",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Sathyabama Institute of Science and Technology
          </p>

          {/* Decorative Line */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <span
              className="h-px w-10 sm:w-16"
              style={{ background: "rgba(201,169,110,0.45)" }}
            />

            <span
              className="h-1.5 w-1.5 rotate-45"
              style={{ background: "#C9A96E" }}
            />

            <span
              className="h-px w-10 sm:w-16"
              style={{ background: "rgba(201,169,110,0.45)" }}
            />
          </div>
        </div>

        {/* Main Conference Title */}
        <h1
          className="mx-auto max-w-5xl leading-[1.08]"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(2.1rem, 5vw, 4.5rem)",
            color: "#F4EEE4",
            fontWeight: 400,
          }}
        >
          International Conference on Advances in
          <br />
          <span style={{ color: "#F0DFB8" }}>
            Biosciences, Data Science and AI
          </span>
        </h1>

        {/* Acronym */}
        <p
          className="mt-6 text-base font-semibold tracking-[0.35em] sm:text-lg"
          style={{
            color: "#C9A96E",
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
          }}
        >
          ICABDAI 2026
        </p>

        {/* Conference Description */}
        <p
          className="mx-auto mt-7 max-w-3xl text-sm leading-7 sm:text-base sm:leading-8"
          style={{
            color: "#A89880",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          School of Computing · Department of Information Technology,
          <br className="hidden sm:block" />
          in association with the Centre for Molecular and Nanomedical
          Sciences, IRC
        </p>

        {/* Information Bar */}
        <div
          className="mx-auto mt-12 grid max-w-5xl grid-cols-1 overflow-hidden rounded-2xl border sm:grid-cols-3"
          style={{
            background: "rgba(15,32,64,0.52)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderColor: "rgba(201,169,110,0.20)",
          }}
        >
          {[
            {
              label: "Conference Dates",
              value: "16 – 18 November 2026",
            },
            {
              label: "Venue",
              value: "Chennai, Tamil Nadu, India",
            },
            {
              label: "Abstract Deadline",
              value: "30 August 2026",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className="px-6 py-6 text-center sm:px-8 sm:text-left"
              style={{
                borderRight:
                  i < 2
                    ? "1px solid rgba(201,169,110,0.15)"
                    : "none",
                borderBottom:
                  i < 2
                    ? "1px solid rgba(201,169,110,0.15)"
                    : "none",
              }}
            >
              <p
                className="mb-2 text-[10px] uppercase tracking-[0.18em] sm:text-xs"
                style={{
                  color: "#6B7280",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.label}
              </p>

              <p
                className="text-sm font-semibold sm:text-base"
                style={{
                  color: "#F4EEE4",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#registration"
            className="rounded-xl px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                "linear-gradient(135deg, #C9A96E 0%, #B87D5A 100%)",
              color: "#060d22",
              boxShadow: "0 8px 28px rgba(201,169,110,0.25)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Submit Abstract
          </a>

          <a
            href="#dates"
            className="rounded-xl border px-8 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1"
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

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-7 left-1/2 flex h-10 w-6 -translate-x-1/2 justify-center rounded-full border"
        style={{
          borderColor: "rgba(201,169,110,0.30)",
        }}
      >
        <span
          className="mt-2 h-2 w-1 animate-bounce rounded-full"
          style={{
            background: "#C9A96E",
          }}
        />
      </div>
    </section>
  );
}