import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const lines = [
  "Empowering women,",
  "Transforming families,",
  "Building thriving communities.",
];

const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [phase, setPhase] = useState(0); // 0 logo, 1 name, 2 mission, 3 final
  const [progress, setProgress] = useState(0);
  const [exit, setExit] = useState(false);
  const reduced = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const duration = reduced ? 1500 : 10000;

  useEffect(() => {
    if (reduced) {
      const t = setTimeout(() => { setExit(true); setTimeout(onDone, 400); }, duration);
      return () => clearTimeout(t);
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setProgress(p);
      if (p < 0.2) setPhase(0);
      else if (p < 0.5) setPhase(1);
      else if (p < 0.8) setPhase(2);
      else setPhase(3);
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setExit(true);
        setTimeout(onDone, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone, reduced, duration]);

  // ring math: r=45, c=2πr ≈ 283
  const dash = 283;
  const offset = dash * (1 - progress);

  return (
    <div
      aria-hidden={exit}
      className={`fixed inset-0 z-[100] flex items-center justify-center gradient-preloader transition-opacity duration-700 ${exit ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      role="status"
      aria-label="Loading Jewel in Christ Foundation"
    >
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[hsl(22_96%_53%/0.25)] blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-[hsl(38_100%_65%/0.18)] blur-3xl" />
        <div className="absolute top-1/3 right-10 h-72 w-72 rounded-full bg-[hsl(20_90%_38%/0.18)] blur-3xl" />
      </div>

      {/* particles */}
      {!reduced && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-[hsl(38_100%_70%/0.7)] shadow-[0_0_12px_hsl(38_100%_60%/0.8)] animate-float-up"
              style={{
                left: `${(i * 53) % 100}%`,
                width: `${4 + (i % 5)}px`,
                height: `${4 + (i % 5)}px`,
                animationDuration: `${8 + (i % 6)}s`,
                animationDelay: `${(i % 7) * -1.2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-2xl w-full">
        {/* progress ring + logo */}
        <div className="relative h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 mb-6 sm:mb-10">
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(22 96% 53%)" />
                <stop offset="100%" stopColor="hsl(45 100% 65%)" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(0 0% 100% / 0.08)" strokeWidth="2.5" />
            <circle
              cx="50" cy="50" r="45" fill="none"
              stroke="url(#ringGrad)" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={dash} strokeDashoffset={offset}
              style={{ transition: "stroke-dashoffset 120ms linear", filter: "drop-shadow(0 0 8px hsl(22 96% 53% / 0.7))" }}
            />
          </svg>
          <div className="absolute inset-2 sm:inset-3 rounded-full bg-[hsl(0_0%_100%/0.04)] backdrop-blur-sm flex items-center justify-center animate-pulse-glow">
            <img src={logo} alt="Jewel in Christ Foundation" className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain" />
          </div>
        </div>

        {/* phase content */}
        <div className="min-h-[100px] sm:min-h-[120px] flex items-center justify-center w-full">
          {phase <= 1 && (
            <div key="name" className="animate-page-fade-in">
              <h1 className="font-luxe text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-wide">
                Jewel in Christ <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent italic">Foundation</span>
              </h1>
              <p className="mt-3 text-[10px] sm:text-sm uppercase tracking-[0.35em] sm:tracking-[0.5em] text-amber-200/80">A movement of restoration</p>
            </div>
          )}
          {phase === 2 && (
            <div key="mission" className="space-y-2 px-2">
              {lines.map((line, i) => (
                <p
                  key={line}
                  className="font-luxe text-lg sm:text-2xl md:text-3xl text-white animate-page-fade-in"
                  style={{ animationDelay: `${i * 220}ms` }}
                >
                  {line}
                </p>
              ))}
            </div>
          )}
          {phase === 3 && (
            <div key="final" className="animate-page-fade-in px-2">
              <p className="font-luxe text-xl sm:text-3xl md:text-4xl text-white">
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">Faith. Skills. Advocacy. Transformation.</span>
              </p>
            </div>
          )}
        </div>

        <p className="mt-6 sm:mt-10 text-[9px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.6em] text-white/60">
          {Math.round(progress * 100)}% — Preparing your experience
        </p>
      </div>
    </div>
  );
};

export default Preloader;