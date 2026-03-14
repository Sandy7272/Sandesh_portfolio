import { useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const contactLinks = [
  { label: "Email", value: "sandesh.gadakh@gmail.com", href: "mailto:sandesh.gadakh@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/sandesh-gadakh-41863b210", href: "https://linkedin.com/in/sandesh-gadakh-41863b210", external: true },
  { label: "YouTube", value: "@SandeshGadakh", href: "https://youtube.com/@SandeshGadakh", external: true },
];

export function Contact() {
  const { ref, isInView } = useReveal();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" ref={ref} className="section-pad" style={{ background: "var(--ink-2)" }}>
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[6.5rem]"
        >
          {/* Left */}
          <div>
            <h2 className="font-serif italic font-semibold mb-8" style={{ fontSize: "clamp(3.5rem, 7vw, 8.5rem)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              Let's build<br />something<br />
              <span className="not-italic" style={{ color: "var(--lime)" }}>great.</span>
            </h2>

            <p className="font-sans mb-10" style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--muted)" }}>
              Available for product-building roles, creative operations positions, and strategic freelance projects. If you need someone who can identify a problem and build the solution — let's talk.
            </p>

            <div className="flex flex-col gap-[0.85rem]">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="contact-link group relative overflow-hidden block transition-colors"
                  style={{
                    padding: "1rem 1.4rem",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--lime)";
                    e.currentTarget.style.borderColor = "var(--lime)";
                    (e.currentTarget.querySelector(".cl-label") as HTMLElement).style.color = "rgba(6,6,8,0.5)";
                    (e.currentTarget.querySelector(".cl-value") as HTMLElement).style.color = "var(--ink)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "var(--line)";
                    (e.currentTarget.querySelector(".cl-label") as HTMLElement).style.color = "var(--dim)";
                    (e.currentTarget.querySelector(".cl-value") as HTMLElement).style.color = "var(--body)";
                  }}
                >
                  <div className="cl-label font-mono uppercase transition-colors" style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--dim)", marginBottom: 2 }}>
                    {link.label}
                  </div>
                  <div className="cl-value font-sans font-semibold transition-colors" style={{ fontSize: "0.88rem", color: "var(--body)" }}>
                    {link.value}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <span className="font-sans uppercase block mb-6" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>
              Send a Message
            </span>

            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: "name", label: "Your Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "subject", label: "Subject", type: "text", placeholder: "Product role / Freelance project / Collaboration" },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="font-sans block mb-2" style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--muted)" }}>
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full font-sans outline-none transition-colors focus:border-lime"
                    style={{
                      background: "var(--ink-3)",
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r)",
                      padding: "0.8rem 1rem",
                      fontSize: "0.85rem",
                      color: "var(--body)",
                    }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="font-sans block mb-2" style={{ fontSize: "0.72rem", fontWeight: 500, color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full font-sans outline-none resize-y transition-colors focus:border-lime"
                  style={{
                    background: "var(--ink-3)",
                    border: "1px solid var(--line)",
                    borderRadius: "var(--r)",
                    padding: "0.8rem 1rem",
                    fontSize: "0.85rem",
                    color: "var(--body)",
                    minHeight: 112,
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full font-serif italic font-semibold transition-colors"
                style={{
                  fontSize: "1.35rem",
                  padding: "1rem",
                  background: sent ? "var(--teal)" : "var(--lime)",
                  color: "var(--ink)",
                  borderRadius: "var(--r)",
                  border: "none",
                }}
              >
                {sent ? "Message Sent ✓" : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
