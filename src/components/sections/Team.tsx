import { UserCircle2 } from "lucide-react";
import nkechi from "@/assets/team-nkechi.jpg";
import bello from "@/assets/team-bello.jpg";
import emmanuella from "@/assets/team-emmanuella.jpg";
import sawyer from "@/assets/team-sawyer.jpg";
import nwaolisa from "@/assets/team-nwaolisa.jpg";
import ann from "@/assets/team-ann.jpg";
import joterio from "@/assets/team-joterio.jpg";
import jacob from "@/assets/advisor-jacob.jpg";
import olateju from "@/assets/team-olateju.jpg";
import kingsley from "@/assets/advisor-kingsley.jpg";
import chinwe from "@/assets/advisor-chinwe.jpg";
import uzoma from "@/assets/advisor-uzoma.jpg";

type Member = {
  name?: string;
  role: string;
  image?: string;
  bio: string;
  placeholder?: boolean;
};

const advisoryBoard: Member[] = [
  {
    name: "Mr. Jacob Agu",
    role: "Advisory Board Member",
    image: jacob,
    bio: "A trusted counsel and pillar of the foundation, Mr. Jacob Agu brings decades of wisdom, integrity, and family-rooted leadership to the advisory table — anchoring our mission in faith, accountability, and long-term vision.",
  },
  {
    name: "Rev. Fr. Dr. Joterio A. Aghoja, C.Ss.R.",
    role: "Advisory Board Member",
    image: joterio,
    bio: "A spiritual mentor and scholar whose ministry blends faith, ethics, and social justice. Offers wise counsel and pastoral guidance that anchor the foundation's work in compassion, dignity, and Christ-centred service.",
  },
  {
    name: "Mrs. Chinwe Gloria Ezumah",
    role: "Advisory Board Member",
    image: chinwe,
    bio: "Accountant, Civil Servant and Humanitarian with a heart of gold. Deeply committed to assisting the poor and less privileged. A mentor focused on capacity building and lifting up the next generation of leaders.",
  },
  {
    name: "Mrs. Ann Nkiru Chinaka",
    role: "Advisory Board Member",
    image: ann,
    bio: "A community-driven NGO advisor passionate about humanitarian service, empowerment, and sustainable development. Advocates for vulnerable populations, fosters impactful partnerships, and drives meaningful change with integrity, compassion, and innovation.",
  },
  {
    name: "Engr. Kingsley Osita Okonkwo, PhD",
    role: "Advisory Board Member",
    image: kingsley,
    bio: "Engineer, philanthropist and inspirational speaker dedicated to human development and youth empowerment. His leadership and generosity continue to inspire excellence and purpose across every life the foundation touches.",
  },
  {
    name: "Mrs. Uzoma Imelda Onodi",
    role: "Advisory Board Member",
    image: uzoma,
    bio: "Educationist and mentor with over 16 years of experience in Early Years and Primary Education. Passionate about nurturing young minds, building confidence in learning, and helping every child reach their full potential through compassionate guidance and dedicated support.",
  },
];

const team: Member[] = [
  {
    name: "Nkechi Ahurah",
    role: "Head, Programs, Research & Funding",
    image: nkechi,
    bio: "Leads program design, research, and resource mobilisation — translating mission into measurable community impact. Brings strategic insight, operational rigour, and a deep heart for women's empowerment to every project she oversees.",
  },
  {
    role: "Director, Finance",
    placeholder: true,
    bio: "This seat is reserved for our incoming Finance Director — a steward of resources committed to transparency, accountability, and the responsible growth of every gift entrusted to the foundation.",
  },
  {
    name: "Bello Taiwo Emmanuel",
    role: "Head, I.T",
    image: bello,
    bio: "Architects the foundation's digital backbone — secure systems, reliable infrastructure, and tools that help our team serve more women, more effectively, every single day.",
  },
  {
    name: "Mrs. Ofili Emmanuella Chioma",
    role: "Head, Finance & Administration",
    image: emmanuella,
    bio: "Oversees finance and administration with precision and integrity — safeguarding resources, sustaining operations, and ensuring every gift is stewarded toward maximum impact for the women and communities we serve.",
  },
  {
    name: "Mrs. Sawyer Adesola Elizabeth",
    role: "Head, Welfare & Logistics",
    image: sawyer,
    bio: "Coordinates the care and logistics that move outreach from plan to reality — ensuring beneficiaries are met with dignity, comfort, and timely support at every touchpoint.",
  },
  {
    name: "Nwaolisa Ebelechukwu Theresa",
    role: "Head, Project Monitoring & Evaluation",
    image: nwaolisa,
    bio: "Tracks outcomes, measures impact, and turns data into learning — helping the foundation stay accountable to beneficiaries, donors, and the communities we serve.",
  },
  {
    name: "Olateju Esther Taiwo",
    role: "Head, Fund Raising / Grants",
    image: olateju,
    bio: "Leads fundraising and grants strategy — building partnerships, mobilising resources, and unlocking the support that turns vision into impact for the women and communities we serve.",
  },
];

const Card = ({ m }: { m: Member }) => (
  <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth flex flex-col reveal">
    <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
      {m.image ? (
        <img
          src={m.image}
          alt={`${m.name} — ${m.role}`}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-700"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground p-6 text-center">
          <UserCircle2 className="h-20 w-20 mb-3 opacity-40" />
          <p className="text-xs uppercase tracking-[0.3em]">{m.placeholder ? "Position Open" : "Photo Coming Soon"}</p>
          {m.name && <p className="text-sm mt-2 italic">{m.name}</p>}
        </div>
      )}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="font-display text-xl text-primary mb-1">{m.name ?? "To Be Announced"}</h3>
      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{m.role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
    </div>
  </article>
);

const Team = () => (
  <>
    <section id="advisory-board" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Wisdom & Counsel</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            Advisory <em className="text-gradient-royal not-italic font-semibold">Board Members</em>
          </h2>
          <p className="text-muted-foreground">
            A distinguished circle of leaders, scholars, and humanitarians whose counsel shapes the integrity and reach of every initiative we undertake.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryBoard.map((m, i) => <Card key={i} m={m} />)}
        </div>
      </div>
    </section>

    <section id="our-team" className="py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Our People</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
            Our <em className="text-gradient-royal not-italic font-semibold">Team</em>
          </h2>
          <p className="text-muted-foreground">
            The hands, hearts, and minds behind every program — leading with vision, serving with humility, and showing up for the women and communities we love.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((m, i) => <Card key={i} m={m} />)}
        </div>
      </div>
    </section>
  </>
);

export default Team;