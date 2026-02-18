import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

export function ProjectGrid() {
  const featured = projects.slice(0, 4);
  const archive = projects.slice(4);

  return (
    <section id="works-section" className="section-container py-20 md:py-28 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-baseline justify-between mb-12"
      >
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Feat Works({String(featured.length).padStart(2, "0")})
        </h2>
      </motion.div>

      {/* Featured grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {featured.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <Link to={`/project/${project.id}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Archive */}
      {archive.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <ArrowUpRight className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Archive works</span>
          </div>
          <div className="space-y-0">
            {archive.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group flex items-center justify-between py-4 border-b border-border hover:pl-2 transition-all"
              >
                <span className="font-medium text-sm group-hover:text-primary transition-colors">{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}
