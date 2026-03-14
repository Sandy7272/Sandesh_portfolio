import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    if (!id) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[800] transition-all duration-500"
        style={{
          background: scrolled ? "rgba(6,6,8,0.93)" : "transparent",
          backdropFilter: scrolled ? "blur(22px)" : "none",
          borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        }}
      >
        <div className="container-main flex items-center justify-between" style={{ height: 72 }}>
          <button
            onClick={() => scrollTo("")}
            className="font-serif italic font-semibold"
            style={{ fontSize: "1.65rem", letterSpacing: "-0.01em" }}
          >
            SG<span style={{ color: "var(--lime)" }}>.</span>
          </button>

          <nav className="hidden min-[860px]:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="relative font-sans text-dim hover:text-body transition-colors group"
                style={{ fontSize: "0.72rem", fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase" }}
              >
                {link.name}
                <span
                  className="absolute bottom-0 left-0 w-full h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "var(--lime)" }}
                />
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden min-[860px]:inline-flex px-5 py-2 font-sans text-ink font-semibold transition-colors"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.05em",
              background: "var(--lime)",
              borderRadius: "var(--r)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--lime-d)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--lime)")}
          >
            Hire Me
          </button>

          <button
            className="min-[860px]:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-body"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-px bg-body"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-5 h-px bg-body"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[799] flex flex-col items-center justify-center gap-6"
            style={{ background: "rgba(6,6,8,0.97)" }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(link.href)}
                className="font-serif italic text-body hover:text-lime transition-colors"
                style={{ fontSize: "clamp(3rem, 9vw, 5.5rem)", fontWeight: 300 }}
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
