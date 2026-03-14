import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { research } from "../data/research";

const ease = [0.22, 1, 0.36, 1] as const;

const statusColors: Record<string, { dot: string; pulse: boolean }> = {
  active: { dot: "var(--lime)", pulse: true },
  complete: { dot: "var(--teal)", pulse: false },
  ongoing: { dot: "var(--coral)", pulse: false },
};

export function Research() {
  const { ref, isInView } = useReveal();

  return (
    <section id="research" ref={ref} className="section-pad" style={{ background: "var(--ink-2)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Research</span>
          </div>
          <h2 className="font-serif italic font-semibold mb-14" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            AI Research & Experiments.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {research.map((card, i) => {
            const sc = statusColors[card.status];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.82, ease }}
                className="research-card group relative transition-all duration-300"
                style={{
                  background: "var(--ink-3)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--r)",
                  padding: "2rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(197,242,68,0.22)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  (e.currentTarget.querySelector(".top-glow") as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--line)";
                  e.currentTarget.style.transform = "translateY(0)";
                  (e.currentTarget.querySelector(".top-glow") as HTMLElement).style.opacity = "0";
                }}
              >
                {/* Top glow */}
                <div
                  className="top-glow absolute top-0 left-0 right-0 h-px transition-opacity"
                  style={{
                    opacity: 0,
                    background: "linear-gradient(90deg, transparent, var(--lime), transparent)",
                  }}
                />

                <span className="font-mono uppercase" style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.12em", color: "var(--lime)" }}>
                  {card.tag}
                </span>
                <h3 className="font-serif italic font-semibold mt-3 mb-3" style={{ fontSize: "1.55rem", letterSpacing: "-0.01em" }}>
                  {card.title}
                </h3>
                <p className="font-sans mb-5" style={{ fontSize: "0.8rem", lineHeight: 1.8, color: "var(--muted)" }}>
                  {card.description}
                </p>

                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: sc.dot,
                      animation: sc.pulse ? "blink 2s ease-in-out infinite" : "none",
                    }}
                  />
                  <span className="font-mono uppercase" style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.08em", color: "var(--dim)" }}>
                    {card.statusLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
