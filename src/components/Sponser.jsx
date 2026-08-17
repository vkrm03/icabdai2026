import S1 from "../assets/sponsers/S1.png";
import S2 from "../assets/sponsers/S2.png";
import S3 from "../assets/sponsers/S3.png";
import S4 from "../assets/sponsers/S4.png";
import S5 from "../assets/sponsers/S5.png";
import S6 from "../assets/sponsers/S6.png";
import S7 from "../assets/sponsers/S7.png";
import S8 from "../assets/sponsers/S8.png";
import S9 from "../assets/sponsers/S9.png";

const sponsors = [
  S1,
  S2,
  S3,
  S4,
  S5,
  S6,
  S7,
];

const collaborators = [
  S8,
  S9,
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-20 md:py-24 px-6 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Heading */}
        <div className="mb-14 text-center">
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

        {/* Conference Sponsors */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
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
              <div className="flex h-40 md:h-44 items-center justify-center p-6 md:p-8">
                <img
                  src={logo}
                  alt={`Conference Sponsor ${index + 1}`}
                  className="max-h-24 max-w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Collaborators Heading */}
        <div className="mt-20 md:mt-24 mb-10 text-center">
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

            Industry Partners

            <span
              className="h-px w-8"
              style={{ background: "#C9A96E" }}
            />
          </p>

          <h3
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
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
              Industrial Collaborators
            </span>
          </h3>

          <div
            className="mx-auto mt-4 h-px w-16"
            style={{
              background:
                "linear-gradient(90deg,#C9A96E,transparent)",
            }}
          />
        </div>

        {/* Industrial Collaborator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {collaborators.map((logo, index) => (
            <div
              key={index}
              className="group rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(15,32,64,0.7), rgba(9,24,41,0.85))",
                borderColor: "rgba(201,169,110,0.18)",
              }}
            >
              <div className="flex h-44 md:h-48 items-center justify-center p-8">
                <img
                  src={logo}
                  alt={`Industrial Collaborator ${index + 1}`}
                  className="max-h-28 max-w-full object-contain transition duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}