import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="section-container section-padding scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-14"
      >
        About
      </motion.h3>

      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8"
        >
          I'm a <span className="text-foreground font-semibold">Creative Technologist</span> and{" "}
          <span className="text-foreground font-semibold">Operations Manager</span> with 4+ years
          of experience in 3D production, AI-powered creative workflows, and production systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-muted-foreground leading-relaxed mb-8"
        >
          Currently at MetaShop AI, I architect scalable video-to-3D pipelines using Gaussian splatting
          and NeRF technology — transforming real-world footage into interactive 3D experiences for
          enterprises and startups alike.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {["3D Production", "AI Workflows", "Motion Graphics", "Pipeline Engineering", "Team Leadership"].map((tag) => (
            <span key={tag} className="px-4 py-2 rounded-full text-sm bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
