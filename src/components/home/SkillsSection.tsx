import { motion } from "framer-motion";

const techStack = {
  "3D & VFX": ["Blender", "Unreal Engine", "Cinema 4D", "Nerfstudio"],
  "Motion & Design": ["After Effects", "Premiere Pro", "Figma", "DaVinci Resolve"],
  "Engineering": ["Python", "Three.js", "WebGL", "Cloud Processing"],
  "Workflow": ["Lottie", "Rive", "Git", "Notion"],
};

export function SkillsSection() {
  return (
    <section id="skills" className="section-container py-20 md:py-28 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-12"
      >
        Tech Stack
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {Object.entries(techStack).map(([category, items], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-primary/70 mb-5">{category}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item} className="text-sm text-foreground/70 hover:text-foreground transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
