import { Users } from "lucide-react";

import imgDayanandan from "../assets/Dayanandan_img.jpg";
import imgMariazeena from "../assets/Dr MARIAZEENA JOHNSON_img.jpg"; 
import imgSheelaRani from "../assets/Dr. B Sheela Rani_img.jpeg";
import imgGeetha from "../assets/Geetha_mam_img.png";
import imgJackson from "../assets/Jackson_Durairaj_img.jpg";
import imgBeryl from "../assets/Beryl-Vedha.jpg";
import imgNandagopal from "../assets/Nandha.jpg";
import imgJoyitaHazra from "../assets/JoyitaHazra.jpg";
import imgSaravanankumar from "../assets/Saravanakumar.jpg";
import imgJenifLeo from "../assets/Jenif-leo.jpg";
import imgJohnsonRetnaraj from "../assets/johnson-retnaraj-samuel_img.jpg"; 
import imgKamachi from "../assets/kamachi_mam_img.jpg";
import imgLakshmanan from "../assets/L.LAKSHMANAN_img.jpg";
import imgMadankumar from "../assets/madankumar_img.jpg";
import imgMaryPosonia from "../assets/Mary Posonia_img.jpg";
import imgSasiPrabha from "../assets/sasi prabha_img.jpg";
import imgSathiyaraj from "../assets/sathiyaraj_sir_img.jpg";

const chiefPatron = { name: "Dr. Mariazeena Johnson, Chancellor", photo: imgMariazeena };

const patrons = [
  { name: "Dr. B. Sheela Rani, Vice Chancellor", photo: imgSheelaRani },
  { name: "Dr. T. Sasipraba, Director Innovation", photo: imgSasiPrabha },
];

const organizingChairs = [
  { name: "Dr. L. Lakshmanan, Dean, School of Computing", photo: imgLakshmanan },
  { name: "Dr. A. Mary Posonia, HoD, Department of IT", photo: imgMaryPosonia },
  { name: "Dr. S. Johnson Retnaraj Samuel, Professor and Head, CMNS", photo: imgJohnsonRetnaraj },
];

const conveners = [
  { name: "Dr. Kamatchi KS, Associate Professor, IT", photo: imgKamachi },
  { name: "Dr. A. Sathiyaraj, Associate Professor, IT", photo: imgSathiyaraj },
  { name: "Dr. C. Geetha, Associate Professor, IT", photo: imgGeetha },
  { name: "Dr. A. Dayanandan, Professor, CMNS", photo: imgDayanandan },
  { name: "Dr. S. Jackson Durairaj, Associate Professor, CMNS", photo: imgJackson },
  { name: "Dr. A. Madan Kumar, Associate Professor, CMNS", photo: imgMadankumar },
  { name: "Dr. Y. Beryl Vedha, Assistant Professor, CMNS", photo: imgBeryl },
  { name: "Dr. Nandagopal, Assistant Professor, CMNS", photo: imgNandagopal },
  { name: "Dr. Joyita Hazra, Assistant Professor, CMNS", photo: imgJoyitaHazra },
];

const organizingCommittee = [
  { name: "Mr. V. Saravanakumar, Scientific Assistant", photo: imgSaravanankumar },
  { name: "Mr. Jenif Leo, Scientific Assistant", photo: imgJenifLeo },
  { name: "Mr. Mohamed Juvad, IRF", photo: "" },
  { name: "Ms. V. Reethu, IRF", photo: "" },
  { name: "Mr. Vivek S, IV Year, IT", photo: "" },
  { name: "Mr. Vikram A, IV Year, IT", photo: "" },
  { name: "Mr. Srivatsan T, IV Year, IT", photo: "" },
  { name: "Mr. Henry Sam Moses D, IV Year, IT", photo: "" },
  { name: "Mr. Harish P, IV Year, IT", photo: "" },
  { name: "Mr. Logeswaran J, IV Year, IT", photo: "" },
  { name: "Mr. Kavin K, IV Year, IT", photo: "" },
  { name: "Mr. Kishore C, IV Year, IT", photo: "" },
  { name: "Ms. Jaishree K, IV Year, IT", photo: "" },
  { name: "Ms. Nuha Zahra Fathima, IV Year, IT", photo: "" },
  { name: "Ms. Sree Harshini G, IV Year, IT", photo: "" },
];

function getInitials(name) {
  const clean = name.replace(/^(Dr|Mr|Ms|Mrs)\.\s*/i, "").split(",")[0];
  const parts = clean.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function Avatar({ person, size = 56, ring = false }) {
  return (
    <div
      className="flex flex-shrink-0 items-center justify-center overflow-hidden rounded-full border"
      style={{
        width: size,
        height: size,
        borderColor: ring ? "#C9A96E" : "rgba(201,169,110,0.4)",
        borderWidth: ring ? 2 : 1,
        boxShadow: ring ? "0 0 0 4px rgba(201,169,110,0.15)" : "none",
        background: "linear-gradient(135deg, rgba(201,169,110,0.25), rgba(15,32,64,0.9))",
      }}
    >
      {person.photo ? (
        <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
      ) : (
        <span
          className="font-semibold"
          style={{
            color: "#F0DFB8",
            fontFamily: "'Inter', sans-serif",
            fontSize: size * 0.32,
          }}
        >
          {getInitials(person.name)}
        </span>
      )}
    </div>
  );
}

function PersonCard({ person, size = 56, featured = false, compact = false }) {
  return (
    <div
      className={`flex flex-shrink-0 flex-col items-center rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${
        featured ? "w-[260px] px-6 py-8" : compact ? "w-[150px] px-3 py-4" : "w-[190px] px-3 py-5"
      }`}
      style={
        featured
          ? {
              background: "linear-gradient(160deg, rgba(201,169,110,0.14), rgba(11,23,48,0.75))",
              borderColor: "rgba(201,169,110,0.45)",
              boxShadow:
                "0 0 0 1px rgba(201,169,110,0.08), 0 12px 28px -8px rgba(201,169,110,0.25)",
            }
          : {
              background: "rgba(11,23,48,0.6)",
              borderColor: "rgba(201,169,110,0.15)",
            }
      }
    >
      <Avatar person={person} size={size} ring={featured} />
      <span
        className={`mt-4 leading-snug ${
          featured ? "text-[17px] font-bold" : compact ? "text-[12px] font-semibold" : "text-[13px] font-semibold"
        }`}
        style={{ color: "#F0DFB8", fontFamily: "'Inter', sans-serif" }}
      >
        {person.name}
      </span>
    </div>
  );
}

function GroupTitle({ children }) {
  return (
    <h3
      className="mb-5 border-b pb-3 text-center text-xl font-bold"
      style={{
        color: "#F0DFB8",
        fontFamily: "'Cormorant Garamond', serif",
        borderColor: "rgba(201,169,110,0.2)",
      }}
    >
      {children}
    </h3>
  );
}

function SubBox({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${className}`}
      style={{
        background: "rgba(15,32,64,0.4)",
        borderColor: "rgba(201,169,110,0.12)",
      }}
    >
      {children}
    </div>
  );
}

function Connector() {
  return (
    <div className="flex justify-center">
      <div
        className="h-14 w-px"
        style={{ background: "linear-gradient(180deg, #C9A96E, rgba(201,169,110,0.15))" }}
      />
    </div>
  );
}

function PanelBox({ children }) {
  return (
    <div
      className="h-full rounded-3xl border p-8 md:p-10 shadow-xl"
      style={{
        background: "rgba(15,32,64,0.6)",
        backdropFilter: "blur(12px)",
        borderColor: "rgba(201,169,110,0.15)",
      }}
    >
      {children}
    </div>
  );
}

export default function Committee() {
  return (
    <section
      id="committee"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: "#0b1730" }}
    >
      <div className="relative mx-auto max-w-[1600px]">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <p
            className="inline-flex items-center justify-center gap-3 mb-4 text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
          >
            <Users size={14} /> Leadership
          </p>
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              color: "#F4EEE4",
            }}
          >
            Organizing{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A96E, #F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Committee
            </span>
          </h2>
          <div
            className="mt-4 mx-auto h-px w-16"
            style={{ background: "linear-gradient(90deg, transparent, #C9A96E, transparent)" }}
          />
        </div>

        {/* Two Panel Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Box 1: Chief Patron + Patrons + Organizing Chairs */}
          <PanelBox>
            <div className="flex h-full flex-col items-center justify-center">
              {/* Chief Patron */}
              <div className="mb-3 text-center">
                <span
                  className="inline-block rounded-full border px-5 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: "#C9A96E",
                    borderColor: "rgba(201,169,110,0.35)",
                    background: "rgba(201,169,110,0.08)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Chief Patron
                </span>
              </div>
              <PersonCard person={chiefPatron} size={84} featured />

              <Connector />

              {/* Patrons */}
              <div className="mb-3 text-center">
                <span
                  className="inline-block rounded-full border px-5 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: "#C9A96E",
                    borderColor: "rgba(201,169,110,0.35)",
                    background: "rgba(201,169,110,0.08)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Patrons
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {patrons.map((person) => (
                  <PersonCard key={person.name} person={person} size={76} featured />
                ))}
              </div>

              <Connector />

              {/* Organizing Chairs */}
              <div className="mb-3 text-center">
                <span
                  className="inline-block rounded-full border px-5 py-1.5 text-[12px] font-bold uppercase tracking-[0.2em]"
                  style={{
                    color: "#C9A96E",
                    borderColor: "rgba(201,169,110,0.35)",
                    background: "rgba(201,169,110,0.08)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Organizing Chairs
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {organizingChairs.map((person) => (
                  <PersonCard key={person.name} person={person} size={76} featured />
                ))}
              </div>
            </div>
          </PanelBox>

          {/* Box 2: Conveners + Organizing Committee */}
          <PanelBox>
            <GroupTitle>Conveners</GroupTitle>
            <div className="flex flex-wrap justify-center gap-4">
              {conveners.map((person) => (
                <PersonCard key={person.name} person={person} size={56} />
              ))}
            </div>

            <div className="mt-10">
              <GroupTitle>Organizing Committee</GroupTitle>
              <div className="flex flex-wrap justify-center gap-3">
                {organizingCommittee.map((person) => (
                  <PersonCard key={person.name} person={person} size={44} compact />
                ))}
              </div>
            </div>
          </PanelBox>
        </div>
      </div>
    </section>
  );
}