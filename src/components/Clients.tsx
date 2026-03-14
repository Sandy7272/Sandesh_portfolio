import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const clients = ["MetaShop AI", "Byju's", "Kesari Weddings", "Italica", "L&T Realty", "Global Studio"];

export function Clients() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} style={{ background: "var(--ink-2)", padding: "clamp(4rem, 7vw, 6rem) var(--g)" }}>
      <div className="max-w-main mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center mb-8 font-sans uppercase"
          style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.2em", color: "var(--dim)" }}
        >
          Trusted by forward-thinking brands
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center"
          style={{ border: "1px solid var(--line)" }}
        >
          {clients.map((name) => (
            <div
              key={name}
              className="client-item flex items-center justify-center transition-colors"
              style={{
                padding: "1.9rem 3rem",
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--ink-3)";
                (e.currentTarget.querySelector("span") as HTMLElement).style.color = "var(--body)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                (e.currentTarget.querySelector("span") as HTMLElement).style.color = "var(--muted)";
              }}
            >
              <span
                className="font-serif italic font-semibold transition-colors"
                style={{ fontSize: "1.4rem", color: "var(--muted)" }}
              >
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
