const rows = [
  { category: "Students (UG & PG)", early: "INR 1,500", late: "INR 2,000" },
  { category: "Research Scholars", early: "INR 2,000", late: "INR 2,500" },
  { category: "Faculty", early: "INR 3,000", late: "INR 3,500" },
  { category: "Foreign Faculty", early: "USD 600", late: "—" },
  { category: "Foreign Students", early: "USD 200", late: "—" },
];

export default function Registration() {
  return (
    <section
      id="registration"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <p
            className="inline-flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
          >
            <span className="h-px w-8" style={{ background: "#C9A96E" }} />
            Join Us
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#F4EEE4",
            }}
          >
            Registration{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A96E, #F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Fees
            </span>
          </h2>
          <div
            className="mt-4 h-px w-16"
            style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Registration Table */}
          <div
            className="overflow-hidden rounded-3xl border backdrop-blur-md shadow-2xl"
            style={{
              background: "rgba(15,32,64,0.4)",
              borderColor: "rgba(201,169,110,0.20)",
            }}
          >
            <table className="min-w-full border-collapse">
              <thead>
                <tr style={{ background: "rgba(201,169,110,0.12)" }}>
                  <th className="px-8 py-6 text-left text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}>
                    Category
                  </th>
                  <th className="px-8 py-6 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}>
                    Before 15 Sep 2026
                  </th>
                  <th className="px-8 py-6 text-center text-xs font-bold uppercase tracking-wider" style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}>
                    After 15 Sep 2026
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.category}
                    className="transition duration-300"
                    style={{
                      borderBottom: index !== rows.length - 1 ? "1px solid rgba(201,169,110,0.10)" : "none",
                    }}
                  >
                    <td className="px-8 py-6 font-semibold" style={{ color: "#F4EEE4", fontFamily: "'Inter', sans-serif" }}>
                      {row.category}
                    </td>
                    <td className="px-8 py-6 text-center font-medium" style={{ color: "#A89880", fontFamily: "'DM Mono', monospace" }}>
                      {row.early}
                    </td>
                    <td className="px-8 py-6 text-center font-medium" style={{ color: "#7A8399", fontFamily: "'DM Mono', monospace" }}>
                      {row.late}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Information Card */}
          <div
            className="flex flex-col justify-between rounded-3xl border p-10 shadow-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(145deg, rgba(15,32,64,0.7) 0%, rgba(9,24,41,0.8) 100%)",
              borderColor: "rgba(201,169,110,0.25)",
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 100% 0, rgba(201,169,110,0.5), transparent 70%)" }} />

            <div className="relative z-10">
              <h3
                className="mb-6 text-3xl font-bold"
                style={{ color: "#F0DFB8", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Submission Info
              </h3>

              <p className="leading-relaxed text-[15px] mb-6 font-medium" style={{ color: "#A89880", fontFamily: "'Inter', sans-serif" }}>
                Submit your abstract through the online submission portal on or
                before <strong style={{ color: "#F4EEE4", fontWeight: 700 }}>30 July 2026</strong>.
                Accepted authors will receive an email notification followed by
                instructions for full manuscript submission.
              </p>

              <p className="leading-relaxed text-[15px] font-medium" style={{ color: "#7A8399", fontFamily: "'Inter', sans-serif" }}>
                Selected peer-reviewed papers will be considered for publication
                in indexed journals based on originality, technical quality, and
                relevance to the conference themes.
              </p>
            </div>

            <a
              href="#"
              className="relative z-10 mt-10 inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-center font-semibold text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #C9A96E 0%, #B87D5A 100%)",
                color: "#060d22",
                boxShadow: "0 8px 25px rgba(201,169,110,0.25)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Open Abstract Submission Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}