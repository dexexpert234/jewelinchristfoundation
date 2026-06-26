import { Link } from "react-router-dom";
import { Scale, Briefcase, Building2, Handshake, Users, GraduationCap, Feather, Home, Lightbulb, HeartHandshake, Cross, Shield, Quote, Heart, HandHeart } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import portrait from "@/assets/leader.jpg";

const stats = [
  { v: "27+", l: "Years of Professional Experience" },
  { v: "16+", l: "Years of Humanitarian Service" },
  { v: "1", l: "Vision That Inspired a Movement" },
  { v: "1000s", l: "Lives Positively Influenced" },
];

const impact = [
  { icon: Scale, t: "Legal Practice" },
  { icon: Briefcase, t: "Public Service" },
  { icon: Building2, t: "Corporate Governance" },
  { icon: Handshake, t: "Public-Private Partnerships" },
  { icon: Users, t: "Women Empowerment" },
  { icon: GraduationCap, t: "Girl-Child Education" },
  { icon: Feather, t: "Peacebuilding" },
  { icon: Home, t: "Community Development" },
  { icon: Lightbulb, t: "Mentorship" },
  { icon: HeartHandshake, t: "Family Support" },
  { icon: Cross, t: "Christian Leadership" },
  { icon: Shield, t: "Conflict Resolution" },
];

const LeadershipLegacyPage = () => (
  <SiteLayout>
    <Seo
      title="Leadership & Legacy | Jewel in Christ Foundation"
      description="More than twenty-seven years of legal excellence, ethical leadership, and compassionate service shaping Jewel in Christ Foundation."
      path="/leadership-legacy"
    />
    <PageHero
      eyebrow="A Life of Service"
      title="Leadership That Inspires Hope"
      subtitle="For more than twenty-seven years, Barrister Judith Ngozi Agu has combined legal excellence, ethical leadership, and compassionate service to create opportunities that empower people, strengthen families, and transform communities."
    />

    {/* Portrait + intro */}
    <section className="py-20 bg-background">
      <div className="container grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2 reveal">
          <img src={portrait} alt="Barrister Judith Ngozi Agu" className="rounded-3xl shadow-elegant w-full object-cover h-[520px]" loading="lazy" decoding="async" />
        </div>
        <div className="lg:col-span-3 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Leadership at a Glance</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">A Servant Leader. A Builder of Hope.</h2>
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div key={s.l} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center">
                <p className="font-display text-4xl md:text-5xl text-gradient-royal mb-2">{s.v}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Areas of Impact */}
    <section className="py-24 gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Spheres of Influence</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">Areas of Impact</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {impact.map(({ icon: Icon, t }) => (
            <div key={t} className="reveal bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-royal flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="font-display text-lg text-primary">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 bg-background">
      <div className="container max-w-3xl mx-auto text-center reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Leadership Philosophy</p>
        <Quote className="h-10 w-10 mx-auto text-accent mb-6" />
        <p className="font-display text-3xl md:text-4xl text-primary italic leading-relaxed mb-8">
          "Leadership is selfless service with a heart of love."
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Everything Barrister Judith Agu has accomplished reflects one consistent belief: real leadership exists to serve others. This philosophy continues to shape every initiative, outreach program, and partnership undertaken by Jewel in Christ Foundation.
        </p>
      </div>
    </section>

    {/* Legacy growing */}
    <section className="py-24 gradient-soft">
      <div className="container max-w-3xl mx-auto text-center reveal">
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">A Legacy Still Growing</h2>
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>The impact of leadership is not measured by titles or positions. It is measured by transformed lives.</p>
          <p className="text-primary font-medium">
            Every woman empowered. Every child encouraged. Every family restored. Every community strengthened.
          </p>
          <p>These are the true achievements that define the legacy of Jewel in Christ Foundation.</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 gradient-royal text-primary-foreground">
      <div className="container text-center max-w-2xl mx-auto reveal">
        <h2 className="font-display text-4xl md:text-5xl mb-6">Become Part of the Legacy</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><a href={buildMailto("Volunteer with Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><HandHeart className="h-4 w-4" /> Volunteer Today</a></Button>
          <Button asChild variant="outlineGold" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/donate"><Heart className="h-4 w-4" /> Support Our Mission</Link></Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default LeadershipLegacyPage;