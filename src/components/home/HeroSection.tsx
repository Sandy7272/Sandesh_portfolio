import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="section-container relative z-10 w-full">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-sm md:text-base text-muted-foreground mb-8"
        >
          🙏 Namaste! I am <span className="text-foreground font-semibold">Sandesh Gadakh</span> aka <span className="font-display font-bold text-foreground">SAN</span>
        </motion.p>

        {/* Massive Typography */}
        <div className="text-center relative">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-hero text-foreground leading-[0.9]"
          >
            Creative
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex items-center justify-center gap-4 md:gap-8"
          >
            <span className="font-display text-hero-sub italic text-muted-foreground/60 font-light">Visual</span>
            <span className="font-display text-hero text-foreground">Designer</span>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-4 right-[5%] md:right-[10%] hidden md:block"
          >
            <div className="badge-float bg-primary/15 text-primary border-primary/20">
              3D Artist
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-[30%] left-[2%] md:left-[8%] hidden md:block"
          >
            <div className="badge-float bg-accent/15 text-accent border-accent/20">
              VFX Researcher
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-[20%] right-[3%] md:right-[6%] hidden md:block"
          >
            <div className="badge-float bg-primary/10 text-primary/80 border-primary/15">
              Motion Designer
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-8 md:gap-16 mt-10 md:mt-14"
        >
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl md:text-5xl font-bold text-foreground">4</span>
            <span className="text-primary font-semibold text-lg">yrs+</span>
            <span className="text-muted-foreground text-xs ml-2 hidden sm:inline">experience</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex items-baseline gap-1">
            <span className="font-display text-4xl md:text-5xl font-bold text-foreground">500</span>
            <span className="text-primary font-semibold text-lg">+</span>
            <span className="text-muted-foreground text-xs ml-2 hidden sm:inline">projects done</span>
          </div>
        </motion.div>

        {/* Services bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center mt-10 md:mt-14"
        >
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground text-center">
            3D Assets · Motion Graphics · VFX · Video-to-3D · Automation
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => document.getElementById("works-section")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-8 w-14 h-14 rounded-full border border-border flex items-center justify-center hover:bg-secondary/50 transition-colors"
      >
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.button>
    </section>
  );
}
