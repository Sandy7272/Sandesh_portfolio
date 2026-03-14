import { useReveal } from "../hooks/useReveal";
import { useCounter } from "../hooks/useCounter";

const metrics = [
  { target: 500, suffix: "+", label: "Animations Created" },
  { target: 154, suffix: "", label: "Products Digitized" },
  { target: 50, suffix: "+", label: "Hotels in 3D" },
  { target: 70, suffix: "%", label: "Manual Work Reduced" },
  { target: 3, suffix: "×", label: "Best Employee Awards" },
];

function CountCell({ target, suffix, label, inView }: { target: number; suffix: string; label: string; inView: boolean }) {
  const count = useCounter(target, inView);

  return (
    <div
      className="impact-cell text-center transition-colors"
      style={{ padding: "3rem 1.4rem", borderRight: "1px solid rgba(6,6,8,0.1)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(6,6,8,0.06)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div className="font-serif font-bold" style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.6rem)", color: "var(--ink)", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div className="font-sans uppercase mt-2" style={{ fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.12em", color: "rgba(6,6,8,0.52)" }}>
        {label}
      </div>
    </div>
  );
}

export function ImpactBar() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} style={{ background: "var(--lime)" }}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {metrics.map((m) => (
          <CountCell key={m.label} {...m} inView={isInView} />
        ))}
      </div>
    </section>
  );
}
