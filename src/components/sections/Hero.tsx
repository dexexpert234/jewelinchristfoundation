import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import heroImg from "@/assets/gallery-extra-7.jpg";

const slide = {
  image: heroImg,
  eyebrow: "Empowering Women",
  title: "Building Sustainable Futures",
  desc: "Through skills training and entrepreneurship, we equip women to transform their lives and the world around them.",
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Light overlay so faces in the photo remain visible */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/40 bg-black/50 backdrop-blur text-primary-foreground text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            ✦ {slide.eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s", textShadow: "0 4px 24px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.7)" }}>
            {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="italic font-bold" style={{ color: "#fff", textShadow: "0 4px 24px rgba(0,0,0,0.85), 0 2px 8px rgba(0,0,0,0.7)" }}>{slide.title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground font-medium mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s", textShadow: "0 3px 16px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.7)" }}>
            {slide.desc}
          </p>
          <p className="font-luxe italic text-base md:text-lg text-amber-300 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s", textShadow: "0 3px 16px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.7)" }}>
            Empowering People. Strengthening Families. Transforming Communities.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Button asChild variant="hero" size="lg" className="h-14 px-8 text-base shadow-lg">
              <a href={buildMailto("Donation Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Heart className="h-5 w-5" /> Donate Now</a>
            </Button>
            <Button asChild variant="outlineGold" size="lg" className="h-14 px-8 text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background shadow-lg">
              <a href={buildMailto("Join the Movement — Volunteer / Partner Inquiry")} target="_blank" rel="noopener noreferrer"><Users className="h-5 w-5" /> Join the Movement</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
