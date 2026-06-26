import { Heart } from "lucide-react";

const values = [
  {
    letter: "H",
    title: "Honesty",
    text: "We uphold truth, integrity, and transparency in every relationship, decision, and responsibility entrusted to us.",
  },
  {
    letter: "E",
    title: "Empathy",
    text: "We listen with compassion, understand with humility, and serve people with genuine love.",
  },
  {
    letter: "A",
    title: "Accountability",
    text: "We take responsibility for our actions, steward every resource faithfully, and remain accountable to our communities, partners, and donors.",
  },
  {
    letter: "R",
    title: "Responsibility",
    text: "We are committed to serving with excellence, honoring every commitment, and creating meaningful opportunities for those we serve.",
  },
  {
    letter: "T",
    title: "Transformation",
    text: "We strive to create lasting positive change that empowers individuals, strengthens families, and transforms communities.",
  },
];

const CoreValues = () => (
  <section id="values" className="py-28 bg-secondary">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16 reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">What We Stand For</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Our <em className="text-gradient-royal not-italic font-semibold">HEART</em> Values
        </h2>
        <p className="text-muted-foreground">
          Everything we do begins with HEART — because lasting transformation starts with genuine care for people.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {values.map(({ letter, title, text }) => (
          <div
            key={title}
            className="reveal bg-card rounded-3xl p-8 border border-border shadow-card hover:shadow-elegant transition-smooth"
          >
            <div className="relative h-14 w-14 rounded-2xl gradient-royal flex items-center justify-center mb-5">
              <Heart className="absolute h-7 w-7 text-accent/40" />
              <span className="relative font-display text-2xl text-accent">{letter}</span>
            </div>
            <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 max-w-3xl mx-auto rounded-3xl p-8 md:p-10 gradient-royal text-primary-foreground text-center shadow-elegant reveal">
        <p className="font-display text-xl md:text-2xl italic leading-relaxed">
          "At Jewel in Christ Foundation, HEART is more than our values. It is the way we serve. It is the way we lead. It is the way we transform lives."
        </p>
      </div>
    </div>
  </section>
);

export default CoreValues;