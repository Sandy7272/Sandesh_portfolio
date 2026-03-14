const items = [
  "Product Builder", "Creative Technologist", "VFX Artist", "3D Pipeline Engineer",
  "Gaussian Splatting", "NeRF Technology", "Motion Graphics", "AI-Powered Tools",
  "Operations Lead", "Workflow Automation", "Blender & Unreal", "After Effects",
];

export function Ticker() {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        background: "var(--lime-lo)",
        padding: "1.1rem 0",
      }}
    >
      <div
        className="flex items-center whitespace-nowrap hover:[animation-play-state:paused]"
        style={{ animation: "ticker-scroll 34s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-serif italic" style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--body)", padding: "0 1.2rem" }}>
              {item}
            </span>
            <span style={{ fontSize: "0.38rem", color: "var(--lime)" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
