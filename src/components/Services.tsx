import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { services } from "../data/services";

const ease = [0.22, 1, 0.36, 1] as const;

export function Services() {
  const { ref, isInView } = useReveal();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragState.current.startX = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    dragState.current.scrollLeft = trackRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.5;
  };

  const onEnd = () => setIsDragging(false);

  return (
    <section ref={ref} className="section-pad" style={{ background: "var(--ink)" }}>
      <div className="container-main mb-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.82, ease }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-4 h-px" style={{ background: "var(--lime)" }} />
            <span className="font-sans uppercase" style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.14em", color: "var(--lime)" }}>Services</span>
          </div>
          <div className="flex items-baseline justify-between">
            <h2 className="font-serif italic font-semibold" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)", letterSpacing: "-0.02em" }}>
              What I Do.
            </h2>
            <span className="font-sans hidden sm:block" style={{ fontSize: "0.72rem", color: "var(--dim)" }}>
              Drag to explore →
            </span>
          </div>
        </motion.div>
      </div>

      <div
        ref={trackRef}
        className="flex overflow-x-auto scrollbar-hide"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          gap: 1,
          background: "var(--line)",
          scrollbarWidth: "none",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onEnd}
        onMouseLeave={onEnd}
      >
        {services.map((service, i) => (
          <div
            key={service.title}
            className="service-card group relative shrink-0 transition-colors"
            style={{
              flex: "0 0 305px",
              background: "var(--ink)",
              padding: "2.4rem 2rem",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ink)")}
          >
            {/* Ghost number */}
            <div className="absolute top-4 right-4 font-serif italic select-none pointer-events-none" style={{ fontSize: "4.5rem", opacity: 0.024, lineHeight: 1, color: "var(--body)" }}>
              {String(i + 1).padStart(2, "0")}
            </div>

            <div style={{ fontSize: "1.5rem", marginBottom: "0.8rem" }}>{service.icon}</div>
            <h3 className="font-serif italic font-semibold mb-3" style={{ fontSize: "1.65rem", letterSpacing: "-0.01em" }}>{service.title}</h3>
            <p className="font-sans" style={{ fontSize: "0.8rem", lineHeight: 1.8, color: "var(--muted)" }}>{service.description}</p>

            {/* Lime line */}
            <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500" style={{ background: "var(--lime)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
