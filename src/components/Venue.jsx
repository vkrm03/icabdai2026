import { MapPin, Mail, Phone, Globe } from "lucide-react";

export default function Venue() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0b1730" }}
    >
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <p
            className="inline-flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
          >
            <span className="h-px w-8" style={{ background: "#C9A96E" }} />
            How to Reach
          </p>

          <h2
            className="font-bold leading-tight mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#F4EEE4",
            }}
          >
            Venue &amp;{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A96E, #F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contact
            </span>
          </h2>

          <div
            className="mt-4 mb-10 h-px w-16"
            style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
          />

          {/* Address Card */}
          <div
            className="rounded-3xl border p-10 shadow-2xl backdrop-blur-md relative overflow-hidden"
            style={{
              background: "rgba(15,32,64,0.6)",
              borderColor: "rgba(201,169,110,0.18)",
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at 100% 0, rgba(201,169,110,0.5), transparent 70%)" }} />

            <h3
              className="mb-6 text-2xl font-semibold flex items-center gap-3"
              style={{ color: "#F0DFB8", fontFamily: "'Cormorant Garamond', serif" }}
            >
              <MapPin size={22} style={{ color: "#C9A96E" }} />
              Conference Venue
            </h3>

            <address className="not-italic leading-relaxed text-[15px]" style={{ color: "#A89880", fontFamily: "'Inter', sans-serif" }}>
              <strong style={{ color: "#F4EEE4", fontWeight: 600 }}>
                Sathyabama Institute of Science and Technology
              </strong>
              <br />
              (Deemed to be University)
              <br />
              Jeppiaar Nagar (OMR)
              <br />
              Chennai – 600119
              <br />
              Tamil Nadu, India
            </address>

            {/* Contact Details */}
            <div className="mt-10 space-y-6 border-t pt-8" style={{ borderColor: "rgba(201,169,110,0.12)" }}>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border" style={{ background: "rgba(201,169,110,0.08)", borderColor: "rgba(201,169,110,0.2)" }}>
                  <Mail size={16} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: "#7A8399" }}>Email</p>
                  <a href="mailto:icabdai26@gmail.com" className="text-sm font-medium transition hover:text-white" style={{ color: "#F4EEE4" }}>icabdai26@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border" style={{ background: "rgba(201,169,110,0.08)", borderColor: "rgba(201,169,110,0.2)" }}>
                  <Phone size={16} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: "#7A8399" }}>Phone</p>
                  <div className="text-sm font-medium space-x-3" style={{ color: "#F4EEE4" }}>
                    <a href="tel:+919080266483" className="transition hover:text-white">+91 90802 66483</a>
                    <span style={{ color: "rgba(201,169,110,0.3)" }}>|</span>
                    <a href="tel:+918012261482" className="transition hover:text-white">+91 80122 61482</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border" style={{ background: "rgba(201,169,110,0.08)", borderColor: "rgba(201,169,110,0.2)" }}>
                  <Globe size={16} style={{ color: "#C9A96E" }} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-1" style={{ color: "#7A8399" }}>Website</p>
                  <a href="https://www.sathyabama.ac.in" target="_blank" rel="noreferrer" className="text-sm font-medium transition hover:text-white" style={{ color: "#F4EEE4" }}>www.sathyabama.ac.in</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div
          className="overflow-hidden rounded-3xl border shadow-2xl h-full min-h-[500px]"
          style={{ borderColor: "rgba(201,169,110,0.25)" }}
        >
          <iframe
            title="Sathyabama Institute of Science and Technology"
            src="https://www.google.com/maps?q=Sathyabama+Institute+of+Science+and+Technology,+Chennai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale opacity-90 contrast-125 transition-all duration-700 hover:grayscale-0 hover:opacity-100 hover:contrast-100"
            style={{ filter: "sepia(0.3) hue-rotate(180deg) opacity(0.85)" }}
          />
        </div>
      </div>
    </section>
  );
}