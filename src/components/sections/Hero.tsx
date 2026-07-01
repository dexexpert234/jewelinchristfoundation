import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import h1 from "@/assets/jewel-7.jpg";

const slide = {
  image: h1,
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
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/40 bg-primary/30 backdrop-blur text-primary-foreground text-xs uppercase tracking-[0.3em] mb-6 animate-fade-in-up">
            ✦ {slide.eyebrow}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {slide.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="italic bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">{slide.title.split(" ").slice(-2).join(" ")}</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {slide.desc}
          </p>
          <p className="font-luxe italic text-base md:text-lg text-amber-200 mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Empowering People. Strengthening Families. Transforming Communities.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <Button asChild variant="hero" size="lg" className="h-14 px-8 text-base">
              <a href={buildMailto("Donation Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Heart className="h-5 w-5" /> Donate Now</a>
            </Button>
            <Button asChild variant="outlineGold" size="lg" className="h-14 px-8 text-base border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
              <a href={buildMailto("Join the Movement — Volunteer / Partner Inquiry")} target="_blank" rel="noopener noreferrer"><Users className="h-5 w-5" /> Join the Movement</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
