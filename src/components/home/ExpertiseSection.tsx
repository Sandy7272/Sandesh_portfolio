import { motion } from "framer-motion";
import { Cpu, Box, Zap, Film, Settings, Gamepad2, Video, TrendingUp } from "lucide-react";

const skills = [
  { icon: Settings, label: "Operations Management" },
  { icon: Box, label: "3D Production" },
  { icon: Cpu, label: "AI-driven visual workflows" },
  { icon: Film, label: "Motion Graphics" },
  { icon: Zap, label: "Pipeline automation" },
  { icon: Gamepad2, label: "Unreal Engine environments" },
  { icon: Video, label: "Video-to-3D systems" },
  { icon: TrendingUp, label: "Workflow optimization" },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-container section-padding scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-14"
      >
        Expertise
      </motion.h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="group p-6 rounded-2xl glass-card hover:border-primary/20 hover:glow-primary transition-all duration-500 cursor-default"
          >
            <skill.icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-semibold">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
