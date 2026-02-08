import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  return (
    <section id="work" className="px-6 lg:px-12 py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm uppercase tracking-[0.2em] text-primary mb-3"
            >
              Selected Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-display-md font-bold"
            >
              Case Studies
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-md"
          >
            A selection of projects showcasing video-to-3D conversion, motion graphics, and VFX work across various industries.
          </motion.p>
        </div>

        {/* Project grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* See more prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">{projects.length} projects</span> showcased above.{" "}
            <span className="text-primary">More work available upon request.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}