import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  "3D Asset Creation",
  "Motion Graphics",
  "Video-to-3D Pipeline",
  "Unreal Engine",
  "Automation Systems",
  "UI Motion Design",
];

export function ServicesSection() {
  return (
    <section className="section-container py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12"
      >
        <div className="flex items-center gap-3">
          <ArrowUpRight className="w-5 h-5 text-primary" />
          <span className="text-sm text-muted-foreground">Things I can help you with.</span>
        </div>
      </motion.div>

      <div className="overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {services.map((service, i) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors cursor-default"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
