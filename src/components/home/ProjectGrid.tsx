import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="section-container section-padding scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-baseline justify-between mb-14"
      >
        <h2 className="font-display text-display-lg">Selected Projects</h2>
        <span className="text-sm text-muted-foreground hidden sm:block">{String(featured.length).padStart(2, "0")} projects</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link to={`/project/${project.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[16/9] mb-5 glass-card">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tools.slice(0, 3).map((tool) => (
                  <span key={tool} className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tool}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
