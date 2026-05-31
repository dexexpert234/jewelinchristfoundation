import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Heart } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { buildMailto } from "@/lib/contact";

const StoriesPage = () => (
  <SiteLayout>
    <Seo
      title="Stories & Updates | Jewel in Christ Foundation"
      description="Real stories from the field — women restored, communities rebuilt, and lives transformed through faith, skills, and advocacy."
      path="/stories"
    />
    <PageHero
      eyebrow="From the Field"
      title="Stories That Move Us"
      subtitle="Behind every statistic is a name, a face, and a future. Read the stories driving our work — and let them move you to action."
    />

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {posts.map((p) => (
            <Link key={p.slug} to={`/stories/${p.slug}`} className="group block">
              <div className="relative h-72 rounded-3xl overflow-hidden mb-5 shadow-card">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700" loading="lazy" />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-accent text-primary text-[10px] uppercase tracking-[0.2em] font-semibold">{p.tag}</div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3.5 w-3.5 text-accent" /> {p.date} · {p.readMinutes} min read
              </div>
              <h3 className="font-display text-2xl text-primary mb-3 group-hover:text-accent transition-smooth">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-smooth">
                Read the full story <ArrowRight className="h-3.5 w-3.5 transition-smooth group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="rounded-3xl gradient-royal text-primary-foreground p-10 md:p-14 text-center shadow-elegant">
          <Heart className="h-10 w-10 mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-4xl mb-3">These stories don't end on this page.</h2>
          <p className="text-primary-foreground/90 max-w-xl mx-auto mb-6">Your donation writes the next chapter — for the next woman, the next family, the next community waiting to be seen.</p>
          <Button asChild variant="hero" size="lg">
            <a href={buildMailto("Donation Inquiry — from the Stories page")} target="_blank" rel="noopener noreferrer"><Heart className="h-4 w-4" /> Donate Now</a>
          </Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default StoriesPage;