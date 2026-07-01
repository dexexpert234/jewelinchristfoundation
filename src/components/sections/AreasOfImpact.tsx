import { Users, Home, Globe2 } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Empowering People",
    items: [
      "Women Empowerment",
      "Youth Mentorship",
      "Education",
      "Skills Development",
      "Leadership Development",
      "Economic Empowerment",
    ],
  },
  {
    icon: Home,
    title: "Strengthening Families",
    items: [
      "Family Support",
      "Counseling",
      "Humanitarian Assistance",
      "Care for Vulnerable Individuals",
      "Child Welfare",
      "Family Development",
    ],
  },
  {
    icon: Globe2,
    title: "Transforming Communities",
    items: [
      "Community Outreach",
      "Peacebuilding",
      "Advocacy",
      "Volunteerism",
      "Community Development",
      "Outreach Programs",
    ],
  },
];

const AreasOfImpact = () => (
  <section id="areas-of-impact" className="py-20 md:py-28 bg-secondary/40">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center mb-14 reveal">
        <p className="text-primary text-xs uppercase tracking-[0.4em] mb-4">Our Mission at a Glance</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6">Our Areas of Impact</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          At Jewels-in-Christ Foundation, every initiative we undertake is guided by one mission:
        </p>
        <p className="font-luxe text-xl md:text-2xl text-foreground italic mb-4">
          Empowering People. Strengthening Families. Transforming Communities.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Our programs may take different forms, but together they work toward one common purpose: creating lasting positive change in the lives of individuals, families, and communities.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map(({ icon: Icon, title, items }, idx) => (
          <div
            key={title}
            className="reveal bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elegant transition-smooth"
            style={{ transitionDelay: `${idx * 80}ms` }}
          >
            <div className="h-14 w-14 rounded-2xl gradient-royal flex items-center justify-center mb-6 shadow-glow">
              <Icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-5 text-foreground">{title}</h3>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreasOfImpact;