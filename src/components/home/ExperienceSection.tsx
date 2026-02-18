import { motion } from "framer-motion";
import { experience } from "@/data/projects";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-container py-20 md:py-28 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-12"
      >
        Experience
      </motion.h3>

      <div className="space-y-0">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="py-8 border-b border-border group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8 mb-4">
              <div>
                <h4 className="font-display text-display-md">{exp.company}</h4>
                <p className="text-muted-foreground text-sm mt-1">{exp.role}</p>
              </div>
              <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
              {exp.highlights.map((h, j) => (
                <li key={j} className="text-sm text-foreground/60 flex items-start gap-2">
                  <span className="mt-2 block w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
