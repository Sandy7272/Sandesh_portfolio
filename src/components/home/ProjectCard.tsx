import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block relative overflow-hidden rounded-lg bg-secondary/50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-[4/3] overflow-hidden">
          <motion.img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover img-zoom"
            animate={{ scale: isHovered ? 1.08 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        {/* Content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="text-background">
            <span className="text-xs uppercase tracking-widest text-background/70">
              {project.category}
            </span>
            <h3 className="text-xl font-semibold mt-2">{project.shortTitle}</h3>
            <p className="text-sm text-background/80 mt-2 line-clamp-2">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* Arrow indicator */}
        <motion.div
          className="absolute top-4 right-4 p-2 rounded-full bg-background/10 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowUpRight className="w-5 h-5 text-background" />
        </motion.div>

        {/* Default state - subtle info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            {project.category}
          </span>
          <h3 className="text-lg font-medium mt-1">{project.shortTitle}</h3>
        </motion.div>
      </Link>
    </motion.div>
  );
}
