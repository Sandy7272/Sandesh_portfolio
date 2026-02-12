import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.97, 1, 1, 0.97]);

  const isLarge = index === 0 || index === 3;

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: cardOpacity, scale: cardScale }}
      className={`${isLarge ? 'md:col-span-2' : ''}`}
    >
      <Link 
        to={`/project/${project.id}`}
        className="group block relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`relative overflow-hidden rounded-2xl border border-border/50 ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          {/* Image with parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-[120%] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
          </motion.div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Category */}
            <motion.span
              initial={{ opacity: 0.6 }}
              animate={{ opacity: isHovered ? 1 : 0.6 }}
              className="inline-block self-start px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] rounded-full border border-foreground/20 mb-3"
            >
              {project.category}
            </motion.span>

            {/* Title */}
            <motion.h3
              animate={{ y: isHovered ? -4 : 0 }}
              transition={{ duration: 0.3 }}
              className={`font-bold leading-tight mb-2 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
            >
              {project.title}
            </motion.h3>

            {/* Description on hover */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground line-clamp-2 mb-4 max-w-lg"
            >
              {project.description}
            </motion.p>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex gap-6 mb-4"
            >
              {project.results.slice(0, 3).map((result, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-primary">{result.metric}</span>
                  <span className="text-muted-foreground ml-1.5">{result.value}</span>
                </div>
              ))}
            </motion.div>

            {/* View link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <span>View case study</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
