import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const chips = [
  "Product Development", "Workflow Automation", "AI-First Execution",
  "3D Production", "Motion Graphics", "Pipeline Engineering",
  "Team Leadership", "User-Centric Design", "Full-Stack Creative",
];

const stats = [
  { num: "5+", label: "Years of Industry Experience" },
  { num: "500+", label: "Educational 3D Animations at Byju's" },
  { num: "70%", label: "Manual Work Reduction via Automation" },
  { num: "12mo", label: "Amateur → Enterprise-Grade Pipeline" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function About() {
  const { ref, isInView } = useReveal();

  return (
    <section id="about" ref={ref} className="section-pad" style={{ background: "var(--ink-2)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-[6.5rem]"
        >
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
              <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>
                About
              </span>
            </div>

            <h2 className="font-serif italic font-semibold mb-8" style={{ fontSize: "clamp(2.8rem, 5.5vw, 6.4rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              I build systems<br />that scale.
            </h2>

            <div className="space-y-5 mb-8" style={{ color: "var(--muted)" }}>
              <p className="font-sans" style={{ fontSize: "0.92rem", lineHeight: 1.78 }}>
                Sandesh Gadakh is a Product Builder and Creative Operations Lead with 5+ years of expertise turning early-stage systems into production-grade platforms. From automation infrastructure to AI-powered client-facing products — I identify bottlenecks and ship solutions.
              </p>
              <p className="font-sans" style={{ fontSize: "0.92rem", lineHeight: 1.78 }}>
                At MetaShop AI, I evolved from 3D artist to the company's core product builder — transforming an amateur pipeline into an enterprise-quality system, building a custom 3D viewer with user customization, and developing AI-powered automation tools that reduced manual operations by 70%. The founder awarded me equity upon my resignation attempt, recognizing irreplaceable strategic value.
              </p>
              <p className="font-sans" style={{ fontSize: "0.92rem", lineHeight: 1.78 }}>
                Previously at Byju's, I created 500+ educational animations, won Best Employee 3 consecutive years, and built reusable systems that improved team output by 40%.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="chip font-sans uppercase"
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 500,
                    letterSpacing: "0.08em",
                    padding: "0.45rem 1rem",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r)",
                    color: "var(--muted)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Stats */}
          <div className="flex flex-col gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-card"
                style={{
                  background: "var(--ink)",
                  borderLeft: "2px solid var(--lime)",
                  padding: "1.7rem 2rem",
                }}
              >
                <div className="font-serif font-bold" style={{ fontSize: "3.2rem", lineHeight: 1, color: "var(--lime)" }}>
                  {s.num}
                </div>
                <div className="font-sans uppercase mt-1" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
