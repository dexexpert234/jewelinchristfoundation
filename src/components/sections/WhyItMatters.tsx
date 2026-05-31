import { Sparkles, ShieldCheck, HandHeart, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const facts = [
  {
    icon: ShieldCheck,
    stat: "1 in 3",
    label: "Women globally face violence in their lifetime",
    body: "When a woman is silenced, an entire family loses its voice. We walk with survivors through legal, emotional, and economic recovery.",
  },
  {
    icon: Sparkles,
    stat: "₦85,000",
    label: "Trains one woman with a life-long skill",
    body: "A single trade — sewing, baking, beauty — can feed a household for years. That's less than a weekend out. It's a lifetime in.",
  },
  {
    icon: HandHeart,
    stat: "10×",
    label: "Return on every empowered mother",
    body: "When mothers earn, children eat, learn, and dream. Investing in one woman ripples through generations. The math of compassion is exponential.",
  },
];

const WhyItMatters = () => (
  <section className="py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Why It Matters</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Behind every gift, a <em className="text-gradient-royal not-italic font-semibold">human story</em>
        </h2>
        <p className="text-muted-foreground">
          We don't ask for charity. We invite you into restoration — the slow, beautiful work of putting dignity back into the lives of those the world overlooks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {facts.map((f, i) => (
          <article key={i} className="group bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth reveal" style={{ transitionDelay: `${i * 100}ms` }}>
            <div className="h-14 w-14 rounded-2xl gradient-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-elegant">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <p className="font-display text-5xl text-primary mb-2">{f.stat}</p>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">{f.label}</p>
            <p className="text-muted-foreground leading-relaxed">{f.body}</p>
          </article>
        ))}
      </div>

      <div className="relative rounded-3xl gradient-royal text-primary-foreground p-10 md:p-16 shadow-elegant overflow-hidden">
        <Quote className="absolute -top-6 -left-6 h-40 w-40 text-primary-foreground/10" />
        <div className="relative grid md:grid-cols-5 gap-10 items-center">
          <blockquote className="md:col-span-3">
            <p className="font-display text-2xl md:text-3xl leading-relaxed mb-6">
              "I came in with nothing but tears. I walked out with a skill, a sisterhood, and a reason to keep going. Jewel in Christ didn't just train me — they reminded me I was worth training."
            </p>
            <footer className="text-primary-foreground/80 text-sm uppercase tracking-[0.3em]">— Blessing, vocational graduate, Abeokuta</footer>
          </blockquote>
          <div className="md:col-span-2 flex flex-col items-start md:items-end gap-4">
            <p className="text-primary-foreground/90 text-lg md:text-right md:max-w-xs">
              Be the reason someone else gets to write a sentence like this. Your gift is a real-world miracle in waiting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="hero" size="lg">
                <a href={buildMailto("Donation Inquiry — Why It Matters")} target="_blank" rel="noopener noreferrer">Donate Today</a>
              </Button>
              <Button asChild variant="outlineGold" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/stories">Read Their Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyItMatters;