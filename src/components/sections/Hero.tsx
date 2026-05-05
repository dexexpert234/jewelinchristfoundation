import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import h1 from "@/assets/jewel-7.jpg";
import h2 from "@/assets/jewel-8.jpg";
import h3 from "@/assets/jewel-5.jpg";

const slides = [
  {
    image: h1,
    eyebrow: "Empowering Women",
    title: "Building Sustainable Futures",
    desc: "Through skills training and entrepreneurship, we equip women to transform their lives and the world around them.",
  },
  {
    image: h2,
    eyebrow: "Transforming Lives",
    title: "From Vulnerability to Thriving Communities",
    desc: "We walk alongside the marginalized — restoring dignity, hope, and opportunity in every story we touch.",
  },
  {
    image: h3,
    eyebrow: "Creating Opportunity",
    title: "Skills, Support & Advocacy for All",
    desc: "Together we are advancing social justice, economic empowerment, and lasting change for families and generations.",
  },
];

const Hero = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);
  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] overflow-hidden">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            idx === i ? "opacity-100 translate-x-0" : idx < i ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
          }`}
        >
          <img src={s.image} alt={s.title} className={`absolute inset-0 w-full h-full object-cover ${idx === i ? "animate-ken-burns" : ""}`} width={1920} height={1080} />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        </div>
      ))}

      <div className="relative z-10 container h-full flex items-center">
        <div key={i} className="max-w-2xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-primary/30 backdrop-blur text-accent text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            ✦ {slides[i].eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {slides[i].title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-gold italic">{slides[i].title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {slides[i].desc}
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Button asChild variant="hero" size="lg" className="h-14 px-8 text-base">
              <a href={buildMailto("Donation Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Heart className="h-5 w-5" /> Donate Now</a>
            </Button>
            <Button asChild variant="outlineGold" size="lg" className="h-14 px-8 text-base">
              <a href={buildMailto("Join the Movement — Volunteer / Partner Inquiry")} target="_blank" rel="noopener noreferrer"><Users className="h-5 w-5" /> Join the Movement</a>
            </Button>
          </div>
        </div>
      </div>

      <button onClick={() => go(i - 1)} className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent bg-primary/30 backdrop-blur hover:bg-accent hover:text-primary transition-smooth" aria-label="Previous">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={() => go(i + 1)} className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 items-center justify-center rounded-full border border-accent/40 text-accent bg-primary/30 backdrop-blur hover:bg-accent hover:text-primary transition-smooth" aria-label="Next">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => setI(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-smooth ${idx === i ? "w-12 bg-accent" : "w-6 bg-primary-foreground/40 hover:bg-primary-foreground/70"}`} />
        ))}
      </div>
    </section>
  );
};
export default Hero;
