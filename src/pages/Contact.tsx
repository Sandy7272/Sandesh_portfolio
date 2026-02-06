import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Twitter, Send, MapPin, Clock } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "Email", href: "mailto:sandeesh@example.com", icon: Mail, label: "sandeesh@example.com" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, label: "/in/sandeeshgadakh" },
  { name: "GitHub", href: "https://github.com", icon: Github, label: "@sandeeshgadakh" },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter, label: "@sandeeshgadakh" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <PageTransition>
      <Navigation />
      <main className="pt-32">
        {/* Hero */}
        <section className="px-6 lg:px-12 pb-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                Let's work together
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it. Drop me a message and let's create something extraordinary.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-6 lg:px-12 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Project inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-2 space-y-8"
              >
                {/* Quick Info */}
                <div className="p-6 bg-secondary/50 rounded-lg">
                  <h3 className="font-semibold mb-4">Quick Info</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin size={18} className="text-primary" />
                      <span>Available for remote work worldwide</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Clock size={18} className="text-primary" />
                      <span>Response within 24-48 hours</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold mb-4">Connect</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group"
                      >
                        <div className="p-2 bg-background rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <link.icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{link.name}</p>
                          <p className="text-xs text-muted-foreground">{link.label}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Currently Available</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to new projects, collaborations, and full-time opportunities.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  );
};

export default Contact;
