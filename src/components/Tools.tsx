import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const pills = [
  "Blender", "Nerfstudio", "After Effects", "Unreal Engine", "Cinema 4D",
  "Python", "Three.js", "WebGL", "DaVinci Resolve", "Figma", "Lottie / Rive",
  "Premiere Pro", "Nuke", "Gaussian Splatting", "AI Tools", "Photoshop",
  "Illustrator", "Substance Painter", "3ds Max", "Maya",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Tools() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="container-main text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Tech Stack</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.82, ease }}
          className="flex flex-wrap justify-center gap-[0.65rem] mt-8 mx-auto"
          style={{ maxWidth: 940 }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              className="pill relative overflow-hidden font-sans uppercase cursor-default transition-colors"
              style={{
                fontSize: "0.67rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                padding: "0.5rem 1.2rem",
                border: "1px solid var(--line)",
                borderRadius: "99px",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--lime)";
                e.currentTarget.style.background = "var(--lime)";
                e.currentTarget.style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line)";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              {pill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
