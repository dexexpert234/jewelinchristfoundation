import { Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import heroImg from "@/assets/gallery-extra-7.jpg";

const slide = {
  image: heroImg,
  eyebrow: "Empowering Women",
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.eyebrow}
          className="absolute inset-0 w-full h-full object-cover object-[50%_20%] md:object-center brightness-125 md:brightness-110 contrast-105"
          width={1920}
          height={1080}
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        {/* Very light overlay so faces stay clearly visible */}
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container h-full flex items-end pb-16 md:pb-24">
        <div className="max-w-2xl text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-foreground/40 bg-black/50 backdrop-blur text-primary-foreground text-xs uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            ✦ {slide.eyebrow}
          </div>
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
