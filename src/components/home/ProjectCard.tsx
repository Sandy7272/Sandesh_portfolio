import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
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
  const cardScale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

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
        <div className={`relative overflow-hidden rounded-2xl ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
          {/* Image with parallax */}
          <motion.div 
            className="absolute inset-0"
            style={{ y: imageY }}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-[120%] object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          {/* Video preview indicator */}
          {project.heroVideo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
            >
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center">
                <Play className="w-6 h-6 text-foreground ml-1" />
              </div>
            </motion.div>
          )}

          {/* Content */}
          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            {/* Category badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 5 }}
              transition={{ duration: 0.3 }}
              className="mb-3"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider rounded-full glass">
                {project.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 1, y: 0 }}
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
              className={`font-bold leading-tight mb-2 ${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
            >
              {project.title}
            </motion.h3>

            {/* Description - shows on hover */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3 }}
              className="text-sm text-muted-foreground line-clamp-2 mb-4"
            >
              {project.description}
            </motion.p>

            {/* Results preview - shows on hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-wrap gap-4 mb-4"
            >
              {project.results.slice(0, 3).map((result, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-primary">{result.metric}</span>
                  <span className="text-muted-foreground ml-1">{result.value}</span>
                </div>
              ))}
            </motion.div>

            {/* View project link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <span>View case study</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Hover border glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 rounded-2xl border-2 border-primary/30 pointer-events-none"
          />
        </div>
      </Link>
    </motion.div>
  );
}