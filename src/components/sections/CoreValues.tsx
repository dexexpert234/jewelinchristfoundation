import { ShieldCheck, ScaleIcon, HeartHandshake, TrendingUp, HandHeart } from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Honesty",
    text: "We communicate and act with integrity, guided by truth, openness, and transparency in everything we do.",
  },
  {
    icon: ScaleIcon,
    title: "Accountability",
    text: "We take responsibility for our actions and remain committed to the trust placed in us by beneficiaries, partners, donors, and one another.",
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    text: "We listen with understanding and design our programs around the real experiences, needs, and voices of the communities we serve.",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    text: "We are driven by meaningful, sustainable change that improves lives and strengthens communities for the long term.",
  },
  {
    icon: HandHeart,
    title: "Care",
    text: "We treat every individual with dignity and respect, fostering a safe, inclusive, and supportive environment for beneficiaries, staff, volunteers, and partners.",
  },
];

const CoreValues = () => (
  <section id="values" className="py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">What We Stand For</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Our <em className="text-gradient-royal not-italic font-semibold">Core Values</em>
        </h2>
        <p className="text-muted-foreground">
          The principles that anchor every decision, program, and relationship at Jewel in Christ Foundation.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="h-12 w-12 rounded-2xl gradient-royal flex items-center justify-center mb-5">
              <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreValues;