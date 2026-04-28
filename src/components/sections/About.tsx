import { Eye, Target, Award } from "lucide-react";
import leader from "@/assets/leader.jpg";

const About = () => (
  <section id="about" className="py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">About Us</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Our <em className="text-gradient-royal not-italic font-semibold">Story</em></h2>
        <p className="text-muted-foreground leading-relaxed">
          Jewel in Christ Foundation is a faith-driven NGO advancing economic empowerment, social justice, and community transformation. Rooted in compassion, we walk with women and the marginalized to build dignified, sustainable futures.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="group p-10 rounded-3xl bg-card border border-border shadow-card hover:shadow-elegant transition-smooth">
          <div className="h-14 w-14 rounded-2xl gradient-royal flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
            <Eye className="h-7 w-7 text-accent" />
          </div>
          <h3 className="font-display text-3xl text-primary mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed text-lg italic">
            "Empowered Women, Thriving Families and Communities."
          </p>
        </div>
        <div className="group p-10 rounded-3xl gradient-royal text-primary-foreground shadow-elegant hover:shadow-gold transition-smooth">
          <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
            <Target className="h-7 w-7 text-primary" />
          </div>
          <h3 className="font-display text-3xl text-accent mb-4">Our Mission</h3>
          <p className="leading-relaxed text-primary-foreground/90">
            To economically empower women through skills training, entrepreneurship support, and advocacy — promoting social justice, equality, and sustainable development, ultimately strengthening families and communities.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-5 gap-10 items-center bg-secondary rounded-3xl p-8 md:p-14">
        <div className="md:col-span-2">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img src={leader} alt="Nkechi Ahurah, Programs Director" className="w-full h-[420px] object-cover" loading="lazy" width={800} height={1000} />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/95 to-transparent text-primary-foreground">
              <div className="text-accent text-xs uppercase tracking-[0.3em] mb-1">Programs Director</div>
              <div className="font-display text-2xl">Nkechi Ahurah</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="inline-flex items-center gap-2 text-accent text-xs uppercase tracking-[0.4em] mb-4">
            <Award className="h-4 w-4" /> Leadership
          </div>
          <h3 className="font-display text-4xl text-primary mb-6">Led with Heart, Driven by Purpose</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Under the leadership of Nkechi Ahurah, our Programs Director, Jewel in Christ Foundation has grown into a movement of restoration — where every program is designed with empathy, expertise, and an unwavering belief in human dignity.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Together with a passionate team of staff, volunteers, and partners, we serve communities across Nigeria and beyond — bridging gaps, breaking cycles, and building futures that flourish.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default About;
