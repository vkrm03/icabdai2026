import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

import publication1 from "../assets/publications/1.jpeg";
import publication2 from "../assets/publications/2.jpeg";

const publications = [publication1, publication2];

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

      </div>
    </section>
  );
}