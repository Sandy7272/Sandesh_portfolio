import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 starfield opacity-40" />
      
      {/* Subtle glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Location / Time */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
        >
          India · Available Worldwide · {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </motion.p>

        {/* Main headline — huge display type */}
        <motion.h1
          style={{ y: titleY }}
          className="relative mb-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.9] tracking-tighter"
          >
            VFX
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="block text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.9] tracking-tighter"
          >
            <span className="text-gradient">ARTIST</span>
          </motion.span>
        </motion.h1>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl font-medium tracking-wide">
            Sandesh <span className="text-primary">"Sandy"</span> Gadakh
          </p>
          <p className="text-sm text-muted-foreground mt-2 max-w-xl mx-auto leading-relaxed">
            I craft cinematic VFX & motion graphics — and turn product video into interactive 3D assets. 
            Shipped <span className="text-foreground font-medium">150+ 3D models</span>, built hotel walkthroughs, 
            and scaled a cloud processing pipeline at MetaShop AI.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="btn-glow bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8 py-6 text-sm tracking-wide uppercase"
            onClick={scrollToWork}
          >
            <Play className="mr-2 h-4 w-4" />
            Explore Work
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="glass hover:bg-secondary/50 transition-colors px-8 py-6 text-sm tracking-wide uppercase"
            asChild
          >
            <Link to="/resume">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Link>
          </Button>
        </motion.div>

        {/* Quick stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 text-sm"
        >
          {[
            { value: "6+", label: "Years" },
            { value: "154", label: "3D Models" },
            { value: "3×", label: "Best Employee" },
            { value: "3-4/day", label: "Output" }
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToWork}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
}
