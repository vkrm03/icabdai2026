export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "#040b1d",
        borderTop: "1px solid rgba(201,169,110,0.15)",
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent)" }} />

      {/* Main Footer */}
      <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-12 px-6 py-20 md:flex-row">
        {/* Conference Info */}
        <div className="max-w-xl">
          <h2
            className="text-4xl font-bold tracking-wide"
            style={{ color: "#C9A96E", fontFamily: "'Cormorant Garamond', serif" }}
          >
            ICABDAI 2026
          </h2>

          <p className="mt-6 leading-relaxed text-[15px]" style={{ color: "#A89880", fontFamily: "'Inter', sans-serif" }}>
            International Conference on Advances in Biosciences,
            Data Science and Artificial Intelligence
            <br /><br />
            <strong style={{ color: "#F4EEE4", fontWeight: 600 }}>
              Sathyabama Institute of Science and Technology
            </strong>
            <br />
            Chennai, Tamil Nadu, India
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            className="mb-6 text-xl font-bold uppercase tracking-widest text-[13px]"
            style={{ color: "#7A8399", fontFamily: "'Inter', sans-serif" }}
          >
            Quick Links
          </h3>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-4">
            {["About", "Themes", "Speakers", "Dates", "Registration", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[15px] transition-all duration-200 hover:-translate-x-1"
                style={{ color: "#F4EEE4", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={(e) => (e.target.style.color = "#C9A96E")}
                onMouseLeave={(e) => (e.target.style.color = "#F4EEE4")}
              >
                {link === "Dates" ? "Important Dates" : link}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          borderTop: "1px solid rgba(201,169,110,0.08)",
          background: "rgba(6,13,34,0.4)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-[13px] md:flex-row" style={{ color: "#7A8399", fontFamily: "'Inter', sans-serif" }}>
          <p>
            © 2026 Sathyabama Institute of Science and Technology. All rights reserved.
          </p>

          <p className="font-semibold" style={{ color: "#C9A96E" }}>
            Conference Dates: 16–18 November 2026
          </p>
        </div>
      </div>
    </footer>
  );
}