import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "gadakhsandesh@gmail.com", href: "mailto:gadakhsandesh@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91-7447337272", href: "tel:+917447337272" },
  { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Sandy7272" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-container section-padding scroll-mt-20">
      <div className="text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6"
        >
          Let's Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-display-xl mb-4"
        >
          Ready to build
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-display-xl text-gradient"
        >
          something great?
        </motion.h2>
      </div>

      {/* Contact cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-10"
      >
        {contactInfo.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl glass-card hover:border-primary/20 transition-colors text-center"
          >
            <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium group-hover:text-primary transition-colors">{item.value}</p>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-4"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all"
            aria-label={link.label}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </motion.div>
    </section>
  );
}
