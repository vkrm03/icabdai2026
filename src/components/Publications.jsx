import { motion } from "framer-motion";
import { BookOpen, Trophy, Award } from "lucide-react";

import publication1 from "../assets/publications/1.jpeg";
import publication2 from "../assets/publications/2.jpeg";

const publications = [publication1, publication2];

const awards = [
  {
    icon: Trophy,
    title: "Best Oral Presentation Award",
    description:
      "Recognizing outstanding research and excellence in oral presentation.",
  },
  {
    icon: Award,
    title: "Best Poster Presentation Award",
    description:
      "Honoring exceptional research presented through an outstanding scientific poster.",
  },
];

export default function Publications() {
  return (
    <section
      id="publications"
      className="relative py-18 overflow-hidden"
      style={{ background: "#060d22" }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[120px] opacity-10"
        style={{ background: "#C9A96E" }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A96E]/40" />

            <BookOpen
              size={18}
              style={{ color: "#C9A96E" }}
            />

            <div className="h-px w-10 bg-[#C9A96E]/40" />
          </div>

          <p
            className="text-xs tracking-[0.3em] uppercase mb-3"
            style={{ color: "#C9A96E" }}
          >
            Research & Publications
          </p>

          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{
              color: "#F4EEE4",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Conference Publications
          </h2>

          <p
            className="mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
            style={{
              color: "#A89880",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Explore the publications and research information associated
            with ICABDAI 2026.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {publications.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="w-full"
            >
              <div
                className="w-full h-[250px] md:h-[280px] lg:h-[280px] rounded-2xl border overflow-hidden flex items-center justify-center"
                style={{
                  background: "#ffffff",
                  borderColor: "rgba(201,169,110,0.20)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
                }}
              >
                <img
                  src={image}
                  alt={`ICABDAI 2026 Publication ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-3"
              style={{ color: "#C9A96E" }}
            >
              Recognition
            </p>

            <h3
              className="text-2xl md:text-3xl font-semibold"
              style={{
                color: "#F4EEE4",
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Presentation Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {awards.map((award, index) => {
              const Icon = award.icon;

              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group relative rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(15,32,64,0.75), rgba(9,24,41,0.9))",
                    borderColor: "rgba(201,169,110,0.20)",
                    boxShadow: "0 10px 35px rgba(0,0,0,0.20)",
                  }}
                >
                  <div className="flex items-start gap-5">

                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        background: "rgba(201,169,110,0.08)",
                        borderColor: "rgba(201,169,110,0.25)",
                      }}
                    >
                      <Icon
                        size={23}
                        style={{ color: "#C9A96E" }}
                      />
                    </div>

                    <div>
                      <h4
                        className="text-lg md:text-xl font-semibold"
                        style={{
                          color: "#F4EEE4",
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {award.title}
                      </h4>

                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{
                          color: "#A89880",
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {award.description}
                      </p>
                    </div>

                  </div>

                  <div
                    className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #C9A96E, transparent)",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}