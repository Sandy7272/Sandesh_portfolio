import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { experience as jobs } from "../data/experience";

const ease = [0.22, 1, 0.36, 1] as const;

export function Experience() {
  const { ref, isInView } = useReveal();

  return (
    <section id="experience" ref={ref} className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>
              Experience
            </span>
          </div>

          <h2 className="font-serif italic font-semibold mb-16" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            Professional Journey.
          </h2>
        </motion.div>

        <div className="space-y-0">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.82, ease }}
              className="group relative grid grid-cols-1 md:grid-cols-[210px_1fr] gap-4 md:gap-[4.5rem] py-10"
              style={{ borderBottom: "1px solid var(--line)" }}
            >
              {/* Hover line */}
              <div
                className="absolute top-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ background: "var(--lime)" }}
              />

              {/* Left */}
              <div>
                <div className="font-sans uppercase mb-2" style={{ fontSize: "0.65rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--dim)" }}>
                  {job.period}
                </div>
                <div className="font-serif italic font-semibold" style={{ fontSize: "2.1rem", color: "var(--body)" }}>
                  {job.company}
                </div>
                <div className="font-sans mt-1" style={{ fontSize: "0.65rem", color: "var(--dim)" }}>
                  {job.location}
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="font-sans font-semibold mb-4" style={{ fontSize: "0.88rem", color: "rgba(230,225,215,0.6)" }}>
                  {job.role}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                  {job.bullets.map((bullet) => (
                    <div key={bullet} className="flex gap-2 font-sans" style={{ fontSize: "0.8rem", fontWeight: 400, color: "var(--muted)" }}>
                      <span style={{ color: "var(--lime)", flexShrink: 0 }}>→</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {job.badge && (
                  <span
                    className="inline-block font-sans uppercase"
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      padding: "0.4rem 0.9rem",
                      border: "1px solid var(--lime)",
                      background: "var(--lime-lo)",
                      color: "var(--lime)",
                      borderRadius: "var(--r)",
                    }}
                  >
                    {job.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
