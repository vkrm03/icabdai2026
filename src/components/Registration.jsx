const rows = [
  { category: "Students (UG & PG)", early: "INR 1,500", late: "INR 2,000" },
  { category: "Research Scholars", early: "INR 2,000", late: "INR 2,500" },
  { category: "Faculty", early: "INR 3,000", late: "INR 3,500" },
  { category: "Foreign Faculty", early: "USD 600", late: "—" },
  { category: "Foreign Students", early: "USD 200", late: "—" },
];

const publishers = [
  "Elsevier",
  "Springer Nature",
  "Wiley",
];
export default function Registration() {
  return (
    <section
      id="registration"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      <div className="relative mx-auto max-w-7xl">
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
              fontSize: "clamp(2.2rem,5vw,3.6rem)",
              color: "#F4EEE4",
            }}
          >
            Registration{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg,#C9A96E,#F0DFB8)",
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
            style={{ background: "linear-gradient(90deg,#C9A96E,transparent)" }}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
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
                  <th className="px-8 py-6 text-left text-xs font-bold uppercase tracking-wider" style={{ color:"#C9A96E" }}>Category</th>
                  <th className="px-8 py-6 text-center text-xs font-bold uppercase tracking-wider" style={{ color:"#C9A96E" }}>Before 15 Sep 2026</th>
                  <th className="px-8 py-6 text-center text-xs font-bold uppercase tracking-wider" style={{ color:"#C9A96E" }}>After 15 Sep 2026</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row,index)=>(
                  <tr key={row.category} style={{borderBottom:index!==rows.length-1?"1px solid rgba(201,169,110,0.10)":"none"}}>
                    <td className="px-8 py-6 font-semibold" style={{color:"#F4EEE4"}}>{row.category}</td>
                    <td className="px-8 py-6 text-center" style={{color:"#A89880"}}>{row.early}</td>
                    <td className="px-8 py-6 text-center" style={{color:"#7A8399"}}>{row.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
           <p
  className="mb-8 px-8 py-3 text-sm font-medium"
  style={{
    color: "#F0DFB8",
  }}
>
  
  <span style={{ color: "#F0DFB8", fontWeight: "bold" }}> <strong>Note:</strong> Publication charges, if applicable, are
  <strong> additional</strong> and are <strong>not included</strong> in the
  conference registration fee. These charges must be paid separately by the
  authors according to the policies of the respective journal or publisher.</span>
</p>
          </div>

          <div
            className="rounded-3xl border p-10 shadow-2xl"
            style={{
              background:"linear-gradient(145deg, rgba(15,32,64,0.7), rgba(9,24,41,0.85))",
              borderColor:"rgba(201,169,110,0.25)",
            }}
          >
            <h3
              className="mb-6 text-3xl font-bold"
              style={{
                color:"#F0DFB8",
                fontFamily:"'Cormorant Garamond', serif",
              }}
            >
              Publication Opportunity
            </h3>

            <p className="mb-5 leading-relaxed text-[15px]" style={{color:"#A89880"}}>
              Submit your abstract on or before <strong style={{color:"#F4EEE4"}}>30 July 2026</strong>.
              Accepted authors will receive notification and instructions for full paper submission.
            </p>

            <p
  className="mb-6 leading-relaxed text-[15px]"
  style={{ color: "#A89880", lineHeight: "1.9" }}
>
  Selected high-quality papers will be considered for publication in
  internationally reputed journals published by
  <span
    style={{
      color: "#F0DFB8",
      fontWeight: 700,
    }}
  >
    {" "}
    Elsevier, Springer Nature & Wiley
  </span>
  . All manuscripts will undergo a rigorous peer-review process and will
  be recommended for publication in
  <span
    style={{
      color: "#F4EEE4",
      fontWeight: 700,
    }}
  >
    {" "}
    Scopus-indexed journals
  </span>
  , subject to the editorial policies and final acceptance of the
  respective journals.
</p>


            <a
              href="https://cmt3.research.microsoft.com/ICABDAI2026"
              className="inline-flex w-full items-center justify-center rounded-xl px-6 py-4 font-semibold transition-all duration-300 hover:-translate-y-1"
              style={{
                background:"linear-gradient(135deg,#C9A96E,#B87D5A)",
                color:"#060d22",
                boxShadow:"0 8px 25px rgba(201,169,110,.25)",
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
