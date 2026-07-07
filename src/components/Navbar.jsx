import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Microscope } from "lucide-react";

const NAV_LINKS = [
  { label: "Home",         href: "#home"         },
  { label: "About",        href: "#about"        },
  { label: "Dates",        href: "#dates"        },
  { label: "Speakers",     href: "#speakers"     },
  { label: "Committee",    href: "#committee"    },
  { label: "Registration", href: "#registration" },
  { label: "Venue",        href: "#venue"        },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active,     setActive]     = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids  = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const obs  = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const o  = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActive(`#${id}`); },
        { threshold: 0.35 }
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    if (window.innerWidth >= 768) setMobileOpen(false);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-400
          ${scrolled
            ? "bg-[#060d22]/92 backdrop-blur-2xl border-b shadow-2xl"
            : "bg-transparent"
          }
        `}
        style={{ borderColor: "rgba(201,169,110,0.18)", boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">

            {/* ── Logo ────────────────────────── */}
            <a href="#home" className="flex items-center gap-3 group">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl border transition-all duration-300"
                style={{
                  background: "rgba(201,169,110,0.08)",
                  borderColor: "rgba(201,169,110,0.30)",
                }}
              >
                <Microscope size={17} style={{ color: "#C9A96E" }} />
              </div>
              <div className="leading-none">
                <p
                  className="font-bold text-sm tracking-wider"
                  style={{ color: "#F4EEE4", fontFamily: "'Inter', sans-serif" }}
                >
                  ICABDAI
                </p>
                <p
                  className="text-[11px] font-semibold tracking-widest mt-0.5"
                  style={{ color: "#C9A96E", fontFamily: "'Cormorant Garamond', serif" }}
                >
                  2026
                </p>
              </div>
            </a>

            {/* ── Desktop nav ─────────────────── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-[13px] font-medium transition-colors duration-200 group"
                  style={{
                    color: active === link.href ? "#F0DFB8" : "#A89880",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                  {/* animated underline */}
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px rounded-full transition-all duration-300"
                    style={{
                      background: "linear-gradient(90deg, #C9A96E, #F0DFB8)",
                      transform: active === link.href ? "scaleX(1)" : "scaleX(0)",
                      transformOrigin: "left",
                      opacity: active === link.href ? 1 : 0,
                    }}
                  />
                  {/* hover underline */}
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    style={{ background: "rgba(201,169,110,0.5)" }}
                  />
                </a>
              ))}

              <a
                href="#registration"
                className="ml-4 px-5 py-2 rounded-lg text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #B87D5A 100%)",
                  color: "#060d22",
                  boxShadow: "0 4px 18px rgba(201,169,110,0.30)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Register
              </a>
            </nav>

            {/* ── Hamburger ───────────────────── */}
            <button
              id="navbar-mobile-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: "#F4EEE4" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "x" : "m"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="block"
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ───────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="fixed top-16 left-0 right-0 z-40 overflow-hidden border-b md:hidden"
            style={{
              background: "rgba(6,13,34,0.97)",
              backdropFilter: "blur(24px)",
              borderColor: "rgba(201,169,110,0.18)",
            }}
          >
            <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.045 }}
                  className="px-4 py-3 rounded-xl text-sm transition-colors"
                  style={{
                    color: "#A89880",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#registration"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.045 }}
                className="mt-3 px-4 py-3 rounded-xl text-sm font-semibold text-center"
                style={{
                  background: "linear-gradient(135deg, #C9A96E 0%, #B87D5A 100%)",
                  color: "#060d22",
                }}
              >
                Register Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
