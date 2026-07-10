import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Briefcase, Globe2, Users } from "lucide-react";
import imgsundreson from "../assets/0.png";
import imgKazuhiko from "../assets/1.png"; 
import imgHelen from "../assets/10.png";
import imgBetty from "../assets/11.jpg";
import imgDeisy from "../assets/12.jpg";
import imgJulien from "../assets/13.png"; 
import imgNiranjan from "../assets/14.jpg";
import imgDavid from "../assets/15.jpg";
import imgJoshua from "../assets/17.png";
import imgAshok from "../assets/16.png";
import imgJoseph from "../assets/2.jpg";
import imgTharmaraj from "../assets/3.png";
import imgVaralakshmi from "../assets/4.png";
import imgManikandan from "../assets/5.png";
import imgSwapnil from "../assets/6.png";
import imgSudhakar from "../assets/7.png";
import imgSabitha from "../assets/8.png";
import imgMasilamani from "../assets/9.png";

// ─── Data Map ─────────────────────────────────────────────────────────────────
const SPEAKERS = [
  { name: "Prof. P. Sundaresan",        role: "ICMR Emeritus Scientist",                 institution: "Aravind Medical Research Foundation",    location: "Madurai, India",        flag: "🇮🇳", image: imgsundreson, isKeynote: true },
  { name: "Prof. Kazuhiko Namikawa",      role: "Cell & Neurobiology Researcher",             institution: "Technische Universität Braunschweig",    location: "Germany",               flag: "🇩🇪", image: imgKazuhiko},
  { name: "Dr. Helen Goodridge",          role: "Associate Director, Regen. Medicine",        institution: "Cedars-Sinai",                           location: "Los Angeles, USA",      flag: "🇺🇸", image: imgHelen },
  { name: "Dr. Betty Gimenez",            role: "Ecology, Palynology & AI",                  institution: "French Institute of Pondicherry",        location: "Pondicherry, India",    flag: "🇫🇷", image: imgBetty },
  { name: "Dr. Deisy Contreras",          role: "Asst. Director, Clinical Microbiology",     institution: "Cedars-Sinai",                           location: "Los Angeles, USA",      flag: "🇺🇸", image: imgDeisy },
  { name: "Dr. Julien",                   role: "Organic Farming & Information Technology",   institution: "French Institute of Pondicherry",        location: "Pondicherry, India",    flag: "🇫🇷", image: imgJulien },
  { name: "Dr. Niranjan Ramakrishnan",    role: "Chief Executive Officer",                    institution: "MyLabConnect",                           location: "West Palm Beach, USA", flag: "🇺🇸", image: imgNiranjan},
  { name: "Dr. David Chaim Rubinsztein", role: "Deputy Director",                            institution: "Cambridge Institute for Medical Research", location: "Cambridge, UK",      flag: "🇬🇧", image: imgDavid },
  { name: "Dr. Ashok Iyaswamy",          role: "Research Assistant Professor",               institution: "Hong Kong Baptist University",           location: "Hong Kong",            flag: "🇭🇰", image: imgAshok },
  { name: "Dr. J. Joshua Thomas",         role: "Professor, Department of Computing",         institution: "UOW Malaysia KDU Penang University",     location: "Malaysia",               flag: "🇲🇾", image: imgJoshua },
  { name: "Dr. Joseph Ignatius Irudayam", role: "Associate Biomedical Scientist",             institution: "Cedars-Sinai Medical Centre",            location: "Los Angeles, USA",      flag: "🇺🇸", image: imgJoseph },
  { name: "Dr. Tharmaraj Vairaperumal",   role: "Research Scientist",                        institution: "National Cheng Kung University",         location: "Taiwan",                flag: "🇹🇼", image: imgTharmaraj },
  { name: "Prof. P. Varalakshmi",         role: "Professor & Head, Info. Science & Tech",    institution: "Anna University",                        location: "Chennai, India",        flag: "🇮🇳", image: imgVaralakshmi },
  { name: "Dr. Manikandan Mohan",         role: "Scientist & CEO",                           institution: "Vaxigen International Research Centre",  location: "Coimbatore, India",    flag: "🇮🇳", image: imgManikandan },
  { name: "Dr. Swapnil Bawage",           role: "Research Laboratory Manager",               institution: "Georgia Institute of Technology",          location: "Atlanta, USA",          flag: "🇺🇸", image: imgSwapnil },
  { name: "Prof. S. Sudhakar",            role: "Professor & Head, Biotechnology",           institution: "Manonmaniam Sundaranar University",      location: "Tamil Nadu, India",    flag: "🇮🇳", image: imgSudhakar },
  { name: "R. Sabitha",                   role: "Head, Department of Molecular Oncology",    institution: "Cancer Institute (WIA)",                 location: "Chennai, India",        flag: "🇮🇳", image: imgSabitha },
  { name: "Dr. V. Masilamani",            role: "Professor, Department of CSE",              institution: "IIITDM Kancheepuram",                    location: "Chennai, India",        flag: "🇮🇳", image: imgMasilamani },
];

// ─── Bubble layout ─────────────────────────────────────────────────────────────
const BUBBLES = [
  { x: "40%",   y: "0%",   size: 180, delay: 0.0, amp: 5 },
  { x: "0%",  y: "13%",   size: 130, delay: 1.2, amp: 5 },
  { x: "20%",  y: "10%",  size: 120, delay: 0.5, amp: 7 },
  { x: "65%",  y: "14%",   size: 120, delay: 1.8, amp: 4 },
  { x: "83%",  y: "10%",   size: 115, delay: 0.8, amp: 6 },
  { x: "11%",  y: "38%",  size: 120, delay: 2.0, amp: 5 },
  { x: "31%",  y: "37%",  size: 110, delay: 0.3, amp: 7 },
  { x: "51%",  y: "38%",  size: 115, delay: 1.5, amp: 5 },
  { x: "71%",  y: "37%",  size: 120, delay: 0.7, amp: 6 },
  { x: "1%",   y: "60%",  size: 115, delay: 1.1, amp: 5 },
  { x: "21%",  y: "64%",  size: 105, delay: 0.4, amp: 6 },
  { x: "41%",  y: "60%",  size: 120, delay: 1.7, amp: 5 },
  { x: "61%",  y: "62%",  size: 110, delay: 0.9, amp: 7 },
  { x: "81%",  y: "58%",  size: 115, delay: 2.2, amp: 4 },
  { x: "9%",   y: "86%",  size: 105, delay: 0.6, amp: 6 },
  { x: "29%",  y: "83%",  size: 115, delay: 1.4, amp: 5 },
  { x: "49%",  y: "87%",  size: 100, delay: 0.2, amp: 7 },
  { x: "69%",  y: "84%",  size: 120, delay: 1.9, amp: 5 },
];

const RING_PALETTE = [
  { border: "rgba(201,169,110,0.70)", glow: "rgba(201,169,110,0.25)" },
  { border: "rgba(107,170,160,0.70)", glow: "rgba(107,170,160,0.25)" },
  { border: "rgba(184,125,90,0.70)",  glow: "rgba(184,125,90,0.25)"  },
  { border: "rgba(194,123,138,0.70)", glow: "rgba(194,123,138,0.25)" },
  { border: "rgba(240,223,184,0.65)", glow: "rgba(240,223,184,0.20)" },
];
const ringOf = (i) => RING_PALETTE[i % RING_PALETTE.length];

function getInitials(name) {
  const clean = name.replace(/^(Dr\.|Prof\.|DR\.)\s*/i, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "")).toUpperCase();
}

function SafeAvatar({ src, fallbackText, className, style, onError }) {
  const [imgFailed, setImgFailed] = useState(!src);

  useEffect(() => {
    setImgFailed(!src);
  }, [src]);

  if (!imgFailed && src) {
    return (
      <img
        src={src}
        alt="Speaker profile"
        className={`${className} object-cover`}
        style={style}
        onError={() => {
          setImgFailed(true);
          if (onError) onError();
        }}
      />
    );
  }

  return <span style={style} className="flex items-center justify-center w-full h-full text-center">{fallbackText}</span>;
}

function BubbleCluster({ activeIdx, onHover, onClickNode }) {
  return (
    <>
      <div className="flex lg:hidden flex-wrap justify-center gap-3 w-full max-h-[280px] overflow-y-auto p-2 border border-white/5 rounded-2xl bg-white/[0.01]">
        {SPEAKERS.map((sp, i) => {
          const isActive = i === activeIdx;
          const ring = ringOf(i);
          return (
            <button
              key={`flex-${sp.name}`}
              onClick={() => onClickNode(i)}
              onMouseEnter={() => onHover(i)}
              className="flex items-center justify-center overflow-hidden font-bold rounded-full transition-all duration-300 text-xs sm:text-sm px-4 py-2 border backdrop-blur-md relative"
              style={{
                color: isActive ? "#131015" : "#F4EEE4",
                fontFamily: "'Cormorant Garamond', serif",
                background: isActive
                  ? `linear-gradient(135deg, ${ring.border} 0%, ${ring.border} 100%)`
                  : "rgba(255,255,255,0.04)",
                borderColor: isActive ? "transparent" : ring.border,
                boxShadow: isActive ? `0 4px 12px ${ring.glow}` : "none"
              }}
            >
              <SafeAvatar 
                src={sp.image} 
                className="w-full h-full absolute inset-0 mix-blend-normal"
                fallbackText={getInitials(sp.name)} 
              />
            </button>
          );
        })}
      </div>

      <div className="hidden lg:block relative w-full h-[580px]">
        {SPEAKERS.map((sp, i) => {
          const pos = BUBBLES[i];
          if (!pos) return null;
          const isActive = i === activeIdx;
          const ring = ringOf(i);

          return (
            <motion.div
              key={`map-${sp.name}`}
              className="absolute cursor-pointer select-none"
              style={{ left: pos.x, top: pos.y }}
              animate={{ y: [0, -pos.amp, 0] }}
              transition={{ duration: 6 + pos.delay, repeat: Infinity, ease: "easeInOut", delay: pos.delay }}
              whileHover={{ scale: 1.08, zIndex: 20 }}
              onHoverStart={() => onHover(i)}
              onHoverEnd={() => onHover(null)}
              onClick={() => onClickNode(i)}
            >
              <div
                className="relative flex items-center justify-center rounded-full font-bold overflow-hidden transition-all duration-500 backdrop-blur-xl"
                style={{
                  width: pos.size,
                  height: pos.size,
                  fontSize: pos.size * 0.35,
                  color: isActive ? "#131015" : "#F4EEE4",
                  fontFamily: "'Cormorant Garamond', serif",
                  background: isActive
                    ? `linear-gradient(135deg, ${ring.border} 0%, ${ring.border} 100%)`
                    : "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.12) 100%)",
                  border: `1px solid ${isActive ? "transparent" : ring.border}`,
                  boxShadow: isActive
                    ? `0 14px 35px ${ring.glow}, 0 0 60px ${ring.glow}`
                    : `0 8px 24px rgba(0,0,0,0.4), inset 0 0 20px rgba(255,255,255,0.05)`,
                  transform: isActive ? "scale(1.12)" : "scale(1)",
                }}
              >
                <SafeAvatar 
                  src={sp.image} 
                  className="w-full h-full absolute inset-0 mix-blend-normal"
                  style={{ opacity: isActive ? 0.9 : 0.65 }}
                  fallbackText={getInitials(sp.name)} 
                />
                
                {sp.isKeynote && (
                  <div className="absolute bottom-0 inset-x-0 bg-black/75 backdrop-blur-xs py-0.5 text-[8px] tracking-widest text-center text-[#C9A96E] font-sans font-black uppercase z-20">
                    Keynote
                  </div>
                )}
                
                {isActive && (
                  <span
                    className="absolute z-10 -top-1 -right-1 w-6 h-6 rounded-full border-2 animate-pulse"
                    style={{ background: "#F0DFB8", borderColor: "#131015" }}
                  />
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

function SpeakerCard({ speaker, idx }) {
  const ring = ringOf(idx);
  return (
    <motion.div
      key={speaker.name}
      initial={{ opacity: 0, x: 30, scale: 0.98 }}
      animate={{ opacity: 1, x: 0,  scale: 1 }}
      exit={{     opacity: 0, x: -30, scale: 0.98 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="absolute inset-0 p-6 sm:p-10 lg:p-12 flex flex-col justify-between overflow-y-auto"
    >
      <div>
        <p
          className="text-sm lg:text-base mb-6 sm:mb-8 font-semibold tracking-wider"
          style={{ color: "rgba(201,169,110,0.6)", fontFamily: "'DM Mono', monospace" }}
        >
          {String(idx + 1).padStart(2, "0")} / {String(SPEAKERS.length).padStart(2, "0")}
        </p>

        <div className="flex flex-row items-center gap-5 sm:gap-7 mb-6 sm:mb-10">
          <div
            className="flex-shrink-0 flex items-center justify-center overflow-hidden w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-3xl font-bold text-2xl sm:text-4xl relative"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F4EEE4",
              background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.1) 100%)",
              border: `2px solid ${ring.border}`,
              boxShadow: `0 0 35px ${ring.glow}`,
            }}
          >
            <SafeAvatar 
              src={speaker.image} 
              className="w-full h-full absolute inset-0"
              fallbackText={getInitials(speaker.name)} 
            />
            {speaker.isKeynote && (
              <div className="absolute bottom-0 inset-x-0 bg-black/70 backdrop-blur-xs py-1 text-[9px] sm:text-[10px] tracking-wider text-center text-[#C9A96E] font-sans font-bold uppercase z-10">
                Keynote
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3
              className="font-bold leading-tight text-xl sm:text-2xl lg:text-3xl mb-2 sm:mb-3 whitespace-normal break-words"
              style={{ color: "#F4EEE4", fontFamily: "'Cormorant Garamond', serif" }}
            >
              {speaker.name}
            </h3>
            <p
              className="text-sm sm:text-base font-bold tracking-wide truncate"
              style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
            >
              {speaker.flag} {speaker.location}
            </p>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          <div className="flex items-start gap-4">
            <Briefcase size={22} className="mt-1 flex-shrink-0" style={{ color: "#8a7b66" }} />
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed font-medium" style={{ color: "#E8D8C4" }}>
              {speaker.role}
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Globe2 size={22} className="mt-1 flex-shrink-0" style={{ color: "#8a7b66" }} />
            <p className="text-base sm:text-lg lg:text-[19px] leading-relaxed font-medium" style={{ color: "#A89880" }}>
              {speaker.institution}
            </p>
          </div>
        </div>
      </div>

      <div
        className="h-px mt-8"
        style={{ background: "linear-gradient(90deg, transparent, rgba(201,169,110,0.40), transparent)" }}
      />
    </motion.div>
  );
}

export default function Speakers() {
  const [curIdx, setCurIdx] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);

  const advance = useCallback(() => {
    setCurIdx((p) => (p + 1) % SPEAKERS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(advance, 3800);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, advance]);

  const handleBubbleHover = (idx) => {
    if (idx !== null) {
      setCurIdx(idx);
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  const goTo = (i) => {
    setCurIdx(i);
    setIsPaused(true);
  };
  
  const goPrev = () => goTo((curIdx - 1 + SPEAKERS.length) % SPEAKERS.length);
  const goNext = () => goTo((curIdx + 1) % SPEAKERS.length);
  const pctBar = ((curIdx + 1) / SPEAKERS.length) * 100;

  return (
    <section
      id="speakers"
      className="relative py-20 sm:py-28 lg:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden"
      style={{ background: "#131015" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(rgba(201,169,110,1) 2px, transparent 2px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] rounded-full blur-[100px] sm:blur-[140px]"
          style={{ background: "rgba(201,169,110,0.06)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full blur-[80px] sm:blur-[120px]"
          style={{ background: "rgba(184,125,90,0.05)" }}
        />
      </div>

      <div className="relative mx-auto max-w-[1550px]">
        
        <div className="mb-14 sm:mb-20 lg:mb-24 text-left">
          <p
            className="mb-4 flex items-center gap-3 text-sm sm:text-base font-bold uppercase tracking-[0.25em]"
            style={{ color: "#C9A96E", fontFamily: "'Inter', sans-serif" }}
          >
            <span className="hidden sm:inline-block h-px w-12" style={{ background: "#C9A96E" }} />
            Keynotes &amp; Invited Talks
          </p>
          <h2
            className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: "#F4EEE4",
            }}
          >
            Speakers from{" "}
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #C9A96E, #F0DFB8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              around the world
            </span>
          </h2>
          <div className="mt-5 flex items-center gap-2 text-base sm:text-lg font-medium" style={{ color: "#A89880" }}>
            <Users size={20} className="text-[#C9A96E]" />
            {SPEAKERS.length} distinguished researchers &amp; scientists
          </div>
          <div
            className="mt-6 h-px w-28"
            style={{ background: "linear-gradient(90deg, #C9A96E, transparent)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-stretch">
          
          <div
            className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-[32px] border flex-1 min-h-[440px] sm:min-h-[480px] lg:min-h-[520px]"
              style={{
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(201,169,110,0.2)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.45)",
              }}
            >
              <div
                className="h-1.5 w-full"
                style={{ background: "linear-gradient(90deg, #C9A96E, #B87D5A, #C9A96E)" }}
              />

              <div className="relative h-full w-full min-h-[400px] sm:min-h-[440px]">
                <AnimatePresence mode="wait">
                  <SpeakerCard key={curIdx} speaker={SPEAKERS[curIdx]} idx={curIdx} />
                </AnimatePresence>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.06]">
                <motion.div
                  className="h-full"
                  animate={{ width: `${pctBar}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ background: "linear-gradient(90deg, #C9A96E, #B87D5A)" }}
                />
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-5 px-1">
              <div className="flex items-center gap-4">
                {[goPrev, goNext].map((fn, j) => (
                  <button
                    key={j}
                    onClick={fn}
                    className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border transition-all duration-300 hover:scale-105 active:scale-95 bg-white/[0.03] hover:bg-white/[0.08]"
                    style={{
                      borderColor: "rgba(201,169,110,0.25)",
                      color: "#E8D8C4",
                    }}
                  >
                    {j === 0 ? <ChevronLeft size={22} /> : <ChevronRight size={22} />}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-[200px] sm:max-w-none">
                {SPEAKERS.slice(0, 8).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="rounded-full h-2 transition-all duration-300 shrink-0"
                    style={{
                      width: i === curIdx ? 24 : 8,
                      background: i === curIdx
                        ? "linear-gradient(90deg, #C9A96E, #B87D5A)"
                        : "rgba(201,169,110,0.2)",
                    }}
                  />
                ))}
                {SPEAKERS.length > 8 && (
                  <span className="text-sm tracking-wider opacity-40 px-1" style={{ color: "#C9A96E" }}>···</span>
                )}
              </div>

              <p
                className="text-sm font-bold tracking-wider"
                style={{ color: "rgba(201,169,110,0.5)", fontFamily: "'DM Mono', monospace" }}
              >
                {isPaused ? "PAUSED" : "AUTO"}
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center mt-8 lg:mt-0 lg:pl-10">
            <p
              className="text-sm font-bold uppercase tracking-widest mb-6 text-center lg:text-left"
              style={{ color: "rgba(201,169,110,0.60)", fontFamily: "'Inter', sans-serif" }}
            >
              Faculty Map &mdash; Select to view details
            </p>
            
            <BubbleCluster
              activeIdx={hoveredIdx ?? curIdx}
              onHover={handleBubbleHover}
              onClickNode={goTo}
            />
          </div>

        </div>
      </div>
    </section>
  );
}