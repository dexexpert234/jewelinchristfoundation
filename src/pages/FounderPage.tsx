import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, GraduationCap, Heart, Users, Scale, Globe, Sparkles, Briefcase, Quote, Building2, Handshake, Feather, Home, Lightbulb, HeartHandshake, Cross, Shield } from "lucide-react";
import leader from "@/assets/leader.jpg";
import bookCover from "@/assets/book-30-principles.png.asset.json";
import { buildMailto } from "@/lib/contact";

const credentials = ["LLB", "BL", "LLM", "ACIS"];

const timeline = [
  { year: "27+ Years", title: "Legal Practitioner", desc: "Banking, corporate law, private legal practice, and public service." },
  { year: "Director", title: "Legal Services", desc: "Director of Legal Services & Secretary to the Board — Ogun-Oshun River Basin Development Authority." },
  { year: "Head", title: "Public-Private Partnership Unit", desc: "Leading PPP initiatives and ethical governance reforms." },
  { year: "Board Member Secretary", title: "Expert In Board Practices", desc: "Serving as Board Member Secretary with deep expertise in corporate governance, board procedures, and ethical board practices across public and private institutions." },
  { year: "Today", title: "Humanitarian & Mentor", desc: "Founder of Jewel in Christ Foundation, Peace Ambassador and Lay Missionary." },
];

const education = [
  "Bachelor of Laws (LLB)",
  "Barrister-at-Law (BL)",
  "Master of Laws (LLM)",
  "Special Executive MBA",
  "University of Huddersfield, United Kingdom",
  "Metropolitan School of Business and Management (UK)",
  "Currently pursuing a PhD",
];

const memberships = [
  { role: "Life Member", org: "Women in Management, Business and Public Service (WIMBIZ)" },
  { role: "Member", org: "Nigerian Bar Association" },
  { role: "Member", org: "Commonwealth Lawyers Association" },
  { role: "Member", org: "Nigerian-Britain Association" },
  { role: "Alumnus", org: "IHE Delft Institute" },
  { role: "Alumnus", org: "Metropolitan School of Business and Management" },
];

const legacyStats = [
  { v: "27+", l: "Years of Professional Experience" },
  { v: "16+", l: "Years of Humanitarian Service" },
  { v: "1", l: "Vision That Inspired a Movement" },
  { v: "1000s", l: "Lives Positively Influenced" },
];

const impactAreas = [
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

const FounderPage = () => (
  <SiteLayout>
    <Seo
      title="About the Founder — Judith Ngozi Agu"
      description="Meet Judith Ngozi Agu — lawyer, humanitarian, mentor and visionary founder of Jewel in Christ Foundation."
      path="/founder"
    />

    {/* HERO */}
    <section className="relative gradient-royal text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)" }} />
      <div className="container relative z-10 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Meet Our Founder</p>
          <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
            Judith Ngozi Agu
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
            A Lawyer. A Humanitarian. A Mentor. A Woman Dedicated to Transforming Lives Through Compassion, Leadership, and Service.
          </p>
          <div className="flex flex-wrap gap-2">
            {credentials.map((c) => (
              <span key={c} className="px-3 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/25 text-xs font-semibold tracking-wider">
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-elegant ring-1 ring-primary-foreground/20">
            <img src={leader} alt="Judith Ngozi Agu" className="w-full h-[520px] object-cover" loading="eager" />
          </div>
        </div>
      </div>
    </section>

    {/* BIOGRAPHY */}
    <section className="py-24 bg-background">
      <div className="container max-w-4xl">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4 text-center reveal">Biography</p>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg reveal">
          <p>Judith Ngozi Agu is an accomplished legal practitioner, public servant, humanitarian, mentor, author, and visionary leader with over twenty-seven years of professional experience spanning banking, corporate law, private legal practice, and public service.</p>
          <p>Throughout her career, she has consistently demonstrated a passion for justice, ethical leadership, community development, and the empowerment of vulnerable individuals.</p>
          <p>Her life's work reflects a rare combination of professional excellence, compassionate service, and unwavering faith in God. She believes that true leadership is measured not by position, but by the number of lives transformed through selfless service.</p>
          <p>Today, she continues to inspire individuals, families, communities, and organizations through her leadership and humanitarian efforts.</p>
        </div>
      </div>
    </section>

    {/* TIMELINE */}
    <section className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Professional Journey</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">Career <em className="not-italic text-gradient-royal font-semibold">Highlights</em></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {timeline.map((t, i) => (
            <div key={i} className="p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth reveal">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-12 w-12 rounded-2xl gradient-royal flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-accent" />
                </div>
                <div className="text-accent text-xs uppercase tracking-[0.3em]">{t.year}</div>
              </div>
              <h3 className="font-display text-2xl text-primary mb-2">{t.title}</h3>
              <p className="text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {["Corporate Governance Professional","Chartered Secretary","Expert in Public-Private Partnerships","Advocate for Ethical Governance","Board Member Secretary"].map((p) => (
            <div key={p} className="p-4 rounded-xl bg-card border border-border text-sm text-primary text-center font-medium reveal">{p}</div>
          ))}
        </div>
      </div>
    </section>

    {/* EDUCATION */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Educational Excellence</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">A Lifelong Commitment to <em className="not-italic text-gradient-royal font-semibold">Learning</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <div key={i} className="group p-7 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth reveal">
              <div className="h-12 w-12 rounded-2xl gradient-royal flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <p className="text-primary font-medium">{e}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* PHILOSOPHY */}
    <section className="py-24 gradient-royal text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, hsl(var(--accent)) 0%, transparent 50%)" }} />
      <div className="container relative z-10 max-w-4xl text-center reveal">
        <Quote className="h-12 w-12 text-accent mx-auto mb-6" />
        <p className="font-display text-3xl md:text-5xl leading-tight mb-8 italic">
          "Leadership is selfless service with a heart of love."
        </p>
        <p className="text-primary-foreground/85 text-lg leading-relaxed">
          This philosophy has guided Judith Agu throughout her career in law, governance, humanitarian service, mentoring, and community development. It continues to shape every initiative of Jewel in Christ Foundation.
        </p>
      </div>
    </section>

    {/* MEMBERSHIPS */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Professional Memberships</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">Affiliations & <em className="not-italic text-gradient-royal font-semibold">Recognitions</em></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {memberships.map((m) => (
            <div key={m.org} className="p-6 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth reveal">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold">{m.role}</span>
              </div>
              <p className="text-primary font-medium">{m.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* COMMUNITY */}
    <section className="py-24 bg-secondary">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.4em] mb-4">
            <Globe className="h-4 w-4" /> Community Leadership
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Serving Beyond the <em className="not-italic text-gradient-royal font-semibold">Courtroom</em></h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Beyond her legal profession, Judith Agu has devoted herself to humanitarian service, women empowerment, girl-child education, conflict resolution, protection of vulnerable persons, and family development.</p>
            <p>She serves as a Peace Ambassador and Lay Missionary, believing that lasting transformation begins when people are empowered with opportunities, guidance, and hope.</p>
            <p>Her service extends beyond institutions into communities where she continues to inspire positive social change.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 reveal">
          {[
            { icon: Users, label: "Women Empowerment" },
            { icon: Heart, label: "Vulnerable Persons" },
            { icon: Scale, label: "Conflict Resolution" },
            { icon: Sparkles, label: "Peace Ambassador" },
          ].map((x, i) => (
            <div key={i} className="p-6 rounded-3xl bg-card border border-border shadow-card text-center">
              <x.icon className="h-8 w-8 text-accent mx-auto mb-3" />
              <p className="text-primary font-medium text-sm">{x.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AUTHOR */}
    {/* LEADERSHIP & LEGACY */}
    <section className="py-24 gradient-soft">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Leadership & Legacy</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">A Servant Leader. A Builder of Hope.</h2>
          <p className="text-muted-foreground leading-relaxed">For more than twenty-seven years, Judith Ngozi Agu has combined legal excellence, ethical leadership, and compassionate service to create opportunities that empower people, strengthen families, and transform communities.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {legacyStats.map((s) => (
            <div key={s.l} className="bg-card rounded-2xl p-6 border border-border shadow-card text-center reveal">
              <p className="font-display text-4xl md:text-5xl text-gradient-royal mb-2">{s.v}</p>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-14">
          {impactAreas.map(({ icon: Icon, t }) => (
            <div key={t} className="reveal bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth">
              <div className="h-12 w-12 rounded-xl gradient-royal flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <p className="font-display text-lg text-primary">{t}</p>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center reveal">
          <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">A Legacy Still Growing</h3>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>The impact of leadership is not measured by titles or positions. It is measured by transformed lives.</p>
            <p className="text-primary font-medium">Every woman empowered. Every child encouraged. Every family restored. Every community strengthened.</p>
            <p>These are the true achievements that define the legacy of Jewel in Christ Foundation.</p>
          </div>
        </div>
      </div>
    </section>

    {/* AUTHOR */}
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Author & Thought Leader</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary">Words That <em className="not-italic text-gradient-royal font-semibold">Inspire Action</em></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          <div className="reveal flex justify-center">
            <img
              src={bookCover.url}
              alt="30 Vital Principles for Success by Judith Agu"
              className="w-64 md:w-72 h-auto rounded-2xl shadow-elegant rotate-[-3deg] hover:rotate-0 transition-smooth"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <h3 className="font-display text-3xl text-primary mb-4">30 Vital Principles for Success</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A practical guide written to inspire individuals to unlock their God-given potential, embrace purposeful living, and pursue personal and professional excellence.
            </p>
            <p className="text-sm text-accent italic">More publications coming soon.</p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 gradient-royal text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0%, transparent 60%)" }} />
      <div className="container relative z-10 text-center max-w-3xl reveal">
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-6">Together We Can <em className="not-italic text-black">Transform More Lives</em></h2>
        <p className="text-primary-foreground/90 text-lg mb-10">
          Every act of kindness creates an opportunity for hope. Whether through volunteering, donating, partnering, or simply sharing our mission, you become part of a movement that empowers people, strengthens families, and transforms communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild variant="hero" size="lg" className="h-14 px-8">
            <a href={buildMailto("Volunteer Application — Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><Users className="h-5 w-5" /> Become a Volunteer</a>
          </Button>
          <Button asChild variant="outlineGold" size="lg" className="h-14 px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
            <Link to="/donate"><Heart className="h-5 w-5" /> Donate Today</Link>
          </Button>
        </div>
        <p className="mt-12 text-sm italic text-primary-foreground/80">
          "Service rooted in compassion leaves a legacy that outlives generations."
        </p>
      </div>
    </section>
  </SiteLayout>
);

export default FounderPage;