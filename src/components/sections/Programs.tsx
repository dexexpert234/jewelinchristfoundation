import { Scissors, BookOpen, Briefcase, HeartHandshake, Globe2, Scale } from "lucide-react";
import p1 from "@/assets/program-1.jpg";
import p2 from "@/assets/program-2.jpg";
import p3 from "@/assets/program-3.jpg";
import { Button } from "@/components/ui/button";

const programs = [
  { icon: Scissors, title: "Vocational Training", desc: "Fashion design, culinary arts, beauty services, and handicrafts that build marketable skills.", image: p1 },
  { icon: Briefcase, title: "Entrepreneurship Development", desc: "Business planning, financial literacy, marketing, and digital business skills.", image: p2 },
  { icon: BookOpen, title: "Economic Empowerment", desc: "Microfinance, grants for women-led businesses, and business incubation.", image: p3 },
  { icon: HeartHandshake, title: "Support & Advocacy", desc: "Mentorship, networking events, and policy advocacy for sustainable change.", image: p1 },
  { icon: Globe2, title: "Community Engagement", desc: "Outreach programs and strategic partnerships across communities.", image: p2 },
];

const Programs = () => (
  <section id="programs" className="py-28 gradient-soft">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">What We Do</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Our <em className="text-gradient-royal not-italic font-semibold">Programs</em></h2>
        <p className="text-muted-foreground">Holistic, community-rooted programs that restore dignity and unlock potential.</p>
      </div>

      {/* Featured */}
      <div className="relative overflow-hidden rounded-3xl gradient-royal text-primary-foreground p-10 md:p-16 mb-16 shadow-elegant">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 text-accent text-xs uppercase tracking-[0.3em] mb-6">
              <Scale className="h-3.5 w-3.5" /> Featured Program
            </div>
            <h3 className="font-display text-4xl md:text-5xl mb-5">
              Empowerment & <em className="text-gradient-gold not-italic">Justice Initiative</em>
            </h3>
            <p className="text-primary-foreground/85 leading-relaxed mb-6">
              An integrated program advancing economic empowerment and social justice — including vocational training (and prison apostolate work), entrepreneurship, advocacy for women's rights, and support for survivors of gender-based violence.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-primary-foreground/90 mb-8">
              {["Vocational training (incl. incarcerated women)", "Entrepreneurship development", "Women's rights advocacy", "Awareness campaigns & workshops", "Support for GBV survivors", "Prison apostolate & reform"].map((x) => (
                <li key={x} className="flex items-start gap-2"><span className="text-accent mt-0.5">✦</span>{x}</li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg"><a href="#donate">Support This Initiative</a></Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={p1} alt="Vocational training" className="rounded-2xl h-64 w-full object-cover shadow-gold" loading="lazy" width={800} height={600} />
            <img src={p3} alt="Entrepreneur" className="rounded-2xl h-64 w-full object-cover mt-10 shadow-gold" loading="lazy" width={800} height={600} />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <article key={i} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth">
            <div className="relative h-52 overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" loading="lazy" width={800} height={600} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute top-4 left-4 h-12 w-12 rounded-2xl gradient-gold flex items-center justify-center shadow-gold">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="absolute bottom-4 left-4 text-accent text-[10px] uppercase tracking-[0.3em]">Program {String(i + 1).padStart(2, "0")}</div>
            </div>
            <div className="p-7">
              <h3 className="font-display text-2xl text-primary mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-primary hover:text-accent transition-smooth">
                Learn more <span className="transition-smooth group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
export default Programs;
