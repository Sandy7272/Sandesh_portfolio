import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const testimonials = [
  {
    quote: "Sandesh doesn't just deliver great creative work — he builds the systems that make great work repeatable. At Byju's, his ability to translate complex concepts into clear animations was exceptional. But more importantly, the template library he built meant the whole team could produce at that quality. Three Best Employee Awards in a row speak for themselves.",
    name: "Team Lead, Byju's",
    role: "3× Best Employee Award Recogniser",
  },
  {
    quote: "What Sandesh built at MetaShop AI goes far beyond his original role. He transformed our entire operation — from the 3D pipeline to the client-facing viewer to the automation systems. When he mentioned leaving, we gave him equity. That tells you everything about the value he created and how irreplaceable he became.",
    name: "Founder, MetaShop AI",
    role: "AI-Powered 3D Commerce Platform",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--ink-2)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Testimonials</span>
          </div>
          <h2 className="font-serif italic font-semibold mb-14" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            What People Say.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.82, ease }}
              className="testimonial-card transition-colors"
              style={{
                background: "var(--ink-3)",
                border: "1px solid var(--line)",
                borderRadius: "var(--r)",
                padding: "2.5rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(197,242,68,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
            >
              <div className="font-serif" style={{ fontSize: "3.2rem", fontWeight: 300, color: "var(--lime)", lineHeight: 1, marginBottom: "1rem" }}>
                "
              </div>
              <p className="font-serif italic mb-8" style={{ fontSize: "1.1rem", fontWeight: 300, lineHeight: 1.72, color: "rgba(230,225,215,0.75)" }}>
                {t.quote}
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full shrink-0"
                  style={{ background: "linear-gradient(135deg, var(--lime), var(--teal))" }}
                />
                <div>
                  <div className="font-sans font-semibold" style={{ fontSize: "0.88rem", color: "var(--body)" }}>{t.name}</div>
                  <div className="font-sans uppercase" style={{ fontSize: "0.62rem", fontWeight: 400, letterSpacing: "0.08em", color: "var(--dim)" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
