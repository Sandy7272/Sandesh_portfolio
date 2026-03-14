import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const ease = [0.22, 1, 0.36, 1] as const;

export function YouTube() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[5.5rem] items-center"
        >
          {/* Left - Thumbnail */}
          <a
            href="https://youtube.com/@SandeshGadakh"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden"
            style={{ aspectRatio: "16/9", border: "1px solid var(--line)", borderRadius: "var(--r)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=900&q=80"
              alt="YouTube channel preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            {/* Play button */}
            <div
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-[1.12]"
                style={{
                  width: 62,
                  height: 62,
                  background: "var(--lime)",
                  boxShadow: "0 0 0px 0px var(--lime)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px 5px rgba(197,242,68,0.3)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0px 0px var(--lime)")}
              >
                <span style={{ fontSize: "1.5rem", color: "var(--ink)", marginLeft: 4 }}>▶</span>
              </div>
            </div>
          </a>

          {/* Right */}
          <div>
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>
              YouTube Channel
            </span>
            <h2 className="font-serif italic font-semibold mt-4 mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", lineHeight: 1, letterSpacing: "-0.02em" }}>
              Sharing the<br />
              <span style={{ color: "var(--lime)" }}>Craft</span> Publicly.
            </h2>
            <p className="font-sans mb-8" style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--muted)" }}>
              Beyond client work, I document VFX techniques, 3D workflows, and AI creative tools — showing the real process behind professional output. Breakdowns, tutorials, behind-the-scenes.
            </p>

            <div className="flex gap-8 mb-8">
              {[
                { label: "Breakdowns", prefix: "VFX" },
                { label: "Tutorials", prefix: "3D" },
                { label: "Tips", prefix: "AI" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="font-serif font-bold" style={{ fontSize: "1.8rem", color: "var(--lime)", lineHeight: 1 }}>{item.prefix}</div>
                  <div className="font-sans" style={{ fontSize: "0.68rem", color: "var(--dim)" }}>{item.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://youtube.com/@SandeshGadakh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 font-sans font-semibold text-ink transition-colors"
              style={{ fontSize: "0.8rem", background: "var(--lime)", borderRadius: "var(--r)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--lime-d)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--lime)")}
            >
              Visit Channel ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
