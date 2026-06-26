import { HandHeart, Heart, Users, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const ways = [
  { icon: Users, t: "Mentor", d: "Walk alongside a woman or young person learning new skills." },
  { icon: Clock, t: "Give Your Time", d: "Support outreach events, training sessions, and community programs." },
  { icon: Sparkles, t: "Share Your Skills", d: "Offer your professional expertise — design, finance, education, health, more." },
];

const VolunteerPage = () => (
  <SiteLayout>
    <Seo
      title="Volunteer | Jewel in Christ Foundation"
      description="Volunteer with Jewel in Christ Foundation. Mentor, give your time, or share your skills to empower women and transform communities."
      path="/volunteer"
    />
    <PageHero
      eyebrow="Join the Mission"
      title="Become a Volunteer"
      subtitle="Your time, your skills, and your heart can change a life. Join a community of people writing the next chapter of hope."
    />

    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
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
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-5">Ready to Start?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Send us a quick message and we'll respond with the next volunteer opportunity that matches your gifts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg"><a href={buildMailto("Volunteer with Jewel in Christ Foundation", "Hello, I'd like to volunteer. Here is a little about me and my availability:")} target="_blank" rel="noopener noreferrer"><HandHeart className="h-4 w-4" /> Volunteer Now</a></Button>
            <Button asChild variant="royal" size="lg"><Link to="/donate"><Heart className="h-4 w-4" /> Support Our Mission</Link></Button>
          </div>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default VolunteerPage;