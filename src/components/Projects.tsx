import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { projects, type Project } from "../data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const cs = project.caseStudy!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[900] overflow-y-auto"
      style={{ background: "rgba(6,6,8,0.92)", backdropFilter: "blur(10px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 22 }}
        transition={{ duration: 0.5, ease }}
        className="max-w-[900px] mx-auto my-12 px-6"
      >
        <button
          onClick={onClose}
          className="fixed top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center text-body hover:text-lime transition-colors"
          style={{ border: "1px solid var(--line)", background: "var(--ink-2)" }}
          aria-label="Close case study"
        >
          ✕
        </button>

        {/* Cover */}
        <div
          className="w-full mb-8 overflow-hidden"
          style={{ height: 320, borderRadius: "var(--r)" }}
        >
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ filter: "brightness(0.82)" }} />
        </div>

        {/* Category */}
        <span className="font-sans uppercase" style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--lime)" }}>
          {project.category}
        </span>
        <h2 className="font-serif italic font-semibold mt-2 mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.01em" }}>
          {project.title}
        </h2>

        {/* Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pb-10" style={{ borderBottom: "1px solid var(--line)" }}>
          {[
            { label: "Client", value: cs.client },
            { label: "Year", value: cs.year },
            { label: "Role", value: cs.role },
            { label: "Duration", value: cs.duration },
          ].map((m) => (
            <div key={m.label}>
              <div className="font-mono uppercase mb-1" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.12em", color: "var(--dim)" }}>{m.label}</div>
              <div className="font-sans" style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--body)" }}>{m.value}</div>
            </div>
          ))}
        </div>

        {/* Challenge */}
        <h3 className="font-serif italic font-semibold mb-3" style={{ fontSize: "1.6rem" }}>Challenge</h3>
        <p className="font-sans mb-10" style={{ fontSize: "0.88rem", lineHeight: 1.78, color: "var(--muted)" }}>{cs.challenge}</p>

        {/* Solution */}
        <h3 className="font-serif italic font-semibold mb-3" style={{ fontSize: "1.6rem" }}>Solution</h3>
        <p className="font-sans mb-10" style={{ fontSize: "0.88rem", lineHeight: 1.78, color: "var(--muted)" }}>{cs.solution}</p>

        {/* Process */}
        <h3 className="font-serif italic font-semibold mb-4" style={{ fontSize: "1.6rem" }}>Process</h3>
        <div className="space-y-3 mb-10">
          {cs.process.map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="font-serif italic font-semibold shrink-0" style={{ fontSize: "1.1rem", color: "var(--lime)", width: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans" style={{ fontSize: "0.84rem", lineHeight: 1.7, color: "var(--muted)" }}>{step}</span>
            </div>
          ))}
        </div>

        {/* Results */}
        <h3 className="font-serif italic font-semibold mb-4" style={{ fontSize: "1.6rem" }}>Results</h3>
        <div className="grid grid-cols-3 gap-4 mb-10">
          {cs.results.map((r) => (
            <div key={r.label} className="text-center" style={{ padding: "1.5rem 1rem", border: "1px solid var(--line)", borderRadius: "var(--r)" }}>
              <div className="font-serif font-bold" style={{ fontSize: "2.2rem", color: "var(--lime)", lineHeight: 1 }}>{r.value}</div>
              <div className="font-sans uppercase mt-2" style={{ fontSize: "0.6rem", fontWeight: 500, letterSpacing: "0.1em", color: "var(--muted)" }}>{r.label}</div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 pb-12">
          {cs.tools.map((tool) => (
            <span
              key={tool}
              className="font-sans uppercase"
              style={{
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.07em",
                padding: "0.4rem 1rem",
                border: "1px solid var(--line)",
                borderRadius: "99px",
                color: "var(--muted)",
              }}
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isInView } = useReveal();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleClick = (project: Project) => {
    if (project.externalLink) {
      window.open(project.externalLink, "_blank", "noopener,noreferrer");
    } else if (project.caseStudy) {
      setActiveProject(project);
    }
  };

  return (
    <>
      <section id="projects" ref={ref} className="section-pad" style={{ background: "var(--ink-2)" }}>
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.82, ease }}
            className="flex items-baseline justify-between mb-12"
          >
            <h2 className="font-serif italic font-semibold" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
              Featured Projects.
            </h2>
          </motion.div>
        </div>

        {/* Project grid */}
        <div className="container-main">
          <div
            className="grid gap-px"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "450px 320px",
              background: "var(--line)",
            }}
          >
            {projects.map((project, i) => {
              let gridArea: string;
              if (i === 0) gridArea = "1 / 1 / 2 / 8";
              else if (i === 1) gridArea = "1 / 8 / 2 / 13";
              else if (i === 2) gridArea = "2 / 1 / 3 / 5";
              else if (i === 3) gridArea = "2 / 5 / 3 / 9";
              else gridArea = "2 / 9 / 3 / 13";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.08, duration: 0.82, ease }}
                  className="project-card group relative overflow-hidden cursor-pointer"
                  style={{ gridArea, background: "var(--ink-3)" }}
                  onClick={() => handleClick(project)}
                >
                  {/* Background image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.06]"
                    style={{ filter: "brightness(0.25)" }}
                    loading="lazy"
                    onMouseEnter={(e) => (e.currentTarget.style.filter = "brightness(0.4)")}
                    onMouseLeave={(e) => (e.currentTarget.style.filter = "brightness(0.25)")}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-[2]">
                    <span className="font-sans uppercase" style={{ fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.14em", color: "var(--lime)" }}>
                      {project.category}
                    </span>
                    <h3
                      className="font-serif italic font-semibold mt-2"
                      style={{ fontSize: i === 0 ? "clamp(1.9rem, 3vw, 3.1rem)" : "1.9rem", lineHeight: 1.1 }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="font-sans mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0"
                      style={{ fontSize: "0.8rem", lineHeight: 1.6, color: "var(--muted)", maxWidth: 400 }}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-sans uppercase" style={{ fontSize: "0.58rem", fontWeight: 500, letterSpacing: "0.06em", padding: "0.25rem 0.6rem", border: "1px solid var(--line)", borderRadius: "99px", color: "var(--dim)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-block mt-3 font-sans font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0"
                      style={{ fontSize: "0.72rem", color: "var(--lime)" }}
                    >
                      {project.externalLink ? "View ↗" : "View Case Study →"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject?.caseStudy && (
          <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
