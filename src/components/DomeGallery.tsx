import { useEffect, useMemo, useRef, useState } from "react";

type Item = { src: string; caption: string };

interface Props {
  items: Item[];
  /** Sphere radius in px (desktop). Scales down on smaller screens. */
  radius?: number;
}

// Fibonacci-style distribution across the upper hemisphere (a dome)
function domePositions(count: number) {
  const pts: { theta: number; phi: number }[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    // y from 1 (top) down to ~0 (equator) — upper hemisphere only
    const y = 1 - (i / Math.max(count - 1, 1)) * 0.95;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = golden * i; // azimuth
    const phi = Math.acos(y); // polar angle from top
    pts.push({ theta, phi });
    // suppress unused
    void radiusAtY;
  }
  return pts;
}

const DomeGallery = ({ items, radius = 520 }: Props) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: -18, y: 0 });
  const [scale, setScale] = useState(1);
  const drag = useRef<{ active: boolean; lastX: number; lastY: number; vx: number; vy: number }>({
    active: false,
    lastX: 0,
    lastY: 0,
    vx: 0,
    vy: 0,
  });

  // Responsive scale
  useEffect(() => {
    const onResize = () => {
      const w = wrapRef.current?.clientWidth ?? window.innerWidth;
      setScale(Math.min(1, Math.max(0.55, w / 900)));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Auto-rotate + inertia
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setRot((r) => {
        const auto = drag.current.active ? 0 : 0.12; // gentle idle spin
        const vx = drag.current.vx * 0.92;
        const vy = drag.current.vy * 0.92;
        drag.current.vx = Math.abs(vx) < 0.01 ? 0 : vx;
        drag.current.vy = Math.abs(vy) < 0.01 ? 0 : vy;
        const nextX = Math.max(-70, Math.min(20, r.x + vy));
        const nextY = r.y + vx + auto;
        return { x: nextX, y: nextY };
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const positions = useMemo(() => domePositions(items.length), [items.length]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current.active = true;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    drag.current.vx = 0;
    drag.current.vy = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.lastX;
    const dy = e.clientY - drag.current.lastY;
    drag.current.lastX = e.clientX;
    drag.current.lastY = e.clientY;
    drag.current.vx = dx * 0.35;
    drag.current.vy = -dy * 0.25;
    setRot((r) => ({
      x: Math.max(-70, Math.min(20, r.x + -dy * 0.25)),
      y: r.y + dx * 0.35,
    }));
  };
  const onPointerUp = () => {
    drag.current.active = false;
  };

  const R = radius * scale;

  return (
    <div
      ref={wrapRef}
      className="relative w-full select-none touch-none overflow-hidden"
      style={{
        height: `min(90vh, ${Math.round(R * 2 + 200)}px)`,
        cursor: drag.current.active ? "grabbing" : "grab",
        background:
          "radial-gradient(ellipse at center, hsl(var(--secondary)) 0%, hsl(var(--background)) 70%)",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Floor gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, hsl(var(--primary) / 0.25), transparent)",
        }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ perspective: `${1400}px` }}
      >
        <div
          className="relative"
          style={{
            width: 1,
            height: 1,
            transformStyle: "preserve-3d",
            transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
            transition: drag.current.active ? "none" : "transform 60ms linear",
          }}
        >
          {items.map((it, i) => {
            const { theta, phi } = positions[i];
            const x = R * Math.sin(phi) * Math.cos(theta);
            const y = -R * Math.cos(phi); // negative = upward
            const z = R * Math.sin(phi) * Math.sin(theta);
            // Face outward from sphere center
            const rotY = (theta * 180) / Math.PI + 90;
            const rotX = 90 - (phi * 180) / Math.PI;
            const size = 130 * scale;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  width: size,
                  height: size,
                  left: -size / 2,
                  top: -size / 2,
                  transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) rotateX(${-rotX}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <figure className="group relative w-full h-full overflow-hidden rounded-2xl shadow-elegant ring-1 ring-black/10 bg-card">
                  <img
                    src={it.src}
                    alt={it.caption}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-2 text-[10px] text-primary-foreground bg-gradient-to-t from-primary/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    {it.caption}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 inset-x-0 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Drag to explore
      </div>
    </div>
  );
};

export default DomeGallery;