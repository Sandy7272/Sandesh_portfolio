import { motion } from "framer-motion";

const metrics = [
  { value: "50+", label: "Hotels converted to 3D" },
  { value: "150+", label: "Products digitized into 3D" },
  { value: "4+", label: "Years industry experience" },
  { value: "3×", label: "Best Employee at Byju's" },
];

export function ImpactSection() {
  return (
    <section className="section-container section-padding scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-14 text-center"
      >
        Impact Metrics
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl glass-card text-center hover:glow-primary transition-shadow duration-500"
          >
            <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-3">
              {m.value}
            </div>
            <p className="text-sm text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
