import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const selectors = "a, button, .project-card, .service-card, .pill, .chip, .stat-card, .contact-link, .impact-cell, .process-card, .research-card, .testimonial-card, .client-item, input, textarea";

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(selectors)) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(selectors)) setHovering(false);
    };

    let raf: number;
    const animate = () => {
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.105;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.105;
      if (ringRef.current) {
        const size = hovering ? 46 : 30;
        ringRef.current.style.width = `${size}px`;
        ringRef.current.style.height = `${size}px`;
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, [hovering]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: hovering ? 3 : 6,
          height: hovering ? 3 : 6,
          borderRadius: "50%",
          background: clicking ? "var(--teal)" : "var(--lime)",
          zIndex: 8900,
          pointerEvents: "none",
          transition: "width 0.2s, height 0.2s, background 0.15s",
          transform: `scale(${clicking ? 0.6 : 1})`,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 30,
          height: 30,
          borderRadius: "50%",
          border: `1px solid ${hovering ? "var(--lime)" : "rgba(197,242,68,0.35)"}`,
          zIndex: 8899,
          pointerEvents: "none",
          transition: "width 0.25s, height 0.25s, border-color 0.2s",
        }}
      />
    </>
  );
}
