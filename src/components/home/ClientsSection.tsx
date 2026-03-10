import { motion } from "framer-motion";

const clients = [
  "MetaShop AI",
  "L&T Realty",
  "Kesari Weddings",
  "Autologue",
  "Italica",
  "Byju's",
];

export function ClientsSection() {
  return (
    <section id="clients" className="section-container section-padding scroll-mt-20">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground text-center mb-12"
      >
        Trusted by startups and enterprises for scalable 3D visualization systems.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {clients.map((client, i) => (
          <motion.div
            key={client}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center justify-center p-6 rounded-2xl glass-card hover:border-primary/20 transition-colors group"
          >
            <span className="font-display font-bold text-sm text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {client}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
