import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const strengths = [
  { icon: "🏗️", title: "Product Development", description: "Build AI-powered websites, custom 3D viewers with user customization, automated file tracking systems, and processing automation workflows. I ship complete working products." },
  { icon: "⚡", title: "Operations & Systems", description: "Transformed amateur pipeline to enterprise-grade. Process standardization, workflow automation (70% manual work reduction), and quality control systems that scale." },
  { icon: "🤖", title: "AI-First Execution", description: "Daily user of AI tools for automation, prototyping, and development. Built website using AI. Rapid iteration and deployment. Comfortable with constant tool adoption." },
  { icon: "👤", title: "User-Centric Design", description: "Deep understanding of user needs. UI/UX thinking. Built self-service 3D viewer tools enabling clients without technical support. Client-facing product development." },
  { icon: "🎨", title: "Full-Stack Creative", description: "3D production, motion graphics, video editing, web design. Can conceive, design, and build entire creative workflows independently end-to-end." },
  { icon: "🔄", title: "0-to-1 Builder", description: "Thrives in environments where scrappiness and adaptability drive impact. Perfect for startups. Comfortable wearing multiple hats, learning new tools overnight." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Strengths() {
  const { ref, isInView } = useReveal();

  return (
    <section id="process" ref={ref} className="section-pad" style={{ background: "var(--ink-3)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Core Strengths</span>
          </div>
          <h2 className="font-serif italic font-semibold mb-14" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            Core Strengths.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--line)" }}>
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.82, ease }}
              className="process-card group relative overflow-hidden transition-colors"
              style={{ background: "var(--ink-3)", padding: "2.8rem 2.4rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink-4)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink-3)")}
            >
              {/* Ghost number */}
              <div className="absolute top-4 right-4 font-serif italic select-none pointer-events-none" style={{ fontSize: "6rem", opacity: 0.024, lineHeight: 1, color: "var(--body)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>

              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h3 className="font-serif italic font-semibold mb-3" style={{ fontSize: "1.7rem", letterSpacing: "-0.01em" }}>{s.title}</h3>
              <p className="font-sans" style={{ fontSize: "0.82rem", fontWeight: 400, lineHeight: 1.78, color: "var(--muted)" }}>{s.description}</p>

              {/* Lime underline on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--lime)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
