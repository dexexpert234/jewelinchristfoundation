import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Calendar, Clock, HandHeart, Heart, Sparkles, ShoppingCart, Users } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import Programs from "@/components/sections/Programs";
import Events from "@/components/sections/Events";
import Donate from "@/components/sections/Donate";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";
import { buildMailto, CONTACT_WHATSAPP } from "@/lib/contact";
import bookCover from "@/assets/book-30-principles.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

const ways = [
  { icon: Users, t: "Mentor", d: "Walk alongside a woman or young person learning new skills." },
  { icon: Clock, t: "Give Your Time", d: "Support outreach events, training sessions, and community programs." },
  { icon: Sparkles, t: "Share Your Skills", d: "Offer your professional expertise — design, finance, education, health, more." },
];

const SectionDivider = ({ id, eyebrow, title, subtitle }: { id: string; eyebrow: string; title: string; subtitle?: string }) => (
  <div id={id} className="text-center max-w-2xl mx-auto pt-20 pb-4 reveal">
    <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">{eyebrow}</p>
    <h2 className="font-display text-4xl md:text-5xl text-primary mb-4">{title}</h2>
    {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
  </div>
);

const ProgramsPage = () => {
  useReveal();
  return (
    <SiteLayout>
      <Seo
        title="Programs, Events, Stories & Ways to Give | Jewel in Christ Foundation"
        description="Explore our programs, upcoming events, impact stories, volunteer opportunities, publications, and ways to support the mission."
        path="/programs"
      />
      <PageHero
        eyebrow="Engage With Us"
        title="Programs & Engagement"
        subtitle="Explore our programs, upcoming events, impact stories, ways to volunteer, our publications, and how to give."
      />

      {/* PROGRAMS */}
      <Programs />

      {/* EVENTS */}
      <Events />

      {/* STORIES */}
      <section id="stories" className="py-28 gradient-soft">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16 reveal">
            <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">From the Field</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Stories That <em className="text-gradient-royal not-italic font-semibold">Move Us</em></h2>
            <p className="text-muted-foreground">Behind every statistic is a name, a face, and a future. Read the stories driving our work — and let them move you to action.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <Link key={p.slug} to={`/stories/${p.slug}`} className="group block reveal">
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
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-28 bg-background">
        <div className="container">
          <SectionDivider id="volunteer-top" eyebrow="Join the Mission" title="Volunteer Opportunities" subtitle="Your time, your skills, and your heart can change a life. Join a community of people writing the next chapter of hope." />
          <div className="grid sm:grid-cols-3 gap-6 mt-10 mb-14">
            {ways.map(({ icon: Icon, t, d }) => (
              <div key={t} className="reveal bg-card rounded-2xl p-7 border border-border shadow-card hover:shadow-elegant transition-smooth">
                <div className="h-12 w-12 rounded-xl gradient-royal flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-display text-xl text-primary mb-2">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-center reveal">
            <h3 className="font-display text-3xl text-primary mb-5">Ready to Start?</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Send us a quick message and we'll respond with the next volunteer opportunity that matches your gifts.
            </p>
            <Button asChild variant="hero" size="lg"><a href={buildMailto("Volunteer with Jewel in Christ Foundation", "Hello, I'd like to volunteer. Here is a little about me and my availability:")} target="_blank" rel="noopener noreferrer"><HandHeart className="h-4 w-4" /> Volunteer Now</a></Button>
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-28 gradient-soft">
        <div className="container">
          <SectionDivider id="publications-top" eyebrow="Thought Leadership" title="Publications" subtitle="Sharing wisdom that inspires purpose, leadership, and transformation." />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-10">
            <div className="reveal">
              <img
                src={bookCover.url}
                alt="30 Vital Principles for Success by Judith Agu"
                className="mx-auto w-[300px] md:w-[360px] h-auto rounded-2xl shadow-elegant"
                loading="lazy"
              />
            </div>
            <div className="reveal">
              <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Featured Publication</p>
              <h3 className="font-display text-3xl md:text-4xl text-primary mb-6">30 Vital Principles for Success</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Written by Judith Ngozi Agu, this practical and inspiring book encourages readers to discover their God-given purpose, embrace personal growth, cultivate leadership, and pursue excellence in every area of life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The book reflects many of the same values that inspired the creation of Jewel in Christ Foundation.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero" size="lg">
                  <a
                    href={`https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent("Hello, I'd like to buy '30 Vital Principles for Success' by Judith Agu. Please share purchase details.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="h-4 w-4" /> Buy Now
                  </a>
                </Button>
                <Button asChild variant="royal" size="lg"><a href={buildMailto("Publication Inquiry — 30 Vital Principles for Success")} target="_blank" rel="noopener noreferrer">Learn More <ArrowRight className="h-4 w-4" /></a></Button>
              </div>
              <p className="text-sm text-accent italic mt-6">More inspiring resources will be added here as they become available.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DONATE */}
      <Donate />
    </SiteLayout>
  );
};

export default ProgramsPage;