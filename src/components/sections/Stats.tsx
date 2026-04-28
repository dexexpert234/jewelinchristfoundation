import { useEffect, useRef, useState } from "react";
import { Heart, Users, Sparkles, MapPin } from "lucide-react";

const stats = [
  { icon: Heart, end: 500, suffix: "+", label: "Lives Impacted" },
  { icon: Users, end: 50, suffix: "+", label: "Volunteers" },
  { icon: Sparkles, end: 20, suffix: "+", label: "Outreach Programs" },
  { icon: MapPin, end: 10, suffix: "+", label: "Communities Served" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 1800;
        const tick = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(end * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
          else setN(end);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{n}{suffix}</span>;
};

const Stats = () => (
  <section className="relative py-24 gradient-royal text-primary-foreground overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 70%, hsl(var(--primary-light)) 0%, transparent 50%)" }} />
    <div className="container relative z-10">
      <div className="text-center mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Our Impact</p>
        <h2 className="font-display text-4xl md:text-5xl">Numbers That Tell <em className="text-gradient-gold not-italic font-semibold">Stories</em></h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center group">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-accent/40 mb-5 group-hover:bg-accent group-hover:text-primary transition-smooth">
              <s.icon className="h-7 w-7 text-accent group-hover:text-primary transition-smooth" />
            </div>
            <div className="font-display text-5xl md:text-6xl font-semibold text-accent mb-2">
              <Counter end={s.end} suffix={s.suffix} />
            </div>
            <p className="text-sm uppercase tracking-widest text-primary-foreground/80">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Stats;
