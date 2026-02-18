import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

const processSteps = [
  { num: "01", title: "Research", desc: "Technical feasibility / Reference gathering" },
  { num: "02", title: "Pipeline", desc: "Workflow design / Tool selection" },
  { num: "03", title: "Create", desc: "3D modeling / VFX compositing" },
  { num: "04", title: "Deliver", desc: "Quality control / Optimized output" },
];

export function AboutSection() {
  return (
    <section id="about-process-section" className="section-container py-20 md:py-28 scroll-mt-20">
      {/* About text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mb-16"
      >
        <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
          A passionate <span className="italic text-primary">3D artist & VFX researcher</span> with a knack for building{" "}
          <span className="italic text-primary">scalable production systems</span>. With 4+ years of expertise in
          translating real-world footage into interactive 3D experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mb-16"
      >
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Download className="w-4 h-4" />
          Download my CV 📃
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="max-w-3xl mb-20"
      >
        <p className="text-lg md:text-xl leading-relaxed text-foreground/70">
          Driven by a systems-first mindset and a passion for{" "}
          <span className="italic text-foreground/90">automation</span>, I believe in the power of technology to scale creative output.
          My approach is rooted in <span className="italic text-foreground/90">research</span>,{" "}
          <span className="italic text-foreground/90">meticulous attention to quality</span>, and a{" "}
          <span className="italic text-foreground/90">commitment to continuous learning</span>.
        </p>
      </motion.div>

      {/* Process */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-10">My Process</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl glass-card group hover:border-primary/20 transition-colors"
            >
              <span className="text-3xl font-display font-bold text-primary/60 mb-3 block">{step.num}</span>
              <h4 className="font-display text-xl font-bold mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
