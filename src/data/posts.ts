import j1 from "@/assets/jewel-1.jpg";
import j7 from "@/assets/jewel-7.jpg";
import n2 from "@/assets/gallery-new-2.jpg";

export type Post = {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readMinutes: number;
  content: string[];
};

export const posts: Post[] = [
  {
    slug: "vocational-training-rewriting-futures",
    tag: "Impact Story",
    date: "Mar 12, 2026",
    title: "How Vocational Training is Rewriting Futures",
    excerpt: "Meet women whose lives were transformed by our latest cohort and outreach in Abeokuta.",
    image: j1,
    readMinutes: 6,
    content: [
      "When Blessing walked into our Abeokuta training centre, she carried two children, a bag of borrowed clothes, and a quiet fear that her story was already finished. Eight months earlier she had lost her husband. The market stall she once helped run had been swallowed by debt. Her children were learning to sleep on an empty stomach.",
      "What Blessing didn't know — what most women in her shoes don't know — is that one skill, learned with dignity, can re-open a door that grief has slammed shut. Today she runs a small fashion stall that feeds her family three meals a day and pays her children's school fees in full.",
      "Our vocational programme is not charity. It is restoration. Every cohort we train, every sewing machine we hand over, every kitchen we equip — is a quiet rebellion against the lie that says some lives are not worth investing in.",
      "But we cannot do this alone. Each woman we train costs us about ₦85,000 — tuition, materials, mentorship, and three months of follow-up support. For the price of a single dinner out, you can move one mother from surviving to thriving.",
      "Will you stand with her? Your gift today is not a transaction. It is a chapter in someone's rewritten story.",
    ],
  },
  {
    slug: "school-outreach-program",
    tag: "Outreach",
    date: "Feb 28, 2026",
    title: "Sharing Joy: School Outreach Program",
    excerpt: "A look back at our recent visit to pupils — building hope, books, and bright futures.",
    image: j7,
    readMinutes: 4,
    content: [
      "There is a particular kind of silence that falls over a classroom when children realise the strangers walking in have not come to take, but to give. We saw that silence break into laughter the moment we unpacked the books, the balloons, and the warm meals.",
      "For many of these pupils, this was the first time an adult outside their family told them, in words and in deeds, 'You matter. Your future matters.' Some of them held their new notebooks the way a person holds something precious — because for them, it was.",
      "We don't measure success by photos. We measure it by the child who finally raises her hand in class. By the boy who decides he wants to become a doctor. By the teacher who whispers, 'Please come back.'",
      "Outreach like this costs us about ₦300,000 per school — books, meals, mentorship, and transportation for our volunteers. Every naira goes directly to the children. Will you sponsor the next classroom?",
    ],
  },
  {
    slug: "international-womens-day-2026",
    tag: "Field Notes",
    date: "Feb 04, 2026",
    title: "International Women's Day 2026 — A Day of Honour",
    excerpt: "Our IWD celebration brought together women of impact, awards, and a renewed call to action.",
    image: n2,
    readMinutes: 5,
    content: [
      "Every year on International Women's Day, we pause our outreach to do something equally sacred — we honour the women who have already done the work. The mothers who raised entire villages. The teachers who taught for half a salary. The widows who refused to disappear.",
      "This year's celebration in Abeokuta gathered over two hundred women — beneficiaries, mentors, partners, and dignitaries — under one roof. We presented awards, shared meals, and listened to stories that should have made the national news but never will.",
      "Mrs. Titi Akinlawon, SAN, reminded us in her keynote that 'a woman uplifted is a generation transformed.' We saw that truth in every face in the room.",
      "But here is what stayed with us: the women we honoured did not ask for applause. They asked for one thing — that we keep going. That we keep reaching the next Blessing, the next widow, the next girl in the village no one visits.",
      "Will you help us keep that promise? Every donation, every prayer, every share of our story is a vote for a world where no woman has to do it alone.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);