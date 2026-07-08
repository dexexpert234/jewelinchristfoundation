import { BookOpen, Clock, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const PublicationsPage = () => (
  <SiteLayout>
    <Seo
      title="Publications | Jewel in Christ Foundation"
      description="Books and writings by Judith Ngozi Agu — sharing wisdom that inspires purpose, leadership, and transformation."
      path="/publications"
    />
    <PageHero
      eyebrow="Thought Leadership"
      title="Publications"
      subtitle="Sharing wisdom that inspires purpose, leadership, and transformation."
    />

    {/* Featured Book */}
    <section className="py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="relative mx-auto w-[300px] md:w-[360px] aspect-[3/4] rounded-2xl shadow-elegant overflow-hidden gradient-royal flex flex-col items-center justify-center p-8 text-center text-primary-foreground border-4 border-accent/50">
            <BookOpen className="h-10 w-10 text-accent mb-5" />
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">A Book by Judith N. Agu</p>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-4">30 Vital Principles for Success</h3>
            <div className="h-px w-16 bg-accent/60 mx-auto mb-4" />
            <p className="text-sm italic text-primary-foreground/85">Discover · Grow · Lead</p>
          </div>
        </div>
        <div className="reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Featured Publication</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">30 Vital Principles for Success</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Written by Judith Ngozi Agu, this practical and inspiring book encourages readers to discover their God-given purpose, embrace personal growth, cultivate leadership, and pursue excellence in every area of life.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            The book reflects many of the same values that inspired the creation of Jewel in Christ Foundation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="hero" size="lg" disabled className="opacity-90"><Clock className="h-4 w-4" /> Coming Soon</Button>
            <Button asChild variant="royal" size="lg"><a href={buildMailto("Publication Inquiry — 30 Vital Principles for Success")} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="h-4 w-4" /></a></Button>
          </div>
        </div>
      </div>
    </section>

    {/* Future publications */}
    <section className="py-20 gradient-soft">
      <div className="container max-w-2xl mx-auto text-center reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">What's Next</p>
        <h2 className="font-display text-4xl text-primary mb-5">Future Publications</h2>
        <p className="text-muted-foreground leading-relaxed">More inspiring resources will be added here as they become available.</p>
      </div>
    </section>
  </SiteLayout>
);

export default PublicationsPage;