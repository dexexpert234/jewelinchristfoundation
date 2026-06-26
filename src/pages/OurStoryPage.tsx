import { Link } from "react-router-dom";
import { ChevronDown, Heart, HandHeart, Quote, Calendar, Sparkles } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import Seo from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";
import heroImg from "@/assets/gallery-new-2.jpg";
import beginImg from "@/assets/gallery-extra-3.jpg";
import marketImg from "@/assets/gallery-extra-7.jpg";
import unityImg from "@/assets/hero-3.jpg";

const founders = [
  "Erinma Ozoagu",
  "Gina Anyanwu",
  "Ngozi Chikwendu",
  "Chinwe Ezepue",
  "Nkechinyelu Ezieke",
  "Anuli Okpala",
  "Olohi Efekemo",
  "Uzoma Onodi",
  "Chinwe Ezuma",
  "Beta Eboigbe",
  "Bene Ugwu",
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const OurStoryPage = () => (
  <SiteLayout>
    <Seo
      title="Our Story | Jewel in Christ Foundation"
      description="How a single ₦3,000 act of kindness in 2010 grew into Jewel in Christ Foundation — a movement of compassion, service, and hope."
      path="/our-story"
    />

    {/* HERO */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Women and children of the Jewel in Christ community" className="w-full h-full object-cover" loading="eager" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85" />
      </div>
      <div className="container relative z-10 text-center text-primary-foreground py-24 max-w-3xl mx-auto">
        <p className="text-accent text-xs uppercase tracking-[0.5em] mb-5">A Mission Born of Compassion</p>
        <h1 className="font-display text-5xl md:text-7xl mb-6 leading-tight">Our Story</h1>
        <p className="text-xl md:text-2xl italic text-primary-foreground/95 mb-6">
          Every great movement begins with a simple act of kindness.
        </p>
        <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto">
          Jewel in Christ Foundation was not founded in a boardroom or born from a business plan. It began with compassion. It began with one woman. It began with one opportunity. It began with a simple act of kindness that changed a life forever.
        </p>
      </div>
      <a href="#begin" aria-label="Scroll to story" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground/80 hover:text-primary-foreground animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>

    {/* SECTION 1 */}
    <section id="begin" className="py-24 md:py-28 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <img src={beginImg} alt="Community engagement in 2010" className="rounded-3xl shadow-elegant w-full object-cover h-[480px]" loading="lazy" decoding="async" />
        </div>
        <div className="reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Chapter One</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Where It All Began</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>One day in 2010, after returning home from an event, Barrister Judith Ngozi Agu was on her way to visit a friend when she met a woman in a neighborhood.</p>
            <p>The woman explained that she was tired of staying at home without work. She desperately wanted to start a small business so she could support herself and her family, but she had no capital to begin.</p>
            <p>At that moment, Barrister Judith Agu did not have enough resources to establish a business for her. Because she had just returned from a long day, she simply asked the woman to visit her office the following Monday so they could discuss possible assistance.</p>
            <p>Before leaving, she opened her purse. She found only ₦5,000. Without hesitation, she gave the woman ₦3,000 as a small token to support her immediate needs.</p>
            <p className="text-primary font-medium">At the time, she believed it was simply an act of kindness. She had no idea it would become the beginning of something extraordinary.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 2 */}
    <section className="py-24 md:py-28 gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal order-2 lg:order-1">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Chapter Two</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">A Life Changed</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>When Monday arrived, Barrister Judith Agu waited for the woman to visit her office. She never came.</p>
            <p>Some time later, while passing through the same neighborhood again, Barrister Judith Agu met the woman's daughter. Curious, she asked why her mother never came to the office.</p>
            <p>The young girl smiled and explained something that completely changed Barrister Judith Agu's perspective. Her mother had used the ₦3,000 to buy ingredients for akara (bean cake). She began selling akara in the local market. From that small beginning, she started earning an income and was able to support her family.</p>
            <p>Barrister Judith Agu was deeply moved. What she believed was merely a small gift had become someone else's opportunity.</p>
          </div>
          <blockquote className="mt-8 p-6 md:p-8 rounded-2xl bg-card border-l-4 border-accent shadow-card">
            <Quote className="h-6 w-6 text-accent mb-3" />
            <p className="font-display text-lg md:text-xl text-primary italic leading-relaxed">
              "Sometimes people do not need enormous resources to change their lives. Sometimes they simply need someone who believes in them."
            </p>
          </blockquote>
        </div>
        <div className="reveal order-1 lg:order-2">
          <img src={marketImg} alt="A local market — where a small gift became a livelihood" className="rounded-3xl shadow-elegant w-full object-cover h-[520px]" loading="lazy" decoding="async" />
        </div>
      </div>
    </section>

    {/* SECTION 3 */}
    <section className="py-24 md:py-28" style={{ background: "hsl(40 60% 96%)" }}>
      <div className="container max-w-3xl mx-auto text-center reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Chapter Three</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">From Compassion to a Calling</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>That experience stayed in Barrister Judith Agu's heart. Helping people had always been part of who she was.</p>
          <p>She had long carried a passion for empowering women, supporting struggling families, mentoring young people, and restoring hope to vulnerable members of society.</p>
          <p>After reflecting on what had happened, she realized that if one small act of kindness could transform one life, then a coordinated effort could transform many lives.</p>
          <p className="text-primary font-medium">That realization became the seed that would eventually grow into Jewel in Christ Foundation.</p>
        </div>
      </div>
    </section>

    {/* SECTION 4 — Founding supporters */}
    <section className="py-24 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Chapter Four</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Building the Vision Together</h2>
          <p className="text-muted-foreground leading-relaxed">
            No great vision grows alone. Barrister Judith Agu shared her dream with trusted friends who immediately believed in the mission and chose to become part of something bigger than themselves. Together they contributed their ideas, encouragement, resources, and commitment to establishing what would become Jewel in Christ Foundation.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {founders.map((name) => (
            <div key={name} className="reveal bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth text-center">
              <div className="h-16 w-16 mx-auto rounded-full gradient-royal flex items-center justify-center mb-4">
                <span className="font-display text-xl text-accent">{initials(name)}</span>
              </div>
              <p className="font-display text-lg text-primary leading-tight">{name}</p>
              <p className="text-xs text-muted-foreground mt-1">Founding Supporter</p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-center text-muted-foreground mt-12 leading-relaxed reveal">
          The founding meetings were held in Barrister Judith Agu's home, where every conversation centered around one purpose: creating opportunities that would restore hope, dignity, and purpose to people in need.
        </p>
      </div>
    </section>

    {/* SECTION 5 — Milestone */}
    <section className="py-20 gradient-royal text-primary-foreground">
      <div className="container text-center max-w-2xl mx-auto reveal">
        <Calendar className="h-10 w-10 mx-auto text-accent mb-5" />
        <p className="text-accent text-xs uppercase tracking-[0.5em] mb-4">A Milestone in History</p>
        <h2 className="font-display text-5xl md:text-6xl mb-3">October 8, 2010</h2>
        <p className="text-xl text-primary-foreground/90 italic mb-8">The Beginning of the Journey</p>
        <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
          <p>With the support of committed friends and the participation of guest speaker Mr. Efekemo Ode Andrew Eyeoyibo, the foundation officially began its journey.</p>
          <p>Although the resources were limited, the vision was limitless. That day marked the beginning of a mission that has continued to touch lives for more than sixteen years.</p>
        </div>
      </div>
    </section>

    {/* SECTION 6 — Name origin */}
    <section className="py-24 md:py-28 bg-background">
      <div className="container max-w-4xl mx-auto reveal">
        <div className="text-center mb-12">
          <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Chapter Six</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">How Our Name Was Born</h2>
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>During one of the early planning meetings, the team discussed possible names for the organization. One suggestion quickly gained everyone's approval: <span className="text-primary font-semibold">"Precious Jewel Foundation."</span></p>
          <p>However, while driving home after the meeting, Barrister Judith Agu noticed a billboard belonging to another organization already using a similar name. The following day she shared the discovery with the team. Everyone agreed they needed a unique identity.</p>
          <p>Since they all believed that every person is precious in God's sight and that every life is a jewel created by Him, they decided to keep the word "Jewel."</p>
          <p>Another suggestion soon emerged. <span className="text-primary font-semibold">Jewel in Christ Foundation.</span></p>
          <p>The name immediately resonated with everyone in the room. It perfectly reflected the foundation's Christian values and its belief that every human being possesses God-given worth, dignity, purpose, and potential.</p>
        </div>
        <div className="mt-10 p-8 rounded-2xl gradient-gold text-center">
          <Sparkles className="h-7 w-7 mx-auto text-primary mb-3" />
          <p className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-2">From that day until today</p>
          <p className="font-display text-3xl md:text-4xl text-primary">Jewel in Christ Foundation</p>
        </div>
      </div>
    </section>

    {/* SECTION 7 */}
    <section className="py-24 md:py-28 gradient-soft">
      <div className="container max-w-3xl mx-auto text-center reveal">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">Sixteen Years of Purpose</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-8">From One Act of Kindness to a Lifetime of Service</h2>
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>Since its establishment in 2010, Jewel in Christ Foundation has continued to empower women, strengthen families, mentor young people, support vulnerable communities, promote peace, and create opportunities that transform lives.</p>
          <p>What began with one woman's determination to help another has grown into a movement of compassion, service, and hope.</p>
          <p>For more than sixteen years, the foundation has remained committed to building stronger communities through faith, love, integrity, and action.</p>
        </div>
      </div>
    </section>

    {/* SECTION 8 — Closing */}
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img src={unityImg} alt="Standing together in unity" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95" />
      </div>
      <div className="container relative z-10 text-center max-w-3xl mx-auto text-primary-foreground reveal">
        <h2 className="font-display text-5xl md:text-6xl mb-8">Our Story Continues...</h2>
        <div className="space-y-3 text-lg text-primary-foreground/95 leading-relaxed mb-10">
          <p>Every person who volunteers.</p>
          <p>Every donor who gives.</p>
          <p>Every partner who believes in this mission.</p>
          <p>Every family whose life is transformed.</p>
          <p className="text-accent font-semibold pt-2">Becomes part of our story.</p>
          <p>The next chapter is still being written. And together, we can write it with hope.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg"><a href={buildMailto("Volunteer with Jewel in Christ Foundation")} target="_blank" rel="noopener noreferrer"><HandHeart className="h-4 w-4" /> Become a Volunteer</a></Button>
          <Button asChild variant="outlineGold" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/donate"><Heart className="h-4 w-4" /> Support Our Mission</Link></Button>
        </div>
      </div>
    </section>

    {/* FINAL QUOTE */}
    <section className="py-20 bg-background">
      <div className="container max-w-3xl mx-auto text-center reveal">
        <Quote className="h-8 w-8 mx-auto text-accent mb-5" />
        <p className="font-display text-2xl md:text-3xl text-primary italic leading-relaxed mb-8">
          "What began with a simple ₦3,000 act of kindness has grown into a mission that continues transforming lives."
        </p>
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.3em] text-accent">Our Motto</p>
          <p className="font-display text-xl text-primary">Empowering People.</p>
          <p className="font-display text-xl text-primary">Strengthening Families.</p>
          <p className="font-display text-xl text-primary">Transforming Communities.</p>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default OurStoryPage;