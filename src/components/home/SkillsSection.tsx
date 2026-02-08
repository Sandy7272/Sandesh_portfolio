import { motion } from "framer-motion";
import { skills, experience, awards } from "@/data/projects";

export function SkillsSection() {
  return (
    <section className="px-6 lg:px-12 py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-primary mb-3 block">
            Expertise
          </span>
          <h2 className="text-display-md font-bold">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills with bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">
                      {skill.name}
                      {skill.note && (
                        <span className="ml-2 text-xs text-primary px-2 py-0.5 bg-primary/10 rounded-full">
                          {skill.note}
                        </span>
                      )}
                    </span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-8">Tools & Software</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((tool, index) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-10 mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.soft.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credibility badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-16 border-t border-border"
        >
          <h3 className="text-lg font-semibold mb-8 text-center">Worked With</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="text-xl font-bold tracking-tight text-muted-foreground"
              >
                {exp.company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}