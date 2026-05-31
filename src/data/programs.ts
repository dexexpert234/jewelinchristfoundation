import { Scissors, BookOpen, Briefcase, HeartHandshake, Globe2, LucideIcon } from "lucide-react";
import j1 from "@/assets/jewel-1.jpg";
import j2 from "@/assets/jewel-2.jpg";
import j3 from "@/assets/jewel-3.jpg";
import j4 from "@/assets/jewel-4.jpg";
import j8 from "@/assets/jewel-8.jpg";

export type Program = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  story: string[];
  outcomes: string[];
  costPerBeneficiary: string;
};

export const programs: Program[] = [
  {
    slug: "vocational-training",
    icon: Scissors,
    title: "Vocational Training",
    desc: "Fashion design, culinary arts, beauty services, and handicrafts that build marketable skills.",
    image: j3,
    costPerBeneficiary: "₦85,000 trains one woman for 6 months",
    outcomes: ["Six-month immersive curriculum", "Starter toolkit on graduation", "Mentor pairing for one year", "Job placement support"],
    story: [
      "Every stitch sewn in our workshops is a refusal to accept poverty as destiny. We train widows, single mothers, and survivors of violence in trades that the local market actually rewards — fashion, catering, beauty, and traditional crafts.",
      "The goal is never just a certificate. It is a livelihood. We follow each graduate for twelve months, helping them turn skill into income — and income into independence.",
      "Will you sponsor a place in the next cohort? One woman trained changes the trajectory of an entire household.",
    ],
  },
  {
    slug: "entrepreneurship",
    icon: Briefcase,
    title: "Entrepreneurship Development",
    desc: "Business planning, financial literacy, marketing, and digital business skills.",
    image: j4,
    costPerBeneficiary: "₦60,000 funds one entrepreneurship track",
    outcomes: ["12-week business curriculum", "Pitch coaching & feedback", "Access to seed grants", "Peer accountability circles"],
    story: [
      "A great idea trapped inside a hungry household never reaches the market. We unlock those ideas — teaching women how to plan, price, sell, and scale.",
      "From WhatsApp commerce to small-batch production, our graduates are quietly building the businesses that will employ their daughters.",
      "Your gift seeds an enterprise — and an enterprise seeds a community.",
    ],
  },
  {
    slug: "economic-empowerment",
    icon: BookOpen,
    title: "Economic Empowerment",
    desc: "Microfinance, grants for women-led businesses, and business incubation.",
    image: j1,
    costPerBeneficiary: "₦50,000 micro-grants change one life",
    outcomes: ["Direct micro-grants", "Group savings circles", "Business incubation desk", "Financial literacy workshops"],
    story: [
      "A loan you cannot repay is just another chain. We give grants — not loans — to women whose only obstacle to success is a small amount of capital they have never been given.",
      "₦50,000 in the right hands can become a poultry pen, a roasting cart, a sewing corner. We have watched it happen, again and again.",
      "Fund a micro-grant today and watch a woman walk taller tomorrow.",
    ],
  },
  {
    slug: "support-advocacy",
    icon: HeartHandshake,
    title: "Support & Advocacy",
    desc: "Mentorship, networking events, and policy advocacy for sustainable change.",
    image: j2,
    costPerBeneficiary: "Your voice multiplies ours",
    outcomes: ["Mentor matching programme", "Policy roundtables", "Survivor support circles", "Awareness campaigns"],
    story: [
      "Skills without protection is a half-built bridge. We sit at the policy table, in courtrooms, and in living rooms — pushing for the laws and the listening that women in our communities deserve.",
      "We walk with survivors of gender-based violence through the long road of recovery — legal, emotional, spiritual, and economic.",
      "Stand with us. Your support funds a quieter, longer kind of work.",
    ],
  },
  {
    slug: "community-engagement",
    icon: Globe2,
    title: "Community Engagement",
    desc: "Outreach programs and strategic partnerships across communities.",
    image: j8,
    costPerBeneficiary: "₦300,000 reaches one full community",
    outcomes: ["School outreach drives", "Food relief distribution", "Faith-based partnerships", "Annual dignity campaigns"],
    story: [
      "We don't parachute in. We build relationships. Every community we serve, we serve again — listening before we lift, partnering before we promise.",
      "From school visits to food relief, our outreach is the visible face of an invisible commitment: no one is too small to be seen.",
      "Help us reach the next community waiting for someone to show up.",
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);