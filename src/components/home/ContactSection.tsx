import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Youtube, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { icon: Mail, label: "Email", detail: "sandesh@example.com", href: "mailto:sandesh@example.com" },
  { icon: Linkedin, label: "LinkedIn", detail: "@sandeshgadakh", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", detail: "@Sandy7272", href: "https://github.com/Sandy7272" },
  { icon: Youtube, label: "YouTube", detail: "@SandeshGadakh", href: "https://youtube.com/@SandeshGadakh" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-container py-20 md:py-32 scroll-mt-20">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6"
        >
          Need a creative technologist?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-display-xl mb-4"
        >
          Let's work
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-display-xl text-gradient"
        >
          together.
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-16"
      >
        <a
          href="mailto:sandesh@example.com"
          className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Message
        </a>
        <a
          href="mailto:sandesh@example.com"
          className="px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-sm hover:bg-secondary/50 transition-colors"
        >
          Discuss project
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
      >
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 p-4 rounded-2xl glass-card hover:border-primary/20 transition-colors"
          >
            <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold group-hover:text-primary transition-colors">{link.label}</p>
              <p className="text-xs text-muted-foreground truncate">{link.detail}</p>
            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
