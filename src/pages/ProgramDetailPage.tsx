import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2, Heart } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { getProgram, programs } from "@/data/programs";
import { buildMailto } from "@/lib/contact";

const ProgramDetailPage = () => {
  const { slug } = useParams();
  const p = getProgram(slug ?? "");

  if (!p) {
    return (
      <SiteLayout>
        <Seo title="Program not found | Jewel in Christ Foundation" description="The program you are looking for does not exist." path={`/programs/${slug}`} />
        <div className="container py-32 text-center">
          <h1 className="font-display text-4xl text-primary mb-4">Program not found</h1>
          <Link to="/programs" className="text-primary underline">Back to all programs</Link>
        </div>
      </SiteLayout>
    );
  }

  const Icon = p.icon;
  const others = programs.filter((x) => x.slug !== p.slug).slice(0, 3);

  return (
    <SiteLayout>
      <Seo title={`${p.title} | Jewel in Christ Foundation`} description={p.desc} path={`/programs/${p.slug}`} />

      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-12">
            <Link to="/programs" className="inline-flex items-center gap-2 text-sm text-primary mb-5 hover:text-accent transition-smooth">
              <ArrowLeft className="h-4 w-4" /> All programs
            </Link>
            <div className="inline-flex items-center gap-2 h-12 w-12 rounded-2xl gradient-royal shadow-elegant mb-5 justify-center">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-primary max-w-3xl mb-3">{p.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{p.desc}</p>
          </div>
        </div>
      </section>

      <section className="container py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6 text-lg leading-relaxed text-foreground/90">
          {p.story.map((line, i) => (
            <p key={i} className={i === 0 ? "text-xl first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}>{line}</p>
          ))}
        </div>
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-3xl border border-border bg-card p-8 shadow-card">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-3">What your gift does</p>
            <p className="font-display text-2xl text-primary mb-5">{p.costPerBeneficiary}</p>
            <ul className="space-y-3 mb-6">
              {p.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> {o}
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="w-full">
              <a href={buildMailto(`Sponsor: ${p.title}`)} target="_blank" rel="noopener noreferrer"><Heart className="h-4 w-4" /> Sponsor This Program</a>
            </Button>
          </div>
        </aside>
      </section>

      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="font-display text-3xl text-primary mb-8">Explore other programs</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map((o) => (
              <Link key={o.slug} to={`/programs/${o.slug}`} className="group block rounded-2xl overflow-hidden border border-border bg-card shadow-card hover:shadow-elegant transition-smooth">
                <div className="h-40 overflow-hidden">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700" />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-lg text-primary group-hover:text-accent transition-smooth mb-1">{o.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{o.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn more <ArrowRight className="h-3.5 w-3.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ProgramDetailPage;