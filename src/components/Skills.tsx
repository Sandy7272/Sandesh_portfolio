import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const columns = [
  {
    label: "Product & Automation",
    skills: ["AI-Powered Web Development", "Workflow Automation", "File Tracking Systems", "Process Standardization", "Product Lifecycle Management"],
  },
  {
    label: "3D & VFX",
    skills: ["Gaussian Splatting", "NeRF / Nerfstudio", "3D Asset Creation", "VFX Compositing", "Product Visualization"],
  },
  {
    label: "Motion & Design",
    skills: ["Motion Graphics", "After Effects", "UI/UX Design", "Brand Animation", "Educational Animation"],
  },
  {
    label: "Tech Stack",
    skills: ["Blender", "Unreal Engine", "Python (learning)", "Three.js / WebGL", "Figma", "AI Tools (daily user)"],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Skills() {
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
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Skills</span>
          </div>
          <h2 className="font-serif italic font-semibold mb-14" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
            Capabilities.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "var(--line)" }}>
          {columns.map((col) => (
            <div key={col.label} style={{ background: "var(--ink-2)", padding: "2.2rem 2rem" }}>
              <div
                className="font-mono uppercase pb-3 mb-4"
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "var(--lime)",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {col.label}
              </div>
              <div className="space-y-0">
                {col.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center justify-between py-2 transition-colors cursor-default"
                    onMouseEnter={(e) => {
                      (e.currentTarget.querySelector(".skill-text") as HTMLElement).style.color = "var(--body)";
                      (e.currentTarget.querySelector(".skill-dot") as HTMLElement).style.background = "var(--lime)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget.querySelector(".skill-text") as HTMLElement).style.color = "var(--muted)";
                      (e.currentTarget.querySelector(".skill-dot") as HTMLElement).style.background = "rgba(255,255,255,0.14)";
                    }}
                  >
                    <span className="skill-text font-sans transition-colors" style={{ fontSize: "0.84rem", color: "var(--muted)" }}>
                      {skill}
                    </span>
                    <span className="skill-dot w-[5px] h-[5px] rounded-full shrink-0 transition-colors" style={{ background: "rgba(255,255,255,0.14)" }} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
