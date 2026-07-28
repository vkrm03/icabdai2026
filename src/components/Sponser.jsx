import S1 from "../assets/sponsers/S1.png";
import S2 from "../assets/sponsers/S2.png";
import S3 from "../assets/sponsers/S3.png";
import S4 from "../assets/sponsers/S4.png";
import S5 from "../assets/sponsers/S5.png";
import S6 from "../assets/sponsers/S6.png";
import S7 from "../assets/sponsers/S7.png";

const sponsors = [
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="inline-flex items-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.22em]"
            style={{
              color: "#C9A96E",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span
              className="h-px w-8"
              style={{ background: "#C9A96E" }}
            />
            Our Partners
            <span
              className="h-px w-8"
              style={{ background: "#C9A96E" }}
            />
          </p>

          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem,5vw,3.6rem)",
              color: "#F4EEE4",
            }}
          >
            Conference{" "}
            <span
              style={{
                fontStyle: "italic",
                background:
                  "linear-gradient(135deg,#C9A96E,#F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Sponsors
            </span>
          </h2>

          <div
            className="mx-auto mt-4 h-px w-20"
            style={{
              background:
                "linear-gradient(90deg,#C9A96E,transparent)",
            }}
          />
        </div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sponsors.map((logo, index) => (
            <div
              key={index}
              className="group rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(15,32,64,0.7), rgba(9,24,41,0.85))",
                borderColor: "rgba(201,169,110,0.18)",
              }}
            >
              <div className="flex h-44 items-center justify-center p-8">
                <img
                  src={logo}
                  alt={`Sponsor ${index + 1}`}
                  className="max-h-24 max-w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}