import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildMailto } from "@/lib/contact";

const events = [
  {
    title: "Care for the Elderly Program",
    date: "2026-07-26T10:00:00",
    venue: "Abeokuta, Ogun State",
    time: "10:00 AM",
    desc: "Honouring our elders with care, companionship, food, and practical support — a day dedicated to dignity in old age.",
  },
  {
    title: "School Outreach — International Day of the Girl Child",
    date: "2026-10-11T10:00:00",
    venue: "Selected Schools, Ogun State",
    time: "10:00 AM",
    desc: "Visiting schools to mentor, equip, and inspire girls — in commemoration of the International Day of the Girl Child.",
  },
  {
    title: "Rural Women Empowerment Program",
    date: "2026-10-15T10:00:00",
    venue: "Rural Communities, Ogun & Enugu State",
    time: "10:00 AM",
    desc: "Skills training, micro-grants, and advocacy reaching rural women on the International Day of Rural Women.",
  },
  {
    title: "Make Someone Smile at Christmas",
    date: "2026-12-20T11:00:00",
    venue: "Multiple Communities, Nigeria",
    time: "11:00 AM",
    desc: "Sharing love, food, gifts, and hope with families, widows, and children during the festive season.",
  },
];

const useCountdown = (target: string) => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const update = () => {
      const diff = new Date(target).getTime() - Date.now();
      if (diff <= 0) return setT({ d: 0, h: 0, m: 0, s: 0 });
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
};

const EventCard = ({ e }: { e: typeof events[0] }) => {
  const c = useCountdown(e.date);
  const d = new Date(e.date);
  return (
    <article className="group bg-card rounded-3xl overflow-hidden border border-border shadow-card hover:shadow-elegant transition-smooth">
      <div className="gradient-royal text-primary-foreground p-6 flex items-center justify-between">
        <div>
          <div className="text-primary-foreground/80 text-[10px] uppercase tracking-[0.3em] mb-1">{d.toLocaleString("en", { month: "short" })}</div>
          <div className="font-display text-5xl text-primary-foreground leading-none">{d.getDate()}</div>
        </div>
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-primary-foreground/90 mb-1">Countdown</div>
          <div className="flex gap-1.5 font-display text-2xl">
            {([["d", c.d], ["h", c.h], ["m", c.m], ["s", c.s]] as const).map(([k, v]) => (
              <div key={k} className="bg-primary/40 rounded-md px-2 py-1 min-w-[44px] text-center border border-primary-foreground/20">
                <div className="text-primary-foreground leading-none">{String(v).padStart(2, "0")}</div>
                <div className="text-[8px] uppercase tracking-widest text-primary-foreground/85 mt-1">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="p-7">
        <h3 className="font-display text-2xl text-primary mb-3">{e.title}</h3>
        <p className="text-sm text-muted-foreground mb-5">{e.desc}</p>
        <div className="space-y-2 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-accent" /> {d.toLocaleDateString("en", { dateStyle: "long" })}</div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> {e.time}</div>
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> {e.venue}</div>
        </div>
        <Button asChild variant="royal" className="w-full"><a href={buildMailto(`Event Registration: ${e.title}`)} target="_blank" rel="noopener noreferrer">Register Now</a></Button>
      </div>
    </article>
  );
};

const Events = () => (
  <section id="events" className="py-28 bg-background">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-accent text-xs uppercase tracking-[0.4em] mb-4">What's Next</p>
        <h2 className="font-display text-4xl md:text-5xl text-primary mb-6">Upcoming <em className="text-gradient-royal not-italic font-semibold">Events</em></h2>
        <p className="text-muted-foreground">Join us in shaping change. Every event is an opportunity to serve, learn, and connect.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((e, i) => <EventCard key={i} e={e} />)}
      </div>
    </div>
  </section>
);
export default Events;
