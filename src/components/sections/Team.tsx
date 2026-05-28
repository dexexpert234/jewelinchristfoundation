import { UserCircle2 } from "lucide-react";
import nkechi from "@/assets/team-nkechi.jpg";
import bello from "@/assets/team-bello.jpg";
import emmanuella from "@/assets/team-emmanuella.jpg";
import sawyer from "@/assets/team-sawyer.jpg";
import nwaolisa from "@/assets/team-nwaolisa.jpg";
import ann from "@/assets/team-ann.jpg";
import joterio from "@/assets/team-joterio.jpg";

type Member = {
  name?: string;
  role: string;
  image?: string;
  bio: string;
  placeholder?: boolean;
};

const members: Member[] = [
  {
    name: "Nkechi Ahurah",
    role: "Director, Programs",
    image: nkechi,
    bio: "Leads program design and execution across all initiatives, translating mission into measurable community impact. Brings strategic insight, operational rigour, and a deep heart for women's empowerment to every project she oversees.",
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
    role: "Head, HR / Communications",
    image: emmanuella,
    bio: "Champions our people and our voice — nurturing a thriving team culture while telling the foundation's story with clarity, warmth, and purpose across every channel.",
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
    role: "Head, Research, Grant & Funding",
    placeholder: true,
    bio: "This seat is reserved for our incoming Head of Research, Grant & Funding — a strategist who will unlock new partnerships and sustainable resources for the mission.",
  },
  {
    name: "Mrs. Ann Nkiru Chinaka",
    role: "Advisory Board Committee Member",
    image: ann,
    bio: "A community-driven NGO advisor passionate about humanitarian service, empowerment, and sustainable development. Advocates for vulnerable populations, fosters impactful partnerships, and drives meaningful change. Brings integrity, compassion, and innovation to every role, inspiring lasting organizational excellence.",
  },
  {
    name: "Rev. Fr. Dr. Joterio A. Aghoja, C.Ss.R.",
    role: "Advisory Board Member",
    image: joterio,
    bio: "A spiritual mentor and scholar whose ministry blends faith, ethics, and social justice. Offers wise counsel and pastoral guidance that anchor the foundation's work in compassion, dignity, and Christ-centred service.",
  },
];

const Team = () => (
  <section id="team" className="py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Leadership & Advisory Board</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">
          Meet the <em className="text-gradient-royal not-italic font-semibold">Team</em>
        </h2>
        <p className="text-muted-foreground">
          A dedicated circle of leaders, professionals, and advisors guiding Jewel in Christ Foundation with vision, integrity, and heart.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <article
            key={i}
            className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth flex flex-col"
          >
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
                  <p className="text-xs uppercase tracking-[0.3em]">Position Open</p>
                  <p className="text-sm mt-2 italic">Name coming soon</p>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 rounded-full backdrop-blur-sm">
                {m.role}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-display text-xl text-primary mb-1">
                {m.name ?? "To Be Announced"}
              </h3>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">{m.role}</p>
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">{m.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Team;