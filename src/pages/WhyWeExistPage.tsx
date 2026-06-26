import { Link } from "react-router-dom";
import { Users, Home, GraduationCap, Shield, Feather, Building2, Cross, Crown, Heart, Handshake } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const commitments = [
  { icon: Users, t: "Empower Women", d: "Equip women with skills, capital, and confidence to thrive." },
  { icon: Home, t: "Support Families", d: "Strengthen households through practical, compassionate support." },
  { icon: GraduationCap, t: "Mentor Young People", d: "Guide the next generation to discover purpose and excellence." },
  { icon: Shield, t: "Protect Vulnerable Persons", d: "Stand with the marginalized; restore dignity and safety." },
  { icon: Feather, t: "Promote Peace", d: "Build bridges of reconciliation across families and communities." },
  { icon: Building2, t: "Develop Communities", d: "Invest in long-term, sustainable community transformation." },
  { icon: Cross, t: "Strengthen Faith", d: "Anchor every effort in faith, hope, and love." },
  { icon: Crown, t: "Encourage Leadership", d: "Raise servant leaders who serve with integrity and heart." },
];

const WhyWeExistPage = () => (
  <SiteLayout>
    <Seo
      title="Why We Exist | Jewel in Christ Foundation"
      description="Because one opportunity can change a life forever. Our reason for existing is to ensure hope is never out of reach for anyone willing to build a better future."
      path="/why-we-exist"
    />
    <PageHero
      eyebrow="Our Reason for Being"
      title="Why We Exist"
      subtitle="Because one opportunity can change a life forever."
    />

    <section className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto reveal">
        <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>Jewel in Christ Foundation exists because too many people possess dreams but lack opportunities.</p>
          <p>Too many women possess skills but lack capital. Too many children possess potential but lack guidance. Too many families possess hope but lack support.</p>
          <p>Our foundation believes that lasting transformation begins when compassion meets action.</p>
          <p className="text-primary font-medium">We exist to bridge that gap.</p>
          <ul className="space-y-2 pl-5 border-l-4 border-accent">
            <li>We exist to empower individuals with opportunities.</li>
            <li>We exist to strengthen families through practical support.</li>
            <li>We exist to restore dignity to vulnerable communities.</li>
            <li>We exist because every person deserves the opportunity to thrive.</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-24 gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Our Commitment</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">What We Promise to Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map(({ icon: Icon, t, d }) => (
            <div key={t} className="reveal bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-royal flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="font-display text-lg text-primary mb-2">{t}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto text-center reveal">
        <p className="font-display text-2xl md:text-3xl text-primary italic leading-relaxed mb-10">
          "Our mission is to ensure that hope is never out of reach for anyone willing to build a better future."
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><Link to="/donate"><Heart className="h-4 w-4" /> Donate Now</Link></Button>
          <Button asChild variant="royal" size="lg"><a href={buildMailto("Partnership Inquiry — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Handshake className="h-4 w-4" /> Partner With Us</a></Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default WhyWeExistPage;