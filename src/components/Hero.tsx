import { motion } from "framer-motion";

const heroLines = [
  { text: "CREATIVE", italic: false, lime: false },
  { text: "TECHNOL", italic: true, lime: true },
  { text: "OGIST.", italic: false, lime: false },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative flex flex-col justify-end overflow-hidden" style={{ minHeight: "100svh", background: "var(--ink)" }}>
      {/* Visual effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 64% 26%, rgba(197,242,68,0.048) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 10% 80%, rgba(45,232,212,0.034) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)",
            backgroundSize: "84px 84px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="container-main relative z-10" style={{ paddingBottom: "clamp(3rem, 5vw, 5rem)" }}>
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, ease }}
          className="flex items-center gap-2 mb-8"
        >
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "var(--lime)", animation: "blink 2s ease-in-out infinite" }}
          />
          <span
            className="font-sans uppercase"
            style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--lime)" }}
          >
            Available for Senior Roles · Pimpri-Chinchwad, India
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-10">
          {heroLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.36 + i * 0.14, duration: 0.9, ease }}
                className={`block font-serif font-semibold leading-[0.9] ${line.italic ? "italic" : ""}`}
                style={{
                  fontSize: "clamp(5rem, 14vw, 16rem)",
                  letterSpacing: "-0.02em",
                  color: line.lime ? "var(--lime)" : "var(--body)",
                }}
              >
                {line.text}
              </motion.span>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.94, duration: 0.82, ease }}
          className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 md:gap-16"
        >
          {/* Description */}
          <div>
            <p className="font-sans mb-6" style={{ fontSize: "clamp(0.88rem, 1.2vw, 1rem)", fontWeight: 400, lineHeight: 1.8, color: "var(--muted)" }}>
              <strong className="text-body">Sandesh Gadakh</strong> — Product Builder & Creative Technologist who
              transforms early-stage systems into <strong className="text-body">production-grade platforms</strong>.
              Built AI-powered tools, automated workflows with <strong className="text-body">70% manual work
              reduction</strong>, and earned <strong className="text-body">equity</strong> at MetaShop AI for irreplaceable
              strategic value.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 font-sans font-semibold text-ink transition-colors"
                style={{ fontSize: "0.8rem", background: "var(--lime)", borderRadius: "var(--r)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--lime-d)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--lime)")}
              >
                View Projects
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 font-sans font-semibold text-body transition-colors"
                style={{ fontSize: "0.8rem", border: "1px solid var(--line)", borderRadius: "var(--r)" }}
              >
                Let's Talk
              </button>
              <a
                href="https://youtube.com/@SandeshGadakh"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 font-sans font-semibold text-body transition-colors"
                style={{ fontSize: "0.8rem", border: "1px solid var(--line)", borderRadius: "var(--r)" }}
              >
                ▶ YouTube
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 md:justify-end md:items-end">
            {[
              { num: "5+", label: "Years Exp." },
              { num: "500+", label: "Animations" },
              { num: "154", label: "Products 3D" },
            ].map((s) => (
              <div key={s.label} className="text-right">
                <div className="font-serif font-bold text-body" style={{ fontSize: "clamp(2.5rem, 4vw, 3.8rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {s.num}
                </div>
                <div className="font-sans uppercase" style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--dim)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          className="w-px"
          style={{
            height: 40,
            background: "linear-gradient(to bottom, var(--lime), transparent)",
            animation: "scroll-pulse 2s ease-in-out infinite",
          }}
        />
        <span className="font-sans uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "var(--dim)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
