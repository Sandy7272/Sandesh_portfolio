export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "var(--ink)", borderTop: "1px solid var(--line)" }}>
      <div className="container-main flex flex-wrap items-center justify-between gap-4" style={{ padding: "1.8rem 0" }}>
        <button onClick={scrollToTop} className="font-serif italic font-semibold" style={{ fontSize: "1.45rem", color: "var(--muted)" }}>
          SG<span style={{ color: "var(--lime)" }}>.</span>
        </button>

        <span className="font-sans" style={{ fontSize: "0.62rem", color: "var(--dim)" }}>
          © 2025 Sandesh Gadakh · Pimpri-Chinchwad, India
        </span>

        <div className="flex items-center gap-6">
          {[
            { name: "YouTube", href: "https://youtube.com/@SandeshGadakh" },
            { name: "LinkedIn", href: "https://linkedin.com/in/sandesh-gadakh-41863b210" },
            { name: "Email", href: "mailto:sandesh.gadakh@gmail.com" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="font-sans uppercase transition-colors hover:text-lime"
              style={{ fontSize: "0.65rem", fontWeight: 500, color: "var(--dim)" }}
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={scrollToTop}
            className="flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              width: 38,
              height: 38,
              border: "1px solid var(--line)",
              color: "var(--dim)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--lime)";
              e.currentTarget.style.color = "var(--lime)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--line)";
              e.currentTarget.style.color = "var(--dim)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
